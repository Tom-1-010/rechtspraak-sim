// Vercel serverless route — gebruikt de gedeelde chatlogica uit lib/chat.js
const { handleChat } = require('../lib/chat');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Alleen POST is toegestaan.' });
  }

  const result = await handleChat(req.body, process.env);
  return res.status(result.status).json(result.body);
};