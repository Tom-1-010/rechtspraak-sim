const ROLE_INSTRUCTIONS = {
  'Verdachte': 'Je bent de verdachte in een Nederlandse strafzaak. Je kent alleen je eigen verklaring en wat op zitting is besproken. Je mag ontkennen, ontwijken of deels bekennen, maar blijf consistent met het dossier. Geef korte, menselijke antwoorden.',
  'Advocaat': 'Je bent de advocaat van verdachte. Je kent het strafdossier en voert juridisch relevante verweren. Let op bewijsproblemen, opzet, betrouwbaarheid, noodweer en strafmatiging. Antwoord zakelijk en juridisch.',
  'Officier van justitie': 'Je bent de officier van justitie. Je redeneert vanuit het dossier, de tenlastelegging, bewijsmiddelen en strafeis. Antwoord zakelijk, concreet en juridisch.',
  'Getuige': 'Je bent getuige in deze strafzaak. Je kent alleen je eigen waarneming. Wees niet alwetend. Geef aan als je iets niet zeker weet.',
  'Slachtoffer': 'Je bent het slachtoffer in deze strafzaak. Je spreekt over wat je hebt meegemaakt, je letsel, schade en gevoel van veiligheid. Blijf realistisch en niet overdreven.',
  'Verbalisant': 'Je bent politieverbalisant. Je licht alleen toe wat je zelf hebt waargenomen, vastgelegd of uit het proces-verbaal blijkt. Antwoord feitelijk.',
  'Reclassering': 'Je bent reclasseringswerker. Je beoordeelt risico, beschermende factoren, toezicht en passende bijzondere voorwaarden. Antwoord professioneel en terughoudend.'
};

const MOCK_REPLIES = {
  'Verdachte': 'Ik blijf erbij dat ik mij bedreigd voelde. Ik wilde geen letsel veroorzaken, maar ik raakte hem wel toen hij zo dicht bij mij kwam.',
  'Advocaat': 'Mijn cliënt beroept zich subsidiair op noodweer. De camerabeelden tonen de aanleiding niet volledig, waardoor twijfel blijft bestaan over de noodzaak van zijn reactie.',
  'Officier van justitie': 'Het dossier bevat voldoende wettig en overtuigend bewijs voor mishandeling. De aangifte, letselverklaring en getuigenverklaring ondersteunen elkaar.',
  'Getuige': 'Ik zag dat de verdachte een slaande beweging maakte, maar ik kon niet precies horen wat er vlak daarvoor werd gezegd.',
  'Slachtoffer': 'Ik had pijn aan mijn gezicht en voelde mij daarna onveilig. Ik wil vooral dat duidelijk wordt dat dit niet zomaar kon gebeuren.',
  'Verbalisant': 'De camerabeelden ondersteunen de aanloop en een deel van de klap, maar tonen niet de volledige interactie voorafgaand aan het geweld.',
  'Reclassering': 'Bij verdachte lijken impulscontrole en agressieregulatie aandachtspunten. Een meldplicht en gedragsinterventie kunnen passend zijn.'
};

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function cleanText(value, maxLength = 3000) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function buildPrompt({ role, message, caseContext, history }) {
  const safeRole = ROLE_INSTRUCTIONS[role] ? role : 'Verdachte';
  const roleInstruction = ROLE_INSTRUCTIONS[safeRole];
  const safeHistory = Array.isArray(history)
    ? history.slice(-8).map(item => `${cleanText(item.sender, 40)}: ${cleanText(item.text, 500)}`).join('\n')
    : '';

  return `
Je draait in een educatieve Nederlandse rechtbanksimulator. Je geeft geen juridisch advies aan echte personen; je speelt uitsluitend een procesrol binnen een fictieve strafzaak.

Rol:
${roleInstruction}

Fictieve zaakcontext:
${cleanText(caseContext, 5000)}

Recente zittingscontext:
${safeHistory || 'Nog geen eerdere context.'}

Vraag van de rechter:
${cleanText(message, 1500)}

Antwoordregels:
- Antwoord volledig in het Nederlands.
- Blijf strikt binnen je rol.
- Gebruik alleen de fictieve zaakcontext en je rolkennis.
- Doe niet alsof je rechter bent.
- Maak geen nieuwe harde feiten die niet in het dossier staan.
- Antwoord kort en realistisch, maximaal 5 zinnen.
`.trim();
}

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Alleen POST is toegestaan.' });
  }

  const body = typeof req.body === 'object' && req.body ? req.body : {};
  const role = cleanText(body.role, 80) || 'Verdachte';
  const message = cleanText(body.message, 1500);
  const caseContext = cleanText(body.caseContext, 5000);

  if (!message) {
    return res.status(400).json({ error: 'Vraag ontbreekt.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

  if (!apiKey) {
    return res.status(200).json({
      reply: MOCK_REPLIES[role] || MOCK_REPLIES.Verdachte,
      source: 'mock-no-api-key'
    });
  }

  try {
    const prompt = buildPrompt({ role, message, caseContext, history: body.history });
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const geminiResponse = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.55,
          topP: 0.9,
          maxOutputTokens: 420
        }
      })
    });

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return res.status(200).json({
        reply: MOCK_REPLIES[role] || MOCK_REPLIES.Verdachte,
        source: 'mock-gemini-error',
        detail: data?.error?.message || 'Gemini gaf geen geldig antwoord.'
      });
    }

    const reply = data?.candidates?.[0]?.content?.parts
      ?.map(part => part.text || '')
      .join('\n')
      .trim();

    return res.status(200).json({
      reply: reply || (MOCK_REPLIES[role] || MOCK_REPLIES.Verdachte),
      source: reply ? 'gemini' : 'mock-empty-response'
    });
  } catch (error) {
    return res.status(200).json({
      reply: MOCK_REPLIES[role] || MOCK_REPLIES.Verdachte,
      source: 'mock-server-error',
      detail: error instanceof Error ? error.message : 'Onbekende serverfout.'
    });
  }
};
