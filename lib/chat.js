// Gedeelde chatlogica voor Vercel (api/chat.js) en Render (server.js).
// De zittingschat werkt volledig lokaal met casus-specifieke mock-antwoorden;
// er is geen externe AI-dienst meer nodig of gekoppeld.
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

function cleanText(value, maxLength = 3000) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

async function handleChat(payload) {
  const body = typeof payload === 'object' && payload ? payload : {};
  const role = cleanText(body.role, 80) || 'Verdachte';
  const message = cleanText(body.message, 1500);

  if (!message) {
    return { status: 400, body: { error: 'Vraag ontbreekt.' } };
  }

  return {
    status: 200,
    body: { reply: MOCK_REPLIES[role] || MOCK_REPLIES.Verdachte, source: 'mock' }
  };
}

module.exports = { handleChat, cleanText, MOCK_REPLIES, ROLE_INSTRUCTIONS };