window.OM_KADER = {
  bron: 'OM.nl - Aanwijzing kader voor strafvordering meerderjarigen (2019A003) en strafvorderingsrichtlijnen',
  waarschuwing: 'Dit is een simulatie-samenvatting van het OM-strafvorderingskader. Delictspecifieke OM-richtlijnen moeten per feit later exact worden geïmporteerd en gevalideerd.',
  uitgangspunten: [
    'Stap 1: bepaal het landelijke uitgangspunt uit de toepasselijke richtlijn.',
    'Stap 2: pas maatwerk toe op basis van omstandigheden van feit, verdachte, slachtoffer, schade, recidive en proportionaliteit.',
    'Schadevergoeding moet bij zaken met slachtoffers of schade als verplicht aandachtspunt worden meegenomen.',
    'Bij first offenders kan een geheel of gedeeltelijk voorwaardelijke straf passend zijn als gedragsbeïnvloeding of recidivepreventie nodig is.',
    'Bij recidive wordt in beginsel aangesloten bij de recidiveregeling en kan verhoging of opschaling van modaliteit volgen.'
  ],
  recidive: [
    { key: 'first_offender', label: 'First offender', effect: 'Richtlijnuitgangspunt toepassen; maatwerk mogelijk. Voorwaardelijk deel kan passend zijn bij recidivegevoelige feiten.' },
    { key: 'recidive_2_5', label: '1x recidive binnen 2-5 jaar', effect: 'Algemene verhoging: sanctie +50%, tenzij delictspecifieke richtlijn anders bepaalt.' },
    { key: 'recidive_2', label: '1x recidive binnen 2 jaar', effect: 'Sanctie +50% en/of opschaling naar hogere modaliteit: geldboete > taakstraf > gevangenisstraf.' },
    { key: 'meermalen_recidive', label: 'Meermalen recidive', effect: 'In beginsel dagvaarden; sanctie +100% en/of hogere modaliteit. Taakstraf alleen bij lichtere vergrijpen.' },
    { key: 'veelpleger', label: 'Veelpleger / zeer actieve veelpleger', effect: 'Dagvaarden en onvoorwaardelijke gevangenisstraf eisen; minimaal +100% met ondergrens 1 maand gevangenisstraf als uitgangspunt.' }
  ],
  modaliteiten: ['geldboete', 'taakstraf', 'voorwaardelijke gevangenisstraf', 'onvoorwaardelijke gevangenisstraf', 'rijontzegging', 'contactverbod', 'locatieverbod', 'meldplicht', 'behandelverplichting', 'schadevergoedingsmaatregel', 'TBS', 'PIJ', 'onttrekking aan verkeer', 'verbeurdverklaring'],
  delictIndicaties: {
    'Rijden onder invloed': { first_offender: 'Boete vanaf 0 en rijontzegging beoordelen op meetwaarde/gevaarzetting.', recidive: 'Rijontzegging en zwaardere modaliteit nadrukkelijk beoordelen; puntenstelsel/taakstrafverbod checken.' },
    'Winkeldiefstal': { first_offender: 'Boete of taakstraf vanaf 0; waarde goederen, schade en proceshouding wegen.', recidive: 'Taakstraf of hogere modaliteit; veelplegerbeleid beoordelen.' },
    'Mishandeling': { first_offender: 'Boete/taakstraf vanaf 0; letsel, slachtofferimpact en schadevergoeding wegen.', recidive: 'Verhoging of voorwaardelijke/onvoorwaardelijke straf; contactverbod mogelijk.' },
    'Bedreiging': { first_offender: 'Taakstraf/voorwaardelijk vanaf 0; vrees, context en contactverbod beoordelen.', recidive: 'Voorwaardelijke straf, contactverbod en toezicht zwaarder wegen.' },
    'Diefstal met braak': { first_offender: 'Taakstraf of gevangenisstraf vanaf 0; schade en braak wegen.', recidive: 'Opschaling naar gevangenisstraf ligt eerder voor de hand.' },
    'Witwassen': { first_offender: 'Taakstraf/gevangenisstraf vanaf 0; bedrag, duur en verhulling wegen.', recidive: 'Onvoorwaardelijke gevangenisstraf en ontneming nadrukkelijk beoordelen.' },
    'Zedenzaak': { first_offender: 'Gevangenisstraf of maatregel vanaf 0; zorgvuldige bewijswaardering vereist.', recidive: 'Zware modaliteit, voorwaarden en behandeling beoordelen.' }
  }
};
