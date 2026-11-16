# AI-koppeling voor Rechtbank Simulator NL

Deze repo bevat een veilige server-side AI-route die op **Vercel** én **Render** draait:

```text
lib/chat.js      # gedeelde chatlogica (rolrestricties, mock, Gemini)
api/chat.js      # Vercel serverless route
server.js        # Render web service: statische site + POST /api/chat
```

De API-key hoort nooit in `docs/index.html` te staan.

## Werking

De frontend stuurt een POST-request naar:

```text
/api/chat
```

Payload:

```json
{
  "role": "Verdachte",
  "message": "Waarom bent u niet weggelopen?",
  "caseContext": "Fictieve zaakcontext...",
  "history": [
    { "sender": "Rechter", "text": "Waarom bent u niet weggelopen?" }
  ]
}
```

Response:

```json
{
  "reply": "Antwoord van de AI of fallback-mock.",
  "source": "gemini"
}
```

## Deploy op Render (web service)

1. Push deze repo naar GitHub/GitLab.
2. Maak in Render een **New → Web Service** aan, gekoppeld aan de repo.
3. Render leest `render.yaml` automatisch (of stel in):
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
   - Health Check Path: `/healthz`
4. Voeg de environment variables toe:
   - `GEMINI_API_KEY` (secret)
   - `GEMINI_MODEL` (optioneel, standaard `gemini-2.5-flash`)
5. Zonder `GEMINI_API_KEY` antwoordt de route automatisch met de mock-fallback (bron `mock-no-api-key`).

De site wordt geserveerd vanaf `/` (de inhoud van `docs/`). De zittingschat in de app roept `/api/chat` aan en valt bij fouten terug op de casus-specifieke mock-antwoorden.

## Deploy op Vercel (serverless)

De bestaande Vercel-route blijft werken:

- Framework Preset: Other
- Build Command: overbodig
- Output Directory: `docs`
- Environment variables: `GEMINI_API_KEY`, optioneel `GEMINI_MODEL`

`api/chat.js` hergebruikt dezelfde logica uit `lib/chat.js`.

## Belangrijk

- Render-webservice draait `server.js`; GitHub Pages kan de API-route niet draaien.
- De route bevat rolrestricties voor verdachte, advocaat, officier van justitie, getuige, slachtoffer, verbalisant en reclassering.
- De route is bedoeld voor fictieve simulatie en niet voor juridisch advies.
- `GET /healthz` geeft `{"status":"ok"}` ten behoeve van de Render-healthcheck.
- Statische bestanden worden geserveerd met juiste MIME-types en cache-headers; onbekende paden vallen terug op `docs/index.html` (SPA-gedrag).