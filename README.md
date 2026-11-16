# rechtspraak-sim

Mobiel prototype voor de **Rechtbank Simulator NL**: een Nederlandstalige strafkamer-simulator waarin je als rechter 200 strafzaken behandelt met volledige dossiers (dagvaarding, proces-verbalen, deskundigenrapporten, reclasseringsadviezen, slachtofferimpact), bewijsstukken met krachtbeoordeling, verweren, strafmaat en vonnismotivering. De zittingschat rolt met verdachte, advocaat, officier van justitie, getuigen, slachtoffer, verbalisant en reclassering via een veilige server-side Gemini-route met mock-fallback.

## Lokaal starten

```bash
npm install
npm start
# http://localhost:8080
```

Poort aanpassen: `PORT=3000 npm start`.

## Deployen

- **Render**: maak een web service aan op basis van `render.yaml` (Node, `npm start`, healthcheck `/healthz`). Voeg `GEMINI_API_KEY` toe als secret; zonder key werkt de mock-chat.
- **Vercel**: Output Directory `docs`, serverless route `api/chat.js` met dezelfde omgevingsvariabelen.

Zie `AI_SETUP.md` voor details over de AI-koppeling.

## Structuur

```text
docs/                     # statische frontend (mobiele app)
  index.html
  assets/                 # thema, app-logica, dataset-loader
  data/strafzaken/        # 13 basiszaken → 200 dossierzaken
  data/om/                # OM-richtlijnenkader
lib/chat.js               # gedeelde chatlogica (rollen, mock, Gemini)
api/chat.js               # Vercel serverless route
server.js                 # Render web service (statisch + API)
render.yaml               # Render-deployconfiguratie
```