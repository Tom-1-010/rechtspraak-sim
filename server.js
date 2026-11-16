// Render web service — serveert de statische site (docs/) en POST /api/chat.
// Start: npm start (Render zet de poort in de PORT-omgevingsvariabele).
const http = require('http');
const fs = require('fs');
const path = require('path');
const { handleChat } = require('./lib/chat');

const PORT = process.env.PORT || 8080;
const ROOT = path.join(__dirname, 'docs');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8'
};

function sendJson(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store'
  });
  res.end(data);
}

function sendFile(req, res, urlPath) {
  let rel = decodeURIComponent(urlPath.split('?')[0]);
  if (rel === '/' || rel === '') rel = '/index.html';
  const filePath = path.normalize(path.join(ROOT, rel));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Verboden');
  }
  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      // SPA-fallback: onbekende paden tonen de app.
      const indexPath = path.join(ROOT, 'index.html');
      fs.readFile(indexPath, (e2, buf) => {
        if (e2) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('Serverfout');
        }
        res.writeHead(200, { 'Content-Type': MIME['.html'] });
        res.end(buf);
      });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    let size = 0;
    req.on('data', chunk => {
      size += chunk.length;
      if (size > 1e6) {
        reject(new Error('Payload te groot'));
        req.destroy();
        return;
      }
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try { resolve(JSON.parse(data)); }
      catch (e) { reject(new Error('Ongeldige JSON')); }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = req.url || '/';

  if (url === '/healthz' || url === '/health') {
    return sendJson(res, 200, { status: 'ok' });
  }

  if (url === '/api/chat') {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      return res.end();
    }
    if (req.method !== 'POST') {
      return sendJson(res, 405, { error: 'Alleen POST is toegestaan.' });
    }
    try {
      const body = await readBody(req);
      const result = await handleChat(body, process.env);
      return sendJson(res, result.status, result.body);
    } catch (error) {
      return sendJson(res, 400, { error: error.message || 'Ongeldig verzoek.' });
    }
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return sendJson(res, 405, { error: 'Methode niet toegestaan.' });
  }

  sendFile(req, res, url);
});

server.listen(PORT, () => {
  console.log(`Rechtbank Simulator NL luistert op poort ${PORT}`);
});