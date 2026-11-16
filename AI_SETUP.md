# Chat & deploy — Rechtbank Simulator NL

De zittingschat is een lokale simulatie zonder externe AI-dienst.

```text
lib/chat.js      # gedeelde chatlogica (rolrestricties + mock-antwoorden)
api/chat.js      # Vercel serverless route
server.js        # Render web service: statische site + chat
```

De API hoort nooit in `docs/index.html` te staan; alle logica draait server-side of lokaal in de browser via de fallback.

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
  "reply": "Mock-antwoord passend bij de rol.",
  "source": "mock"
}
```

Bij een lege vraag geeft de route `400` terug; andere methodes dan POST geven `405`.

## Deploy op Render (web service)

1. Push deze repo naar GitHub/GitLab.
2. Maak in Render een **New → Web Service** aan, gekoppeld aan de repo (branch `main`).
3. Render leest `render.yaml` automatisch (of stel in):
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
   - Health Check Path: `/healthz`
4. Er zijn geen environment variables of secrets nodig.

De site wordt geserveerd vanaf `/` (de inhoud van `docs/`).

## Deploy op Vercel (serverless)

- Framework Preset: Other
- Output Directory: `docs`
- `api/chat.js` hergebruikt dezelfde logica uit `lib/chat.js`.

## Belangrijk

- Render-webservice draait `server.js`; GitHub Pages kan de chatroute niet draaien.
- De route bevat rolrestricties voor verdachte, advocaat, officier van justitie, getuige, slachtoffer, verbalisant en reclassering.
- De route is bedoeld voor fictieve simulatie en niet voor juridisch advies.
- `GET /healthz` geeft `{"status":"ok"}` ten behoeve van de Render-healthcheck.
- Statische bestanden worden geserveerd met juiste MIME-types en cache-headers; onbekende paden vallen terug op `docs/index.html` (SPA-gedrag).