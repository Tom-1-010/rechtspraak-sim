# rechtspraak-sim

Mobiel prototype voor de **Rechtbank Simulator NL**: een Nederlandstalige strafkamer-simulator waarin je als rechter 200 strafzaken behandelt met volledige dossiers (dagvaarding, proces-verbalen, deskundigenrapporten, reclasseringsadviezen, slachtofferimpact), bewijsstukken met krachtbeoordeling, verweren, strafmaat en vonnismotivering.

De zittingschat werkt volledig lokaal met casus-specifieke mock-antwoorden (verdachte, advocaat, officier van justitie, getuigen, slachtoffer, verbalisant en reclassering). Er is geen externe AI-dienst nodig of gekoppeld; de app werkt zonder API-keys en zonder kosten.

## Lokaal starten

```bash
npm install
npm start
# http://localhost:8080
```

Poort aanpassen: `PORT=3000 npm start`.

## Deployen op Render (web service)

Render leest `render.yaml` automatisch:

- Build Command: `npm install`
- Start Command: `npm start`
- Health Check Path: `/healthz`

Geen environment variables of secrets nodig. `server.js` serveert de statische site uit `docs/` en de chatlogica uit `lib/chat.js`.

## Deployen op Vercel (serverless)

- Framework Preset: Other
- Output Directory: `docs`
- De serverless route `api/chat.js` serveert dezelfde mock-chatlogica.

## Structuur

```text
docs/                     # statische frontend (mobiele app)
  index.html
  assets/                 # thema, app-logica, dataset-loader
  data/strafzaken/        # 13 basiszaken → 200 dossierzaken
  data/om/                # OM-richtlijnenkader
lib/chat.js               # gedeelde chatlogica (rollen + mock-antwoorden)
api/chat.js               # Vercel serverless route
server.js                 # Render web service (statisch + chat)
render.yaml               # Render-deployconfiguratie
```