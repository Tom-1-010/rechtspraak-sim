window.SIM_DATA = (() => {
  const templates = [
    {
      key:'mishandeling_horeca', name:'Mishandeling buiten horecazaak', category:'Geweld', difficulty:'Normaal', court:'Enkelvoudige kamer', city:'Rotterdam Centrum', location:'Stadhuisplein', recidive:true, bewijsniveau:'voldoende', bewijs_score:72,
      summary:'Na sluitingstijd ontstaat buiten een horecazaak een woordenwisseling. Verdachte zou aangever met gebalde vuist in het gezicht hebben geslagen. Aangever heeft een scheurwond bij de wenkbrauw en zwelling aan het jukbeen. Verdachte erkent fysiek contact, maar beroept zich op een dreigende houding van aangever.',
      kernvraag:'Is bewezen dat verdachte opzettelijk heeft geslagen en faalt het beroep op noodweer?',
      bewijsmiddelen:['aangifte met letselbeschrijving','letselschouw huisartsenpost','PV bevindingen camerabeelden','verklaring portier','verklaring verdachte'],
      bewijsanalyse:'Het slaan wordt door meerdere bronnen ondersteund. De aanleiding is minder duidelijk omdat de camera de eerste seconden van de confrontatie mist. Het noodweerverweer moet expliciet worden besproken.',
      om_standpunt:'De officier acht mishandeling bewezen. De klap, het letsel en de verklaring van de portier ondersteunen elkaar. Eis: 80 uur taakstraf waarvan 30 uur voorwaardelijk en toewijzing schadevergoeding.',
      verdediging:'De advocaat voert aan dat aangever als eerste dreigend naar voren stapte en dat verdachte slechts afstand wilde creëren. Subsidiair wordt strafmatiging gevraagd vanwege werk en schuldenproblematiek.',
      mogelijke_sancties:'taakstraf, deels voorwaardelijk, schadevergoedingsmaatregel, eventueel contactverbod',
      documents:{
        overzicht:['Zaaksoverzicht','Horecageweld · Stadhuisplein Rotterdam','Verdachte wordt vervolgd voor mishandeling na een incident rond 02:15 uur buiten een horecazaak. Aangever verklaart dat verdachte hem zonder waarschuwing sloeg. Verdachte stelt dat hij werd opgejaagd en bang was voor een aanval. De zaak draait om opzet, noodweer en de betrouwbaarheid van de portiersverklaring.'],
        tenlastelegging:['Tenlastelegging','Artikel 300 Sr','Aan verdachte is ten laste gelegd dat hij aangever opzettelijk heeft mishandeld door hem met kracht met de vuist in het gezicht te slaan, waardoor pijn en letsel is ontstaan.'],
        pv:['Proces-verbaal','Verbalisant Eenheid Rotterdam','Verbalisanten treffen aangever aan met bloed bij de linkerwenkbrauw. De portier wijst verdachte aan als degene die heeft geslagen. Op camerabeelden is te zien dat verdachte een snelle armbeweging maakt richting het gezicht van aangever. De beelden tonen niet volledig wat direct voorafging aan de klap.'],
        aangifte:['Aangifte','Aangever M. de Graaf','Aangever verklaart dat hij na een woordenwisseling wegliep, waarna verdachte dichterbij kwam en hem met kracht sloeg. Hij voelde direct pijn en bloedde uit zijn wenkbrauw. Hij vordert eigen risico, kapotte bril en immateriële schade.'],
        verdachte:['Verdachteverklaring','Verdachte R.K.','Verdachte erkent dat zijn hand het gezicht van aangever heeft geraakt. Hij zegt dat aangever agressief op hem afkwam, dat hij zich bedreigd voelde en dat hij in een reflex handelde. Hij ontkent dat hij bewust letsel wilde veroorzaken.'],
        getuigen:['Getuigen','Portier en omstander','De portier verklaart dat verdachte uithaalde terwijl aangever met de handen laag stond. Een omstander hoorde vooral geschreeuw en zag pas de beweging op het moment van de klap.'],
        bewijs:['Bewijsmiddelen','Kernstukken','Aangifte, letselverklaring, camerabeelden en portiersverklaring ondersteunen de klap en het letsel. De aanleiding blijft deels onduidelijk. De rechter moet vooral motiveren waarom noodweer wel of niet aannemelijk is.'],
        om:['OM-standpunt','Requisitoir','Volgens het OM is sprake van een bewuste vuistslag. Het beroep op noodweer faalt omdat geen concrete aanval zichtbaar is en de portier verklaart dat aangever geen slaande beweging maakte.'],
        verdediging:['Verdediging','Pleitnotitie','De verdediging wijst op het ontbrekende begin van de camerabeelden. Daardoor kan niet worden uitgesloten dat aangever de confrontatie fysiek begon. Subsidiair wordt verzocht geen onvoorwaardelijke straf op te leggen.']
      },
      roleResponses:{
        Verdachte:'Ik heb hem geraakt, maar ik voelde mij echt bedreigd. Hij kwam heel dicht op mij staan en ik dacht dat hij mij wilde slaan. Ik had achteraf beter weg kunnen lopen, maar op dat moment ging het snel.',
        Advocaat:'Het probleem is dat het begin van de confrontatie niet op beeld staat. Juist dat moment is relevant voor noodweer. Als de rechtbank toch bewezenverklaring aanneemt, moet de straf beperkt blijven.',
        'Officier van justitie':'De klap staat naar mijn oordeel vast. De verklaring van de portier en de letselverklaring ondersteunen de aangifte. Het noodweerverweer is onvoldoende aannemelijk.',
        Getuige:'Ik zag vooral dat de verdachte ineens uithaalde. Wat ze daarvoor precies tegen elkaar zeiden, heb ik niet volledig gehoord.',
        Slachtoffer:'Ik was geschrokken en had meteen bloed in mijn gezicht. Mijn bril was kapot en ik heb er nog weken last van gehad.',
        Verbalisant:'De beelden tonen een slaande beweging, maar niet de volledige aanleiding. Dat is ook zo in het proces-verbaal opgenomen.',
        Reclassering:'Er zijn signalen van impulscontroleproblemen. Een korte gedragsinterventie en voorwaardelijk deel kunnen passend zijn.'
      }
    },
    {
      key:'winkeldiefstal_onvoldoende', name:'Winkeldiefstal met onvoldoende bewijs', category:'Vermogen', difficulty:'Simpel', court:'Politierechter', city:'Schiedam', location:'Broersvest', recidive:false, bewijsniveau:'onvoldoende', bewijs_score:31,
      summary:'Een supermarkt meldt diefstal van verzorgingsproducten. Verdachte wordt buiten aangesproken met een tas waarin producten zitten, maar kassabon en camerabeelden zijn onduidelijk. De beveiligersverklaring bevat tegenstrijdigheden over wie de producten daadwerkelijk in de tas zag gaan.',
      kernvraag:'Kan bewezen worden dat verdachte de goederen met wegnemingsopzet uit de winkel heeft meegenomen?',
      bewijsmiddelen:['aangifte winkel','onduidelijke camerabeelden','verklaring beveiliger','aangetroffen goederen','verklaring verdachte'],
      bewijsanalyse:'Er is een serieuze bewijszwakte. De goederen zijn aangetroffen, maar het moment van wegnemen is niet duidelijk. Verdachte verklaart dat een ander de tas vasthield. Vrijspraak is realistisch.',
      om_standpunt:'De officier acht de combinatie van aangetroffen goederen en beveiligersverklaring voldoende, maar erkent dat de camerabeelden beperkt zijn.',
      verdediging:'De verdediging vraagt vrijspraak. De beveiligersverklaring is wisselend en de beelden tonen geen daadwerkelijke wegneming door verdachte.',
      mogelijke_sancties:'vrijspraak of bij bewezenverklaring geldboete/taakstraf',
      documents:{
        overzicht:['Zaaksoverzicht','Supermarkt · Schiedam Broersvest','Verdachte wordt vervolgd voor winkeldiefstal. De kern is dat producten in een tas zijn aangetroffen, maar onduidelijk is wie de goederen pakte en of verdachte wist dat niet was betaald.'],
        tenlastelegging:['Tenlastelegging','Artikel 310 Sr','Aan verdachte is ten laste gelegd dat hij goederen uit de supermarkt heeft weggenomen met het oogmerk van wederrechtelijke toe-eigening.'],
        pv:['Proces-verbaal','Aanhouding buiten winkel','Verdachte wordt buiten aangesproken. In de tas worden deodorant, shampoo en scheermesjes aangetroffen. De verbalisant noteert dat de camerabeelden pas later door de winkel zijn aangeleverd en van matige kwaliteit zijn.'],
        aangifte:['Aangifte','Filiaalmanager supermarkt','De filiaalmanager verklaart dat goederen niet zijn afgerekend. Zij heeft zelf niet gezien wie de producten in de tas heeft gedaan.'],
        verdachte:['Verdachteverklaring','Verdachte S.B.','Verdachte verklaart dat hij met een kennis in de winkel was. Volgens hem was de tas niet van hem en wist hij niet dat de producten niet waren betaald.'],
        getuigen:['Getuigen','Beveiliger','De beveiliger verklaart eerst dat hij verdachte producten zag pakken. In een latere verklaring zegt hij dat hij vooral zag dat verdachte bij het schap stond en daarna met de tas naar buiten liep.'],
        bewijs:['Bewijsmiddelen','Bewijskracht laag','De aangetroffen goederen wijzen op diefstal, maar koppelen de handeling onvoldoende duidelijk aan verdachte. De camerabeelden zijn te vaag voor herkenning van het pakken van de goederen.'],
        om:['OM-standpunt','Requisitoir','Het OM stelt dat verdachte deel uitmaakte van het geheel en dat zijn verklaring ongeloofwaardig is.'],
        verdediging:['Verdediging','Vrijspraakverweer','De verdediging benadrukt dat medeplegen niet ten laste is gelegd of onvoldoende is uitgewerkt. Alleen aanwezigheid en lopen met een tas zijn niet genoeg.']
      },
      roleResponses:{
        Verdachte:'Die tas was niet van mij. Ik liep wel mee naar buiten, maar ik wist niet dat er spullen in zaten die niet waren betaald.',
        Advocaat:'Dit dossier mist het cruciale moment van wegnemen. De verklaring van de beveiliger is bovendien niet consistent. Vrijspraak ligt juridisch voor de hand.',
        'Officier van justitie':'De omstandigheden zijn verdacht, maar ik erken dat de camerabeelden geen ideaal bewijs opleveren. Het gaat om de waardering van het geheel.',
        Getuige:'Ik weet niet meer zeker of ik hem de spullen echt zag pakken. Ik zag hem wel bij het schap en later met de tas lopen.',
        Slachtoffer:'Namens de winkel gaat het om de waarde van de goederen. Wij willen vooral dat winkeldiefstal wordt aangepakt.',
        Verbalisant:'Ik heb de goederen aangetroffen en de aangifte opgenomen. Ik heb zelf niet gezien dat verdachte de producten pakte.'
      }
    },
    {
      key:'rijden_onder_invloed', name:'Rijden onder invloed na eenzijdige aanrijding', category:'Verkeer', difficulty:'Normaal', court:'Politierechter', city:'Vlaardingen', location:'Westlandseweg', recidive:true, bewijsniveau:'sterk', bewijs_score:88,
      summary:'Verdachte raakt rond middernacht met zijn auto een geparkeerd voertuig. Agenten ruiken alcohol, zien bloeddoorlopen ogen en laten ademanalyse uitvoeren. Verdachte betwist vooral de hoogte van de rijontzegging omdat hij zijn rijbewijs voor werk nodig heeft.',
      kernvraag:'Is rijden onder invloed bewezen en welke bijkomende rijontzegging is passend?',
      bewijsmiddelen:['ademanalyse','PV rijgedrag','verklaring verbalisanten','schadeformulier','bekennende verklaring'],
      bewijsanalyse:'Het bewijs is sterk. De discussie zit vooral in strafmaat, recidive, schade en rijontzegging.',
      om_standpunt:'De officier eist geldboete, voorwaardelijke gevangenisstraf bij recidive-indicatie en rijontzegging.',
      verdediging:'De verdediging vraagt matiging van de rijontzegging vanwege werk, schadeafwikkeling en erkenning.',
      mogelijke_sancties:'geldboete, taakstraf, rijontzegging, voorwaardelijke straf',
      documents:{
        overzicht:['Zaaksoverzicht','Verkeerszaak · Vlaardingen Westlandseweg','Verdachte heeft na alcoholgebruik gereden en is tegen een geparkeerde auto gebotst. De ademanalyse ligt boven de strafrechtelijke grens. Verdachte heeft een eerdere verkeersstrafbeschikking.'],
        tenlastelegging:['Tenlastelegging','WVW 1994','Aan verdachte is ten laste gelegd dat hij als bestuurder van een personenauto heeft gereden onder invloed van alcohol.'],
        pv:['Proces-verbaal','Verkeersongeval en ademanalyse','Verbalisanten zien verse schade aan twee voertuigen. Verdachte ruikt naar alcohol, spreekt met dubbele tong en verklaart twee glazen bier te hebben gedronken. De ademanalyse geeft een strafbare waarde.'],
        aangifte:['Schadeverklaring','Eigenaar geparkeerde auto','De eigenaar stelt schade aan bumper en achterlicht. De verzekeraar heeft nog geen volledig bedrag vastgesteld.'],
        verdachte:['Verdachteverklaring','Verdachte T.M.','Verdachte erkent dat hij had gedronken en gereden. Hij zegt dat hij dacht nog te kunnen rijden en dat hij zijn rijbewijs nodig heeft als monteur.'],
        getuigen:['Getuigen','Buurtbewoner','Een buurtbewoner hoorde een klap en zag verdachte uitstappen uit de bestuurderszijde.'],
        bewijs:['Bewijsmiddelen','Sterk bewijs','Ademanalyse, waarnemingen, schadebeeld en bekentenis ondersteunen elkaar.'],
        om:['OM-standpunt','Strafeis','Het OM benadrukt recidive en verkeersgevaar. Een rijontzegging is nodig.'],
        verdediging:['Verdediging','Strafmaatverweer','De verdediging betwist het bewijs niet, maar vraagt beperking van de rijontzegging en wijst op schadeafwikkeling en werkbelang.']
      },
      roleResponses:{
        Verdachte:'Ik weet dat ik fout zat. Ik dacht dat het nog wel ging, maar dat was duidelijk verkeerd. Ik ben bang mijn baan kwijt te raken als ik lang niet mag rijden.',
        Advocaat:'Het bewijs wordt niet inhoudelijk betwist. Het gaat vooral om proportionaliteit van de rijontzegging en de persoonlijke gevolgen.',
        'Officier van justitie':'Rijden onder invloed met schade en recidive vraagt een duidelijke verkeersstraf. Het werkbelang is relevant, maar niet doorslaggevend.',
        Getuige:'Ik hoorde een klap en zag hem uit de bestuurderskant komen. Hij leek onvast te lopen.',
        Slachtoffer:'Mijn auto was beschadigd terwijl die gewoon geparkeerd stond. Ik wil dat de schade netjes wordt geregeld.',
        Verbalisant:'De ademanalyse is volgens procedure afgenomen en de waarde is in het dossier opgenomen.'
      }
    },
    {
      key:'bedreiging_telefoon', name:'Bedreiging via spraakberichten', category:'Geweld', difficulty:'Normaal', court:'Enkelvoudige kamer', city:'Spijkenisse', location:'Noordpassage', recidive:false, bewijsniveau:'twijfelachtig', bewijs_score:52,
      summary:'Na een conflict over een schuld ontvangt aangever meerdere spraakberichten. Eén bericht bevat dreigende taal, maar verdachte stelt dat het straattaal en frustratie was. De vraag is of bij aangever redelijke vrees kon ontstaan.',
      kernvraag:'Vormden de berichten een strafbare bedreiging en is verdachte de afzender?',
      bewijsmiddelen:['spraakbericht','screenshot chat','aangifte','telefoonnummerkoppeling','verklaring verdachte'],
      bewijsanalyse:'Afzenderschap lijkt aannemelijk, maar de context van de woorden is betwist. De rechter moet uitleggen waarom de uitlating objectief bedreigend is of niet.',
      om_standpunt:'Het OM acht de bewoordingen in combinatie met het conflict bedreigend.',
      verdediging:'De verdediging stelt dat de woorden grof maar niet concreet genoeg waren en dat aangever de context aandikt.',
      mogelijke_sancties:'taakstraf, voorwaardelijke straf, contactverbod of vrijspraak',
      documents:{
        overzicht:['Zaaksoverzicht','Bedreiging · Spijkenisse','Aangever ontvangt na een geldconflict spraakberichten met woorden als “ik pak je nog”. Verdachte erkent boosheid, maar ontkent dat hij werkelijk dreigde met geweld.'],
        tenlastelegging:['Tenlastelegging','Artikel 285 Sr','Verdachte wordt verweten aangever te hebben bedreigd met enig misdrijf tegen het leven gericht dan wel zware mishandeling.'],
        pv:['Proces-verbaal','Uitluisteren telefoon','Verbalisant luistert de spraakberichten uit. De stem lijkt volgens aangever op die van verdachte. Het telefoonnummer staat in eerdere WhatsApp-gesprekken opgeslagen onder de naam van verdachte.'],
        aangifte:['Aangifte','Aangever','Aangever verklaart dat hij bang was omdat verdachte eerder boos aan de deur had gestaan. Hij heeft de berichten opgeslagen en aan de politie verstrekt.'],
        verdachte:['Verdachteverklaring','Verdachte','Verdachte erkent dat hij boos was en berichten heeft gestuurd. Volgens hem bedoelde hij niet dat hij aangever fysiek iets zou aandoen.'],
        getuigen:['Getuigen','Partner aangever','De partner hoorde de berichten en verklaart dat aangever zichtbaar gespannen was. Zij weet niet wat er vooraf tussen beiden is gebeurd.'],
        bewijs:['Bewijsmiddelen','Contextgevoelig bewijs','De woorden zijn belastend, maar de strafbaarheid hangt sterk af van context, concreetheid en redelijke vrees.'],
        om:['OM-standpunt','Requisitoir','Het OM vindt de berichten concreet genoeg door het lopende conflict en eerdere confrontatie aan de deur.'],
        verdediging:['Verdediging','Pleitnota','De verdediging vraagt vrijspraak omdat sprake is van boze taal zonder concreet plan of daadwerkelijke dreiging.']
      },
      roleResponses:{
        Verdachte:'Ik was boos, maar ik bedoelde niet letterlijk dat ik hem iets zou aandoen. Het was domme taal in een ruzie.',
        Advocaat:'Niet elke grove uiting is juridisch een bedreiging. De rechtbank moet vooral kijken naar concreetheid en objectieve vrees.',
        'Officier van justitie':'De berichten moeten worden gelezen tegen de achtergrond van het conflict. Voor aangever kon reële vrees ontstaan.',
        Getuige:'Ik hoorde de berichten en zag dat hij ervan schrok. Wat precies tussen hen speelde, weet ik niet.',
        Slachtoffer:'Ik nam het serieus omdat hij eerder voor mijn deur had gestaan. Ik voelde me niet meer veilig.',
        Verbalisant:'Ik heb de berichten uitgeluisterd en beschreven. De exacte audiobestanden zitten als bijlage in het dossier.'
      }
    },
    {
      key:'diefstal_braak', name:'Diefstal met braak uit bedrijfspand', category:'Vermogen', difficulty:'Complex', court:'Meervoudige kamer', city:'Barendrecht', location:'Bedrijventerrein Dierenstein', recidive:true, bewijsniveau:'voldoende', bewijs_score:69,
      summary:'Bij een bedrijfspand worden laptops en gereedschap gestolen. Er is DNA op een geforceerd raam en een auto van een bekende van verdachte rijdt kort na de inbraak weg. Verdachte geeft een alternatieve verklaring voor het DNA.',
      kernvraag:'Bewijst DNA op het braakpunt samen met telecom- en voertuiggegevens de betrokkenheid bij de inbraak?',
      bewijsmiddelen:['DNA-spoor op raam','ANPR-hit voertuig','telefoongegevens zendmast','aangifte bedrijf','verklaring medeverdachte'],
      bewijsanalyse:'Het DNA is sterk, maar de alternatieve verklaring en rolverdeling vragen aandacht. Medeplegen moet concreet worden gemotiveerd.',
      om_standpunt:'Het OM acht betrokkenheid bewezen door DNA op het braakpunt, tijdlijn en voertuiggegevens.',
      verdediging:'De verdediging voert contaminatie/oud contact aan en stelt dat verdachte niet in het pand is geweest.',
      mogelijke_sancties:'gevangenisstraf, deels voorwaardelijk, schadevergoeding',
      documents:{
        overzicht:['Zaaksoverzicht','Bedrijfsinbraak · Barendrecht','In de nacht wordt ingebroken bij een technisch bedrijf. Het raam is geforceerd. Verdachte wordt gekoppeld via DNA en telecomgegevens, maar ontkent betrokkenheid.'],
        tenlastelegging:['Tenlastelegging','Diefstal door middel van braak','Verdachte wordt verweten samen met een ander goederen uit een bedrijfspand te hebben weggenomen na braak.'],
        pv:['Proces-verbaal','Forensisch en tactisch onderzoek','Forensische opsporing neemt een DNA-spoor af op de rand van het geforceerde raam. ANPR toont een auto van een bekende van verdachte in de buurt. De telefoon van verdachte straalt rond het tijdstip een nabije mast aan.'],
        aangifte:['Aangifte','Bedrijfseigenaar','De eigenaar mist laptops, accugereedschap en contant geld uit een kluislade. Totale schade wordt voorlopig geschat op ruim 9.000 euro.'],
        verdachte:['Verdachteverklaring','Verdachte','Verdachte zegt dat hij eerder bij het pand is geweest voor kluswerk en dat zijn DNA daardoor verklaarbaar is. Hij wil niet zeggen waar hij die nacht was.'],
        getuigen:['Getuigen','Nachtportier naastgelegen terrein','De portier zag een donkere hatchback zonder verlichting langzaam wegrijden, maar kon geen personen herkennen.'],
        bewijs:['Bewijsmiddelen','DNA en tijdlijn','DNA op het braakpunt is belastend. De telecom- en ANPR-gegevens versterken de tijdlijn maar bewijzen niet zelfstandig de braakhandeling.'],
        om:['OM-standpunt','Requisitoir','Volgens het OM kan de alternatieve verklaring niet kloppen omdat het spoor op het verse breukvlak zat.'],
        verdediging:['Verdediging','Bewijsverweer','De verdediging betwist de datering van het DNA en wijst erop dat geen buit bij verdachte is aangetroffen.']
      },
      roleResponses:{
        Verdachte:'Ik ben daar eerder geweest voor een klus. Dat verklaart misschien mijn DNA. Ik heb die nacht niet ingebroken.',
        Advocaat:'DNA zegt niet automatisch wanneer en hoe het daar is gekomen. Zonder buit, herkenning of directe waarneming blijft redelijke twijfel bestaan.',
        'Officier van justitie':'Het spoor zat op het geforceerde raam en past niet bij onschuldig eerder contact. De telecom- en ANPR-gegevens ondersteunen de betrokkenheid.',
        Getuige:'Ik zag een donkere auto wegrijden, maar ik kon niet zien wie erin zat.',
        Slachtoffer:'De schade is groot. We konden een paar dagen nauwelijks werken omdat laptops en gereedschap weg waren.',
        Verbalisant:'Het DNA is veiliggesteld op de rand van het geforceerde raam. De exacte locatie is fotografisch vastgelegd.'
      }
    }
  ];

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

  function cloneCase(template, index) {
    const suffix = Math.floor(index / templates.length) + 1;
    const copy = JSON.parse(JSON.stringify(template));
    copy.id = `rbrot-${String(index + 1).padStart(3, '0')}`;
    copy.parket = `10/${String(284000 + index).padStart(6, '0')}-26`;
    copy.parketnummer = copy.parket;
    if (suffix > 1) {
      copy.name = `${template.name} (${suffix})`;
      copy.summary = template.summary.replace('Verdachte', `Verdachte in variant ${suffix}`);
      copy.documents.overzicht[1] = `${template.name} · variant ${suffix} · ${template.city}`;
      copy.documents.overzicht[2] += ` Variant ${suffix} wijzigt enkele persoonlijke omstandigheden en bewijsdetails, maar behoudt dezelfde juridische kernvraag.`;
    }
    copy.zaaknaam = copy.name;
    copy.casus = `${copy.summary}\n\nKernvraag: ${copy.kernvraag}\nBewijsniveau: ${copy.bewijsniveau}. ${copy.bewijsanalyse}\nOM: ${copy.om_standpunt}\nVerdediging: ${copy.verdediging}`;
    copy.score = copy.bewijs_score;
    copy.severity = copy.bewijs_score;
    copy.status = ['Dossier gereed','Zitting gepland','Bewijsfase','Strafmaat open','Conceptvonnis'][index % 5];
    copy.omEis = copy.mogelijke_sancties;
    return copy;
  }

  const cases = Array.from({ length: 200 }, (_, i) => cloneCase(templates[i % templates.length], i));
  const categories = [...new Set(cases.map(c => c.category))];
  return { cases, measures, categories };
})();
