# AI-koppeling voor Rechtbank Simulator NL

Deze repo bevat nu een veilige server-side AI-route:

```text
api/chat.js
```

Deze route is bedoeld voor Vercel. De API-key hoort nooit in `docs/index.html` te staan.

## Werking

De frontend moet een POST-request sturen naar:

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

## Environment variables op Vercel

Voeg in Vercel toe:

```text
GEMINI_API_KEY=je_api_key
GEMINI_MODEL=gemini-2.5-flash
```

`GEMINI_MODEL` is optioneel. Als deze ontbreekt, gebruikt de route standaard `gemini-2.5-flash`.

## Belangrijk

- GitHub Pages kan deze API-route niet draaien.
- Voor echte AI moet je de repo via Vercel deployen.
- Zonder `GEMINI_API_KEY` geeft `api/chat.js` automatisch mock-antwoorden terug.
- De API-route bevat rolrestricties voor verdachte, advocaat, officier van justitie, getuige, slachtoffer, verbalisant en reclassering.
- De route is bedoeld voor fictieve simulatie en niet voor juridisch advies.

## Nog te koppelen in frontend

De huidige `docs/index.html` gebruikt nog de bestaande mock-chat. De volgende stap is de functie `sendChat()` aanpassen zodat deze eerst `/api/chat` probeert en daarna terugvalt op mock-antwoorden.
