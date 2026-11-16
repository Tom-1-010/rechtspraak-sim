// Rechtbank Simulator NL — uitgebreide strafzaken-dataset
// 12 volledig uitgewerkte basiszaken die worden gevarieerd naar 200+ dossierzaken.
window.SIM_DATA = (() => {
  function doc(titel, meta, paragrafen, punten) {
    return { titel, meta, paragrafen: paragrafen || [], punten: punten || null };
  }

  const templates = [
    {
      key: 'mishandeling_horeca', name: 'Mishandeling buiten horecazaak', category: 'Geweld', difficulty: 'Normaal',
      court: 'Enkelvoudige kamer', zaaksoort: 'Politierechterzaak', city: 'Rotterdam Centrum', location: 'Stadhuisplein',
      recidive: true, bewijsniveau: 'voldoende', bewijs_score: 72,
      summary: 'Na sluitingstijd ontstaat buiten een horecazaak een woordenwisseling. Verdachte zou aangever met gebalde vuist in het gezicht hebben geslagen. Aangever heeft een scheurwond bij de wenkbrauw en zwelling aan het jukbeen. Verdachte erkent fysiek contact, maar beroept zich op een dreigende houding van aangever.',
      kernvraag: 'Is bewezen dat verdachte opzettelijk heeft geslagen en faalt het beroep op noodweer?',
      bewijsmiddelen: ['aangifte met letselbeschrijving', 'letselschouw huisartsenpost', 'PV bevindingen camerabeelden', 'verklaring portier', 'verklaring verdachte'],
      bewijsanalyse: 'Het slaan wordt door meerdere bronnen ondersteund. De aanleiding is minder duidelijk omdat de camera de eerste seconden van de confrontatie mist. Het noodweerverweer moet expliciet worden besproken.',
      om_standpunt: 'De officier acht mishandeling bewezen. De klap, het letsel en de verklaring van de portier ondersteunen elkaar.',
      om_eis: '80 uur taakstraf, waarvan 30 uur voorwaardelijk, en toewijzing van de schadevergoedingsmaatregel van € 750,-.',
      verdediging: 'De advocaat voert aan dat aangever als eerste dreigend naar voren stapte en dat verdachte slechts afstand wilde creëren. Subsidiair wordt strafmatiging gevraagd vanwege werk en schuldenproblematiek.',
      mogelijke_sancties: 'taakstraf, deels voorwaardelijk, schadevergoedingsmaatregel, eventueel contactverbod',
      richtlijn: 'Mishandeling zonder wapen, met letsel maar zonder ziekenhuisopname: uitgangspunt taakstraf of deels voorwaardelijke gevangenisstraf. Bij eerste contact met justitie kan een taakstraf volstaan.',
      reclasseringsrapport: 'Het advies van Reclassering Nederland vermeldt dat verdachte een vast dienstverband heeft en coöperatief was tijdens het onderzoek. Risicoprofiel: matig risico op herhaling van geweld onder invloed van alcohol. Aanbevolen wordt een gedragsinterventie gericht op agressieregulatie en een meldplicht.',
      slachtofferimpact: 'Aangever geeft in een slachtofferimpactrapport aan sinds het incident onveilig te voelen in het uitgaansgebied en last te hebben van hoofdpijn na het letsel. De kosten van de huisartsenpost en een nieuwe bril worden geclaimd.',
      bewijsstukken: [
        { id: 'G-1', type: 'Verklaring', bron: 'Aangever', samenvatting: 'Aangever verklaart onverhoeds geslagen te zijn met een gebalde vuist in het gezicht en beschrijft pijn en bloedverlies.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Geneeskundig rapport', bron: 'Huisartsenpost', samenvatting: 'Vastgelegd: scheurwond van 2 cm bij de linkerwenkbrauw, zwelling jukbeen, blauwe plek. consistency met één klap.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Camerabeelden', bron: 'Gemeente Rotterdam', samenvatting: 'Beelden tonen een snelle armbeweging richting gezicht, maar de eerste seconden van de confrontatie ontbreken.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring getuige', bron: 'Portier horecazaak', samenvatting: 'Portier zag de klap en wijst verdachte aan, maar stond op enige afstand en hoorde het voorafgaande gesprek niet.', sterkte: 'redelijk' },
        { id: 'G-5', type: 'Verklaring verdachte', bron: 'Verdachte (ter terechtzitting)', samenvatting: 'Verdachte erkent fysiek contact maar zegt te hebben gereageerd op een dreigende houding.', sterkte: 'zwak-ontkrachtend' }
      ],
      verweren: [
        { naam: 'Noodweer (art. 41 Sr)', toelichting: 'Verdachte stelt te hebben gehandeld uit ogenblikkelijke noodzaak nadat aangever dreigend naderde.', sterkte: 'middel' },
        { naam: 'Causaliteit letsel', toelichting: 'De verdediging betwist dat de scheurwond door de klap van verdachte is ontstaan.', sterkte: 'zwak' },
        { naam: 'Strafmatiging persoonlijke omstandigheden', toelichting: 'Vaste baan, schuldsanering en eerste contact met justitie worden aangevoerd.', sterkte: 'redelijk' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Horecageweld · Stadhuisplein Rotterdam · 02:15 uur', [
          'Verdachte wordt vervolgd voor mishandeling na een incident rond 02:15 uur buiten een horecazaak aan het Stadhuisplein. Aangever verklaart dat verdachte hem zonder waarschuwing sloeg. Verdachte stelt dat hij werd opgejaagd en bang was voor een aanval.',
          'De zaak draait om opzet, noodweer en de betrouwbaarheid van de portiersverklaring. De rechtbank moet de aanloop, de klap en het letsel elk afzonderlijk waarderen.'
        ], ['Betrokkenen: verdachte (33 jaar), aangever (29 jaar), portier als getuige', 'Tijdstip: zaterdagnacht, sluitingstijd horeca', 'Aanwezig letsel: scheurwond wenkbrauw, zwelling jukbeen']),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht 14 dagen vóór de zitting', [
          'De dagvaarding vermeldt de roepnaam van verdachte, geboortedatum, adres en parketnummer. Verdachte is via zijn advocaat opgeroepen voor de zitting van de politierechter.',
          'De zitting is aangekondigd als openbare zitting van de enkelvoudige kamer, locatie Rotterdam, zaal 2.12.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 300 lid 1 Sr', [
          'Aan verdachte is ten laste gelegd dat hij op of omstreeks 2 november 2025 te Rotterdam tezamen en in vereniging met een ander, of alleen, teer opzet heeft gehad met mede daden te plegen.',
          'Concreet: dat hij aangever opzettelijk heeft mishandeld door hem met kracht met de vuist in het gezicht te slaan, waardoor pijn en letsel in de vorm van een scheurwond en zwelling is ontstaan.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisanten Eenheid Rotterdam · nummer 10284751-26', [
          'Verbalisanten arriveren om 02:21 uur en treffen aangever aan met bloed bij de linkerwenkbrauw. Eerste hulp wordt geboden door een ambulanceverpleegkundige die toevallig aanwezig is.',
          'De portier van de horecazaak wijst verdachte aan als degene die heeft geslagen. Verdachte wordt aangehouden en overgebracht naar het politiebureau.',
          'Op camerabeelden van de gemeente is te zien dat verdachte een snelle armbeweging maakt richting het gezicht van aangever. De beelden tonen niet volledig wat direct voorafging aan de klap.'
        ], ['Moment van aanhouding: 02:26 uur', 'Getraceerde beelden: 02:14:40 tot 02:15:35', 'Zoekactie: geen — verdachte bleef ter plaatse']),
        aangifte: doc('Aangifte', 'Aangever M. de Graaf · afgelegd 4 november 2025', [
          'Aangever verklaart dat hij na een woordenwisseling wegliep, waarna verdachte dichterbij kwam en hem met kracht sloeg. Hij voelde direct pijn en bloedde uit zijn wenkbrauw.',
          'Hij vordert vergoeding van eigen risico, een nieuwe bril en immateriële schade.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte · afgelegd bij de politie en herhaald ter terechtzitting', [
          'Verdachte erkent fysiek contact. Hij stelt dat aangever dreigend naar hem toe kwam en dat hij in paniek raakte.',
          'Over de klap zelf zegt hij: "Ik heb hem geraakt, meer dan dat ik het wilde. Ik wilde vooral weg."'
        ]),
        getuigen: doc('Getuigenverklaringen', 'Portier en omstander', [
          'De portier verklaart dat hij de klap zag vanaf vijf tot zeven meter afstand. Hij herkent verdachte duidelijk, maar hoorde het voorafgaande woordenwisseling niet.',
          'Een omstander bevestigt dat er voor het incident spanning was tussen beide mannen, maar kan niet zeggen wie begon.'
        ]),
        deskundige: doc('Geneeskundig rapport', 'Huisartsenpost Rotterdam · letselbeschrijving', [
          'Vastgesteld is een scheurwond van circa 2 cm bij de linkerwenkbrauw, zwelling aan het jukbeen en een blauwe plek. Het letsel is consistent met één gerichte klap met een gebalde vuist.',
          'Er zijn geen aanwijzingen voor hersenletsel. Aangever is de volgende dag nagekomen en het letsel is fotografisch vastgelegd.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'Het bewijs rust op de aangifte, het geneeskundig rapport, de camerabeelden, de verklaring van de portier en de deels bekennende verklaring van verdachte.',
          'De aanloop is minder duidelijk omdat de camera de eerste seconden mist. Het noodweerverweer vraagt daarom extra motivering in het vonnis.'
        ], ['Sterk: aangifte + letselrapport + camerabeeld', 'Middel: portiersverklaring (afstand, geen geluid)', 'Zwak: alternatieve uitleg verdachte over dreigende houding']),
        om: doc('Requisitoir', 'Officier van justitie · parket Rotterdam', [
          'De officier acht mishandeling bewezen. De klap, het letsel en de verklaring van de portier ondersteunen elkaar en worden bevestigd door beeldmateriaal.',
          'Het noodweerverweer faalt omdat er geen ogenblikkelijke en ernstige aanranding was: aangever liep weg en verdachte zocht de confrontatie.',
          'De eis luidt: 80 uur taakstraf, waarvan 30 uur voorwaardelijk, met een proeftijd van twee jaar, en toewijzing van de schadevergoedingsmaatregel.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging voert aan dat aangever als eerste dreigend naar voren stapte en dat verdachte slechts afstand wilde creëren. Zijn reactie was reflexmatig en niet gericht op letsel.',
          'Subsidiair wordt strafmatiging gevraagd: verdachte heeft een vaste baan, loopt een schuldsanering en heeft dit als eerste contact met justitie.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Reclassering Nederland · advies ten behoeve van de zitting', [
          'Verdachte heeft een vast dienstverband en was coöperatief tijdens het onderzoek. Het risicoprofiel geeft een matig risico op herhaling van geweld onder invloed van alcohol.',
          'Aanbevolen wordt een gedragsinterventie gericht op agressieregulatie en een meldplicht bij de reclassering.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Aangever · verwerkt door slachtofferhulp', [
          'Aangever geeft aan sinds het incident onveilig te voelen in het uitgaansgebied en hoofdpijn te hebben na het letsel.',
          'Hij vordert eigen risico, een nieuwe bril en immateriële schade, in totaal € 750,-.'
        ]),
        strafvordering: doc('Vordering benadeelde partij / schadevergoedingsmaatregel', 'BPA-aanhangigmaking', [
          'De vordering omvat de kosten van de huisartsenpost, vervanging van de bril en een immateriële vergoeding. De totaliteit bedraagt € 750,-.',
          'De rechtbank toetst onderbouwing, causaal verband en eenvoud van behandeling binnen het strafproces.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik bleef staan omdat ik bang was dat hij zou terugkomen. Ik heb hem geraakt, maar ik wilde geen letsel veroorzaken.',
        Advocaat: 'De rechtbank moet eerst de aanloop waarderen. Als de aanleiding bij aangever lag, wankelt de noodweertoets.',
        'Officier van justitie': 'Drie bewijsmiddelen wijzen dezelfde richting op. Noodweer past niet bij iemand die zelf de confrontatie zoekt.',
        Getuige: 'Ik zag de klap duidelijk. Wat er vooraf werd gezegd, heb ik niet gehoord, daar kan ik niets over zeggen.',
        Slachtoffer: 'Ik liep juist weg. Ik snap niet dat hij me volgde en sloeg. Ik ben daarna bang geweest in de stad.',
        Verbalisant: 'De beelden zijn tijdgestempeld en veiliggesteld. De beweging richting gezicht is op twee frames te zien.',
        Reclassering: 'Verdachte is werkend en coöperatief. Een gedragsinterventie zou het risico op herhaling kunnen verlagen.'
      }
    },
    {
      key: 'diefstal_braak', name: 'Diefstal met braak uit bedrijfspand', category: 'Vermogen', difficulty: 'Complex',
      court: 'Meervoudige kamer', zaaksoort: 'Reguliere strafzaak', city: 'Barendrecht', location: 'Bedrijventerrein Dierenstein',
      recidive: true, bewijsniveau: 'voldoende', bewijs_score: 69,
      summary: 'Bij een bedrijfspand worden laptops en gereedschap gestolen. Er is DNA op een geforceerd raam en een auto van een bekende van verdachte rijdt kort na de inbraak weg. Verdachte geeft een alternatieve verklaring voor het DNA.',
      kernvraag: 'Bewijst DNA op het braakpunt samen met telecom- en voertuiggegevens de betrokkenheid bij de inbraak, en is medeplegen aannemelijk?',
      bewijsmiddelen: ['DNA-spoor op raam', 'ANPR-hit voertuig', 'telefoongegevens zendmast', 'aangifte bedrijf', 'verklaring medeverdachte'],
      bewijsanalyse: 'Het DNA is sterk, maar de alternatieve verklaring en rolverdeling vragen aandacht. Medeplegen moet concreet worden gemotiveerd.',
      om_standpunt: 'Het OM acht betrokkenheid bewezen door DNA op het braakpunt, tijdlijn en voertuiggegevens.',
      om_eis: '120 dagen gevangenisstraf, waarvan 60 voorwaardelijk, met een proeftijd van drie jaar, en een schadevergoedingsmaatregel van € 9.100,-.',
      verdediging: 'De verdediging voert contaminatie of oud contact aan en stelt dat verdachte niet in het pand is geweest; de rol van medeverdachte is niet uitgesloten.',
      mogelijke_sancties: 'gevangenisstraf, deels voorwaardelijk, schadevergoedingsmaatregel, ontneming',
      richtlijn: 'Diefstal met braak uit bedrijfspand, met schade boven € 5.000,- en recidive: uitgangspunt onvoorwaardelijke vrijheidsstraf in maanden, mede afhankelijk van rolverdeling.',
      reclasseringsrapport: 'Verdachte heeft een instabiele woonsituatie en een lange justitiële historie van vermogensdelicten. Reclassering ziet ruimte voor een traject richting dagbesteding en schuldhulpverlening, maar beoordeelt het risico op herhaling als verhoogd.',
      slachtofferimpact: 'Het bedrijf kon meerdere dagen niet normaal werken door verlies van laptops en gereedschap. De eigenaar noemt de schade en de verstoring van continuïteit het zwaarst.',
      bewijsstukken: [
        { id: 'G-1', type: 'Forensisch spoor', bron: 'DNA-rapportage NFI', samenvatting: 'DNA-profiel van verdachte op de rand van het geforceerde raam, op het verse breukvlak.', sterkte: 'sterk' },
        { id: 'G-2', type: 'ANPR-gegevens', bron: 'Politie', samenvatting: 'Auto van een bekende van verdachte passeert in de directe omgeving rond het inbraaktijdstip.', sterkte: 'redelijk' },
        { id: 'G-3', type: 'Telefoongegevens', bron: 'Verstrekking telecomprovider', samenvatting: 'Toestel van verdachte straalt rond het tijdstip in op een nabije zendmast.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring', bron: 'Medeverdachte', samenvatting: 'Medeverdachte noemt verdachte als aanwezig bij de inbraak, maar zijn verklaring is deels tegen belang.', sterkte: 'middel-voorbehoud' },
        { id: 'G-5', type: 'Aangifte', bron: 'Bedrijfseigenaar', samenvatting: 'Overzicht van gestolen zaken en geschatte schade van ruim € 9.000,-.', sterkte: 'sterk' }
      ],
      verweren: [
        { naam: 'Alternatieve verklaring DNA', toelichting: 'Verdachte zegt eerder voor kluswerk bij het pand te zijn geweest, waardoor zijn DNA verklaarbaar zou zijn.', sterkte: 'middel' },
        { naam: 'Rolverdeling / medeplegen', toelichting: 'De verdediging stelt dat verdachte hooguit weet had van plannen, maar zelf niet handelde.', sterkte: 'middel' },
        { naam: 'Hoogte schade', toelichting: 'De onderbouwing van de schadeopgave van het bedrijf wordt betwist.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Bedrijfsinbraak · Barendrecht · nacht 12 op 13 mei 2025', [
          'In de nacht wordt ingebroken bij een technisch bedrijf. Het raam is geforceerd en laptops, accugereedschap en contant geld zijn verdwenen. Verdachte wordt gekoppeld via DNA en telecomgegevens, maar ontkent betrokkenheid.',
          'De zaak draait om de waarde van het DNA-spoor, de tijdlijn van voertuig- en telefoongegevens en de rolverdeling met de medeverdachte.'
        ], ['Schade: ruim € 9.000,-', 'Sporen: DNA op raam, ANPR-hit, zendmastdata', 'Medeverdachte: wel bekend, zaak wordt in verband behandeld']),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht door de rechtbank Rotterdam · meervoudige kamer', [
          'Verdachte wordt opgeroepen voor de regievoorzitterszitting en daarna de bewijs- en strafzitting. De dagvaarding noemt het parketnummer en de tenlastelegging.',
          'De raadsman is door het wettelijk verband aangesteld.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 310 Sr, gepleegd tezamen en in vereniging met een ander', [
          'Aan verdachte is ten laste gelegd dat hij tezamen en in vereniging met een ander te Barendrecht goederen heeft weggenomen met het oogmerk om het zich toe te eigenen, na het forceren van een raam van een bedrijfspand.',
          'Het openbaar ministerie stelt medeplegen voor op grond van de samenloop van DNA, tijdlijn en voertuiggegevens.'
        ]),
        pv: doc('Proces-verbaal van opsporing', 'Onderzoeksteam Vermogensdelicten', [
          'Forensische opsporing neemt een DNA-spoor af op de rand van het geforceerde raam. Het spoor zat op het verse breukvlak, wat tegen recent contact spreekt.',
          'ANPR-camera\u2019s tonen een auto van een bekende van verdachte in de buurt rond het inbraaktijdstip. De telefoon van verdachte straalt in op een nabije zendmast.',
          'Geen buit is bij verdachte of in zijn woning aangetroffen.'
        ]),
        aangifte: doc('Aangifte', 'Bedrijfseigenaar · Bedrijventerrein Dierenstein', [
          'De eigenaar mist laptops, accugereedschap en contant geld uit een kluislade. De totale schade wordt voorlopig geschat op ruim € 9.000,-.',
          'Het pand had een alarmsysteem dat rond 03:10 uur ging, maar dat werd als vals alarm afgehandeld.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte · politieverhoor en ter terechtzitting', [
          'Verdachte zegt dat hij eerder bij het pand is geweest voor kluswerk en dat zijn DNA daardoor verklaarbaar is.',
          'Over de nacht zelf wil hij niet zeggen waar hij was: "Ik heb geen aantekeningen van mijn eigen leven."'
        ]),
        getuigen: doc('Getuigenverklaring', 'Nachtportier naastgelegen terrein', [
          'De portier zag een donkere hatchback zonder verlichting langzaam wegrijden, maar kon geen personen herkennen.',
          'De weg was verlicht, maar het terrein zelf donker. Hij kon het merk van de auto niet zeker noemen.'
        ]),
        deskundige: doc('DNA-rapportage', 'Nederlands Forensisch Instituut (NFI)', [
          'Het DNA-profiel op het raam komt overeen met het profiel van verdachte. Het spoor zat op het verse breukvlak, wat pleit tegen ouder contact.',
          'De kans dat het profiel van een willekeurig persoon overeenkomt is kleiner dan 1 op een miljard. Over de exacte tijd van afzetting doet het NFI geen uitspraak.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'Het DNA op het braakpunt is sterk belastend. De telecom- en ANPR-gegevens versterken de tijdlijn maar bewijzen niet zelfstandig de braakhandeling.',
          'De verklaring van de medeverdachte is deels tegen het eigen belang en vraagt voorbehoud. Medeplegen moet concreet worden gemotiveerd.'
        ], ['Sterk: DNA op verse breukvlak', 'Middel: ANPR + zendmastdata (tijdlijn)', 'Voorbehoud: verklaring medeverdachte']),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM acht betrokkenheid bewezen: het DNA zat op het verse breukvlak en past niet bij onschuldig eerder contact. De zendmast- en ANPR-gegevens sluiten daarop aan.',
          'De eis luidt: 120 dagen gevangenisstraf, waarvan 60 voorwaardelijk met proeftijd van drie jaar, en een schadevergoedingsmaatregel van € 9.100,-.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging betwist de datering van het DNA en wijst op de mogelijkheid van contaminatie of oud contact door eerder kluswerk.',
          'Geen buit is bij verdachte aangetroffen en de rolverdeling met de medeverdachte is niet vastgesteld. Vrijspraak wordt gevraagd, subsidiair matiging.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Reclassering Nederland', [
          'Verdachte heeft een instabiele woonsituatie en een lange justitiële historie van vermogensdelicten.',
          'Reclassering ziet ruimte voor dagbesteding en schuldhulpverlening, maar beoordeelt het risico op herhaling als verhoogd.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Bedrijfseigenaar', [
          'Het bedrijf kon meerdere dagen niet normaal werken door verlies van laptops en gereedschap. Klantafspraken moesten worden verzet.',
          'De eigenaar noemt de directe schade en de verstoring van continuïteit het zwaarst.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Schadeoverzicht bij de dagvaarding gevoegd', [
          'De schade bestaat uit vervanging van laptops, gereedschap en een bedrag in contanten. De onderbouwing bestaat uit facturen en een inventarislijst.',
          'De rechtbank toetst de hoogte en het causaal verband.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik ben daar eerder geweest voor een klus. Dat verklaart misschien mijn DNA. Ik heb die nacht niet ingebroken.',
        Advocaat: 'DNA zegt niet automatisch wanneer en hoe het daar is gekomen. Zonder buit of herkenning blijft twijfel bestaan.',
        'Officier van justitie': 'Het spoor zat op het verse breukvlak. De telecom- en ANPR-gegevens ondersteunen de betrokkenheid.',
        Getuige: 'Ik zag een donkere auto wegrijden, maar ik kon niet zien wie erin zat.',
        Slachtoffer: 'De schade is groot. We konden een paar dagen nauwelijks werken omdat laptops en gereedschap weg waren.',
        Verbalisant: 'Het DNA is veiliggesteld op de rand van het geforceerde raam en fotografisch vastgelegd.',
        Reclassering: 'Het risico op herhaling is verhoogd. Structuur en schuldhulp zijn nodig, maar vrijwilligheid is twijfelachtig.'
      }
    },
    {
      key: 'rijden_onder_invloed', name: 'Rijden onder invloed met schade', category: 'Verkeer', difficulty: 'Normaal',
      court: 'Politierechter', zaaksoort: 'Snelrecht/politierechterzaak', city: 'Rijswijk', location: 'Laan van Nieuw Oost-Indië',
      recidive: true, bewijsniveau: 'voldoende', bewijs_score: 88,
      summary: 'Verdachte rijdt onder invloed en botst met een geparkeerde auto. Bloedonderzoek toont een BAG boven de wettelijke grens. Verdachte erkent het rijden maar vraagt aandacht voor werkbelang en schadeafwikkeling.',
      kernvraag: 'Is de vastgestelde alcoholconcentratie juist gemeten en is de rijontzegging proportioneel?',
      bewijsmiddelen: ['bloedonderzoek', 'verbalisant bevindingen', 'verklaring verdachte', 'schadebeeld geparkeerde auto'],
      bewijsanalyse: 'Het bewijs is sterk door het objectieve bloedonderzoek. De strafmaat draait om recidive, schade en het werkbelang.',
      om_standpunt: 'Het OM ziet rijden onder invloed met schade en recidive als verkeersdelict met verhogende omstandigheden.',
      om_eis: 'Rijontzegging van zes maanden, waarvan twee voorwaardelijk, en een geldboete van € 900,-.',
      verdediging: 'De verdediging betwist het bewijs niet, maar vraagt beperking van de rijontzegging en wijst op schadeafwikkeling en werkbelang.',
      mogelijke_sancties: 'rijontzegging, geldboete, deels voorwaardelijke celstraf',
      richtlijn: 'Rijden onder invloed met BAG boven 1,3 promille en recidive: rijontzegging van zes tot negen maanden en een geldboete naar draagkracht.',
      reclasseringsrapport: 'Geen reclasseringsrapport opgemaakt. Er is wel een alcoholvrije periode gemeld via de werkgever.',
      slachtofferimpact: 'De eigenaar van de geparkeerde auto ondervindt schade en ongemak; de verzekering keert deels uit en vraagt verhaal.',
      bewijsstukken: [
        { id: 'G-1', type: 'Bloedonderzoek', bron: 'NFI-laboratorium', samenvatting: 'BAG vastgesteld boven de wettelijke grens, genomen volgens de geldende procedure.', sterkte: 'sterk' },
        { id: 'G-2', type: 'PV bevindingen', bron: 'Verbalisant', samenvatting: 'Verdachte uit bestuurderskant gehaald, onvast geboord, moeite met evenwichtstest.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Schadebeeld', bron: 'Foto\u2019s ter plaatse', samenvatting: 'Beschadigde geparkeerde auto en eigen voertuig.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte erkent het rijden maar betwist de mate van invloed niet nadat het bloedonderzoek bekend was.', sterkte: 'redelijk' }
      ],
      verweren: [
        { naam: 'Proportionaliteit rijontzegging', toelichting: 'Verdachte is afhankelijk van rijden voor zijn werk en vraagt een zo kort mogelijke ontzegging.', sterkte: 'redelijk' },
        { naam: 'Meetprocedure bloedonderzoek', toelichting: 'De verdediging toetst of de afname volgens het handboek is verlopen.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Verkeersdelict · Rijswijk', [
          'Verdachte rijdt onder invloed en botst met een geparkeerde auto. Hij loopt zelf licht letsel op. Het bloedonderzoek toont een waarde boven de wettelijke grens.',
          'De strafmaat draait om de hoogte van de rijontzegging, de geldboete en het werkbelang.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Politierechterzaak', [
          'Verdachte is dagvaard voor de politierechter van de rechtbank Den Haag, locatie Rijswijk.',
          'De tenlastelegging noemt artikel 8 en 175 van de Wegenverkeerswet.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 8 WVW jo. artikel 175 lid 2 WVW', [
          'Aan verdachte is ten laste gelegd dat hij onder invloed van alcohol een motorvoertuig heeft bestuurd op de openbare weg, waarbij een verkeersongeval met schade is ontstaan.',
          'De vastgestelde BAG ligt boven de wettelijke grens van 0,5 promille.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisant eenheid Haaglanden', [
          'Om 01:48 uur wordt een melding ontvangen van een aanrijding. Verdachte wordt uit de bestuurderskant gehaald en oogt onvast.',
          'De ademanalyse weigert hij eerst; daarna wordt bloed afgenomen volgens procedure. De waarde is in het dossier opgenomen.'
        ], ['Afname bloed: 02:34 uur', 'Waarde: vermeld in het dossier als boven de grens']),
        aangifte: doc('Aangifte', 'Eigenaar geparkeerd voertuig', [
          'De eigenaar constateert de volgende ochtend de schade en doet aangifte. De verzekering keert de schade deels uit en verhaalt deze op verdachte.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte erkent het rijden. Hij dacht dat het nog wel ging, maar realiseert zich dat dit verkeerd was.',
          'Hij is bang zijn baan te verliezen als hij lang niet mag rijden en wijst op een jaar alcoholvrij zijn geweest na het eerste incident.'
        ]),
        getuigen: doc('Getuigenverklaring', 'Omstander', [
          'De omstander hoorde een klap en zag verdachte uit de bestuurderskant komen. Hij liep onvast en rook naar alcohol.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'Het bloedonderzoek is objectief en sterk. De bevindingen van de verbalisant en de schadebeelden ondersteunen de tenlastelegging.',
          'Het bewijs wordt niet inhoudelijk betwist; de discussie verplaatst zich naar de strafmaat.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Rijden onder invloed met schade en recidive vraagt een duidelijke verkeersstraf. Het werkbelang is relevant maar niet doorslaggevend.',
          'De eis luidt: rijontzegging van zes maanden, waarvan twee voorwaardelijk, en een geldboete van € 900,-.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'Het bewijs wordt niet betwist. De verdediging vraagt een beperkte rijontzegging en wijst op schadeafwikkeling en werkbelang.',
          'Subsidiair wordt een voorwaardelijk deel voorgesteld om de baan van verdachte te behouden.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Er is geen reclasseringsrapport opgemaakt. Wel meldt de werkgever dat verdachte een jaar alcoholvrij is geweest na het eerste incident.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Eigenaar geparkeerd voertuig', [
          'De eigenaar ondervindt schade en ongemak door de gang van zaken rond de verzekering en verhaal. De schadeafwikkeling loopt stroef.'
        ]),
        strafvordering: doc('Verhaal en maatregelen', 'Schadeafwikkeling', [
          'De schade wordt deels via de verzekering afgehandeld; verhaalsbeslissing is opgelegd door de verzekeraar.',
          'De rechtbank toetst of een schadevergoedingsmaatregel nog zinvol is naast de verhaalsregeling.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik weet dat ik fout zat. Ik ben bang mijn baan kwijt te raken als ik lang niet mag rijden.',
        Advocaat: 'Het bewijs staat vast. Het gaat om proportionaliteit van de rijontzegging en de persoonlijke gevolgen.',
        'Officier van justitie': 'Rijden onder invloed met schade en recidive vraagt een duidelijke verkeersstraf.',
        Getuige: 'Ik hoorde een klap en zag hem uit de bestuurderskant komen. Hij leek onvast te lopen.',
        Slachtoffer: 'Mijn auto was beschadigd terwijl die gewoon geparkeerd stond. Ik wil dat de schade netjes wordt geregeld.',
        Verbalisant: 'De ademanalyse weigerde hij eerst; het bloedonderzoek is volgens procedure afgenomen.',
        Reclassering: 'Er is geen rapport, maar zijn werkgever meldt een jaar alcoholvrij zijn geweest na het eerste incident.'
      }
    },
    {
      key: 'bedreiging_telefoon', name: 'Bedreiging via spraakberichten', category: 'Geweld', difficulty: 'Normaal',
      court: 'Enkelvoudige kamer', zaaksoort: 'Politierechterzaak', city: 'Spijkenisse', location: 'Noordpassage',
      recidive: false, bewijsniveau: 'twijfelachtig', bewijs_score: 52,
      summary: 'Na een conflict over een schuld ontvangt aangever meerdere spraakberichten. Eén bericht bevat dreigende taal, maar verdachte stelt dat het straattaal en frustratie was. De vraag is of bij aangever redelijke vrees kon ontstaan.',
      kernvraag: 'Vormden de berichten een strafbare bedreiging en is verdachte de afzender?',
      bewijsmiddelen: ['spraakbericht', 'screenshot chat', 'aangifte', 'telefoonnummerkoppeling', 'verklaring verdachte'],
      bewijsanalyse: 'Afzenderschap lijkt aannemelijk, maar de context van de woorden is betwist. De rechter moet uitleggen waarom de uitlating objectief bedreigend is of niet.',
      om_standpunt: 'Het OM acht de bewoordingen in combinatie met het conflict bedreigend.',
      om_eis: '40 uur taakstraf en een contactverbod van vier maanden, of vrijspraak als de bedreiging niet bewezen wordt geacht.',
      verdediging: 'De verdediging stelt dat de woorden grof maar niet concreet genoeg waren en dat aangever de context aandikt.',
      mogelijke_sancties: 'taakstraf, voorwaardelijke straf, contactverbod of vrijspraak',
      richtlijn: 'Bedreiging zonder wapen en zonder konkret plan: uitgangspunt taakstraf of deels voorwaardelijke straf. Vrijspraak is reëel als de bedreiging niet objectief bedreigend is.',
      reclasseringsrapport: 'Geen rapport opgemaakt; verdachte is nog niet eerder met justitie in aanraking gekomen.',
      slachtofferimpact: 'Aangever gaf aan minder op straat te willen zijn in de buurt waar verdachte woont en was bezorgd voor zijn veiligheid.',
      bewijsstukken: [
        { id: 'G-1', type: 'Spraakbericht', bron: 'Aangever', samenvatting: 'Audio met dreigende taal; de stem lijkt op die van verdachte.', sterkte: 'redelijk' },
        { id: 'G-2', type: 'Telefoonnummerkoppeling', bron: 'WhatsApp-geschiedenis', samenvatting: 'Het nummer staat in eerdere gesprekken opgeslagen onder de naam van verdachte.', sterkte: 'redelijk' },
        { id: 'G-3', type: 'Verklaring', bron: 'Partner aangever', samenvatting: 'Zag aangever zichtbaar gespannen na de berichten.', sterkte: 'zwak' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Erkent het sturen van boze berichten, ontkent een serieuze dreiging.', sterkte: 'zwak-ontkrachtend' }
      ],
      verweren: [
        { naam: 'Objectieve bedreiging ontbreekt', toelichting: 'De bewoordingen zijn grof maar bevatten geen concreet plan of aankondiging van geweld.', sterkte: 'middel' },
        { naam: 'Afzenderschap', toelichting: 'De verdediging betwist dat verdachte de berichten heeft gestuurd.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Bedreiging · Spijkenisse', [
          'Aangever ontvangt na een geldconflict spraakberichten met woorden als \u201cik pak je nog\u201d. Verdachte erkent boosheid, maar ontkent dat hij werkelijk dreigde met geweld.',
          'De zaak draait om de grens tussen ruwe taal en een strafbare bedreiging.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht voor de enkelvoudige kamer', [
          'Verdachte is dagvaard voor de zitting van de politierechter. De dagvaarding noemt het parketnummer en de tenlastelegging.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 285 Sr', [
          'Aan verdachte is ten laste gelegd dat hij aangever heeft bedreigd met enig misdrijf tegen het leven gericht dan wel zware mishandeling.',
          'De vraag is of de woorden objectief bedreigend waren en of bij aangever redelijke vrees kon ontstaan.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Uitluisteren telefoon', [
          'Verbalisant luistert de spraakberichten uit. De stem lijkt volgens aangever op die van verdachte.',
          'Het telefoonnummer staat in eerdere WhatsApp-gesprekken opgeslagen onder de naam van verdachte.'
        ]),
        aangifte: doc('Aangifte', 'Aangever', [
          'Aangever verklaart dat hij bang was omdat verdachte eerder boos aan de deur had gestaan.',
          'Hij heeft de berichten opgeslagen en aan de politie verstrekt.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte erkent dat hij boos was en berichten heeft gestuurd.',
          'Volgens hem bedoelde hij niet dat hij aangever fysiek iets zou aandoen: \u201cHet was domme taal in een ruzie.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Partner aangever', [
          'De partner hoorde de berichten en verklaart dat aangever zichtbaar gespannen was.',
          'Zij weet niet wat er vooraf tussen beiden is gebeurd.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De woorden zijn belastend, maar de strafbaarheid hangt sterk af van context, concreetheid en redelijke vrees.',
          'Afzenderschap is aannemelijk door de nummerkoppeling, maar niet onomstotelijk vastgesteld met technische verstrekking.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM vindt de berichten concreet genoeg door het lopende conflict en eerdere confrontatie aan de deur.',
          'De eis luidt: 40 uur taakstraf en een contactverbod van vier maanden, of vrijspraak als de bedreiging niet bewezen wordt geacht.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging vraagt vrijspraak omdat sprake is van boze taal zonder concreet plan of daadwerkelijke dreiging.',
          'Subsidiair wordt een zo licht mogelijke straf gevraagd.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Verdachte is nog niet eerder met justitie in aanraking gekomen. Er is geen reclasseringsrapport opgemaakt.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Aangever', [
          'Aangever gaf aan minder op straat te willen zijn in de buurt waar verdachte woont en was bezorgd voor zijn veiligheid.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Geen BPA ingediend', [
          'Er is geen vordering van de benadeelde partij ingediend in deze zaak.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik was boos, maar ik bedoelde niet letterlijk dat ik hem iets zou aandoen. Het was domme taal in een ruzie.',
        Advocaat: 'Niet elke grove uiting is juridisch een bedreiging. De rechtbank moet vooral kijken naar concreetheid en objectieve vrees.',
        'Officier van justitie': 'De berichten moeten worden gelezen tegen de achtergrond van het conflict. Voor aangever kon reële vrees ontstaan.',
        Getuige: 'Ik hoorde de berichten en zag dat hij ervan schrok. Wat precies tussen hen speelde, weet ik niet.',
        Slachtoffer: 'Ik nam het serieus omdat hij eerder voor mijn deur had gestaan. Ik voelde me niet meer veilig.',
        Verbalisant: 'Ik heb de berichten uitgeluisterd en beschreven. De exacte audiobestanden zitten als bijlage in het dossier.',
        Reclassering: 'Er is geen rapport; verdachte heeft geen justitiële historie.'
      }
    },
    {
      key: 'winkeldiefstal_ketens', name: 'Winkeldiefstal supermarkt', category: 'Vermogen', difficulty: 'Simpel',
      court: 'Snelrecht', zaaksoort: 'Snelrechtzaak', city: 'Rotterdam Noord', location: 'Supermarkt Zwaanshals',
      recidive: false, bewijsniveau: 'voldoende', bewijs_score: 85,
      summary: 'Verdachte neemt zonder te betalen artikelen uit een supermarkt. Camerabeelden tonen het weglopen en de beveiliger constateert de ontbrekende artikelen in de tas van verdachte. Verdachte geeft de schade terug en wil het zo snel mogelijk achter zich laten.',
      kernvraag: 'Is de diefstal bewezen en is de straf passend bij eerste contact met justitie en volledige schadeherstel?',
      bewijsmiddelen: ['camerabeelden', 'verklaring beveiliger', 'inventaris gestolen artikelen', 'verklaring verdachte'],
      bewijsanalyse: 'Het bewijs is eenduidig. De strafmaat draait om de eerste keer, de kleine waarde en het volledige schadeherstel.',
      om_standpunt: 'Het OM ziet een eenvoudige diefstal met een laag bedrag en vraagt een korte taakstraf of boete.',
      om_eis: 'Geldboete van € 450,- en een schadevergoedingsmaatregel van € 87,-, of een taakstraf van 20 uur.',
      verdediging: 'De verdediging beperkt zich tot strafmatiging en verwijst naar het directe schadeherstel en de korte procedure.',
      mogelijke_sancties: 'geldboete, taakstraf, schadevergoedingsmaatregel',
      richtlijn: 'Eenvoudige winkeldiefstal, eerste contact, schade hersteld: uitgangspunt geldboete of korte taakstraf; voorwaardelijk deel is niet nodig.',
      reclasseringsrapport: 'Geen rapport opgemaakt.',
      slachtofferimpact: 'De winkelmeldt geen grote schade maar wel overlast van herhaling in de wijk; de keten wilt het bewijsmateriaal digitaal hergebruiken.',
      bewijsstukken: [
        { id: 'G-1', type: 'Camerabeelden', bron: 'Winkelsysteem', samenvatting: 'Beelden tonen het verbergen van artikelen en het weglopen zonder betalen.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Verklaring', bron: 'Beveiliger', samenvatting: 'Constatering van ontbrekende artikelen in de tas van verdachte bij de kassa-zone.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Inventaris', bron: 'Winkelmanager', samenvatting: 'Lijst met gestolen artikelen en de waarde van € 87,-.', sterkte: 'sterk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte erkent de diefstal en geeft aan de schade te willen betalen.', sterkte: 'redelijk' }
      ],
      verweren: [
        { naam: 'Hoogte schade', toelichting: 'De waarde van de gestolen artikelen wordt door de verdediging niet betwist.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Winkeldiefstal · Rotterdam Noord', [
          'Verdachte neemt zonder te betalen artikelen uit een supermarkt. Camerabeelden tonen het weglopen en de beveiliger constateert de ontbrekende artikelen in de tas van verdachte.',
          'Verdachte erkent en wil het zo snel mogelijk achter zich laten. De waarde van de gestolen zaken bedraagt € 87,-.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Snelrechtprocedure', [
          'Verdachte is dagvaard voor de snelrechter. De dagvaarding noemt de tenlastelegging en het parketnummer.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 310 Sr', [
          'Aan verdachte is ten laste gelegd dat hij te Rotterdam een of meerdere goederen, zijnde artikelen uit een supermarkt, heeft weggenomen met het oogmerk om zich die toe te eigenen, terwijl de goederen geheel of gedeeltelijk aan de wil van de rechthebbende waren onttrokken.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisant eenheid Rotterdam', [
          'De beveiliger constateert om 16:20 uur dat verdachte artikelen in zijn tas verstopte en langs de kassa liep zonder te betalen.',
          'Buiten de winkel wordt verdachte aangehouden en overgebracht naar het bureau.'
        ]),
        aangifte: doc('Aangifte', 'Winkelmanager', [
          'De winkelmanager doet aangifte en overlegt de camerabeelden en de inventaris van gestolen artikelen.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte erkent de diefstal en geeft aan dat hij geldgebrek had.',
          'Hij wil de schade betalen en het zo snel mogelijk achter zich laten.'
        ]),
        getuigen: doc('Getuigenverklaring', 'Beveiliger', [
          'De beveiliger verklaart dat hij verdachte de artikelen zag verbergen en dat verdachte langs de kassa liep zonder te betalen.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De camerabeelden en de verklaring van de beveiliger vormen samen een sterk bewijs. De verklaring van verdachte bevestigt de diefstal.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM ziet een eenvoudige diefstal met een laag bedrag en vraagt een korte taakstraf of boete.',
          'De eis luidt: geldboete van € 450,- en een schadevergoedingsmaatregel van € 87,-, of een taakstraf van 20 uur.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging beperkt zich tot strafmatiging en verwijst naar het directe schadeherstel en de korte procedure.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Er is geen reclasseringsrapport opgemaakt in deze zaak.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Winkelmanager', [
          'De winkel meldt geen grote schade maar wel overlast van herhaling in de wijk; de keten wilt het bewijsmateriaal digitaal hergebruiken.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Schadevergoedingsmaatregel', [
          'De schade van € 87,- kan via een schadevergoedingsmaatregel worden verhaald.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik heb het gedaan. Ik had geen geld. Ik wil het netjes betalen en het achter me laten.',
        Advocaat: 'Het bewijs is onbetwist. Het gaat om een korte, passende straf en schadeherstel.',
        'Officier van justitie': 'Een eenvoudige diefstal met een laag bedrag vraagt een korte taakstraf of boete.',
        Getuige: 'Ik zag hem de artikelen verbergen en langs de kassa lopen zonder te betalen.',
        Slachtoffer: 'De schade is klein, maar dit gebeurt vaker. We willen het netjes afgehandeld zien.',
        Verbalisant: 'De beelden zijn helder en tijdgestempeld. De inventaris klopt met de waargenomen artikelen.',
        Reclassering: 'Geen rapport opgemaakt; geen risicosignaal gemeld.'
      }
    },
    {
      key: 'huiselijk_geweld_partner', name: 'Huiselijk geweld tussen partners', category: 'Geweld', difficulty: 'Complex',
      court: 'Enkelvoudige kamer', zaaksoort: 'Reguliere strafzaak', city: 'Dordrecht', location: 'Woonhuis —',
      recidive: false, bewijsniveau: 'twijfelachtig', bewijs_score: 58,
      summary: 'Na een ruzie belt de partner de politie. Zij vermeldt bij de aangifte duwwerk en een kapotte telefoon, maar wil later de zaak niet meer. De buren hoorde schreeuwen en een klap. Verdachte zegt dat er alleen geschreeuwd is en dat de duw een afschermende beweging was.',
      kernvraag: 'Is het geweld bewezen terwijl het slachtoffer de aangifte wil terugtrekken en het bewijs op tegenstrijdige verklaringen rust?',
      bewijsmiddelen: ['melding 112', 'aangifte', 'verklaring buren', 'letselschouw', 'verklaring verdachte'],
      bewijsanalyse: 'De eerste aangifte is belastend, maar de terugtrekking en de beperkte letselsporen zwakken het bewijs. Burenverklaringen zijn indirect. De rechtbank moet de verklaring van het slachtoffer zorgvuldig wegen.',
      om_standpunt: 'Het OM blijft vervolgen gezien de eerste aangifte en de burenverklaring, maar erkent dat het bewijs kwetsbaar is.',
      om_eis: '60 uur taakstraf, waarvan 20 voorwaardelijk, en een contactverbod van drie maanden, of ontslag van alle rechtsvervolging als het bewijs tekortschiet.',
      verdediging: 'De verdediging vraagt vrijspraak of OAR omdat het slachtoffer de aangifte heeft teruggetrokken en er geen letselsporen zijn vastgelegd.',
      mogelijke_sancties: 'taakstraf, contactverbod, gedragsinterventie, of OAR/vrijspraak',
      richtlijn: 'Huiselijk geweld zonder zichtbaar letsel en met teruggetrokken aangifte: bewijs is cruciaal. Bij bewezenverklaring: taakstraf met gedragsinterventie en contactverbod.',
      reclasseringsrapport: 'Reclassering adviseert een relatiemodule en een meldplicht, maar benoemt dat de thuisbasis met beide partners moet worden hersteld.',
      slachtofferimpact: 'Het slachtoffer meldt spanning thuis en wil vooral dat het conflict niet oploopt; zij wil geen strafmaatregel die het contact met de verdachte verbreekt.',
      bewijsstukken: [
        { id: 'G-1', type: 'Melding', bron: '112-centrale', samenvatting: 'Bellerin meldt schreeuwen en een klap in het woonhuis.', sterkte: 'redelijk' },
        { id: 'G-2', type: 'Aangifte', bron: 'Slachtoffer (eerste verklaring)', samenvatting: 'Slachtoffer meldt duwwerk en een kapotte telefoon; herroept de aangifte later deels.', sterkte: 'middel-voorbehoud' },
        { id: 'G-3', type: 'Verklaring getuigen', bron: 'Buren', samenvatting: 'Hoorden schreeuwen en een klap, zagen niemand.', sterkte: 'zwak' },
        { id: 'G-4', type: 'Letselschouw', bron: 'Politie', samenvatting: 'Geen zichtbaar letsel vastgelegd op het moment van de controle.', sterkte: 'zwak' },
        { id: 'G-5', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Erkent schreeuwen, ontkent duwen; spreekt van een afschermende beweging.', sterkte: 'zwak-ontkrachtend' }
      ],
      verweren: [
        { naam: 'Teruggetrokken aangifte', toelichting: 'De verdediging stelt dat het slachtoffer de aangifte heeft herroepen en dat vervolging daardoor faalt.', sterkte: 'middel' },
        { naam: 'Ontbreken letsel', toelichting: 'Er zijn geen letselsporen vastgelegd, wat het bewijs van mishandeling verzwakt.', sterkte: 'middel' },
        { naam: 'Afschermende beweging', toelichting: 'Verdachte stelt dat de duw een afschermende beweging was en geen aanval.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Huiselijk geweld · Dordrecht', [
          'Na een ruzie belt de partner de politie. Zij vermeldt bij de aangifte duwwerk en een kapotte telefoon, maar wil later de zaak niet meer.',
          'De buren hoorden schreeuwen en een klap. Verdachte zegt dat er alleen geschreeuwd is en dat de duw een afschermende beweging was.',
          'De zaak draait om de waarde van de eerste aangifte, de terugtrekking en het ontbreken van letselsporen.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht voor de enkelvoudige kamer', [
          'Verdachte is dagvaard voor de zitting. De dagvaarding noemt de tenlastelegging en het parketnummer.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 300 lid 1 Sr jo. artikel 303 Sr (gezinssituatie)', [
          'Aan verdachte is ten laste gelegd dat hij zijn partner opzettelijk heeft mishandeld door haar te duwen, waardoor zij viel en haar telefoon brak.',
          'Het OM stelt dat de duw opzettelijk was en dat de context van het conflict de strafbaarheid bevestigt.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisanten eenheid Dordrecht', [
          'De politie arriveert om 22:47 uur na een 112-melding van schreeuwen en een klap.',
          'Verbalisanten spreken beide partners apart. Er is geen zichtbaar letsel vastgelegd. De telefoon van de partner is kapot.'
        ]),
        aangifte: doc('Aangifte', 'Slachtoffer · eerste verklaring en latere herroeping', [
          'Bij de eerste verklaring meldt het slachtoffer duwwerk en een kapotte telefoon.',
          'Drie dagen later laat zij via haar advocaat weten de aangifte deels te willen herroepen: \u201cIk wil niet dat hij van huis wordt gestuurd.\u201d'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte erkent schreeuwen, maar ontkent duwen.',
          'Hij zegt dat de duw een afschermende beweging was en dat de telefoon viel tijdens het geïrriteerde contact.'
        ]),
        getuigen: doc('Getuigenverklaringen', 'Buren', [
          'De buren hoorden schreeuwen en een klap, maar zagen niemand en kunnen geen details geven over wie wat deed.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De eerste aangifte is belastend, maar de terugtrekking en het ontbreken van letselsporen verzwakken het bewijs.',
          'De burenverklaringen zijn indirect: ze bevestigen het conflict maar niet de handeling van verdachte.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM blijft vervolgen gezien de eerste aangifte en de burenverklaring, maar erkent dat het bewijs kwetsbaar is.',
          'De eis luidt: 60 uur taakstraf, waarvan 20 voorwaardelijk, en een contactverbod van drie maanden, of OAR als het bewijs tekortschiet.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging vraagt vrijspraak of OAR omdat het slachtoffer de aangifte heeft teruggetrokken en er geen letselsporen zijn vastgelegd.',
          'De burenverklaringen kunnen de handeling van verdachte niet zelfstandig bewijzen.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Reclassering Nederland', [
          'Reclassering adviseert een relatiemodule en een meldplicht, maar benoemt dat de thuisbasis met beide partners moet worden hersteld.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Slachtoffer', [
          'Het slachtoffer meldt spanning thuis en wil vooral dat het conflict niet oploopt.',
          'Zij wil geen strafmaatregel die het contact met de verdachte verbreekt.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Geen BPA ingediend', [
          'Er is geen vordering van de benadeelde partij ingediend; de schade aan de telefoon wordt niet via het strafproces verhaald.'
        ])
      },
      roleResponses: {
        Verdachte: 'Er is geschreeuwd, dat geef ik toe. Maar ik heb haar niet geslagen of geduwd. Ze viel zelf tegen de tafel.',
        Advocaat: 'De aangifte is herroepen en er is geen letsel vastgelegd. De burenverklaring is indirect en dekt de tenlastelegging niet.',
        'Officier van justitie': 'De eerste verklaring van het slachtoffer is waardevol. Terugtrekking is gebruikelijk in huiselijk geweld en maakt het bewijs niet automatisch ondeugdelijk.',
        Getuige: 'We hoorden schreeuwen en een klap. Wie precies wat deed, kunnen we niet zeggen.',
        Slachtoffer: 'Ik wil geen straf. Ik wil dat het thuis beter gaat. Dat hij lessen volgt of praat, dat zou ik goed vinden.',
        Verbalisant: 'Er was geen zichtbaar letsel. De telefoon was kapot en beide partners waren opgewonden.',
        Reclassering: 'Een relatiemodule kan helpen, mits beide partners veilig zijn. Een contactverbod kan juist de spanning verhogen.'
      }
    },
    {
      key: 'hennepkwekerij_woning', name: 'Hennepkwekerij in woning', category: 'Drugs', difficulty: 'Complex',
      court: 'Enkelvoudige kamer', zaaksoort: 'Reguliere strafzaak', city: 'Schiedam', location: 'Woonhuis aan de Broersvest',
      recidive: false, bewijsniveau: 'voldoende', bewijs_score: 78,
      summary: 'Bij een house search worden in de zolder en een bijkeuken 41 hennepplanten, groeilampen en een ventilatiesysteem aangetroffen. Verdachte zegt dat hij voor een kennis huurt en alleen de stroom heeft aangelegd. De electriciteit en de stroomdiefstal spelen een rol.',
      kernvraag: 'Maakt de rol van verdachte bij de aanleg van de installatie hem medeplichtig aan de hennepteelt?',
      bewijsmiddelen: ['house search bevindingen', 'fotos planten en installatie', 'stroomdiefstal vaststelling', 'verklaring verdachte', 'telefoongegevens'],
      bewijsanalyse: 'Het bezit van de woning en de installatie zijn sterk, maar de exacte rol van verdachte vraagt motivering: medeplegen of medeplichtigheid.',
      om_standpunt: 'Het OM acht verdachte deelnemer aan de kwekerij vanwege de aanleg van de installatie en de sleutelbeschikking.',
      om_eis: 'Geldboete van € 2.500,- en 120 uur taakstraf, of 60 dagen gevangenisstraf bij meer omvang.',
      verdediging: 'De verdediging betwist de rol: verdachte zou alleen stroom hebben aangelegd voor een kennis en niet weten wat er werd gekweekt.',
      mogelijke_sancties: 'geldboete, taakstraf, korte celstraf, onttrekking aan verkeer',
      richtlijn: 'Hennepteelt van 25 tot 50 planten zonder commercialisatie: uitgangspunt geldboete en/of taakstraf; bij verergering door stroomdiefstal kan een korte celstraf volgen.',
      reclasseringsrapport: 'Verdachte heeft een stabiele situatie, maar schulden bij de energieleverancier. Reclassering ziet ruimte voor een schuldsanering.',
      slachtofferimpact: 'Er is geen direct slachtoffer; de schade zit bij de energieleverancier en de woningbouwcorporatie.',
      bewijsstukken: [
        { id: 'G-1', type: 'House search bevindingen', bron: 'Politie', samenvatting: '41 hennepplanten, groeilampen, ventilatie en een omgeleide stroomaansluiting aangetroffen.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Foto-materiaal', bron: 'Politie', samenvatting: 'Fotos van de installatie en de planten, met dagstempels.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Vaststelling', bron: 'Energiebedrijf', samenvatting: 'Stroomdiefstal vastgesteld via een omgeleide aansluiting.', sterkte: 'sterk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte zegt voor een kennis te huizen en alleen de stroom te hebben aangelegd.', sterkte: 'zwak' },
        { id: 'G-5', type: 'Telefoongegevens', bron: 'Verstrekking', samenvatting: 'Contacten tussen verdachte en een bekende met drugshistorie rond de periode van de installatie.', sterkte: 'redelijk' }
      ],
      verweren: [
        { naam: 'Rolverdeling', toelichting: 'Verdachte stelt alleen de stroom te hebben aangelegd en niet te weten wat er werd gekweekt.', sterkte: 'middel' },
        { naam: 'Omvang planten', toelichting: 'De verdediging betwist de telling van 41 planten en wijst op kleine stekken.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Hennepteelt · Schiedam', [
          'Bij een house search worden in de zolder en een bijkeuken 41 hennepplanten, groeilampen en een ventilatiesysteem aangetroffen. De stroomaansluiting is omgeleid.',
          'Verdachte zegt dat hij voor een kennis huurt en alleen de stroom heeft aangelegd. De zaak draait om de rolverdeling en de omvang van de teelt.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht voor de enkelvoudige kamer', [
          'Verdachte is dagvaard voor de zitting. De dagvaarding noemt de tenlastelegging en het parketnummer.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 11 lid 3 Opiumwet', [
          'Aan verdachte is ten laste gelegd dat hij tezamen en in vereniging met een ander of alleen, te Schiedam een zodanige hoeveelheid hennep heeft verbouwd dat de verbouwing in een onroerende zaak plaatsvond.',
          'Het OM stelt medeplegen voor op grond van de aanleg van de installatie en de sleutelbeschikking.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'House search team Schiedam', [
          'Bij binnenkomst wordt een sterke geur geroken. In de zolder en de bijkeuken worden 41 hennepplanten, groeilampen en een ventilatiesysteem aangetroffen.',
          'De stroomaansluiting is omgeleid, wat door het energiebedrijf wordt bevestigd.'
        ], ['Aantal planten: 41 (waarvan 12 kleine stekken)', 'Waarde installatie: geschat € 2.000,-']),
        aangifte: doc('Aangifte', 'Woningbouwcorporatie', [
          'De corporatie doet aangifte naconstering van de woning en meldt dat de elektrische installatie ernstig is aangepast.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte zegt dat hij voor een kennis huurt en alleen de stroom heeft aangelegd.',
          'Over de planten zegt hij: \u201cIk dacht dat het gewoon planten waren voor de lampen die hij testte.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Buurman', [
          'De buurman zag regelmatig anderen bij de woning in- en uitgaan en een sterke geur in de zomermaanden.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De house search en de foto\u2019s bewijzen de teelt. De rolverdeling vraagt motivering: medeplegen of medeplichtigheid.',
          'De telefoongegevens ondersteunen het contact met een bekende met drugshistorie.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM acht verdachte deelnemer aan de kwekerij vanwege de aanleg van de installatie en de sleutelbeschikking.',
          'De eis luidt: geldboete van € 2.500,- en 120 uur taakstraf, of 60 dagen gevangenisstraf bij meer omvang.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging betwist de rol: verdachte zou alleen stroom hebben aangelegd voor een kennis en niet weten wat er werd gekweekt.',
          'Subsidiair wordt matiging gevraagd vanwege schulden en de korte procedure.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Reclassering Nederland', [
          'Verdachte heeft een stabiele situatie, maar schulden bij de energieleverancier.',
          'Reclassering ziet ruimte voor een schuldsanering en een gesprek over financiële verantwoordelijkheid.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Energiebedrijf en corporatie', [
          'Er is geen direct slachtoffer; de schade zit bij de energieleverancier en de woningbouwcorporatie.',
          'De corporatie vordert de kosten van herstel van de installatie.'
        ]),
        strafvordering: doc('Onttrekking aan verkeer en verhaal', 'Maatregelen', [
          'De planten en de installatie worden onttrokken aan het verkeer.',
          'De corporatie vordert € 1.800,- voor herstel van de elektrische installatie.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik heb alleen de stroom aangelegd. Wat hij er deed, weet ik niet. Ik dacht dat het gewoon planten waren.',
        Advocaat: 'De rol van verdachte is niet bewezen als medepleger. Stroomaansluiting is niet hetzelfde als de teelt beheren.',
        'Officier van justitie': 'De installatie en de sleutelbeschikking maken verdachte deelnemer aan de kwekerij.',
        Getuige: 'Ik zag vaak anderen in- en uitgaan en er was een sterke geur in de zomer.',
        Slachtoffer: 'De schade zit bij het energiebedrijf en ons. De installatie moet volledig worden hersteld.',
        Verbalisant: '41 planten, groeilampen en een omgeleide aansluiting. Alles is fotograisch vastgelegd.',
        Reclassering: 'Schulden spelen een rol. Schuldsanering kan onderdeel van de aanpak zijn.'
      }
    },
    {
      key: 'verkoop_harddrugs', name: 'Handel in harddrugs', category: 'Drugs', difficulty: 'Zwaar',
      court: 'Meervoudige kamer', zaaksoort: 'Reguliere strafzaak', city: 'Rotterdam', location: 'Wijkgebied Delfshaven',
      recidive: true, bewijsniveau: 'voldoende', bewijs_score: 80,
      summary: 'Verdachte wordt betrapt tijdens een controle met meer dan 100 gram cocaïne en een schaalverdeling. Telefoongegevens tonen het aan- en verkopen van partijtjes. Verdachte zegt dat hij alleen zijn eigen hoeveelheid had en geen handelaar is.',
      kernvraag: 'Bewijst de hoeveelheid, de schaalverdeling en de telefoongegevens handel in harddrugs?',
      bewijsmiddelen: ['in beslag genomen drugs', 'schaalverdeling', 'telefoongegevens', 'verklaring verdachte', 'melding politie-inzet'],
      bewijsanalyse: 'De hoeveelheid en de schaalverdeling ondersteunen handel. De telefoongegevens versterken het patroon. De verklaring van verdachte vraagt een kritische toets.',
      om_standpunt: 'Het OM ziet een verdachte met recidive en een grote hoeveelheid harddrugs; handel is evident.',
      om_eis: '240 dagen gevangenisstraf, waarvan 90 voorwaardelijk, met een proeftijd van drie jaar.',
      verdediging: 'De verdediging stelt dat verdachte een gebruiker is en dat de schaalverdeling en contacten niet bewijzen dat hij verkocht.',
      mogelijke_sancties: 'gevangenisstraf, deels voorwaardelijk, verbeurdverklaring',
      richtlijn: 'Handel in cocaïne met een hoeveelheid boven 100 gram en recidive: uitgangspunt onvoorwaardelijke vrijheidsstraf in maanden.',
      reclasseringsrapport: 'Verdachte heeft een lange justitiële historie en een zwakke woonsituatie. Reclassering ziet ruimte voor verslavingszorg en een dagbestedingstrajekt.',
      slachtofferimpact: 'Er is geen direct slachtoffer; de schade zit bij de samenleving en de omgeving van Delfshaven.',
      bewijsstukken: [
        { id: 'G-1', type: 'In beslag genomen drugs', bron: 'Politie', samenvatting: 'Meer dan 100 gram cocaïne in afzonderlijke partijtjes met een schaalverdeling.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Telefoongegevens', bron: 'Verstrekking', samenvatting: 'Patroon van aan- en verkoopcontacten rond de controle.', sterkte: 'redelijk' },
        { id: 'G-3', type: 'Melding', bron: 'Politie-inzet', samenvatting: 'Controle na zware inbraakreactie in het gebied.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte zegt dat hij alleen zijn eigen hoeveelheid had.', sterkte: 'zwak' }
      ],
      verweren: [
        { naam: 'Eigen gebruik', toelichting: 'Verdachte stelt dat de hoeveelheid voor eigen gebruik was.', sterkte: 'zwak' },
        { naam: 'Telefoongegevens', toelichting: 'De verdediging stelt dat de contacten ook ander karakter kunnen hebben.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Handel in harddrugs · Delfshaven Rotterdam', [
          'Verdachte wordt betrapt tijdens een controle met meer dan 100 gram cocaïne en een schaalverdeling. Telefoongegevens tonen het aan- en verkopen van partijtjes.',
          'Verdachte zegt dat hij alleen zijn eigen hoeveelheid had en geen handelaar is. De zaak draait om de waarde van de hoeveelheid, de schaalverdeling en de telefoongegevens.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht voor de meervoudige kamer', [
          'Verdachte is dagvaard voor de zitting. De dagvaarding noemt de tenlastelegging en het parketnummer.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 10 lid 6 jo. artikel 27 Opiumwet', [
          'Aan verdachte is ten laste gelegd dat hij tezamen en in vereniging met een ander of alleen, te Rotterdam cocaïne heeft verhandeld, in de zin van het aan- of verkopen, leveren of afleveren, verstrekken of in voorraad hebben.',
          'De hoeveelheid bedraagt meer dan 100 gram en de schaalverdeling wijst op verkoopbaarheid.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Recherche Delfshaven', [
          'Tijdens een controle wordt verdachte aangehouden. In zijn broekzak en rugzak worden partijtjes cocaïne gevonden met een schaalverdeling.',
          'De telefoon van verdachte wordt veiliggesteld en geleverd door de provider voor onderzoek.'
        ]),
        aangifte: doc('Aangifte', 'Politie — ambtshalve', [
          'De zaak is ambtshalve aangebracht na de controle; er is geen extern aangever.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte zegt dat hij alleen zijn eigen hoeveelheid had.',
          'Over de schaalverdeling zegt hij: \u201cDat was van een kennis die bij mij terecht kon voor zijn eigen dosis.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Omstander', [
          'De omstander zag verdachte vaker in de straat met verschillende mensen die kort bleven hangen.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De hoeveelheid en de schaalverdeling ondersteunen handel. De telefoongegevens versterken het patroon.',
          'De verklaring van verdachte vraagt een kritische toets.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM ziet een verdachte met recidive en een grote hoeveelheid harddrugs; handel is evident.',
          'De eis luidt: 240 dagen gevangenisstraf, waarvan 90 voorwaardelijk met proeftijd van drie jaar.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging stelt dat verdachte een gebruiker is en dat de schaalverdeling en contacten niet bewijzen dat hij verkocht.',
          'Subsidiair wordt verslavingszorg voorgesteld in plaats van een lange celstraf.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Reclassering Nederland', [
          'Verdachte heeft een lange justitiële historie en een zwakke woonsituatie.',
          'Reclassering ziet ruimte voor verslavingszorg en een dagbestedingstrajekt.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Niet opgemaakt', [
          'Er is geen direct slachtoffer; de schade zit bij de samenleving en de omgeving van Delfshaven.'
        ]),
        strafvordering: doc('Verbeurdverklaring', 'Maatregelen', [
          'De drugs en de telefoon worden verbeurdverklaard.',
          'Eventuele winst wordt via een ontnemingsmaatregel gevolgd.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik ben gebruiker. De hoeveelheid was voor mezelf en voor een kennis die bij mij terecht kon.',
        Advocaat: 'Handel moet bewezen worden. Hoeveelheid en schaalverdeling zijn aanwijzingen, geen bewijs van verkoop.',
        'Officier van justitie': 'De hoeveelheid, de schaalverdeling en het telefoonpatroon wijzen op handel. Recidive verhoogt de straf.',
        Getuige: 'Ik zag vaker mensen kort bij hem blijven hangen. Wat ze deden, weet ik niet.',
        Slachtoffer: 'Er is geen direct slachtoffer, maar de buurt heeft veel last van drugsoverlast.',
        Verbalisant: 'De partijtjes waren meteen geschaald. Dat past bij verkoop, niet bij persoonlijk gebruik.',
        Reclassering: 'Verslavingszorg en dagbesteding zijn nodig. Een lange celstraf lost niets op zonder begeleiding.'
      }
    },
    {
      key: 'geweld_tegen_ambtenaar', name: 'Geweld tegen politieambtenaar', category: 'Geweld', difficulty: 'Normaal',
      court: 'Politierechter', zaaksoort: 'Snelrechtzaak', city: 'Rotterdam', location: 'Coolsingel',
      recidive: false, bewijsniveau: 'voldoende', bewijs_score: 82,
      summary: 'Verdachte wordt bij een controle uitgesproken en maakt een schoppende beweging richting een politieambtenaar. De ambtenaar raakt niet gewond. Camerabeelden tonen de beweging. Verdachte zegt dat hij zich verdedigde bij een onjuiste aanhouding.',
      kernvraag: 'Was de beweging gericht op de ambtenaar en faalt het beroep op een onjuiste aanhouding?',
      bewijsmiddelen: ['camerabeelden', 'verklaring ambtenaar', 'verbalisant bevindingen', 'verklaring verdachte'],
      bewijsanalyse: 'De camerabeelden zijn sterk. De aanhouding was juist. De discussie draait om de strafmaat en de motivering van de sanctie.',
      om_standpunt: 'Het OM ziet geweld tegen een ambtenaar in functie als verergerend element.',
      om_eis: 'Geldboete van € 600,- en een taakstraf van 40 uur, waarvan 10 voorwaardelijk.',
      verdediging: 'De verdediging stelt dat verdachte zich verdedigde bij een onjuiste aanhouding en vraagt een lichtere straf.',
      mogelijke_sancties: 'geldboete, taakstraf, deels voorwaardelijk',
      richtlijn: 'Geweld tegen een ambtenaar in functie, zonder letsel: uitgangspunt geldboete en/of taakstraf. Bij herhaling kan een deels voorwaardelijke celstraf volgen.',
      reclasseringsrapport: 'Geen rapport opgemaakt.',
      slachtofferimpact: 'De ambtenaar meldt geen letsel maar wel ondermijning van het gezag; hij wil de zaak netjes afgehandeld zien.',
      bewijsstukken: [
        { id: 'G-1', type: 'Camerabeelden', bron: 'Politie', samenvatting: 'Beelden tonen de schoppende beweging richting de ambtenaar.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Verklaring', bron: 'Ambtenaar', samenvatting: 'De ambtenaar beschrijft de beweging en de afstand.', sterkte: 'sterk' },
        { id: 'G-3', type: 'PV bevindingen', bron: 'Verbalisant', samenvatting: 'Aanhouding en voorgeschiedenis vastgelegd.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte zegt dat hij zich verdedigde.', sterkte: 'zwak' }
      ],
      verweren: [
        { naam: 'Onjuiste aanhouding', toelichting: 'De verdediging stelt dat de aanhouding onjuist was en dat verdachte zich verdedigde.', sterkte: 'zwak' },
        { naam: 'Richting beweging', toelichting: 'De verdediging betwist dat de beweging op de ambtenaar was gericht.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Geweld tegen ambtenaar · Rotterdam', [
          'Verdachte wordt bij een controle uitgesproken en maakt een schoppende beweging richting een politieambtenaar. De ambtenaar raakt niet gewond.',
          'Verdachte zegt dat hij zich verdedigde bij een onjuiste aanhouding. De zaak draait om de richting van de beweging en de juistheid van de aanhouding.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Snelrechtprocedure', [
          'Verdachte is dagvaard voor de snelrechter.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 184 lid 2 Sr', [
          'Aan verdachte is ten laste gelegd dat hij te Rotterdam tegen een ambtenaar in functie geweld heeft gepleegd door een schoppende beweging te maken richting zijn onderlichaam.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisanten', [
          'De controle verliep onrustig. Verdachte werd uitgesproken over zijn houding en maakte vervolgens een schoppende beweging.',
          'De ambtenaar kon uitwijken; er is geen letsel ontstaan.'
        ]),
        aangifte: doc('Aangifte', 'Ambtenaar in functie', [
          'De ambtenaar doet aangifte en beschrijft de beweging en de afstand.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte zegt dat hij zich verdedigde bij een onjuiste aanhouding.',
          'Over de beweging zegt hij: \u201cIk trok mijn been op, meer niet.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Tweede ambtenaar', [
          'De tweede ambtenaar bevestigt de beweging en de afstand.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De camerabeelden zijn sterk. De aanhouding was juist.',
          'De discussie draait om de strafmaat en de motivering van de sanctie.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM ziet geweld tegen een ambtenaar in functie als verergerend element.',
          'De eis luidt: geldboete van € 600,- en een taakstraf van 40 uur, waarvan 10 voorwaardelijk.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging stelt dat verdachte zich verdedigde bij een onjuiste aanhouding en vraagt een lichtere straf.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Er is geen reclasseringsrapport opgemaakt.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Ambtenaar', [
          'De ambtenaar meldt geen letsel maar wel ondermijning van het gezag; hij wil de zaak netjes afgehandeld zien.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Geen BPA ingediend', [
          'Er is geen vordering van de benadeelde partij ingediend.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik trok mijn been op. Dat was een verdediging, geen aanval.',
        Advocaat: 'De aanhouding was niet onjuist, maar de reactie van verdachte was reflexmatig. Strafmatiging is op zijn plek.',
        'Officier van justitie': 'Geweld tegen een ambtenaar in functie mag niet zomaar worden afgedaan. De beelden zijn helder.',
        Getuige: 'Ik zag de beweging vanaf een paar meter afstand. De ambtenaar moest uitwijken.',
        Slachtoffer: 'Geen letsel, maar wel ondermijning van het gezag. Ik wil dat dit netjes wordt afgehandeld.',
        Verbalisant: 'De beelden tonen de beweging en de afstand. De aanhouding verliep volgens de regels.',
        Reclassering: 'Geen rapport opgemaakt; geen risicosignaal gemeld.'
      }
    },
    {
      key: 'valsheid_in_geschrifte_id', name: 'Valsheid in geschrifte — legitimatiebewijs', category: 'Vermogen', difficulty: 'Normaal',
      court: 'Politierechter', zaaksoort: 'Snelrechtzaak', city: 'Rotterdam', location: 'Bibliotheek Rotterdam',
      recidive: false, bewijsniveau: 'voldoende', bewijs_score: 74,
      summary: 'Verdachte gebruikte een vervalst legitimatiebewijs om een bibliotheekkaart en een telefoonabonnement te regelen. Het bewijs bestaat uit de vervalste kaart, de scan bij de provider en de verklaring van de medewerker. Verdachte geeft toe de kaart online te hebben gekocht.',
      kernvraag: 'Is valsheid in geschrifte bewezen en is de straf passend bij eerste contact en de kleine schade?',
      bewijsmiddelen: ['vervalst legitimatiebewijs', 'scan provider', 'verklaring medewerker', 'verklaring verdachte'],
      bewijsanalyse: 'Het bewijs is helder. De strafmaat draait om eerste contact, kleine schade en de bereidheid te herstellen.',
      om_standpunt: 'Het OM ziet valsheid in geschrifte als verzelfstandigd delict, los van de kleine schade.',
      om_eis: 'Geldboete van € 600,- en een schadevergoedingsmaatregel van € 240,-.',
      verdediging: 'De verdediging vraagt strafmatiging en verwijst naar de kleine schade en de bereidheid te herstellen.',
      mogelijke_sancties: 'geldboete, taakstraf, schadevergoedingsmaatregel',
      richtlijn: 'Valsheid in geschrifte met een gekocht document en kleine schade: uitgangspunt geldboete of korte taakstraf.',
      reclasseringsrapport: 'Geen rapport opgemaakt.',
      slachtofferimpact: 'De provider meldt kosten en het ongemak van het ongedaan maken van het abonnement.',
      bewijsstukken: [
        { id: 'G-1', type: 'In beslag genomen document', bron: 'Politie', samenvatting: 'Vervalst legitimatiebewijs gevonden in de tas van verdachte.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Scan', bron: 'Provider', samenvatting: 'De scan bij de provider toont de vervalste kaart.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Verklaring', bron: 'Medewerker provider', samenvatting: 'De medewerker herkent de kaart en de verdachte.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte geeft toe de kaart online te hebben gekocht.', sterkte: 'redelijk' }
      ],
      verweren: [
        { naam: 'Geen opzet', toelichting: 'De verdediging stelt dat verdachte niet wist dat de kaart vervalst was.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Valsheid in geschrifte · Rotterdam', [
          'Verdachte gebruikte een vervalst legitimatiebewijs om een bibliotheekkaart en een telefoonabonnement te regelen.',
          'Verdachte geeft toe de kaart online te hebben gekocht. De zaak draait om de vaststelling van valsheid en de strafmaat.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Snelrechtprocedure', [
          'Verdachte is dagvaard voor de snelrechter.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 225 lid 1 Sr', [
          'Aan verdachte is ten laste gelegd dat hij te Rotterdam opzettelijk gebruik heeft gemaakt van een geschrift dat bestemd was om tot bewijs van enig feit te dienen, waarvan hij wist dat de inhoud vals was.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisanten', [
          'De vervalste kaart is bij de provider gescand en later in beslag genomen. De medewerker herkent de kaart en de verdachte.'
        ]),
        aangifte: doc('Aangifte', 'Provider', [
          'De provider doet aangifte en overlegt de scan van de vervalste kaart.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte geeft toe de kaart online te hebben gekocht.',
          'Over het waarom zegt hij: \u201cIk kon zonder document nergens terecht.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Medewerker provider', [
          'De medewerker herkent de kaart en de verdachte en beschrijft de gang van zaken bij het abonnement.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'Het bewijs is helder door de vervalste kaart en de scan bij de provider.',
          'De strafmaat draait om eerste contact, kleine schade en de bereidheid te herstellen.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM ziet valsheid in geschrifte als verzelfstandigd delict, los van de kleine schade.',
          'De eis luidt: geldboete van € 600,- en een schadevergoedingsmaatregel van € 240,-.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging vraagt strafmatiging en verwijst naar de kleine schade en de bereidheid te herstellen.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Er is geen reclasseringsrapport opgemaakt.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Provider', [
          'De provider meldt kosten en het ongemak van het ongedaan maken van het abonnement.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Schadevergoedingsmaatregel', [
          'De schade van € 240,- kan via een schadevergoedingsmaatregel worden verhaald.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik heb de kaart online gekocht. Ik wist niet precies wat er mee zou gebeuren, maar ik heb het wel gebruikt.',
        Advocaat: 'De schade is klein en verdachte wil herstellen. Een boete of korte taakstraf is passend.',
        'Officier van justitie': 'Valsheid in geschrifte is verzelfstandigd. De kleine schade maakt het delict niet minder strafbaar.',
        Getuige: 'Ik herkende de kaart en de verdachte bij het abonnement.',
        Slachtoffer: 'De schade is klein maar het proces om het abonnement ongedaan te maken kost ons geld.',
        Verbalisant: 'De kaart is in beslag genomen en de scan is veiliggesteld bij de provider.',
        Reclassering: 'Geen rapport opgemaakt; geen risicosignaal gemeld.'
      }
    },
    {
      key: 'doorrijden_na_ongeval', name: 'Doorrijden na ongeval', category: 'Verkeer', difficulty: 'Zwaar',
      court: 'Enkelvoudige kamer', zaaksoort: 'Reguliere strafzaak', city: 'Rotterdam', location: 'Oostzeedijk',
      recidive: false, bewijsniveau: 'voldoende', bewijs_score: 70,
      summary: 'Na een aanrijding met een fietser rijdt verdachte door zonder hulp te bieden. De fietser raakt gewond. Camerabeelden tonen het voertuig en het kenteken. Verdachte stelt dat hij het ongeval niet merkte.',
      kernvraag: 'Wist verdachte van het ongeval en is het doorrijden bewezen?',
      bewijsmiddelen: ['camerabeelden', 'kentekenherkenning', 'verklaring slachtoffer', 'schadebeeld voertuig', 'verklaring verdachte'],
      bewijsanalyse: 'De beelden en de schade aan het voertuig ondersteunen het doorrijden. De verklaring van verdachte over onwetendheid vraagt toetsing.',
      om_standpunt: 'Het OM acht doorrijden bewezen en ziet het verlaten van de plaats als verergerend.',
      om_eis: 'Rijontzegging van vier maanden en een geldboete van € 1.200,-, plus schadevergoeding aan de fietser.',
      verdediging: 'De verdediging stelt dat verdachte het ongeval niet merkte en dat de schade later werd gemeld.',
      mogelijke_sancties: 'rijontzegging, geldboete, schadevergoeding, deels voorwaardelijke celstraf',
      richtlijn: 'Doorrijden na ongeval met letsel: uitgangspunt rijontzegging en geldboete; bij ernstig letsel kan een deels voorwaardelijke celstraf volgen.',
      reclasseringsrapport: 'Geen rapport opgemaakt.',
      slachtofferimpact: 'De fietser meldt letsel, vertraging in herstel en onzekerheid over de schadeafwikkeling.',
      bewijsstukken: [
        { id: 'G-1', type: 'Camerabeelden', bron: 'Gemeente', samenvatting: 'Beelden tonen het voertuig dat doorrijdt na de aanrijding.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Kentekenherkenning', bron: 'ANPR', samenvatting: 'Het kenteken is gekoppeld aan het voertuig van verdachte.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Verklaring', bron: 'Slachtoffer (fietser)', samenvatting: 'De fietser beschrijft de aanrijding en het doorrijden.', sterkte: 'sterk' },
        { id: 'G-4', type: 'Schadebeeld', bron: 'Politie', samenvatting: 'Schade aan het voertuig passend bij het ongeval.', sterkte: 'redelijk' },
        { id: 'G-5', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte stelt dat hij het ongeval niet merkte.', sterkte: 'zwak' }
      ],
      verweren: [
        { naam: 'Onwetendheid ongeval', toelichting: 'Verdachte stelt dat hij het contact niet heeft gemerkt.', sterkte: 'middel' },
        { naam: 'Tijdige melding', toelichting: 'De verdediging wijst op een melding van het schadeverhaal later die dag.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Doorrijden na ongeval · Oostzeedijk Rotterdam', [
          'Na een aanrijding met een fietser rijdt verdachte door zonder hulp te bieden. De fietser raakt gewond.',
          'Camerabeelden tonen het voertuig en het kenteken. Verdachte stelt dat hij het ongeval niet merkte. De zaak draait om kennis van het ongeval en de strafmaat.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht voor de enkelvoudige kamer', [
          'Verdachte is dagvaard voor de zitting.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 6 WVW jo. artikel 315 Sr (letsel)', [
          'Aan verdachte is ten laste gelegd dat hij na een verkeersongeval de plaats van het ongeval heeft verlaten terwijl hij behoorde te weten dat bij het ongeval een persoon was betrokken die daardoor letsel had opgelopen.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisanten', [
          'De fietser is achtergelaten met letsel en werd door omstanders geholpen. De beelden tonen het voertuig dat doorrijdt.',
          'Het kenteken is via ANPR gekoppeld aan het voertuig van verdachte.'
        ]),
        aangifte: doc('Aangifte', 'Slachtoffer (fietser)', [
          'De fietser doet aangifte en beschrijft de aanrijding en het doorrijden.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte stelt dat hij het ongeval niet merkte.',
          'Hij wijst op een melding van het schadeverhaal later die dag.'
        ]),
        getuigen: doc('Getuigenverklaring', 'Omstander', [
          'De omstander zag de fietser vallen en het voertuig doorrijden.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De beelden en de schade aan het voertuig ondersteunen het doorrijden.',
          'De verklaring van verdachte over onwetendheid vraagt toetsing.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM acht doorrijden bewezen en ziet het verlaten van de plaats als verergerend.',
          'De eis luidt: rijontzegging van vier maanden en een geldboete van € 1.200,-, plus schadevergoeding aan de fietser.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging stelt dat verdachte het ongeval niet merkte en dat de schade later werd gemeld.',
          'Subsidiair wordt een beperkte rijontzegging gevraagd.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Er is geen reclasseringsrapport opgemaakt.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Fietser', [
          'De fietser meldt letsel, vertraging in herstel en onzekerheid over de schadeafwikkeling.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Schadevergoedingsmaatregel', [
          'De schade van de fietser wordt geclaimd via een schadevergoedingsmaatregel.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik heb het contact niet gemerkt. Pas later hoorde ik van de aanrijding en wilde ik het netjes regelen.',
        Advocaat: 'Kennis van het ongeval is het kernpunt. Zonder die kennis ontbreekt de strafbaarheid van doorrijden.',
        'Officier van justitie': 'De schade aan het voertuig past bij het ongeval. Dat verdachte doorreedt staat vast.',
        Getuige: 'Ik zag de fietser vallen en het voertuig doorrijden.',
        Slachtoffer: 'Ik lag op de grond en hij reed gewoon door. Ik had letsel en ben pas later geholpen.',
        Verbalisant: 'De beelden zijn tijdgestempeld en het kenteken is via ANPR gekoppeld.',
        Reclassering: 'Geen rapport opgemaakt; geen risicosignaal gemeld.'
      }
    },
    {
      key: 'overval_tankstation', name: 'Overval op tankstation', category: 'Vermogen', difficulty: 'Zwaar',
      court: 'Meervoudige kamer', zaaksoort: 'Reguliere strafzaak', city: 'Rotterdam', location: 'Tankstation Maasboulevard',
      recidive: true, bewijsniveau: 'voldoende', bewijs_score: 76,
      summary: 'Verdachte dreigt met een mes en eist de kasinhoud van een tankstation. De medewerker geeft gehoorzaamheid. Camerabeelden tonen het mes en het wegrijden op een scooter. Verdachte wordt later aangehouden; het mes wordt bij hem aangetroffen.',
      kernvraag: 'Is de overval bewezen en is de straf passend bij het gebruik van een mes en de recidive?',
      bewijsmiddelen: ['camerabeelden', 'in beslag genomen mes', 'verklaring medewerker', 'aangifte', 'verklaring verdachte'],
      bewijsanalyse: 'Het bewijs is sterk door beeld, in beslaggenomen mes en verklaring. De strafmaat draait om het wapen en de recidive.',
      om_standpunt: 'Het OM ziet een overval met een wapen en recidive als zwaar delict.',
      om_eis: 'Gevangenisstraf van 18 maanden, waarvan 6 voorwaardelijk, met een proeftijd van drie jaar.',
      verdediging: 'De verdediging erkent de feiten deels maar vraagt matiging vanwege de korte duur en de kleine buit.',
      mogelijke_sancties: 'gevangenisstraf, deels voorwaardelijk, verbeurdverklaring',
      richtlijn: 'Overval met een mes en recidive: uitgangspunt onvoorwaardelijke vrijheidsstraf van meerdere maanden, deels voorwaardelijk bij bijzondere omstandigheden.',
      reclasseringsrapport: 'Verdachte heeft een lange justitiële historie en een instabiele woonsituatie. Reclassering ziet ruimte voor een dagbestedingstrajekt en verslavingszorg.',
      slachtofferimpact: 'De medewerker meldt schrik, onveiligheid en een periode zonder werken; de schade omvat de kasinhoud en het gemis van werkplezier.',
      bewijsstukken: [
        { id: 'G-1', type: 'Camerabeelden', bron: 'Tankstation', samenvatting: 'Beelden tonen het mes, de dreiging en het wegrijden op een scooter.', sterkte: 'sterk' },
        { id: 'G-2', type: 'In beslag genomen wapen', bron: 'Politie', samenvatting: 'Het mes wordt bij verdachte aangetroffen en overeenkomstig de beelden.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Verklaring', bron: 'Medewerker tankstation', samenvatting: 'De medewerker beschrijft de dreiging en de overhandiging van de kasinhoud.', sterkte: 'sterk' },
        { id: 'G-4', type: 'Aangifte', bron: 'Tankstation-eigenaar', samenvatting: 'Aangifte met schadeopgave van kasinhoud.', sterkte: 'redelijk' },
        { id: 'G-5', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte erkent deels de feiten.', sterkte: 'redelijk' }
      ],
      verweren: [
        { naam: 'Matiging vanwege korte duur', toelichting: 'De verdediging wijst op de korte duur en de kleine buit.', sterkte: 'redelijk' },
        { naam: 'Rolverdeling', toelichting: 'De verdediging stelt dat verdachte niet het brein achter de overval was.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Overval · Tankstation Maasboulevard Rotterdam', [
          'Verdachte dreigt met een mes en eist de kasinhoud van een tankstation. De medewerker geeft gehoorzaamheid.',
          'Camerabeelden tonen het mes en het wegrijden op een scooter. Verdachte wordt later aangehouden; het mes wordt bij hem aangetroffen.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Uitgebracht voor de meervoudige kamer', [
          'Verdachte is dagvaard voor de zitting. De dagvaarding noemt de tenlastelegging en het parketnummer.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 312 lid 1 Sr', [
          'Aan verdachte is ten laste gelegd dat hij te Rotterdam met een mes heeft gedreigd en met dat mes geweld heeft gebruikt om de kasinhoud van een tankstation weg te nemen.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Recherche', [
          'De medewerker geeft de kasinhoud over na de dreiging met het mes. De beelden tonen het wegrijden op een scooter.',
          'Verdachte wordt later aangehouden; het mes wordt bij hem aangetroffen en overeenkomstig de beelden geïdentificeerd.'
        ]),
        aangifte: doc('Aangifte', 'Tankstation-eigenaar', [
          'De eigenaar doet aangifte met een schadeopgave van de kasinhoud.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte erkent deels de feiten.',
          'Over het mes zegt hij: \u201cIk had het mes mee, maar ik heb niemand geslagen.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Klant tankstation', [
          'De klant zag de dreiging vanaf een afstand en het wegrijden op de scooter.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'Het bewijs is sterk door beeld, in beslaggenomen mes en verklaring.',
          'De strafmaat draait om het wapen en de recidive.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM ziet een overval met een wapen en recidive als zwaar delict.',
          'De eis luidt: gevangenisstraf van 18 maanden, waarvan 6 voorwaardelijk met proeftijd van drie jaar.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging erkent de feiten deels maar vraagt matiging vanwege de korte duur en de kleine buit.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Reclassering Nederland', [
          'Verdachte heeft een lange justitiële historie en een instabiele woonsituatie.',
          'Reclassering ziet ruimte voor een dagbestedingstrajekt en verslavingszorg.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Medewerker tankstation', [
          'De medewerker meldt schrik, onveiligheid en een periode zonder werken.',
          'De schade omvat de kasinhoud en het gemis van werkplezier.'
        ]),
        strafvordering: doc('Verbeurdverklaring en schade', 'Maatregelen', [
          'Het mes wordt verbeurdverklaard.',
          'De schade van de kasinhoud kan via een schadevergoedingsmaatregel worden verhaald.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik had het mes mee, maar ik heb niemand geslagen. Ik weet dat dit niet de juiste manier was.',
        Advocaat: 'De feiten liggen vast, maar de strafmaat verdient aandacht: korte duur, kleine buit en persoonlijke omstandigheden.',
        'Officier van justitie': 'Een overval met een mes en recidive vraagt een zware straf. De beelden laten niets aan de interpretatie over.',
        Getuige: 'Ik zag de dreiging en het wegrijden op de scooter.',
        Slachtoffer: 'Ik was bang voor mijn leven. Ik ben daarna een tijd niet meer gaan werken.',
        Verbalisant: 'Het mes is bij de aanhouding aangetroffen en overeenkomstig de beelden geïdentificeerd.',
        Reclassering: 'Verslavingszorg en dagbesteding zijn nodig. Zonder structuur is het risico op herhaling groot.'
      }
    },
    {
      key: 'vernieling_openbare_orde', name: 'Vernieling en verstoring openbare orde', category: 'Openbare orde', difficulty: 'Simpel',
      court: 'Snelrecht', zaaksoort: 'Snelrechtzaak', city: 'Rotterdam', location: 'Centrum — demonstratie',
      recidive: false, bewijsniveau: 'voldoende', bewijs_score: 84,
      summary: 'Tijdens een demonstratie gooit verdachte een bak met bestrating kapot en verstoort de orde. Camerabeelden tonen de handeling. Verdachte zegt dat hij in de groep meeging maar niet wist dat hij iets vernielde.',
      kernvraag: 'Is het vernielen bewezen en is de straf passend bij de eerste keer en de korte duur?',
      bewijsmiddelen: ['camerabeelden', 'verklaring verbalisant', 'schadebeeld', 'verklaring verdachte'],
      bewijsanalyse: 'De beelden zijn sterk. De discussie draait om de mate van betrokkenheid en de strafmaat.',
      om_standpunt: 'Het OM ziet vernieling en verstoring van de openbare orde als een eenvoudig delict met een korte straf.',
      om_eis: 'Geldboete van € 400,- en een schadevergoedingsmaatregel van € 350,-.',
      verdediging: 'De verdediging stelt dat verdachte in de groep meeging maar niet wist dat hij iets vernielde en vraagt strafmatiging.',
      mogelijke_sancties: 'geldboete, schadevergoedingsmaatregel',
      richtlijn: 'Vernieling tijdens een demonstratie zonder geweld: uitgangspunt geldboete en schadevergoedingsmaatregel.',
      reclasseringsrapport: 'Geen rapport opgemaakt.',
      slachtofferimpact: 'De gemeente meldt kosten voor herstel van de bestrating.',
      bewijsstukken: [
        { id: 'G-1', type: 'Camerabeelden', bron: 'Gemeente', samenvatting: 'Beelden tonen de handeling van verdachte.', sterkte: 'sterk' },
        { id: 'G-2', type: 'Verklaring', bron: 'Verbalisant', samenvatting: 'De verbalisant beschrijft de handeling en de ordeverstoring.', sterkte: 'sterk' },
        { id: 'G-3', type: 'Schadebeeld', bron: 'Gemeente', samenvatting: 'Beschadigde bestrating vastgelegd.', sterkte: 'redelijk' },
        { id: 'G-4', type: 'Verklaring verdachte', bron: 'Verdachte ter terechtzitting', samenvatting: 'Verdachte zegt dat hij in de groep meeging maar niet wist dat hij iets vernielde.', sterkte: 'zwak' }
      ],
      verweren: [
        { naam: 'Geen opzet vernieling', toelichting: 'De verdediging stelt dat verdachte niet wist dat hij iets vernielde.', sterkte: 'zwak' }
      ],
      documents: {
        overzicht: doc('Zaaksoverzicht', 'Vernieling en openbare orde · Rotterdam', [
          'Tijdens een demonstratie gooit verdachte een bak met bestrating kapot en verstoort de orde.',
          'Verdachte zegt dat hij in de groep meeging maar niet wist dat hij iets vernielde. De zaak draait om de mate van betrokkenheid en de strafmaat.'
        ]),
        dagvaarding: doc('Dagvaarding', 'Snelrechtprocedure', [
          'Verdachte is dagvaard voor de snelrechter.'
        ]),
        tenlastelegging: doc('Tenlastelegging', 'Artikel 350 Sr jo. artikel 138 Sr', [
          'Aan verdachte is ten laste gelegd dat hij te Rotterdam een in vat zijnde, tot het openbaar verkeer bestemde weg heeft verstoord door bestrating te vernielen.'
        ]),
        pv: doc('Proces-verbaal van bevindingen', 'Verbalisanten', [
          'De verbalisant beschrijft de handeling en de ordeverstoring. De beelden tonen de handeling van verdachte.'
        ]),
        aangifte: doc('Aangifte', 'Gemeente Rotterdam', [
          'De gemeente doet aangifte en overlegt de schadebeelden.'
        ]),
        verdachte: doc('Verdachteverklaring', 'Verdachte', [
          'Verdachte zegt dat hij in de groep meeging maar niet wist dat hij iets vernielde.',
          'Over de handeling zegt hij: \u201cIk heb iets gepakt en gegooid, ik zag niet wat het was.\u201d'
        ]),
        getuigen: doc('Getuigenverklaring', 'Demonstrant', [
          'De demonstrant zag de handeling en de spanning in de groep.'
        ]),
        bewijs: doc('Bewijsmiddelen en waardering', 'Samenstelling bewijsdossier', [
          'De beelden zijn sterk. De discussie draait om de mate van betrokkenheid en de strafmaat.'
        ]),
        om: doc('Requisitoir', 'Officier van justitie', [
          'Het OM ziet vernieling en verstoring van de openbare orde als een eenvoudig delict met een korte straf.',
          'De eis luidt: geldboete van € 400,- en een schadevergoedingsmaatregel van € 350,-.'
        ]),
        verdediging: doc('Pleidooi van de verdediging', 'Raadsman van verdachte', [
          'De verdediging stelt dat verdachte in de groep meeging maar niet wist dat hij iets vernielde en vraagt strafmatiging.'
        ]),
        reclassering: doc('Reclasseringsrapport', 'Niet opgemaakt', [
          'Er is geen reclasseringsrapport opgemaakt.'
        ]),
        slachtofferimpact: doc('Slachtofferimpactrapport', 'Gemeente Rotterdam', [
          'De gemeente meldt kosten voor herstel van de bestrating.'
        ]),
        strafvordering: doc('Vordering benadeelde partij', 'Schadevergoedingsmaatregel', [
          'De schade van € 350,- kan via een schadevergoedingsmaatregel worden verhaald.'
        ])
      },
      roleResponses: {
        Verdachte: 'Ik ging in de groep mee. Ik heb iets gepakt en gegooid, ik zag niet wat het was.',
        Advocaat: 'Opzet op vernieling moet bewezen worden. Meegaan met een groep is niet hetzelfde als zelf vernielen.',
        'Officier van justitie': 'De beelden tonen de handeling van verdachte. De openbare orde vraagt een duidelijke reactie.',
        Getuige: 'Ik zag de handeling en de spanning in de groep.',
        Slachtoffer: 'De gemeente betaalt het herstel. Zo\u2019n actie kost de stad geld.',
        Verbalisant: 'De beelden zijn helder en tijdgestempeld. De handeling is op meerdere frames te zien.',
        Reclassering: 'Geen rapport opgemaakt; geen risicosignaal gemeld.'
      }
    }
  ];

  const measures = [
    ['Vrijspraak', 'Niet bewezen', 'De verdachte wordt niet veroordeeld omdat het feit niet wettig en overtuigend bewezen is.'],
    ['Ontslag van alle rechtsvervolging', 'Bewezen, maar niet strafbaar', 'Het feit kan bewezen zijn, maar verdachte of het feit is juridisch niet strafbaar, bijvoorbeeld bij geslaagd noodweer.'],
    ['Schuldig zonder straf', 'Wel schuldig, geen straf', 'De rechter verklaart het feit bewezen, maar legt door bijzondere omstandigheden geen straf of maatregel op.'],
    ['Geldboete', 'Financiële straf', 'Een financiële straf. De hoogte hangt af van ernst, draagkracht en wettelijke grenzen.'],
    ['Taakstraf', 'Werkstraf of leerstraf', 'Bij niet uitvoeren kan vervangende hechtenis volgen.'],
    ['Voorwaardelijke gevangenisstraf', 'Stok achter de deur', 'De straf hoeft niet te worden uitgezeten als verdachte zich binnen de proeftijd aan voorwaarden houdt.'],
    ['Onvoorwaardelijke gevangenisstraf', 'Werkelijke vrijheidsstraf', 'Vrijheidsstraf die daadwerkelijk moet worden uitgezeten.'],
    ['Rijontzegging', 'Tijdelijk niet rijden', 'Vooral relevant bij verkeerszaken.'],
    ['Contactverbod', 'Geen contact met slachtoffer', 'Verbod om contact te zoeken met slachtoffer of bepaalde personen.'],
    ['Locatieverbod', 'Niet bij gebied/adres komen', 'Verbod om op bepaalde plaatsen of in een bepaald gebied te komen.'],
    ['Meldplicht', 'Melden bij instantie', 'Verdachte moet zich periodiek melden bij reclassering of een andere instantie.'],
    ['Behandelverplichting', 'Verplichte behandeling', 'Bijvoorbeeld bij agressie, verslaving of psychische problematiek.'],
    ['Schadevergoedingsmaatregel', 'Schade betalen', 'Verdachte moet schade aan het slachtoffer vergoeden.'],
    ['Ontnemingsmaatregel', 'Winst uit het feit afpakken', 'Voordeel uit het strafbare feit wordt ontnomen via een geldsvordering.'],
    ['Verbeurdverklaring', 'Eigendom kwijt', 'Verdachte raakt eigendom kwijt dat verband houdt met het strafbare feit.'],
    ['Onttrekking aan verkeer', 'Voorwerpen uit verkeer halen', 'Gevaarlijke of verboden voorwerpen worden uit het maatschappelijk verkeer gehaald.'],
    ['TBS-maatregel', 'Behandeling en beveiliging', 'Maatregel gericht op behandeling en beveiliging van de samenleving bij ernstige feiten en stoornis.'],
    ['PIJ-maatregel', 'Jeugdmaatregel', 'Jeugdmaatregel voor behandeling in een justitiële jeugdinrichting.']
  ];

  function cloneCase(template, index) {
    const suffix = Math.floor(index / templates.length) + 1;
    const copy = JSON.parse(JSON.stringify(template));
    copy.id = `rbrot-${String(index + 1).padStart(3, '0')}`;
    copy.parket = `10/${String(284000 + index).padStart(6, '0')}-26`;
    copy.parketnummer = copy.parket;
    if (suffix > 1) {
      copy.name = `${template.name} (${suffix})`;
      copy.summary = template.summary.replace('Verdachte', `Verdachte in variant ${suffix}`);
      copy.documents.overzicht.meta = `${template.documents.overzicht.meta} · variant ${suffix}`;
      copy.documents.overzicht.paragrafen.push(`Variant ${suffix} wijzigt enkele persoonlijke omstandigheden en bewijsdetails, maar behoudt dezelfde juridische kernvraag.`);
    }
    copy.zaaknaam = copy.name;
    copy.casus = [
      copy.summary,
      `Kernvraag: ${copy.kernvraag}`,
      `Bewijsniveau: ${copy.bewijsniveau}. ${copy.bewijsanalyse}`,
      `OM: ${copy.om_standpunt} Eis: ${copy.om_eis}`,
      `Verdediging: ${copy.verdediging}`
    ].join('\n');
    copy.score = copy.bewijs_score;
    copy.severity = copy.bewijs_score;
    copy.status = ['Dossier gereed', 'Zitting gepland', 'Bewijsfase', 'Strafmaat open', 'Conceptvonnis'][index % 5];
    copy.omEis = copy.om_eis;
    copy.verwerenBehandeld = new Set();
    return copy;
  }

  const cases = Array.from({ length: 200 }, (_, i) => cloneCase(templates[i % templates.length], i));
  const categories = [...new Set(cases.map(c => c.category))];
  return { cases, measures, categories, templates };
})();
