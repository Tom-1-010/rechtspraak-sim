window.SIM_DATA = (() => {
  const zaakTypes = [
    ['rijden_onder_invloed','Rijden onder invloed','Verkeer','Simpel','Ademanalyse, rijbewijsmaatregel, recidive en rijontzegging.','Rotterdam','96/112038-26'],
    ['winkeldiefstal','Winkeldiefstal','Vermogen','Simpel','Camerabeelden, winkelbeveiliging, waarde goederen en recidive.','Schiedam','10/884201-25'],
    ['mishandeling','Mishandeling','Geweld','Normaal','Aangifte, letselverklaring, verdachteverklaring en schadevergoeding.','Rotterdam','10/284751-25'],
    ['bedreiging','Bedreiging','Geweld','Normaal','Bewoordingen, context, vrees bij slachtoffer en bewijswaardering.','Vlaardingen','10/552903-26'],
    ['vernieling','Vernieling','Vermogen','Simpel','Schadebedrag, getuigen, camerabeelden en schadevergoeding.','Maassluis','10/221408-26'],
    ['diefstal_braak','Diefstal met braak','Vermogen','Complex','Braaksporen, forensisch bewijs, rolverdeling en recidive.','Barendrecht','10/773188-26'],
    ['openlijke_geweldpleging','Openlijke geweldpleging','Geweld','Complex','Groepsdynamiek, bijdrage verdachte en camerabeelden.','Rotterdam','10/612039-26'],
    ['wapenbezit','Wapenbezit','Wapens','Complex','Beschikkingsmacht, gevaarzetting en omstandigheden van aantreffen.','Spijkenisse','10/441782-26'],
    ['witwassen','Witwassen','Financieel','Complex','Financiële analyse, herkomstverklaring en verhullingshandelingen.','Capelle aan den IJssel','10/902710-26'],
    ['oplichting','Oplichting','Financieel','Complex','Aangifte, geldstromen, valse hoedanigheid en causaal verband.','Dordrecht','10/339022-26'],
    ['stalking','Belaging / stalking','Geweld','Complex','Contactpatroon, duur, impact en voorwaarden.','Rotterdam','10/663004-26'],
    ['huiselijk_geweld','Huiselijk geweld','Geweld','Complex','Relationele context, letsel, aangifte en beschermingsmaatregelen.','Hellevoetsluis','10/583902-26'],
    ['drugsbezit','Opiumwet bezit','Drugs','Normaal','Hoeveelheid, bestemming, locatie en antecedenten.','Rotterdam','10/338199-26'],
    ['drugshandel','Drugshandel','Drugs','Zwaar','Observaties, telefoongegevens, geld, verpakkingen en verklaringen.','Rotterdam','10/771009-26'],
    ['zware_mishandeling','Zware mishandeling','Geweld','Zwaar','Zwaar letsel, opzetvorm, deskundigen en slachtofferimpact.','Schiedam','10/551900-26'],
    ['doodslag','Doodslag','Levensdelict','Zwaar','Opzetvraag, forensisch bewijs, deskundigen en slachtofferimpact.','Rotterdam','10/781044-26'],
    ['moord','Moord','Levensdelict','Zwaar','Voorbedachte raad, scenarioanalyse en zware strafmotivering.','Rotterdam','10/992001-26'],
    ['zedenzaak','Zedenzaak','Zeden','Zwaar','Zorgvuldige verklaringswaardering, privacy en bewijscontext.','Rotterdam','10/449110-26'],
    ['mensenhandel','Mensenhandel','Zwaar','Zwaar','Afhankelijkheid, uitbuiting, verklaringen, geldstromen en internationale context.','Rotterdam','10/700180-26'],
    ['terrorisme','Terrorismegerelateerde zaak','Zwaar','Zwaar','Intentie, voorbereiding, digitale sporen en dreigingsanalyse.','Rotterdam','10/830620-26']
  ];

  const personen = ['R.K.','S. de Vries','M. Jansen','A. El Amrani','D. Bakker','L. Visser','N. Vermeer','Y. van Dalen','K. de Groot','F. Smits'];
  const locaties = ['horecazaak','supermarkt','parkeerterrein','woning','metrostation','bedrijfspand','winkelcentrum','schoolplein','tankstation','appartementencomplex'];
  const bewijs = ['proces-verbaal', 'aangifte', 'verdachteverklaring', 'getuigenverklaring', 'camerabeelden', 'forensisch rapport', 'telefoongegevens', 'reclasseringsadvies'];

  function makeCase(base, i) {
    const [key,name,category,difficulty,summary,city,parket] = base;
    const id = `${key}-${String(i + 1).padStart(3,'0')}`;
    const variant = i % 6;
    const verdachte = personen[i % personen.length];
    const plek = locaties[(i + variant) % locaties.length];
    const status = ['Dossier gereed','Zitting gestart','Bewijsfase','Strafmaat open','Conceptvonnis'][i % 5];
    const severity = difficulty === 'Zwaar' ? 88 : difficulty === 'Complex' ? 68 : difficulty === 'Normaal' ? 48 : 28;
    const recidive = i % 4 === 0;
    const slachtoffer = ['burger','winkelmedewerker','ex-partner','toevallige passant','hulpverlener'][i % 5];
    const casus = `Verdachte ${verdachte} wordt verweten betrokken te zijn bij ${name.toLowerCase()} in of bij een ${plek} te ${city}. Het dossier bevat ${bewijs.slice(0, 4 + (i % 4)).join(', ')}. De verdediging betwist vooral ${variant % 2 === 0 ? 'het opzet en de betrouwbaarheid van verklaringen' : 'de proportionaliteit van de strafeis en de bewijswaarde van ondersteunend materiaal'}.`;
    return {
      id, key, name, category, difficulty, summary, city, parket: parket.replace('-26', `-${String(26 + (i % 2)).padStart(2,'0')}`), status, verdachte, slachtoffer, severity, recidive, casus,
      court: difficulty === 'Simpel' ? 'Politierechter' : difficulty === 'Normaal' ? 'Enkelvoudige kamer' : 'Meervoudige kamer',
      score: Math.max(25, 95 - Math.floor(severity / 2) + (i % 11)),
      omEis: difficulty === 'Zwaar' ? 'gevangenisstraf en/of maatregel' : difficulty === 'Complex' ? 'taakstraf, voorwaardelijke straf en voorwaarden' : 'geldboete of taakstraf',
      documents: {
        overzicht: ['Zaaksoverzicht', `Parketnummer ${parket} · ${city}`, casus],
        tenlastelegging: ['Tenlastelegging', `${name} · ${city}`, `Aan verdachte is ten laste gelegd dat hij/zij zich schuldig heeft gemaakt aan ${name.toLowerCase()}. De precieze bewezenverklaring hangt af van de bestanddelen en de waardering van het dossier.`],
        pv: ['Proces-verbaal', 'Politie-eenheid Rotterdam · samenvatting', `Verbalisanten beschrijven de melding, de eerste waarnemingen, verklaringen ter plaatse en veiliggestelde bewijsmiddelen. Belangrijk aandachtspunt is of de waarnemingen voldoende direct en controleerbaar zijn.`],
        aangifte: ['Aangifte', `Aangever/slachtoffer: ${slachtoffer}`, `De aangever verklaart over de feitelijke gebeurtenis, de gevolgen en eventuele schade. De verklaring moet worden vergeleken met ondersteunend bewijs.`],
        verdachte: ['Verdachteverklaring', `Verdachte ${verdachte}`, `Verdachte erkent enkele omstandigheden, maar betwist de juridische kwalificatie of het opzet. De verklaring bevat punten die de rechter gericht kan doorvragen.`],
        getuigen: ['Getuigen', 'Overzicht getuigenverklaringen', `Getuigen verklaren deels belastend en deels onzeker. De afstand tot de gebeurtenis, waarnemingspositie en consistentie zijn relevant.`],
        bewijs: ['Bewijsmiddelen', 'Technisch en ondersteunend bewijs', `Beschikbaar zijn onder meer ${bewijs.slice(0, 5 + (i % 3)).join(', ')}. Niet elk bewijsmiddel is even sterk of volledig.`],
        om: ['Standpunt OM', 'Concept requisitoir', `De officier van justitie acht het feit in beginsel bewezen en noemt als strafeis: ${difficulty === 'Zwaar' ? 'een langdurige vrijheidsstraf of maatregel' : difficulty === 'Complex' ? 'een combinatie van taakstraf, voorwaardelijke straf en bijzondere voorwaarden' : 'een geldboete of taakstraf'}.`],
        verdediging: ['Verdediging', 'Kernverweren', `De verdediging voert aan dat het bewijs kritisch moet worden beoordeeld. Subsidiair wordt verzocht rekening te houden met persoonlijke omstandigheden, beperkte rol of twijfelpunten.`]
      }
    };
  }

  const cases = [];
  for (let i = 0; i < 120; i++) cases.push(makeCase(zaakTypes[i % zaakTypes.length], i));

  const measures = [
    ['Vrijspraak','Niet bewezen','De verdachte wordt niet veroordeeld omdat het feit niet wettig en overtuigend bewezen is.'],
    ['Ontslag van alle rechtsvervolging','Bewezen, maar niet strafbaar','Het feit kan bewezen zijn, maar verdachte of het feit is juridisch niet strafbaar, bijvoorbeeld bij geslaagd noodweer.'],
    ['Schuldig zonder straf','Wel schuldig, geen straf','De rechter verklaart het feit bewezen, maar legt door bijzondere omstandigheden geen straf of maatregel op.'],
    ['Geldboete','Financiële straf','Een financiële straf. De hoogte hangt af van ernst, draagkracht en wettelijke grenzen.'],
    ['Taakstraf','Werkstraf of leerstraf','Bij niet uitvoeren kan vervangende hechtenis volgen.'],
    ['Voorwaardelijke gevangenisstraf','Stok achter de deur','De straf hoeft niet te worden uitgezeten als verdachte zich binnen de proeftijd aan voorwaarden houdt.'],
    ['Onvoorwaardelijke gevangenisstraf','Werkelijke vrijheidsstraf','Vrijheidsstraf die daadwerkelijk moet worden uitgezeten.'],
    ['Rijontzegging','Tijdelijk niet rijden','Vooral relevant bij verkeerszaken.'],
    ['Contactverbod','Geen contact met slachtoffer','Verbod om contact te zoeken met slachtoffer of bepaalde personen.'],
    ['Locatieverbod','Niet bij gebied/adres komen','Verbod om op bepaalde plaatsen of in een bepaald gebied te komen.'],
    ['Meldplicht','Melden bij instantie','Verdachte moet zich periodiek melden bij reclassering of een andere instantie.'],
    ['Behandelverplichting','Verplichte behandeling','Bijvoorbeeld bij agressie, verslaving of psychische problematiek.'],
    ['Schadevergoedingsmaatregel','Schade betalen','Verdachte moet schade aan het slachtoffer vergoeden.'],
    ['TBS-maatregel','Behandeling en beveiliging','Maatregel gericht op behandeling en beveiliging van de samenleving bij ernstige feiten en stoornis.'],
    ['PIJ-maatregel','Jeugdmaatregel','Jeugdmaatregel voor behandeling in een justitiële jeugdinrichting.'],
    ['Onttrekking aan verkeer','Voorwerpen uit verkeer halen','Gevaarlijke of verboden voorwerpen worden uit het maatschappelijk verkeer gehaald.'],
    ['Verbeurdverklaring','Eigendom kwijt','Verdachte raakt eigendom kwijt dat verband houdt met het strafbare feit.']
  ];

  return { cases, measures, categories: [...new Set(zaakTypes.map(z => z[2]))] };
})();