(() => {
    const translations = new Map(Object.entries({
        'Ylläs Kajo | Vierasopas': 'Ylläs Kajo | Guest guide',
        'Talon ohjeet | Ylläs Kajo': 'House guide | Ylläs Kajo',
        'Talon säännöt | Ylläs Kajo': 'House rules | Ylläs Kajo',
        'Paikat | Ylläs Kajo': 'Places | Ylläs Kajo',
        'Galleria | Ylläs Kajo': 'Gallery | Ylläs Kajo',
        'Info | Ylläs Kajo': 'Information | Ylläs Kajo',
        'Talon ohjeet': 'House guide',
        'Talon ohjeaiheet': 'House guide topics',
        'Talon säännöt': 'House rules',
        'Yleistä': 'General',
        'Kohtele taloa kuin omaasi': 'Please treat the house as your own.',
        'Hiljaisuus klo 22–07': 'Quiet hours are from 10 pm to 7 am.',
        'Vain varaukseen merkityt vieraat voivat yöpyä': 'Only guests included in the booking may stay overnight.',
        'Mökissä voi yöpyä enintään 6 henkeä': 'The cabin can accommodate a maximum of 6 people.',
        'Juhlien ja tapahtumien järjestäminen on kielletty': 'Parties and events are not permitted.',
        'Pesethän astiat, tyhjennät astianpesukoneen ja laitat astiat kaappeihin': 'Please wash the dishes, empty the dishwasher and put the dishes away.',
        'Tupakointi': 'Smoking',
        'Tupakointi on kielletty': 'Smoking is prohibited.',
        'Lemmikit': 'Pets',
        'Lemmikit ovat sallittuja': 'Pets are allowed.',
        'Koti': 'Home',
        'Ohjeet': 'Guide',
        'Säännöt': 'Rules',
        'Paikat': 'Places',
        'Galleria': 'Gallery',
        'Päänavigaatio': 'Main navigation',
        'Valitse kieli': 'Choose a language',
        'Suomen lippu': 'Flag of Finland',
        'Flag of the United Kingdom': 'Flag of the United Kingdom',
        'Flagge Deutschlands': 'Flag of Germany',
        'Ylläs Kajo': 'Ylläs Kajo',
        'Tämä mökki päätyi meille rakkaudesta pohjoisen rauhaan, tuntureihin ja hiljaisuuteen. Toivomme, että viihdytte täällä yhtä hyvin kuin me. Ottakaa rennosti, hengittäkää syvään ja antakaa Lapin lumon viedä mukanaan.': 'We chose this cabin for our love of the peaceful North, the fells and the quiet. We hope you enjoy your stay here as much as we do. Take it easy, breathe deeply and let the magic of Lapland carry you away.',
        '– Riikka & Valtteri': '– Riikka & Valtteri',
        'Tervetulotoivotus': 'Welcome message',
        'Saapuminen': 'Arrival',
        'Lähtö': 'Departure',
        'Avaa kartalla': 'View on map',
        'Avaa Ylläs Kajo kartalla Google Mapsissa': 'View Ylläs Kajo on Google Maps',
        'Saapumisohjeet': 'Arrival instructions',
        'Sisäänkirjautuminen klo 17 alkaen...': 'Check-in from 5 pm...',
        'Pysäköinti': 'Parking',
        'Pihassa on maksuton pysäköinti...': 'Free parking is available in the yard...',
        'Tunturien rauhaa • Lapin elämyksiä • Ylläsjärvi': 'Fellside tranquillity • Lapland adventures • Ylläsjärvi',
        'Sulje': 'Close',
        'Avaimet:': 'Keys:',
        'Pidä aina yksi avain ulko-oven viereisessä avainlaatikossa. Sisällä mökissä on mökin ulko-oveen toinen avain sekä varaston avain.': 'Always leave one key in the key box beside the exterior door. Inside the cabin, you will find another key for the cabin door and a key for the storage shed.',
        'Sisäänkirjautuminen:': 'Check-in:',
        'klo 17.00 alkaen': 'from 5 pm',
        'Pihassa on maksuton pysäköinti kahdelle autolle sekä sähköauton latauspaikka. Latauksesta on pieni erillinen maksu, 10€/12h.': 'Free parking for two cars and an electric vehicle charging point are available in the yard. Charging costs €10 per 12 hours.',
        'Majoittajasi': 'Your hosts',
        'Valtteri ja Riikka': 'Valtteri and Riikka',
        'Hätätilanne': 'Emergency',
        'Hätänumero': 'Emergency number',
        'Poliisi · Ambulanssi · Palokunta': 'Police · Ambulance · Fire service',
        'Soita hätänumeroon 112': 'Call the emergency number 112',
        'Lähin päivystys': 'Nearest emergency clinic',
        'Kittilän terveyskeskus ja päivystys': 'Kittilä health centre and emergency clinic',
        'Soita': 'Call',
        'Reittiohjeet': 'Directions',
        'Lähin apteekki': 'Nearest pharmacy',
        'Ylläksen apteekki': 'Ylläs Pharmacy',
        'Yhteystiedot': 'Contact details',
        'Päivystysapu 116 117': 'Medical Helpline 116 117',
        'Terveysneuvontaa, kun et tiedä tarvitsetko hoitoa': 'Medical advice if you are unsure whether you need treatment',
        'Tutustu Ylläs Kajoon': 'Explore Ylläs Kajo',
        'Kuvagallerian tilat': 'Gallery categories',
        'Piha': 'Yard',
        'Sisätilat': 'Interior',
        'Ympäristö': 'Surroundings',
        'Kuvan suurennos': 'Enlarged image',
        'Sulje suurennettu kuva': 'Close enlarged image',
        'Edellinen kuva': 'Previous image',
        'Seuraava kuva': 'Next image',
        'Ylläs Kajon lomarakennus ulkoa': 'Ylläs Kajo holiday cabin exterior',
        'Suurenna kuva: Ylläs Kajon lomarakennus ulkoa': 'Enlarge image: Ylläs Kajo holiday cabin exterior',
        'Ylläs Kajon pihapiiri ja varasto': 'Ylläs Kajo yard and storage shed',
        'Suurenna kuva: Ylläs Kajon pihapiiri ja varasto': 'Enlarge image: Ylläs Kajo yard and storage shed',
        'Ylläs Kajon keittiö, ruokailutila ja olohuone': 'Ylläs Kajo kitchen, dining area and living room',
        'Suurenna kuva: Ylläs Kajon keittiö, ruokailutila ja olohuone': 'Enlarge image: Ylläs Kajo kitchen, dining area and living room',
        'Ylläs Kajon olohuone ja portaat parvelle': 'Ylläs Kajo living room and stairs to the loft',
        'Suurenna kuva: Ylläs Kajon olohuone ja portaat parvelle': 'Enlarge image: Ylläs Kajo living room and stairs to the loft',
        'Ylläs Kajon ruokapöytä': 'Ylläs Kajo dining table',
        'Suurenna kuva: Ylläs Kajon ruokapöytä': 'Enlarge image: Ylläs Kajo dining table',
        'Ylläs Kajon makuuhuone': 'Ylläs Kajo bedroom',
        'Suurenna kuva: Ylläs Kajon makuuhuone': 'Enlarge image: Ylläs Kajo bedroom',
        'Metsäinen maisema Ylläs Kajon ympäristössä': 'Forest landscape around Ylläs Kajo',
        'Suurenna kuva: metsäinen maisema Ylläs Kajon ympäristössä': 'Enlarge image: forest landscape around Ylläs Kajo',
        'Talon ohjeet': 'House guide',
        'Saapumisohjeet': 'Arrival instructions',
        'Yhteydet ja viihde': 'Connectivity and entertainment',
        'Pysäköinti': 'Parking',
        'Sauna': 'Sauna',
        'Takka': 'Fireplace',
        'Sähköauton lataus': 'Electric vehicle charging',
        'Keittiö': 'Kitchen',
        'Kodinkoneet': 'Appliances',
        'Etätyö': 'Remote work',
        'Jätehuolto': 'Waste and recycling',
        'Piha ja varasto': 'Yard and storage',
        'Turvallisuus': 'Safety',
        'Talon ohjeaiheet': 'House guide topics',
        'Avaimet:': 'Keys:',
        'Sisäänkirjautuminen:': 'Check-in:',
        'Parvella on kaksi täysin varusteltua työtilaa. Molemmille löytyy näyttö sekä näppäimistö ja hiiri.': 'There are two fully equipped workspaces in the loft. Each has a monitor, keyboard and mouse.',
        'WiFi-tiedot löydät oppaan etusivulta.': 'You can find the Wi-Fi details on the guide home page.',
        'Lemmikit ovat sallittuja erillisestä 30 euron maksusta.': 'Pets are allowed for an additional fee of €30.',
        'Makuuhuoneen yläkaapista löytyy kaksi suojaa sohvalle, joita toivotaan käytettävän lemmikkien kanssa.': 'There are two sofa covers in the bedroom’s upper cupboard. Please use them when staying with pets.',
        'Kerääthän lemmikin jätökset.': 'Please clean up after your pet.',
        'Sekajäte viedään kiinteistön roskakatokseen sekajäteastiaan.': 'Please take mixed waste to the mixed-waste bin in the property’s refuse shelter.',
        'Pahvi, muovi, paperi, metalli ja lasi viedään paikalliseen kierrätyspisteeseen. Lähin on Eelin kaupalla, noin 3 km:n päässä.': 'Please take cardboard, plastic, paper, metal and glass to a local recycling point. The nearest one is at Eelin Kauppa, about 3 km away.',
        'Pihassa on iso lukollinen varasto, jossa voi säilyttää esimerkiksi polkupyöriä ja moottorikelkkoja. Varastossa on myös suksien voiteluteline.': 'There is a large lockable storage shed in the yard for items such as bicycles and snowmobiles. It also has a ski waxing bench.',
        'Puuvaja on myös pihassa.': 'The woodshed is also in the yard.',
        'Hätätilanteissa:': 'In an emergency:',
        'Soita 112': 'Call 112',
        'Lääkäriasema:': 'Medical centre:',
        'Apteekki:': 'Pharmacy:',
        'Kolarin apteekin yhteystiedot': 'Kolari Pharmacy contact details',
        'Lähtötehtävät tehty': 'Departure tasks completed',
        'Uloskirjautuminen viimeistään klo 11.00.': 'Check-out is by 11 am.',
        'Palautathan avaimet.': 'Please return the keys.',
        'Kiitos vierailusta – tervetuloa uudelleen!': 'Thank you for visiting — we hope to see you again!',
        'Vie roskat pihalla katoksessa sijaitsevaan roskikseen': 'Take the rubbish to the bin in the shelter in the yard',
        'Kytke laitteet pois päältä': 'Switch off the appliances',
        'Pese astiat, tyhjennä astianpesukone ja laita astiat kaappeihin': 'Wash the dishes, empty the dishwasher and put the dishes away',
        'Varmista, että takka on sammunut': 'Make sure the fire is out',
        'Sammuta sauna': 'Switch off the sauna',
        'Lukitse ovet': 'Lock the doors',
        'Laita avain avainboksiin ja sekoita koodi': 'Put the key in the key box and scramble the code',
        'Saunaohjeet': 'Sauna instructions',
        'Ennen kuin aloitat': 'Before you begin',
        'Varmista, että sauna on tyhjä. Ei tavaroita kiukaan päällä tai lauteilla.': 'Make sure the sauna is empty. Do not leave anything on the heater or benches.',
        'Kytke kiuas päälle. Käännä oikean puoleisesta kytkimestä kiuas päälle.': 'Switch on the sauna heater using the switch on the right.',
        'Saunan lämpiäminen kestää noin 30–60 minuuttia.': 'The sauna takes about 30–60 minutes to heat up.',
        'Peseydy ennen saunaan menoa ja käytä saunassa pyyhettä tai kertakäyttöisiä istuinalustoja.': 'Please shower before using the sauna and use a towel or disposable seat cover on the benches.',
        'Löyly – saunan taika': 'Steam — the magic of the sauna',
        'Käytä löylykauhaa ja kaada pieni määrä vettä kiville. Älä koskaan kaada vettä suoraan kiukaaseen – vain kiville.': 'Use the sauna ladle to pour a small amount of water onto the stones. Never pour water directly onto the heater — only onto the stones.',
        'Löyly tekee ilmasta kosteampaa ja tuntuu iholla lämpimältä ja pehmeältä.': 'The steam makes the air more humid and feels warm and gentle on the skin.',
        'Saunominen': 'Using the sauna',
        'Voit mennä välillä vilvoittelemaan – ulos, suihkuun tai vaikka lumihankeen (jos uskallat!).': 'Take a cooling break outdoors, in the shower or even in the snow (if you dare!).',
        'Käy suihkussa ja juo vettä – saunominen poistaa nestettä kehosta.': 'Shower and drink water — sauna bathing causes your body to lose fluids.',
        'Sammuta kiuas, jos se ei sammu automaattisesti.': 'Switch off the heater if it does not turn off automatically.',
        'Tuuleta sauna: avaa ovi tai ikkuna muutamaksi minuutiksi.': 'Ventilate the sauna by opening a door or window for a few minutes.',
        'Turvallisuusvinkit': 'Safety tips',
        'Älä koske kiukaaseen – se on erittäin kuuma.': 'Do not touch the heater — it is extremely hot.',
        'Älä kaada liikaa vettä kiville – höyry voi polttaa.': 'Do not pour too much water onto the stones — the steam can burn you.',
        'Lapset saunovat vain aikuisen kanssa.': 'Children may use the sauna only with an adult.',
        'Jos tunnet huimausta tai pahoinvointia, poistu saunasta heti.': 'If you feel dizzy or nauseous, leave the sauna immediately.',
        'Takkaohjeet': 'Fireplace instructions',
        'Ennen sytytystä': 'Before lighting',
        'Tarkista, että hormi on auki ja tuhkat poistettu edellisen käytön jälkeen.': 'Check that the flue is open and that ash from the previous use has been removed.',
        'Käytä vain kuivaa polttopuuta – ei roskia, muovia tai käsiteltyä puuta. Polttopuita löytyy ulkovajasta.': 'Use only dry firewood — no rubbish, plastic or treated wood. Firewood is in the outdoor woodshed.',
        'Sytyttäminen ja polttaminen': 'Lighting and tending the fire',
        'Sytytä tuli sytytyspaloilla tai pienillä puuklapeilla – ei sytytysnesteellä.': 'Light the fire with firelighters or small pieces of wood — never use lighter fluid.',
        'Älä täytä takkaa liikaa – liiallinen puumäärä voi ylikuumentaa rakenteet.': 'Do not overload the fireplace — too much wood can overheat the structure.',
        'Pidä takan luukku kiinni polton aikana.': 'Keep the fireplace door closed while the fire is burning.',
        'Älä jätä tulta valvomatta – jos poistut mökistä tai menet nukkumaan, sammuta tuli.': 'Never leave the fire unattended. Put it out before leaving the cabin or going to bed.',
        'Sammutus ja jälkitoimet': 'Extinguishing and aftercare',
        'Anna tulen palaa loppuun rauhassa – älä kaada vettä takkaan.': 'Let the fire burn out naturally — do not pour water into the fireplace.',
        'Kun tuhkat ovat täysin jäähtyneet, ne voi siirtää puuvajassa olevaan sinkkiämpäriin.': 'Once the ashes have cooled completely, place them in the metal bucket in the woodshed.',
        'Älä koskaan laita kuumia tuhkia muoviroskikseen! Jäähtyneet tuhkat voi laittaa sinkkiämpäristä muovipussiin ja laittaa jäteastiaan.': 'Never put hot ashes in the plastic rubbish bin. Once cool, empty the ashes from the metal bucket into a plastic bag and place it in the waste bin.',
        'Varmista, että hormi on suljettu vasta kun tuli ja hiillos ovat täysin sammuneet.': 'Close the flue only once the fire and embers are completely out.',
        'Takan toimintatapa': 'Fireplace types',
        'Kiertoilmatakka: kahva pystyssä.': 'Convection fireplace: handle upright.',
        'Varaava takka: kahva vaakatasossa.': 'Heat-storing fireplace: handle horizontal.',
        'Astianpesukone': 'Dishwasher',
        'Astianpesukoneen hana on tiskialtaan hanan yhteydessä (kiinni pystyssä, auki vaakatasossa). Muista avata ja sulkea hana.': 'The dishwasher water valve is beside the kitchen tap (upright is off, horizontal is on). Remember to open and close the valve.',
        'Pyykinpesukone': 'Washing machine',
        'Pyykinpesukone on vapaasti käytössä. Käyttöohjeet löytyvät television alla olevan tason kaapista.': 'The washing machine is available for your use. Instructions are in the cupboard under the TV stand.',
        'Liesi': 'Cooktop',
        'Liesi on induktioliesi ja toimii liesitasossa näkyvillä kosketuspainikkeilla.': 'The induction cooktop is operated using the touch controls on its surface.',
        'Tarkemmat käyttöohjeet löytyvät myös television alla olevan tason kaapista.': 'More detailed instructions are also in the cupboard under the TV stand.',
        'Keittiöohjeet': 'Kitchen instructions',
        'Keittiön varustus': 'Kitchen equipment',
        'Keittiöstä löytyvät astiat, aterimet ja ruoanlaittovälineet.': 'The kitchen is equipped with dishes, cutlery and cooking utensils.',
        'Keittiössä on induktioliesi, uuni, mikroaaltouuni, jääkaappi, pakastin, astianpesukone, vedenkeitin ja kahvinkeitin.': 'The kitchen has an induction cooktop, oven, microwave, fridge, freezer, dishwasher, kettle and coffee maker.',
        'Kuumat astiat': 'Hot cookware',
        'Älä laita kuumaa kattilaa tai pannua suoraan työtasolle – käytä pannunalustaa.': 'Do not place hot pots or pans directly on the worktop — use a trivet.',
        'Viemäri': 'Drain',
        'Ethän kaada rasvaa viemäriin.': 'Please do not pour fat or grease down the drain.',
        'Wi-Fi löytyy mökkikirjasta.': 'The Wi-Fi details are in the cabin information book.',
        'TV ja viihde': 'TV and entertainment',
        'TV toimii kaukosäätimellä. TV on kytketty kotiteatteriin, jolle on oma kaukosäädin.': 'The TV is operated with its remote control. It is connected to a home theatre system with a separate remote.',
        'Google TV Streameristä (valkoinen kaukosäädin) löytyy kattava lista suoratoistopalveluita. Kirjaudu omilla tunnuksilla.': 'The Google TV Streamer (white remote) provides access to a wide range of streaming services. Sign in with your own accounts.',
        'Kaukosäätimet löytyvät tasolta TV:n edestä.': 'The remote controls are on the shelf in front of the TV.',
        'Kirjat ja pelit': 'Books and games',
        'Kirjat ja pelit löytyvät TV:n alakaapista, ja ne ovat vapaasti käytettävissä.': 'Books and games are in the cupboard below the TV and are free to use.',
        'Latausohjeet': 'Charging instructions',
        'Vajan seinässä on latauspiste sähköautoille.': 'There is an electric vehicle charging point on the wall of the shed.',
        'Lataus käynnistetään huoneistosta löytyvällä tagilla.': 'Start charging with the tag provided in the apartment.',
        'Käytä lataukseen omaa Type2-latauskaapelia.': 'Please use your own Type 2 charging cable.',
        'Kytke ensin kaapeli ja näytä sen jälkeen tagia latauspisteen lukijalle.': 'Connect the cable first, then present the tag to the reader on the charging point.',
        'Latauspiste aktivoidaan erillisestä pyynnöstä ja maksusta (10 €/12 h).': 'The charging point must be activated separately on request and costs €10 per 12 hours.',
        'Latausteho': 'Charging power',
        'Latauspiste on kuormantasaajan takana. Latauksen maksimiteho riippuu huoneistossa käytettävästä sähkötehosta.': 'The charging point is connected to a load balancer. Its maximum charging power depends on the electricity being used in the apartment.',
        'Paikat Ylläksellä': 'Places in Ylläs',
        'Valitse kylä': 'Choose a village',
        'Ylläsjärvi': 'Ylläsjärvi',
        'Äkäslompolo': 'Äkäslompolo',
        'Ylläsjärven palvelut': 'Ylläsjärvi services',
        'Äkäslompolon palvelut': 'Äkäslompolo services',
        'Nähtävyydet ja palvelut': 'Attractions and services',
        'Hiihtokeskus': 'Ski resort',
        'Rinteet, hissit ja palvelut': 'Slopes, lifts and services',
        'Ruokakaupat': 'Grocery shops',
        'Ruokakauppa': 'Grocery shop',
        'Ruokakauppa Ylläsjärven keskustassa': 'Grocery shop in central Ylläsjärvi',
        'Pieni ruokakauppa hiihtokeskuksessa': 'Small grocery shop at the ski resort',
        'Ravintolat ja kahvilat': 'Restaurants and cafés',
        'Ravintola ja pubi': 'Restaurant and pub',
        'Ylläsjärvellä rinteiden lähellä': 'Near the slopes in Ylläsjärvi',
        'Bistro': 'Bistro',
        'Ravintola Ylläsjärven rannalla': 'Restaurant by Lake Ylläsjärvi',
        'Ravintola': 'Restaurant',
        'Iso-Ylläksentie 1': 'Iso-Ylläksentie 1',
        'Rinneravintola': 'Slope-side restaurant',
        'Ylläs Ski South, tuolihissin vieressä': 'Ylläs Ski South, next to the chairlift',
        'Hotelliravintolat': 'Hotel restaurants',
        'Biegga, Bistro ja Tsohka': 'Biegga, Bistro and Tsohka',
        'After ski -baari': 'Après-ski bar',
        'Kahvila': 'Café',
        'Ylläs 1 Gondolin ala-asemalla': 'At the lower station of Ylläs 1 Gondola',
        'Latukahvila': 'Trail café',
        'Latukahvila noin 2 km hiihtokeskuksesta': 'Trail café about 2 km from the ski resort',
        'Vuokraamot': 'Rental services',
        'Välinevuokraamo': 'Equipment rental',
        'Sukset ja hissiliput · Lapland Hotels Saaga': 'Skis and lift passes · Lapland Hotels Saaga',
        'Laskettelu-, lumilauta- ja maastohiihtovälineet': 'Alpine ski, snowboard and cross-country ski equipment',
        'Elämykset ja vuokraus': 'Experiences and rentals',
        'Moottorikelkat, MoonBiket ja hiihtovälineet': 'Snowmobiles, MoonBikes and ski equipment',
        'Kylä': 'Village',
        'Äkäslompolon kylä': 'Äkäslompolo village',
        'Palveluita kylän keskustassa': 'Services in the village centre',
        'Jounin Kauppa': 'Jounin Kauppa',
        'Kylän keskustassa': 'In the village centre',
        'Kahvila ja baari': 'Café and bar',
        'Jounin Kaupan yhteydessä': 'At Jounin Kauppa',
        'Pubi': 'Pub',
        'Jounin Kauppakeskuksessa': 'In Jounin shopping centre',
        'Äkäslompolon kylässä': 'In Äkäslompolo village',
        'Tunturintie 15': 'Tunturintie 15',
        'Ylläs Ski Resortin Jokeririnteen alla': 'At the foot of Jokeri slope at Ylläs Ski Resort',
        'Erämaakahvila': 'Wilderness café',
        'Noin 3 km Äkäslompolosta, lyhyt kävelyreitti': 'About 3 km from Äkäslompolo, with a short walk to the café',
        'Sukset, lumilaudat, lumikengät ja huolto': 'Skis, snowboards, snowshoes and servicing',
        'Talvi- ja kesäaktiviteettien varusteita': 'Equipment for winter and summer activities',
        'Vuokraamo ja huolto': 'Rental and servicing',
        'Y1 välinevuokraamo': 'Y1 equipment rental',
        'Pyörät, hiihto- ja talvivälineet': 'Bikes, ski and winter equipment',
        'Palveluiden aukioloajat ja valikoimat voivat vaihdella sesongin mukaan.': 'Opening hours and services may vary by season.',
        'Ravintolat': 'Restaurants',
        'Sulje kartta': 'Close map',
        'Paikan sijainti kartalla': 'Location on map'
    }));

    const germanTranslations = new Map(Object.entries({
        'Ylläs Kajo | Guest guide': 'Ylläs Kajo | Gästeführer',
        'House guide | Ylläs Kajo': 'Hausführer | Ylläs Kajo',
        'House rules | Ylläs Kajo': 'Hausordnung | Ylläs Kajo',
        'Places | Ylläs Kajo': 'Orte | Ylläs Kajo',
        'Gallery | Ylläs Kajo': 'Galerie | Ylläs Kajo',
        'Information | Ylläs Kajo': 'Informationen | Ylläs Kajo',
        'House guide': 'Hausführer',
        'House guide topics': 'Themen des Hausführers',
        'House rules': 'Hausordnung',
        'Fireplace': 'Kamin',
        'General': 'Allgemeines',
        'Please treat the house as your own.': 'Bitte behandeln Sie das Haus wie Ihr eigenes.',
        'Quiet hours are from 10 pm to 7 am.': 'Ruhezeit ist von 22 bis 7 Uhr.',
        'Only guests included in the booking may stay overnight.': 'Übernachten dürfen nur die in der Buchung angegebenen Gäste.',
        'The cabin can accommodate a maximum of 6 people.': 'In der Hütte können maximal 6 Personen übernachten.',
        'Parties and events are not permitted.': 'Partys und Veranstaltungen sind nicht gestattet.',
        'Please wash the dishes, empty the dishwasher and put the dishes away.': 'Bitte spülen Sie das Geschirr, räumen Sie die Spülmaschine aus und stellen Sie das Geschirr in die Schränke.',
        'Smoking': 'Rauchen',
        'Smoking is prohibited.': 'Rauchen ist verboten.',
        'Pets': 'Haustiere',
        'Pets are allowed.': 'Haustiere sind erlaubt.',
        'Home': 'Startseite',
        'Guide': 'Anleitung',
        'Rules': 'Regeln',
        'Places': 'Orte',
        'Gallery': 'Galerie',
        'Main navigation': 'Hauptnavigation',
        'Choose a language': 'Sprache auswählen',
        'Flag of Finland': 'Flagge Finnlands',
        'Flag of Germany': 'Flagge Deutschlands',
        'We chose this cabin for our love of the peaceful North, the fells and the quiet. We hope you enjoy your stay here as much as we do. Take it easy, breathe deeply and let the magic of Lapland carry you away.': 'Wir haben diese Hütte aus Liebe zum ruhigen Norden, zu den Fjälls und zur Stille gewählt. Wir hoffen, dass Sie sich hier genauso wohlfühlen wie wir. Entspannen Sie sich, atmen Sie tief durch und lassen Sie sich vom Zauber Lapplands mitnehmen.',
        '– Riikka & Valtteri': '– Riikka & Valtteri',
        'Welcome message': 'Willkommensgruß',
        'Arrival': 'Anreise',
        'Departure': 'Abreise',
        'View on map': 'Auf der Karte anzeigen',
        'View Ylläs Kajo on Google Maps': 'Ylläs Kajo auf Google Maps anzeigen',
        'Arrival instructions': 'Anreisehinweise',
        'Check-in from 5 pm...': 'Check-in ab 17 Uhr...',
        'Parking': 'Parken',
        'Free parking is available in the yard...': 'Kostenlose Parkplätze im Hof...',
        'Fellside tranquillity • Lapland adventures • Ylläsjärvi': 'Ruhe am Fjäll • Erlebnisse in Lappland • Ylläsjärvi',
        'Close': 'Schließen',
        'Keys:': 'Schlüssel:',
        'Always leave one key in the key box beside the exterior door. Inside the cabin, you will find another key for the cabin door and a key for the storage shed.': 'Lassen Sie immer einen Schlüssel im Schlüsselkasten neben der Außentür. In der Hütte finden Sie einen weiteren Schlüssel für die Haustür sowie einen Schlüssel für den Abstellraum.',
        'Check-in:': 'Check-in:',
        'from 5 pm': 'ab 17 Uhr',
        'Free parking for two cars and an electric vehicle charging point are available in the yard. Charging costs €10 per 12 hours.': 'Im Hof gibt es kostenlose Parkplätze für zwei Autos sowie eine Ladestation für Elektroautos. Das Laden kostet 10 € pro 12 Stunden.',
        'Your hosts': 'Ihre Gastgeber',
        'Valtteri and Riikka': 'Valtteri und Riikka',
        'Emergency': 'Notfall',
        'Emergency number': 'Notrufnummer',
        'Police · Ambulance · Fire service': 'Polizei · Rettungsdienst · Feuerwehr',
        'Call the emergency number 112': 'Notruf 112 anrufen',
        'Nearest emergency clinic': 'Nächste Notaufnahme',
        'Kittilä health centre and emergency clinic': 'Gesundheitszentrum und Notaufnahme Kittilä',
        'Call': 'Anrufen',
        'Directions': 'Wegbeschreibung',
        'Nearest pharmacy': 'Nächste Apotheke',
        'Ylläs Pharmacy': 'Apotheke Ylläs',
        'Contact details': 'Kontaktdaten',
        'Medical Helpline 116 117': 'Medizinische Beratung 116 117',
        'Medical advice if you are unsure whether you need treatment': 'Medizinische Beratung, wenn Sie unsicher sind, ob Sie ärztliche Hilfe benötigen',
        'Explore Ylläs Kajo': 'Ylläs Kajo entdecken',
        'Gallery categories': 'Galeriekategorien',
        'Yard': 'Hof',
        'Interior': 'Innenräume',
        'Surroundings': 'Umgebung',
        'Enlarged image': 'Vergrößerte Ansicht',
        'Close enlarged image': 'Vergrößerte Ansicht schließen',
        'Previous image': 'Vorheriges Bild',
        'Next image': 'Nächstes Bild',
        'Ylläs Kajo holiday cabin exterior': 'Außenansicht der Ferienhütte Ylläs Kajo',
        'Enlarge image: Ylläs Kajo holiday cabin exterior': 'Bild vergrößern: Außenansicht der Ferienhütte Ylläs Kajo',
        'Ylläs Kajo yard and storage shed': 'Hof und Abstellraum von Ylläs Kajo',
        'Enlarge image: Ylläs Kajo yard and storage shed': 'Bild vergrößern: Hof und Abstellraum von Ylläs Kajo',
        'Ylläs Kajo kitchen, dining area and living room': 'Küche, Essbereich und Wohnzimmer von Ylläs Kajo',
        'Enlarge image: Ylläs Kajo kitchen, dining area and living room': 'Bild vergrößern: Küche, Essbereich und Wohnzimmer von Ylläs Kajo',
        'Ylläs Kajo living room and stairs to the loft': 'Wohnzimmer und Treppe zum Dachgeschoss von Ylläs Kajo',
        'Enlarge image: Ylläs Kajo living room and stairs to the loft': 'Bild vergrößern: Wohnzimmer und Treppe zum Dachgeschoss von Ylläs Kajo',
        'Ylläs Kajo dining table': 'Esstisch von Ylläs Kajo',
        'Enlarge image: Ylläs Kajo dining table': 'Bild vergrößern: Esstisch von Ylläs Kajo',
        'Ylläs Kajo bedroom': 'Schlafzimmer von Ylläs Kajo',
        'Enlarge image: Ylläs Kajo bedroom': 'Bild vergrößern: Schlafzimmer von Ylläs Kajo',
        'Forest landscape around Ylläs Kajo': 'Waldlandschaft in der Umgebung von Ylläs Kajo',
        'Enlarge image: forest landscape around Ylläs Kajo': 'Bild vergrößern: Waldlandschaft in der Umgebung von Ylläs Kajo',
        'Connectivity and entertainment': 'Internet und Unterhaltung',
        'Electric vehicle charging': 'Laden von Elektroautos',
        'Kitchen': 'Küche',
        'Appliances': 'Haushaltsgeräte',
        'Remote work': 'Mobiles Arbeiten',
        'Waste and recycling': 'Abfall und Recycling',
        'Yard and storage': 'Hof und Abstellraum',
        'Safety': 'Sicherheit',
        'There are two fully equipped workspaces in the loft. Each has a monitor, keyboard and mouse.': 'Im Dachgeschoss gibt es zwei voll ausgestattete Arbeitsplätze. Jeder verfügt über einen Monitor, eine Tastatur und eine Maus.',
        'You can find the Wi-Fi details on the guide home page.': 'Die WLAN-Daten finden Sie auf der Startseite des Hausführers.',
        'Pets are allowed for an additional fee of €30.': 'Haustiere sind gegen eine zusätzliche Gebühr von 30 € erlaubt.',
        'There are two sofa covers in the bedroom’s upper cupboard. Please use them when staying with pets.': 'Im oberen Schrank im Schlafzimmer liegen zwei Sofabezüge. Bitte verwenden Sie diese, wenn Sie mit Haustieren übernachten.',
        'Please clean up after your pet.': 'Bitte beseitigen Sie die Hinterlassenschaften Ihres Haustiers.',
        'Please take mixed waste to the mixed-waste bin in the property’s refuse shelter.': 'Bitte bringen Sie den Restmüll zum Restmüllcontainer im Müllunterstand auf dem Grundstück.',
        'Please take cardboard, plastic, paper, metal and glass to a local recycling point. The nearest one is at Eelin Kauppa, about 3 km away.': 'Bitte bringen Sie Karton, Kunststoff, Papier, Metall und Glas zu einer örtlichen Recyclingstelle. Die nächste befindet sich bei Eelin Kauppa, etwa 3 km entfernt.',
        'There is a large lockable storage shed in the yard for items such as bicycles and snowmobiles. It also has a ski waxing bench.': 'Im Hof gibt es einen großen abschließbaren Abstellraum, in dem zum Beispiel Fahrräder und Schneemobile aufbewahrt werden können. Dort befindet sich auch ein Wachsbock für Skier.',
        'The woodshed is also in the yard.': 'Der Holzschuppen befindet sich ebenfalls im Hof.',
        'In an emergency:': 'Im Notfall:',
        'Call 112': '112 anrufen',
        'Medical centre:': 'Ärztezentrum:',
        'Pharmacy:': 'Apotheke:',
        'Kolari Pharmacy contact details': 'Kontaktdaten der Apotheke Kolari',
        'Departure tasks completed': 'Abreiseaufgaben erledigt',
        'Check-out is by 11 am.': 'Der Check-out ist spätestens um 11 Uhr.',
        'Please return the keys.': 'Bitte geben Sie die Schlüssel zurück.',
        'Thank you for visiting — we hope to see you again!': 'Vielen Dank für Ihren Besuch — wir freuen uns auf ein Wiedersehen!',
        'Take the rubbish to the bin in the shelter in the yard': 'Bringen Sie den Abfall zum Müllcontainer im Unterstand im Hof',
        'Switch off the appliances': 'Schalten Sie die Geräte aus',
        'Wash the dishes, empty the dishwasher and put the dishes away': 'Spülen Sie das Geschirr, räumen Sie die Spülmaschine aus und stellen Sie das Geschirr in die Schränke',
        'Make sure the fire is out': 'Vergewissern Sie sich, dass das Feuer vollständig erloschen ist',
        'Switch off the sauna': 'Schalten Sie die Sauna aus',
        'Lock the doors': 'Schließen Sie die Türen ab',
        'Put the key in the key box and scramble the code': 'Legen Sie den Schlüssel in den Schlüsselkasten und verstellen Sie den Code',
        'Sauna instructions': 'Saunaanleitung',
        'Before you begin': 'Bevor Sie beginnen',
        'Make sure the sauna is empty. Do not leave anything on the heater or benches.': 'Vergewissern Sie sich, dass die Sauna leer ist. Lassen Sie nichts auf dem Ofen oder den Bänken liegen.',
        'Switch on the sauna heater using the switch on the right.': 'Schalten Sie den Saunaofen mit dem rechten Schalter ein.',
        'The sauna takes about 30–60 minutes to heat up.': 'Das Aufheizen der Sauna dauert etwa 30–60 Minuten.',
        'Please shower before using the sauna and use a towel or disposable seat cover on the benches.': 'Duschen Sie bitte vor dem Saunagang und verwenden Sie auf den Bänken ein Handtuch oder eine Einweg-Sitzunterlage.',
        'Steam — the magic of the sauna': 'Aufguss — der Zauber der Sauna',
        'Use the sauna ladle to pour a small amount of water onto the stones. Never pour water directly onto the heater — only onto the stones.': 'Gießen Sie mit der Saunakelle eine kleine Menge Wasser auf die Steine. Gießen Sie niemals Wasser direkt auf den Ofen, sondern nur auf die Steine.',
        'The steam makes the air more humid and feels warm and gentle on the skin.': 'Der Aufguss erhöht die Luftfeuchtigkeit und fühlt sich auf der Haut warm und angenehm an.',
        'Using the sauna': 'Saunieren',
        'Take a cooling break outdoors, in the shower or even in the snow (if you dare!).': 'Machen Sie zwischendurch eine Abkühlung draußen, unter der Dusche oder sogar im Schnee (wenn Sie sich trauen!).',
        'Shower and drink water — sauna bathing causes your body to lose fluids.': 'Duschen Sie und trinken Sie Wasser — beim Saunieren verliert der Körper Flüssigkeit.',
        'Switch off the heater if it does not turn off automatically.': 'Schalten Sie den Ofen aus, wenn er sich nicht automatisch ausschaltet.',
        'Ventilate the sauna by opening a door or window for a few minutes.': 'Lüften Sie die Sauna, indem Sie die Tür oder ein Fenster einige Minuten öffnen.',
        'Safety tips': 'Sicherheitshinweise',
        'Do not touch the heater — it is extremely hot.': 'Berühren Sie den Ofen nicht — er ist sehr heiß.',
        'Do not pour too much water onto the stones — the steam can burn you.': 'Gießen Sie nicht zu viel Wasser auf die Steine — der Dampf kann Verbrennungen verursachen.',
        'Children may use the sauna only with an adult.': 'Kinder dürfen die Sauna nur in Begleitung eines Erwachsenen benutzen.',
        'If you feel dizzy or nauseous, leave the sauna immediately.': 'Wenn Ihnen schwindelig oder übel wird, verlassen Sie sofort die Sauna.',
        'Fireplace instructions': 'Kaminanleitung',
        'Before lighting': 'Vor dem Anzünden',
        'Check that the flue is open and that ash from the previous use has been removed.': 'Prüfen Sie, ob der Rauchabzug geöffnet und die Asche der vorherigen Nutzung entfernt wurde.',
        'Use only dry firewood — no rubbish, plastic or treated wood. Firewood is in the outdoor woodshed.': 'Verwenden Sie nur trockenes Brennholz — keinen Abfall, Kunststoff oder behandeltes Holz. Brennholz befindet sich im Holzschuppen draußen.',
        'Lighting and tending the fire': 'Feuer anzünden und beaufsichtigen',
        'Light the fire with firelighters or small pieces of wood — never use lighter fluid.': 'Zünden Sie das Feuer mit Anzündern oder kleinen Holzstücken an — niemals mit flüssigem Grillanzünder.',
        'Do not overload the fireplace — too much wood can overheat the structure.': 'Überladen Sie den Kamin nicht — zu viel Holz kann die Konstruktion überhitzen.',
        'Keep the fireplace door closed while the fire is burning.': 'Halten Sie die Kamintür während des Feuers geschlossen.',
        'Never leave the fire unattended. Put it out before leaving the cabin or going to bed.': 'Lassen Sie das Feuer niemals unbeaufsichtigt. Löschen Sie es, bevor Sie die Hütte verlassen oder schlafen gehen.',
        'Extinguishing and aftercare': 'Löschen und Nachbereitung',
        'Let the fire burn out naturally — do not pour water into the fireplace.': 'Lassen Sie das Feuer in Ruhe ausbrennen — gießen Sie kein Wasser in den Kamin.',
        'Once the ashes have cooled completely, place them in the metal bucket in the woodshed.': 'Wenn die Asche vollständig abgekühlt ist, können Sie sie in den Metalleimer im Holzschuppen geben.',
        'Never put hot ashes in the plastic rubbish bin. Once cool, empty the ashes from the metal bucket into a plastic bag and place it in the waste bin.': 'Geben Sie niemals heiße Asche in den Kunststoff-Mülleimer. Sobald sie abgekühlt ist, füllen Sie die Asche aus dem Metalleimer in einen Plastikbeutel und geben Sie diesen in den Müllcontainer.',
        'Close the flue only once the fire and embers are completely out.': 'Schließen Sie den Rauchabzug erst, wenn Feuer und Glut vollständig erloschen sind.',
        'Fireplace types': 'Kaminarten',
        'Convection fireplace: handle upright.': 'Konvektionskamin: Griff senkrecht.',
        'Heat-storing fireplace: handle horizontal.': 'Speicherofen: Griff waagerecht.',
        'Dishwasher': 'Spülmaschine',
        'The dishwasher water valve is beside the kitchen tap (upright is off, horizontal is on). Remember to open and close the valve.': 'Das Wasserabsperrventil der Spülmaschine befindet sich neben der Küchenarmatur (senkrecht: geschlossen, waagerecht: geöffnet). Bitte denken Sie daran, das Ventil zu öffnen und wieder zu schließen.',
        'Washing machine': 'Waschmaschine',
        'The washing machine is available for your use. Instructions are in the cupboard under the TV stand.': 'Die Waschmaschine kann benutzt werden. Die Anleitung befindet sich im Schrank unter dem TV-Möbel.',
        'Cooktop': 'Kochfeld',
        'The induction cooktop is operated using the touch controls on its surface.': 'Das Induktionskochfeld wird über die Touch-Bedienelemente auf der Oberfläche gesteuert.',
        'More detailed instructions are also in the cupboard under the TV stand.': 'Eine ausführlichere Anleitung befindet sich ebenfalls im Schrank unter dem TV-Möbel.',
        'Kitchen instructions': 'Küchenanleitung',
        'Kitchen equipment': 'Küchenausstattung',
        'The kitchen is equipped with dishes, cutlery and cooking utensils.': 'Die Küche ist mit Geschirr, Besteck und Kochutensilien ausgestattet.',
        'The kitchen has an induction cooktop, oven, microwave, fridge, freezer, dishwasher, kettle and coffee maker.': 'Die Küche verfügt über ein Induktionskochfeld, einen Backofen, eine Mikrowelle, einen Kühlschrank, ein Gefrierfach, eine Spülmaschine, einen Wasserkocher und eine Kaffeemaschine.',
        'Hot cookware': 'Heißes Kochgeschirr',
        'Do not place hot pots or pans directly on the worktop — use a trivet.': 'Stellen Sie heiße Töpfe oder Pfannen nicht direkt auf die Arbeitsfläche — verwenden Sie einen Untersetzer.',
        'Drain': 'Abfluss',
        'Please do not pour fat or grease down the drain.': 'Bitte gießen Sie kein Fett in den Abfluss.',
        'The Wi-Fi details are in the cabin information book.': 'Die WLAN-Daten stehen im Hüttenführer.',
        'TV and entertainment': 'Fernsehen und Unterhaltung',
        'The TV is operated with its remote control. It is connected to a home theatre system with a separate remote.': 'Der Fernseher wird mit einer Fernbedienung bedient. Er ist an ein Heimkinosystem angeschlossen, das eine separate Fernbedienung hat.',
        'The Google TV Streamer (white remote) provides access to a wide range of streaming services. Sign in with your own accounts.': 'Der Google TV Streamer (weiße Fernbedienung) bietet eine große Auswahl an Streamingdiensten. Melden Sie sich mit Ihren eigenen Konten an.',
        'The remote controls are on the shelf in front of the TV.': 'Die Fernbedienungen liegen auf dem Regal vor dem Fernseher.',
        'Books and games': 'Bücher und Spiele',
        'Books and games are in the cupboard below the TV and are free to use.': 'Bücher und Spiele befinden sich im Schrank unter dem Fernseher und können frei genutzt werden.',
        'Charging instructions': 'Ladeanleitung',
        'There is an electric vehicle charging point on the wall of the shed.': 'An der Wand des Schuppens befindet sich eine Ladestation für Elektroautos.',
        'Start charging with the tag provided in the apartment.': 'Starten Sie den Ladevorgang mit dem in der Wohnung bereitliegenden Chip.',
        'Please use your own Type 2 charging cable.': 'Bitte verwenden Sie Ihr eigenes Typ-2-Ladekabel.',
        'Connect the cable first, then present the tag to the reader on the charging point.': 'Schließen Sie zuerst das Kabel an und halten Sie dann den Chip an das Lesegerät der Ladestation.',
        'The charging point must be activated separately on request and costs €10 per 12 hours.': 'Die Ladestation muss separat auf Anfrage freigeschaltet werden und kostet 10 € pro 12 Stunden.',
        'Charging power': 'Ladeleistung',
        'The charging point is connected to a load balancer. Its maximum charging power depends on the electricity being used in the apartment.': 'Die Ladestation ist an einen Lastverteiler angeschlossen. Die maximale Ladeleistung hängt vom Stromverbrauch in der Wohnung ab.',
        'Places in Ylläs': 'Orte in Ylläs',
        'Choose a village': 'Ort auswählen',
        'Ylläsjärvi services': 'Angebote in Ylläsjärvi',
        'Äkäslompolo services': 'Angebote in Äkäslompolo',
        'Attractions and services': 'Sehenswürdigkeiten und Dienstleistungen',
        'Ski resort': 'Skigebiet',
        'Slopes, lifts and services': 'Pisten, Lifte und Dienstleistungen',
        'Grocery shops': 'Lebensmittelgeschäfte',
        'Grocery shop': 'Lebensmittelgeschäft',
        'Grocery shop in central Ylläsjärvi': 'Lebensmittelgeschäft im Zentrum von Ylläsjärvi',
        'Small grocery shop at the ski resort': 'Kleiner Lebensmittelladen im Skigebiet',
        'Restaurants and cafés': 'Restaurants und Cafés',
        'Restaurant and pub': 'Restaurant und Pub',
        'Near the slopes in Ylläsjärvi': 'In der Nähe der Pisten in Ylläsjärvi',
        'Bistro': 'Bistro',
        'Restaurant by Lake Ylläsjärvi': 'Restaurant am See Ylläsjärvi',
        'Restaurant': 'Restaurant',
        'Slope-side restaurant': 'Restaurant an der Skipiste',
        'Ylläs Ski South, next to the chairlift': 'Ylläs Ski South, neben dem Sessellift',
        'Hotel restaurants': 'Hotelrestaurants',
        'Biegga, Bistro and Tsohka': 'Biegga, Bistro und Tsohka',
        'Après-ski bar': 'Après-Ski-Bar',
        'Café': 'Café',
        'At the lower station of Ylläs 1 Gondola': 'An der Talstation der Ylläs-1-Gondelbahn',
        'Trail café': 'Loipencafé',
        'Trail café about 2 km from the ski resort': 'Loipencafé etwa 2 km vom Skigebiet entfernt',
        'Rental services': 'Verleih',
        'Equipment rental': 'Ausrüstungsverleih',
        'Skis and lift passes · Lapland Hotels Saaga': 'Skier und Skipässe · Lapland Hotels Saaga',
        'Alpine ski, snowboard and cross-country ski equipment': 'Ausrüstung für Ski alpin, Snowboard und Langlauf',
        'Experiences and rentals': 'Erlebnisse und Verleih',
        'Snowmobiles, MoonBikes and ski equipment': 'Schneemobile, MoonBikes und Skiausrüstung',
        'Village': 'Dorf',
        'Services in the village centre': 'Angebote im Dorfzentrum',
        'Äkäslompolo village': 'Dorf Äkäslompolo',
        'In the village centre': 'Im Dorfzentrum',
        'Café and bar': 'Café und Bar',
        'At Jounin Kauppa': 'Bei Jounin Kauppa',
        'Pub': 'Pub',
        'In Jounin shopping centre': 'Im Einkaufszentrum Jounin',
        'In Äkäslompolo village': 'Im Dorf Äkäslompolo',
        'At the foot of Jokeri slope at Ylläs Ski Resort': 'Am Fuß der Jokeri-Piste im Skigebiet Ylläs',
        'Wilderness café': 'Wildniscafé',
        'About 3 km from Äkäslompolo, with a short walk to the café': 'Etwa 3 km von Äkäslompolo entfernt; das Café ist über einen kurzen Fußweg erreichbar',
        'Skis, snowboards, snowshoes and servicing': 'Skier, Snowboards, Schneeschuhe und Service',
        'Equipment for winter and summer activities': 'Ausrüstung für Winter- und Sommeraktivitäten',
        'Rental and servicing': 'Verleih und Wartung',
        'Y1 equipment rental': 'Y1 Ausrüstungsverleih',
        'Bikes, ski and winter equipment': 'Fahrräder, Ski- und Winterausrüstung',
        'Opening hours and services may vary by season.': 'Öffnungszeiten und Angebot können je nach Saison variieren.',
        'Restaurants': 'Restaurants',
        'Close map': 'Karte schließen',
        'Location on map': 'Standort auf der Karte',
        'completed': 'erledigt',
        ' on the map': 'auf der Karte',
        ' on Google Maps': 'auf Google Maps'
    }));

    const frenchTranslations = new Map(Object.entries({
        'Ylläs Kajo | Guest guide': 'Ylläs Kajo | Guide d’accueil',
        'House guide | Ylläs Kajo': 'Guide de la maison | Ylläs Kajo',
        'House rules | Ylläs Kajo': 'Règles de la maison | Ylläs Kajo',
        'Places | Ylläs Kajo': 'Lieux | Ylläs Kajo',
        'Gallery | Ylläs Kajo': 'Galerie | Ylläs Kajo',
        'Information | Ylläs Kajo': 'Informations | Ylläs Kajo',
        'House guide': 'Guide de la maison',
        'House guide topics': 'Rubriques du guide de la maison',
        'House rules': 'Règles de la maison',
        'Fireplace': 'Cheminée',
        'General': 'Généralités',
        'Please treat the house as your own.': 'Veuillez traiter la maison comme la vôtre.',
        'Quiet hours are from 10 pm to 7 am.': 'Le calme est demandé de 22 h à 7 h.',
        'Only guests included in the booking may stay overnight.': 'Seules les personnes indiquées dans la réservation peuvent passer la nuit.',
        'The cabin can accommodate a maximum of 6 people.': 'La capacité maximale du chalet est de 6 personnes.',
        'Parties and events are not permitted.': 'Les fêtes et événements ne sont pas autorisés.',
        'Please wash the dishes, empty the dishwasher and put the dishes away.': 'Veuillez faire la vaisselle, vider le lave-vaisselle et ranger la vaisselle dans les placards.',
        'Smoking': 'Tabac',
        'Smoking is prohibited.': 'Il est interdit de fumer.',
        'Pets': 'Animaux de compagnie',
        'Pets are allowed.': 'Les animaux de compagnie sont acceptés.',
        'Home': 'Accueil',
        'Guide': 'Guide',
        'Rules': 'Règles',
        'Places': 'Lieux',
        'Gallery': 'Galerie',
        'Main navigation': 'Navigation principale',
        'Choose a language': 'Choisir la langue',
        'Flag of Finland': 'Drapeau finlandais',
        'Flag of Germany': 'Drapeau allemand',
        'Drapeau français': 'Drapeau français',
        'We chose this cabin for our love of the peaceful North, the fells and the quiet. We hope you enjoy your stay here as much as we do. Take it easy, breathe deeply and let the magic of Lapland carry you away.': 'Nous avons choisi ce chalet par amour pour le calme du Grand Nord, ses monts et sa tranquillité. Nous espérons que vous vous y sentirez aussi bien que nous. Détendez-vous, respirez profondément et laissez-vous porter par la magie de la Laponie.',
        '– Riikka & Valtteri': '– Riikka et Valtteri',
        'Welcome message': 'Message de bienvenue',
        'Arrival': 'Arrivée',
        'Departure': 'Départ',
        'View on map': 'Voir sur la carte',
        'View Ylläs Kajo on Google Maps': 'Voir Ylläs Kajo sur Google Maps',
        'Arrival instructions': 'Instructions d’arrivée',
        'Check-in from 5 pm...': 'Arrivée à partir de 17 h...',
        'Parking': 'Stationnement',
        'Free parking is available in the yard...': 'Stationnement gratuit dans la cour...',
        'Fellside tranquillity • Lapland adventures • Ylläsjärvi': 'Sérénité des monts • Aventures en Laponie • Ylläsjärvi',
        'Close': 'Fermer',
        'Keys:': 'Clés :',
        'Always leave one key in the key box beside the exterior door. Inside the cabin, you will find another key for the cabin door and a key for the storage shed.': 'Laissez toujours une clé dans la boîte à clés située à côté de la porte extérieure. À l’intérieur du chalet, vous trouverez une autre clé pour la porte d’entrée ainsi qu’une clé pour le cabanon.',
        'Check-in:': 'Arrivée :',
        'from 5 pm': 'à partir de 17 h',
        'Free parking for two cars and an electric vehicle charging point are available in the yard. Charging costs €10 per 12 hours.': 'La cour dispose d’un stationnement gratuit pour deux voitures et d’une borne de recharge pour véhicule électrique. La recharge coûte 10 € par tranche de 12 heures.',
        'Your hosts': 'Vos hôtes',
        'Valtteri and Riikka': 'Valtteri et Riikka',
        'Emergency': 'Urgence',
        'Emergency number': 'Numéro d’urgence',
        'Police · Ambulance · Fire service': 'Police · Ambulance · Pompiers',
        'Call the emergency number 112': 'Appeler le numéro d’urgence 112',
        'Nearest emergency clinic': 'Service d’urgence le plus proche',
        'Kittilä health centre and emergency clinic': 'Centre de santé et urgences de Kittilä',
        'Call': 'Appeler',
        'Directions': 'Itinéraire',
        'Nearest pharmacy': 'Pharmacie la plus proche',
        'Ylläs Pharmacy': 'Pharmacie Ylläs',
        'Contact details': 'Coordonnées',
        'Medical Helpline 116 117': 'Conseil médical 116 117',
        'Medical advice if you are unsure whether you need treatment': 'Conseils médicaux si vous ne savez pas si vous avez besoin de soins',
        'Explore Ylläs Kajo': 'Découvrez Ylläs Kajo',
        'Gallery categories': 'Catégories de la galerie',
        'Yard': 'Cour',
        'Interior': 'Intérieur',
        'Surroundings': 'Environs',
        'Enlarged image': 'Image agrandie',
        'Close enlarged image': 'Fermer l’image agrandie',
        'Previous image': 'Image précédente',
        'Next image': 'Image suivante',
        'Ylläs Kajo holiday cabin exterior': 'Extérieur du chalet de vacances Ylläs Kajo',
        'Enlarge image: Ylläs Kajo holiday cabin exterior': 'Agrandir l’image : extérieur du chalet de vacances Ylläs Kajo',
        'Ylläs Kajo yard and storage shed': 'Cour et cabanon de Ylläs Kajo',
        'Enlarge image: Ylläs Kajo yard and storage shed': 'Agrandir l’image : cour et cabanon de Ylläs Kajo',
        'Ylläs Kajo kitchen, dining area and living room': 'Cuisine, salle à manger et salon de Ylläs Kajo',
        'Enlarge image: Ylläs Kajo kitchen, dining area and living room': 'Agrandir l’image : cuisine, salle à manger et salon de Ylläs Kajo',
        'Ylläs Kajo living room and stairs to the loft': 'Salon et escalier vers la mezzanine de Ylläs Kajo',
        'Enlarge image: Ylläs Kajo living room and stairs to the loft': 'Agrandir l’image : salon et escalier vers la mezzanine de Ylläs Kajo',
        'Ylläs Kajo dining table': 'Table à manger de Ylläs Kajo',
        'Enlarge image: Ylläs Kajo dining table': 'Agrandir l’image : table à manger de Ylläs Kajo',
        'Ylläs Kajo bedroom': 'Chambre de Ylläs Kajo',
        'Enlarge image: Ylläs Kajo bedroom': 'Agrandir l’image : chambre de Ylläs Kajo',
        'Forest landscape around Ylläs Kajo': 'Paysage forestier autour de Ylläs Kajo',
        'Enlarge image: forest landscape around Ylläs Kajo': 'Agrandir l’image : paysage forestier autour de Ylläs Kajo',
        'Connectivity and entertainment': 'Connexion et divertissement',
        'Electric vehicle charging': 'Recharge de véhicule électrique',
        'Kitchen': 'Cuisine',
        'Appliances': 'Équipements électroménagers',
        'Remote work': 'Télétravail',
        'Waste and recycling': 'Déchets et recyclage',
        'Yard and storage': 'Cour et rangement',
        'Safety': 'Sécurité',
        'There are two fully equipped workspaces in the loft. Each has a monitor, keyboard and mouse.': 'La mezzanine dispose de deux espaces de travail entièrement équipés. Chacun comprend un écran, un clavier et une souris.',
        'You can find the Wi-Fi details on the guide home page.': 'Les informations Wi-Fi se trouvent sur la page d’accueil du guide.',
        'Pets are allowed for an additional fee of €30.': 'Les animaux de compagnie sont acceptés moyennant un supplément de 30 €.',
        'There are two sofa covers in the bedroom’s upper cupboard. Please use them when staying with pets.': 'Deux protections pour le canapé se trouvent dans le placard supérieur de la chambre. Merci de les utiliser si vous séjournez avec un animal.',
        'Please clean up after your pet.': 'Veuillez ramasser les déjections de votre animal.',
        'Please take mixed waste to the mixed-waste bin in the property’s refuse shelter.': 'Veuillez déposer les déchets ménagers dans le conteneur prévu à cet effet, dans l’abri à déchets de la propriété.',
        'Please take cardboard, plastic, paper, metal and glass to a local recycling point. The nearest one is at Eelin Kauppa, about 3 km away.': 'Veuillez apporter le carton, le plastique, le papier, le métal et le verre au point de recyclage local. Le plus proche se trouve à Eelin Kauppa, à environ 3 km.',
        'There is a large lockable storage shed in the yard for items such as bicycles and snowmobiles. It also has a ski waxing bench.': 'La cour comprend un grand cabanon verrouillable où vous pouvez ranger, par exemple, des vélos et des motoneiges. Il dispose également d’un établi pour farter les skis.',
        'The woodshed is also in the yard.': 'Le bûcher se trouve également dans la cour.',
        'In an emergency:': 'En cas d’urgence :',
        'Call 112': 'Appelez le 112',
        'Medical centre:': 'Centre médical :',
        'Pharmacy:': 'Pharmacie :',
        'Kolari Pharmacy contact details': 'Coordonnées de la pharmacie de Kolari',
        'Departure tasks completed': 'Tâches de départ effectuées',
        'Check-out is by 11 am.': 'Le départ doit avoir lieu au plus tard à 11 h.',
        'Please return the keys.': 'Veuillez restituer les clés.',
        'Thank you for visiting — we hope to see you again!': 'Merci de votre visite — au plaisir de vous revoir !',
        'Take the rubbish to the bin in the shelter in the yard': 'Déposez les déchets dans le conteneur situé dans l’abri de la cour',
        'Switch off the appliances': 'Éteignez les appareils',
        'Wash the dishes, empty the dishwasher and put the dishes away': 'Faites la vaisselle, videz le lave-vaisselle et rangez la vaisselle dans les placards',
        'Make sure the fire is out': 'Vérifiez que le feu est éteint',
        'Switch off the sauna': 'Éteignez le sauna',
        'Lock the doors': 'Verrouillez les portes',
        'Put the key in the key box and scramble the code': 'Remettez la clé dans la boîte à clés et brouillez le code',
        'Sauna instructions': 'Instructions du sauna',
        'Before you begin': 'Avant de commencer',
        'Make sure the sauna is empty. Do not leave anything on the heater or benches.': 'Vérifiez que le sauna est vide. Ne posez rien sur le poêle ni sur les bancs.',
        'Switch on the sauna heater using the switch on the right.': 'Allumez le poêle à l’aide de l’interrupteur situé à droite.',
        'The sauna takes about 30–60 minutes to heat up.': 'Le sauna met environ 30 à 60 minutes à chauffer.',
        'Please shower before using the sauna and use a towel or disposable seat cover on the benches.': 'Veuillez vous doucher avant d’utiliser le sauna et vous asseoir sur une serviette ou une protection jetable.',
        'Steam — the magic of the sauna': 'La vapeur — la magie du sauna',
        'Use the sauna ladle to pour a small amount of water onto the stones. Never pour water directly onto the heater — only onto the stones.': 'Utilisez la louche pour verser un peu d’eau sur les pierres. Ne versez jamais d’eau directement sur le poêle, uniquement sur les pierres.',
        'The steam makes the air more humid and feels warm and gentle on the skin.': 'La vapeur humidifie l’air et procure une sensation de chaleur douce sur la peau.',
        'Using the sauna': 'Pendant le sauna',
        'Take a cooling break outdoors, in the shower or even in the snow (if you dare!).': 'Faites une pause pour vous rafraîchir dehors, sous la douche ou même dans la neige (si vous osez !).',
        'Shower and drink water — sauna bathing causes your body to lose fluids.': 'Douchez-vous et buvez de l’eau : le sauna entraîne une perte de liquide.',
        'Switch off the heater if it does not turn off automatically.': 'Éteignez le poêle s’il ne s’arrête pas automatiquement.',
        'Ventilate the sauna by opening a door or window for a few minutes.': 'Aérez le sauna en ouvrant la porte ou une fenêtre pendant quelques minutes.',
        'Safety tips': 'Conseils de sécurité',
        'Do not touch the heater — it is extremely hot.': 'Ne touchez pas le poêle : il est extrêmement chaud.',
        'Do not pour too much water onto the stones — the steam can burn you.': 'Ne versez pas trop d’eau sur les pierres : la vapeur peut provoquer des brûlures.',
        'Children may use the sauna only with an adult.': 'Les enfants ne doivent utiliser le sauna qu’accompagnés d’un adulte.',
        'If you feel dizzy or nauseous, leave the sauna immediately.': 'Si vous avez des vertiges ou des nausées, sortez immédiatement du sauna.',
        'Fireplace instructions': 'Instructions pour la cheminée',
        'Before lighting': 'Avant d’allumer',
        'Check that the flue is open and that ash from the previous use has been removed.': 'Vérifiez que le conduit est ouvert et que les cendres de la dernière utilisation ont été retirées.',
        'Use only dry firewood — no rubbish, plastic or treated wood. Firewood is in the outdoor woodshed.': 'Utilisez uniquement du bois sec : pas de déchets, de plastique ni de bois traité. Le bois se trouve dans le bûcher extérieur.',
        'Lighting and tending the fire': 'Allumer et entretenir le feu',
        'Light the fire with firelighters or small pieces of wood — never use lighter fluid.': 'Allumez le feu avec des allume-feux ou de petites bûches — jamais avec un liquide inflammable.',
        'Do not overload the fireplace — too much wood can overheat the structure.': 'Ne surchargez pas la cheminée : une trop grande quantité de bois peut faire surchauffer la structure.',
        'Keep the fireplace door closed while the fire is burning.': 'Gardez la porte de la cheminée fermée pendant que le feu brûle.',
        'Never leave the fire unattended. Put it out before leaving the cabin or going to bed.': 'Ne laissez jamais le feu sans surveillance. Éteignez-le avant de quitter le chalet ou d’aller vous coucher.',
        'Extinguishing and aftercare': 'Extinction et nettoyage',
        'Let the fire burn out naturally — do not pour water into the fireplace.': 'Laissez le feu s’éteindre naturellement — ne versez pas d’eau dans la cheminée.',
        'Once the ashes have cooled completely, place them in the metal bucket in the woodshed.': 'Une fois les cendres complètement refroidies, vous pouvez les mettre dans le seau métallique du bûcher.',
        'Never put hot ashes in the plastic rubbish bin. Once cool, empty the ashes from the metal bucket into a plastic bag and place it in the waste bin.': 'Ne mettez jamais de cendres chaudes dans la poubelle en plastique. Une fois refroidies, mettez les cendres du seau métallique dans un sac plastique et déposez-le dans le conteneur à déchets.',
        'Close the flue only once the fire and embers are completely out.': 'Ne fermez le conduit que lorsque le feu et les braises sont complètement éteints.',
        'Fireplace types': 'Types de cheminée',
        'Convection fireplace: handle upright.': 'Cheminée à convection : poignée en position verticale.',
        'Heat-storing fireplace: handle horizontal.': 'Poêle à accumulation : poignée à l’horizontale.',
        'Dishwasher': 'Lave-vaisselle',
        'The dishwasher water valve is beside the kitchen tap (upright is off, horizontal is on). Remember to open and close the valve.': 'Le robinet d’arrivée d’eau du lave-vaisselle se trouve à côté du robinet de l’évier (vertical : fermé, horizontal : ouvert). Pensez à l’ouvrir et à le refermer.',
        'Washing machine': 'Lave-linge',
        'The washing machine is available for your use. Instructions are in the cupboard under the TV stand.': 'Le lave-linge est à votre disposition. Son mode d’emploi se trouve dans le placard sous le meuble TV.',
        'Cooktop': 'Plaque de cuisson',
        'The induction cooktop is operated using the touch controls on its surface.': 'La plaque à induction se commande à l’aide des boutons tactiles situés sur sa surface.',
        'More detailed instructions are also in the cupboard under the TV stand.': 'Des instructions plus détaillées se trouvent également dans le placard sous le meuble TV.',
        'Kitchen instructions': 'Instructions de cuisine',
        'Kitchen equipment': 'Équipement de cuisine',
        'The kitchen is equipped with dishes, cutlery and cooking utensils.': 'La cuisine est équipée de vaisselle, de couverts et d’ustensiles de cuisine.',
        'The kitchen has an induction cooktop, oven, microwave, fridge, freezer, dishwasher, kettle and coffee maker.': 'La cuisine comprend une plaque à induction, un four, un micro-ondes, un réfrigérateur, un congélateur, un lave-vaisselle, une bouilloire et une cafetière.',
        'Hot cookware': 'Plats et casseroles chauds',
        'Do not place hot pots or pans directly on the worktop — use a trivet.': 'Ne posez pas de casserole ou de poêle chaude directement sur le plan de travail — utilisez un dessous-de-plat.',
        'Drain': 'Évacuation',
        'Please do not pour fat or grease down the drain.': 'Veuillez ne pas verser de graisse dans l’évier.',
        'The Wi-Fi details are in the cabin information book.': 'Les informations Wi-Fi se trouvent dans le livret du chalet.',
        'TV and entertainment': 'Télévision et divertissement',
        'The TV is operated with its remote control. It is connected to a home theatre system with a separate remote.': 'La télévision se commande avec sa télécommande. Elle est reliée à un système home cinéma doté de sa propre télécommande.',
        'The Google TV Streamer (white remote) provides access to a wide range of streaming services. Sign in with your own accounts.': 'Le Google TV Streamer (télécommande blanche) donne accès à de nombreux services de streaming. Connectez-vous avec vos propres comptes.',
        'The remote controls are on the shelf in front of the TV.': 'Les télécommandes se trouvent sur l’étagère devant la télévision.',
        'Books and games': 'Livres et jeux',
        'Books and games are in the cupboard below the TV and are free to use.': 'Les livres et les jeux se trouvent dans le placard sous la télévision et sont à votre disposition.',
        'Charging instructions': 'Instructions de recharge',
        'There is an electric vehicle charging point on the wall of the shed.': 'Une borne de recharge pour véhicules électriques se trouve sur le mur du cabanon.',
        'Start charging with the tag provided in the apartment.': 'Lancez la recharge avec le badge disponible dans le logement.',
        'Please use your own Type 2 charging cable.': 'Veuillez utiliser votre propre câble de recharge Type 2.',
        'Connect the cable first, then present the tag to the reader on the charging point.': 'Branchez d’abord le câble, puis présentez le badge au lecteur de la borne.',
        'The charging point must be activated separately on request and costs €10 per 12 hours.': 'La borne doit être activée séparément sur demande. Le tarif est de 10 € par tranche de 12 heures.',
        'Charging power': 'Puissance de recharge',
        'The charging point is connected to a load balancer. Its maximum charging power depends on the electricity being used in the apartment.': 'La borne est reliée à un système d’équilibrage de charge. Sa puissance maximale dépend de la consommation électrique du logement.',
        'Places in Ylläs': 'Lieux à Ylläs',
        'Choose a village': 'Choisir un village',
        'Ylläsjärvi services': 'Services à Ylläsjärvi',
        'Äkäslompolo services': 'Services à Äkäslompolo',
        'Attractions and services': 'Sites et services',
        'Ski resort': 'Station de ski',
        'Slopes, lifts and services': 'Pistes, remontées mécaniques et services',
        'Grocery shops': 'Épiceries',
        'Grocery shop': 'Épicerie',
        'Grocery shop in central Ylläsjärvi': 'Épicerie dans le centre de Ylläsjärvi',
        'Small grocery shop at the ski resort': 'Petite épicerie dans la station de ski',
        'Restaurants and cafés': 'Restaurants et cafés',
        'Restaurant and pub': 'Restaurant et pub',
        'Near the slopes in Ylläsjärvi': 'Près des pistes à Ylläsjärvi',
        'Bistro': 'Bistrot',
        'Restaurant by Lake Ylläsjärvi': 'Restaurant au bord du lac Ylläsjärvi',
        'Restaurant': 'Restaurant',
        'Slope-side restaurant': 'Restaurant au pied des pistes',
        'Ylläs Ski South, next to the chairlift': 'Ylläs Ski South, à côté du télésiège',
        'Hotel restaurants': 'Restaurants d’hôtel',
        'Biegga, Bistro and Tsohka': 'Biegga, Bistro et Tsohka',
        'Après-ski bar': 'Bar après-ski',
        'Café': 'Café',
        'At the lower station of Ylläs 1 Gondola': 'À la station aval de la télécabine Ylläs 1',
        'Trail café': 'Café de piste',
        'Trail café about 2 km from the ski resort': 'Café de piste à environ 2 km de la station',
        'Rental services': 'Locations',
        'Equipment rental': 'Location de matériel',
        'Skis and lift passes · Lapland Hotels Saaga': 'Skis et forfaits · Lapland Hotels Saaga',
        'Alpine ski, snowboard and cross-country ski equipment': 'Matériel de ski alpin, de snowboard et de ski de fond',
        'Experiences and rentals': 'Activités et locations',
        'Snowmobiles, MoonBikes and ski equipment': 'Motoneiges, MoonBikes et matériel de ski',
        'Village': 'Village',
        'Äkäslompolo village': 'Village d’Äkäslompolo',
        'Services in the village centre': 'Services dans le centre du village',
        'In the village centre': 'Dans le centre du village',
        'Café and bar': 'Café et bar',
        'At Jounin Kauppa': 'À Jounin Kauppa',
        'Pub': 'Pub',
        'In Jounin shopping centre': 'Dans le centre commercial Jounin',
        'In Äkäslompolo village': 'Dans le village d’Äkäslompolo',
        'At the foot of Jokeri slope at Ylläs Ski Resort': 'Au pied de la piste Jokeri, dans la station de ski Ylläs',
        'Wilderness café': 'Café en pleine nature',
        'About 3 km from Äkäslompolo, with a short walk to the café': 'À environ 3 km d’Äkäslompolo, puis une courte marche jusqu’au café',
        'Skis, snowboards, snowshoes and servicing': 'Skis, snowboards, raquettes et entretien',
        'Equipment for winter and summer activities': 'Matériel pour les activités d’hiver et d’été',
        'Rental and servicing': 'Location et entretien',
        'Y1 equipment rental': 'Location de matériel Y1',
        'Bikes, ski and winter equipment': 'Vélos, matériel de ski et équipement d’hiver',
        'Opening hours and services may vary by season.': 'Les horaires et les services peuvent varier selon la saison.',
        'Restaurants': 'Restaurants',
        'Close map': 'Fermer la carte',
        'Location on map': 'Emplacement sur la carte',
        'completed': 'effectuées',
        ' on the map': 'sur la carte',
        ' on Google Maps': 'sur Google Maps'
    }));

    const reverseTranslations = new Map(
        [...translations].map(([finnish, english]) => [english, finnish])
    );
    const reverseGermanTranslations = new Map(
        [...germanTranslations].map(([english, german]) => [german, english])
    );
    const reverseFrenchTranslations = new Map(
        [...frenchTranslations].map(([english, french]) => [french, english])
    );
    const languageKey = 'yllas-kajo-language';
    const normalise = value => value.trim().replace(/\s+/g, ' ');

    function translate(value, language) {
        const key = normalise(value);
        if (language === 'fr') {
            const english = translations.get(key)
                || reverseTranslations.get(key)
                || reverseGermanTranslations.get(key)
                || reverseFrenchTranslations.get(key)
                || key;
            return frenchTranslations.get(english) || frenchTranslations.get(key) || english;
        }
        if (language === 'de') {
            const english = translations.get(key) || reverseTranslations.get(key) || reverseGermanTranslations.get(key) || reverseFrenchTranslations.get(key) || key;
            return germanTranslations.get(english) || germanTranslations.get(key) || english;
        }
        if (language === 'en') {
            if (translations.has(key)) return translations.get(key);
            if (reverseGermanTranslations.has(key)) return reverseGermanTranslations.get(key);
            if (reverseFrenchTranslations.has(key)) return reverseFrenchTranslations.get(key);
            if (key.endsWith(' Google Maps -kartalla')) {
                return `${key.slice(0, -' Google Maps -kartalla'.length)} on Google Maps`;
            }
            return key.replace(/ kartalla$/, ' on the map');
        }
        if (reverseTranslations.has(key)) return reverseTranslations.get(key);
        if (reverseGermanTranslations.has(key)) {
            return reverseTranslations.get(reverseGermanTranslations.get(key)) || reverseGermanTranslations.get(key);
        }
        if (reverseFrenchTranslations.has(key)) {
            return reverseTranslations.get(reverseFrenchTranslations.get(key)) || reverseFrenchTranslations.get(key);
        }
        if (key.endsWith(' on Google Maps')) {
            return `${key.slice(0, -' on Google Maps'.length)} Google Maps -kartalla`;
        }
        return key.replace(/ on the map$/, ' kartalla');
    }

    function translateTextNode(node, language) {
        const value = node.nodeValue;
        const progress = value.trim().match(/^(\d+) \/ (\d+) tehty$/);
        if (language === 'en' && progress) {
            node.nodeValue = value.replace(progress[0], `${progress[1]} / ${progress[2]} completed`);
            return;
        }
        if (language === 'de' && progress) {
            node.nodeValue = value.replace(progress[0], `${progress[1]} / ${progress[2]} erledigt`);
            return;
        }
        if (language === 'fr' && progress) {
            node.nodeValue = value.replace(progress[0], `${progress[1]} / ${progress[2]} effectuées`);
            return;
        }
        const translatedProgress = value.trim().match(/^(\d+) \/ (\d+) completed$/);
        const germanProgress = value.trim().match(/^(\d+) \/ (\d+) erledigt$/);
        const frenchProgress = value.trim().match(/^(\d+) \/ (\d+) effectuées$/);
        if (language !== 'en' && (translatedProgress || germanProgress || frenchProgress)) {
            const match = translatedProgress || germanProgress || frenchProgress;
            const label = language === 'de' ? 'erledigt' : language === 'fr' ? 'effectuées' : 'tehty';
            node.nodeValue = value.replace(match[0], `${match[1]} / ${match[2]} ${label}`);
            return;
        }
        if (language === 'de' && translatedProgress) {
            node.nodeValue = value.replace(translatedProgress[0], `${translatedProgress[1]} / ${translatedProgress[2]} erledigt`);
            return;
        }
        const translated = translate(value, language);
        if (translated === normalise(value)) return;
        const leading = value.match(/^\s*/)[0];
        const trailing = value.match(/\s*$/)[0];
        node.nodeValue = `${leading}${translated}${trailing}`;
    }

    function updatePageLanguage(language) {
        document.documentElement.lang = language;
        document.title = translate(document.title, language);

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let textNode;
        while ((textNode = walker.nextNode())) {
            translateTextNode(textNode, language);
        }

        document.querySelectorAll('[aria-label], [title], img[alt]').forEach(element => {
            ['aria-label', 'title', 'alt'].forEach(attribute => {
                if (element.hasAttribute(attribute)) {
                    element.setAttribute(attribute, translate(element.getAttribute(attribute), language));
                }
            });
        });

        const languageButton = document.querySelector('.site-language');
        const selectedLanguage = languageOptions.find(option => option.code === language);
        languageButton.querySelector('.site-language-name').textContent = selectedLanguage.name;
        languageButton.querySelector('.site-language-flag').innerHTML = selectedLanguage.flag;
        languageButton.setAttribute(
            'aria-label',
            language === 'fi' ? 'Valitse kieli' : language === 'en' ? 'Choose a language' : language === 'de' ? 'Sprache auswählen' : 'Choisir la langue'
        );
        languageButton.title = language === 'fi' ? 'Valitse kieli' : language === 'en' ? 'Choose a language' : language === 'de' ? 'Sprache auswählen' : 'Choisir la langue';
        languageOptions.forEach(option => {
            const item = document.querySelector(`[data-language-option="${option.code}"]`);
            item.setAttribute('aria-checked', String(option.code === language));
            item.querySelector('.site-language-flag').innerHTML = option.flag;
        });
    }

    const style = document.createElement('style');
    style.textContent = `
        .site-topbar {
            position: sticky;
            top: 0;
            z-index: 1200;
            display: flex;
            align-items: center;
            min-height: 56px;
            padding: 8px clamp(8px, 2vw, 16px);
            border-bottom: 1px solid #e8e0d7;
            background: rgba(246, 243, 238, .96);
            backdrop-filter: blur(10px);
        }
        .site-language {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            min-width: 142px;
            min-height: 40px;
            padding: 0 12px;
            border: 1px solid #e8e0d7;
            border-radius: 999px;
            background: #fff;
            color: #171717;
            font: 600 13px/1 Inter, sans-serif;
            cursor: pointer;
        }
        .site-language:focus-visible,
        .site-language-option:focus-visible {
            outline: 3px solid #9a7552;
            outline-offset: 2px;
        }
        .site-language-current,
        .site-language-option {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .site-language-current {
            min-width: 0;
        }
        .site-language-name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .site-language-flag,
        .site-language-flag svg {
            display: block;
            width: 20px;
            height: 14px;
            flex: 0 0 auto;
        }
        .site-language-chevron {
            width: 12px;
            height: 12px;
            fill: none;
            stroke: currentColor;
            stroke-width: 1.8;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .site-language-menu {
            position: absolute;
            top: calc(100% - 2px);
            left: 8px;
            z-index: 1201;
            min-width: 142px;
            padding: 4px;
            border: 1px solid #e8e0d7;
            border-radius: 10px;
            background: #fff;
            box-shadow: 0 6px 18px rgba(39, 50, 58, .14);
        }
        .site-language-menu[hidden] {
            display: none;
        }
        .site-language-option {
            width: 100%;
            min-height: 36px;
            padding: 0 9px;
            border: 0;
            border-radius: 6px;
            background: transparent;
            color: #171717;
            font: 500 13px/1.3 Inter, sans-serif;
            text-align: left;
            cursor: pointer;
        }
        .site-language-option[aria-checked="true"] {
            background: #eee9e1;
            font-weight: 700;
        }
    `;
    document.head.append(style);

    const languageOptions = [
        {
            code: 'fi',
            name: 'Suomi',
            flag: '<svg viewBox="0 0 20 14" role="img" aria-label="Suomen lippu"><rect width="20" height="14" rx="1" fill="#fff"></rect><path fill="#003580" d="M5.5 0h3v5.5H20v3H8.5V14h-3V8.5H0v-3h5.5z"></path><rect x=".5" y=".5" width="19" height="13" rx=".5" fill="none" stroke="#d5d5d5"></rect></svg>'
        },
        {
            code: 'en',
            name: 'English',
            flag: '<svg viewBox="0 0 20 14" role="img" aria-label="Flag of the United Kingdom"><rect width="20" height="14" fill="#012169"></rect><path d="m0 0 20 14M20 0 0 14" stroke="#fff" stroke-width="3.4"></path><path d="m0 0 20 14M20 0 0 14" stroke="#c8102e" stroke-width="1.3"></path><path d="M10 0v14M0 7h20" stroke="#fff" stroke-width="4"></path><path d="M10 0v14M0 7h20" stroke="#c8102e" stroke-width="2"></path><rect x=".5" y=".5" width="19" height="13" fill="none" stroke="#d5d5d5"></rect></svg>'
        },
        {
            code: 'de',
            name: 'Deutsch',
            flag: '<svg viewBox="0 0 20 14" role="img" aria-label="Flagge Deutschlands"><rect width="20" height="14" rx="1" fill="#ffce00"></rect><path fill="#000" d="M1 0h18a1 1 0 0 1 1 1v3.67H0V1a1 1 0 0 1 1-1"></path><path fill="#d00" d="M0 4.67h20v4.66H0z"></path><rect x=".5" y=".5" width="19" height="13" rx=".5" fill="none" stroke="#d5d5d5"></rect></svg>'
        },
        {
            code: 'fr',
            name: 'Français',
            flag: '<svg viewBox="0 0 20 14" role="img" aria-label="Drapeau français"><rect width="20" height="14" rx="1" fill="#ed2939"></rect><path fill="#fff" d="M6.67 0h6.66v14H6.67z"></path><path fill="#002395" d="M1 0h5.67v14H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1"></path><rect x=".5" y=".5" width="19" height="13" rx=".5" fill="none" stroke="#d5d5d5"></rect></svg>'
        }
    ];

    const topbar = document.createElement('div');
    topbar.className = 'site-topbar';
    topbar.innerHTML = `
        <button class="site-language" type="button" aria-label="Valitse kieli" aria-haspopup="true" aria-expanded="false" aria-controls="site-language-menu">
            <span class="site-language-current"><span class="site-language-flag" aria-hidden="true"></span><span class="site-language-name"></span></span>
            <svg class="site-language-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"></path></svg>
        </button>
        <div class="site-language-menu" id="site-language-menu" role="menu" aria-label="Valitse kieli" hidden>
            ${languageOptions.map(option => `
                <button class="site-language-option" type="button" role="menuitemradio" aria-checked="false" data-language-option="${option.code}">
                    <span class="site-language-flag" aria-hidden="true">${option.flag}</span><span>${option.name}</span>
                </button>
            `).join('')}
        </div>
    `;
    document.body.insertBefore(topbar, document.body.firstChild);

    const languageButton = topbar.querySelector('.site-language');
    const languageMenu = topbar.querySelector('.site-language-menu');
    const languageItems = [...topbar.querySelectorAll('.site-language-option')];
    const savedLanguage = localStorage.getItem(languageKey);
    const initialLanguage = ['en', 'de', 'fr'].includes(savedLanguage) ? savedLanguage : 'fi';
    const closeLanguageMenu = (returnFocus = false) => {
        languageMenu.hidden = true;
        languageButton.setAttribute('aria-expanded', 'false');
        if (returnFocus) languageButton.focus();
    };

    languageButton.addEventListener('click', () => {
        const isExpanded = languageButton.getAttribute('aria-expanded') === 'true';
        languageMenu.hidden = isExpanded;
        languageButton.setAttribute('aria-expanded', String(!isExpanded));
        if (!isExpanded) {
            const selectedItem = languageItems.find(item => item.getAttribute('aria-checked') === 'true');
            selectedItem.focus();
        }
    });

    languageItems.forEach(item => {
        item.addEventListener('click', () => {
            const language = item.dataset.languageOption;
            localStorage.setItem(languageKey, language);
            updatePageLanguage(language);
            closeLanguageMenu(true);
        });
        item.addEventListener('keydown', event => {
            const currentIndex = languageItems.indexOf(item);
            if (event.key === 'Escape') {
                event.preventDefault();
                closeLanguageMenu(true);
            } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                const direction = event.key === 'ArrowDown' ? 1 : -1;
                languageItems[(currentIndex + direction + languageItems.length) % languageItems.length].focus();
            } else if (event.key === 'Home' || event.key === 'End') {
                event.preventDefault();
                languageItems[event.key === 'Home' ? 0 : languageItems.length - 1].focus();
            }
        });
    });

    document.addEventListener('click', event => {
        if (!topbar.contains(event.target)) closeLanguageMenu();
    });
    languageButton.addEventListener('keydown', event => {
        if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (languageMenu.hidden) {
                languageButton.click();
            } else {
                const selectedItem = languageItems.find(item => item.getAttribute('aria-checked') === 'true');
                selectedItem.focus();
            }
        } else if (event.key === 'Escape') {
            closeLanguageMenu();
        }
    });

    updatePageLanguage(initialLanguage);
})();
