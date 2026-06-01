window.SIM_DATA = (() => {
  const plaatsen = [
    ['Rotterdam Centrum','Coolsingel','horecagebied'],['Rotterdam Delfshaven','Schiedamseweg','winkelstraat'],['Rotterdam Zuid','Beijerlandselaan','woonwijk'],['Rotterdam Charlois','Pleinweg','metrostation'],['Rotterdam Kralingen','Oostzeedijk','studentengebied'],['Rotterdam Prins Alexander','Poolsterplein','winkelcentrum'],['Rotterdam Hoogvliet','Binnenban','winkelgebied'],['Rotterdam IJsselmonde','Herenwaard','parkeerplaats'],['Schiedam','Broersvest','tramhalte'],['Vlaardingen','Liesveld','winkelcentrum'],['Maassluis','Westeinde','centrumgebied'],['Capelle aan den IJssel','Slotplein','winkelgebied'],['Barendrecht','Middenbaan','winkelstraat'],['Ridderkerk','Koningsplein','plein'],['Spijkenisse','Uitstraat','uitgaansgebied'],['Brielle','Nobelstraat','centrum'],['Hellevoetsluis','Struytse Hoeck','winkelcentrum'],['Krimpen aan den IJssel','Raadhuisplein','plein'],['Nissewaard','Noordpassage','winkelgebied'],['Goeree-Overflakkee','Voorstraat Middelharnis','dorpscentrum']
  ];

  const typen = [
    ['rijden_onder_invloed','Rijden onder invloed','Verkeer',['ademanalyse','proces-verbaal','rijgedrag','verklaring verdachte'],'boete en rijontzegging'],
    ['gevaarlijk_rijgedrag','Gevaarlijk rijgedrag','Verkeer',['dashcam','getuige','proces-verbaal','snelheidsmeting'],'taakstraf of rijontzegging'],
    ['winkeldiefstal','Winkeldiefstal','Vermogen',['aangifte winkel','camerabeelden','verklaring beveiliger','aangetroffen goederen'],'geldboete of taakstraf'],
    ['diefstal_met_braak','Diefstal met braak','Vermogen',['braaksporen','camerabeelden','DNA-spoor','telefoongegevens'],'taakstraf of gevangenisstraf'],
    ['oplichting','Oplichting','Financieel',['bankafschriften','chatgesprekken','aangifte','IP-gegevens'],'taakstraf of voorwaardelijke gevangenisstraf'],
    ['witwassen','Witwassen','Financieel',['contant geld','financiële analyse','verklaring herkomst','telefoongegevens'],'taakstraf of gevangenisstraf'],
    ['mishandeling','Mishandeling','Geweld',['aangifte','letselverklaring','getuige','camerabeelden'],'taakstraf, boete of schadevergoeding'],
    ['zware_mishandeling','Zware mishandeling','Geweld',['letselrapport','forensisch onderzoek','getuigen','verklaring verdachte'],'gevangenisstraf mogelijk'],
    ['bedreiging','Bedreiging','Geweld',['screenshots','aangifte','getuige','telefoongegevens'],'taakstraf of contactverbod'],
    ['belaging','Belaging / stalking','Geweld',['contacthistorie','aangifte','telefoonlogs','verklaring verdachte'],'voorwaardelijke straf en contactverbod'],
    ['huiselijk_geweld','Huiselijk geweld','Geweld',['aangifte','letsel','burenverklaring','112-melding'],'taakstraf, voorwaarden of contactverbod'],
    ['openlijke_geweldpleging','Openlijke geweldpleging','Geweld',['camerabeelden','getuigen','rolbeschrijving','proces-verbaal'],'taakstraf of gevangenisstraf'],
    ['wapenbezit','Wapenbezit','Wapens',['aantreffen wapen','forensisch onderzoek','bekennende verklaring','context'],'taakstraf of gevangenisstraf'],
    ['drugshandel','Drugshandel','Drugs',['observatie','telefoongegevens','aangetroffen drugs','geld'],'gevangenisstraf mogelijk'],
    ['drugsbezit','Drugsbezit','Drugs',['aangetroffen middel','weging','proces-verbaal','verklaring verdachte'],'boete of taakstraf'],
    ['vernieling','Vernieling','Vermogen',['schadefoto','aangifte','getuige','camerabeelden'],'boete, taakstraf en schadevergoeding'],
    ['zedendelict','Zedenzaak','Zeden',['aangifte','forensisch onderzoek','chatgesprekken','verklaring verdachte'],'gevangenisstraf mogelijk'],
    ['doodslag','Doodslag','Levensdelict',['sectierapport','forensisch onderzoek','getuigen','scenarioanalyse'],'langdurige gevangenisstraf'],
    ['poging_doodslag','Poging doodslag','Levensdelict',['letselrapport','wapen','getuigen','camerabeelden'],'gevangenisstraf'],
    ['verduistering','Verduistering in dienstbetrekking','Vermogen',['administratie','werkgeversaangifte','bankgegevens','verklaring verdachte'],'taakstraf of voorwaardelijke gevangenisstraf']
  ];

  const niveaus = {
    sterk: [86, 'Meerdere onafhankelijke bewijsmiddelen ondersteunen elkaar.'],
    voldoende: [70, 'Voldoende bewijs, maar enkele onderdelen vragen motivering.'],
    twijfelachtig: [48, 'Aanwijzingen aanwezig, maar betrouwbaarheid of volledigheid is kwetsbaar.'],
    onvoldoende: [28, 'Wezenlijke bewijsproblemen; vrijspraak is reëel.']
  };

  function niveau(i) {
    if (i % 11 === 0) return 'onvoldoende';
    if (i % 7 === 0) return 'twijfelachtig';
    if (i % 5 === 0) return 'voldoende';
    return 'sterk';
  }

  function moeilijkheid(key, bewijs) {
    if (['doodslag','poging_doodslag','zedendelict','drugshandel','zware_mishandeling','witwassen'].includes(key)) return bewijs === 'onvoldoende' ? 'Complex' : 'Zwaar';
    if (['diefstal_met_braak','oplichting','belaging','huiselijk_geweld','openlijke_geweldpleging','wapenbezit'].includes(key)) return 'Complex';
    if (['rijden_onder_invloed','winkeldiefstal','drugsbezit','vernieling'].includes(key)) return bewijs === 'twijfelachtig' ? 'Normaal' : 'Simpel';
    return 'Normaal';
  }

  function uitkomst(bewijs, key) {
    if (bewijs === 'onvoldoende') return 'Vrijspraak ligt voor de hand tenzij aanvullend bewijs alsnog doorslaggevend wordt.';
    if (bewijs === 'twijfelachtig') return 'Bewezenverklaring is mogelijk, maar alleen met sterke motivering van betrouwbaarheid.';
    if (['doodslag','poging_doodslag','zedendelict','drugshandel'].includes(key)) return 'Bewezenverklaring met stevige strafmotivering ligt voor de hand.';
    return 'Bewezenverklaring is waarschijnlijk bij normale bewijswaardering.';
  }

  function maakZaak(i) {
    const [key, name, category, evidences, sanction] = typen[i % typen.length];
    const [plaats, straat, setting] = plaatsen[(i * 7) % plaatsen.length];
    const bewijsniveau = niveau(i);
    const [score, analyse] = niveaus[bewijsniveau];
    const diff = moeilijkheid(key, bewijsniveau);
    const kamer = diff === 'Simpel' ? 'Politierechter' : diff === 'Normaal' ? 'Enkelvoudige kamer' : 'Meervoudige kamer';
    const verdachte = `verdachte ${String.fromCharCode(65 + (i % 26))}`;
    const bewijsProbleem = bewijsniveau === 'onvoldoende'
      ? ' Cruciaal bewijsprobleem: het belastende stuk wordt niet zelfstandig ondersteund door onafhankelijk bewijs.'
      : bewijsniveau === 'twijfelachtig'
        ? ' Aandachtspunt: verklaringen lopen uiteen en vragen expliciete rechterlijke motivering.'
        : '';
    const casus = `De zaak speelt bij ${straat} in ${plaats}, in/rond een ${setting}. ${verdachte[0].toUpperCase() + verdachte.slice(1)} wordt vervolgd voor ${name.toLowerCase()}. Het dossier draait om ${evidences.slice(0,3).join(', ')}.${bewijsProbleem}`;

    return {
      id: `rbrot-${String(i + 1).padStart(3, '0')}`,
      rechtbank: 'Rechtbank Rotterdam',
      parketnummer: `10/${String(280000 + i).padStart(6, '0')}-26`,
      zaaknaam: name,
      name,
      key,
      category,
      categorie: category,
      summary: casus,
      moeilijkheid: diff,
      difficulty: diff,
      kamer,
      court: kamer,
      plaats,
      city: plaats,
      locatie: straat,
      setting,
      verdachte_label: verdachte,
      bewijsniveau,
      bewijs_score: score,
      casus_kort: casus,
      casus,
      kernvraag: `Kan wettig en overtuigend worden bewezen dat verdachte zich schuldig heeft gemaakt aan ${name.toLowerCase()}?`,
      bewijsmiddelen: evidences,
      bewijsanalyse: analyse,
      waarschijnlijke_uitkomst: uitkomst(bewijsniveau, key),
      om_standpunt: `De officier acht ${name.toLowerCase()} ${bewijsniveau === 'onvoldoende' ? 'lastig bewijsbaar' : 'bewezen'} en noemt ${sanction} als uitgangspunt.`,
      verdediging: 'De verdediging vraagt vrijspraak wegens bewijsproblemen, subsidiair strafmatiging en rekening houden met persoonlijke omstandigheden.',
      strafmaat_factoren: [
        i % 3 === 0 ? 'recidive' : null,
        i % 4 === 0 ? 'schadevergoeding' : null,
        ['twijfelachtig','onvoldoende'].includes(bewijsniveau) ? 'bewijsrisico' : null
      ].filter(Boolean),
      mogelijke_sancties: sanction,
      recidive: i % 3 === 0,
      severity: score,
      status: ['Dossier gereed','Zitting gestart','Bewijsfase','Strafmaat open','Conceptvonnis'][i % 5],
      omEis: sanction,
      score: Math.max(38, Math.min(96, score + (i % 9))),
      documents: {
        overzicht: ['Zaaksoverzicht', `Parketnummer 10/${String(280000 + i).padStart(6, '0')}-26 · ${plaats}`, casus],
        tenlastelegging: ['Tenlastelegging', `${name} · ${plaats}`, `Aan verdachte is ten laste gelegd dat hij/zij zich schuldig heeft gemaakt aan ${name.toLowerCase()}. De bewezenverklaring hangt af van de bestanddelen en de waardering van het dossier.`],
        pv: ['Proces-verbaal', 'Politie-eenheid Rotterdam · samenvatting', `Verbalisanten beschrijven de melding, eerste bevindingen en veiliggestelde stukken bij ${straat}. De kernvraag is of de waarnemingen direct genoeg zijn.`],
        aangifte: ['Aangifte', 'Aangever/slachtoffer', `De aangever beschrijft de gebeurtenis, impact en eventuele schade. Ondersteuning in het dossier: ${bewijsniveau}.`],
        verdachte: ['Verdachteverklaring', verdachte, 'Verdachte erkent context, maar betwist opzet, betrokkenheid of strafwaardigheid.'],
        getuigen: ['Getuigen', 'Overzicht getuigenverklaringen', `Getuigen verklaren ${bewijsniveau === 'sterk' ? 'in hoofdlijnen consistent' : 'deels wisselend'} over tijd, plaats en rol van verdachte.`],
        bewijs: ['Bewijsmiddelen', 'Technisch en ondersteunend bewijs', `Technisch bewijs: ${evidences.join(', ')}. Bewijskracht: ${bewijsniveau}.`],
        om: ['Standpunt OM', 'Concept requisitoir', `De officier acht ${name.toLowerCase()} ${bewijsniveau === 'onvoldoende' ? 'moeilijk bewijsbaar' : 'bewezen'} en noemt ${sanction} als uitgangspunt.`],
        verdediging: ['Verdediging', 'Kernverweren', 'De verdediging voert bewijsverweer. Subsidiair wordt strafmatiging gevraagd wegens persoonlijke omstandigheden, beperkte rol of twijfelpunten.']
      },
      dossierstukken: {
        proces_verbaal: `Verbalisanten beschrijven melding, eerste bevindingen en veiliggestelde stukken bij ${straat}.`,
        aangifte: `De aangever beschrijft gebeurtenis, impact en schade. Ondersteuning: ${bewijsniveau}.`,
        verdachteverklaring: 'Verdachte erkent context, maar betwist opzet, betrokkenheid of strafwaardigheid.',
        getuigen: `Getuigen verklaren ${bewijsniveau === 'sterk' ? 'consistent' : 'wisselend'} over tijd, plaats en rol van verdachte.`,
        technisch_bewijs: `Technisch bewijs: ${evidences.join(', ')}. Bewijskracht: ${bewijsniveau}.`
      },
      ai_rolinstructies: {
        verdachte: 'Terughoudend; erkent context maar betwist zwaarste uitleg.',
        advocaat: 'Voert bewijsverweer en subsidiair strafmaatverweer.',
        officier: `Redeneert vanuit bewijsmiddelen en strafeis: ${sanction}.`,
        getuige: 'Alleen eigen waarneming noemen; onzekerheid aangeven.',
        slachtoffer: 'Impact en schade uitleggen zonder juridische conclusies.'
      },
      rechterlijke_aandachtspunten: [
        'Controleer ieder bestanddeel afzonderlijk.',
        'Bespreek relevante verweren expliciet.',
        'Weeg recidive, schade en persoonlijke omstandigheden.',
        'Motiveer afwijking van OM-eis of richtlijnindicatie.'
      ]
    };
  }

  const cases = Array.from({ length: 200 }, (_, i) => maakZaak(i));
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
  const categories = [...new Set(cases.map(c => c.category))];
  return { cases, measures, categories };
})();
