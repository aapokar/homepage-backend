import nopeuspeli from '../images/nopeuspeli.jpg'
import myarm from '../images/MyArm.jpg'
import wp from '../images/wp.jpg'
import mcp from '../images/mcp3008.jpg'

const projectsList = [
    {
        id:"1",
        name: "Nopeuspeli",
        description: "Speden Speleistä tuttu nopeutta vaativa peli.",
        img: nopeuspeli,
        content: "Projektissa tutustuin PICAXEn kehitysalustaan, tavoitteena oli tehdä BASICilla peli. PICAXE on opetustarkoitukseen kehitetty alusta hyvin rajallisilla ominaisuuksilla. Tässä projektissa haasteita olivat mm. rajalliset muistipaikat(muistaakseni 8 tavua muistia, jokainen erikseen valmiiksi osoitettu) ja estetty/ei-mahdollinen pääsy timer interrupteihin. Teknisesti lamppujen paloaika ja samanaikainen näppäinten kuuntelu tapahtuu PICAXEn pseudomoniajon ja external-interruptien yhdistelmällä.",
        url: "/projects/1"
    },
    {
        id:"2",
        name: "MeArm",
        description: "MeArmista tehty versio AtMega328P-sirulla 2mm akryylista.",
        img: myarm,
        content: "Alun perin suunnittelin hexapodia, mutta päädyin omaan versioon MeArmista. En nähnyt mielekkäänä kopioida valmiita piirustuksia, vaan itseasiassa punainen lanka olikin itse piirrellä Vertexillä osat ja miettiä miten rakenne saadaan toimimaan. Liitostavat ja joita asoita toki katsoin suoraan mallista, mutta mitat ja mallit piirsin kaikki itse. Monissa valmiissa runko näyttäisi olevan kiinnitetty suoraan servon roottoriin kiinni, itse päädyin sorvaamaan alustan alumiinista ja kiinnittämään sen laakeriin. Ohjelman kehitysvaiheessa tutkin mahdollisuuksia puhelimella ohjaukseen ja lopulta päädyin käyttämäänä suht valmista ratkaisua (Ardudroid). Olisi ollut melkoinen työmaa lähteä itse siinä vaiheessa opiskelemaan Android-ohjelmointia. Kuvissa näkyy, että en käyttänyt Arduinon runkoa, vaan tein itse AtMega328P:lle piirilevyn. Tila loppui kotelosta kesken, joten piirilevy piti jakaa kahteen osaan. Iso ongelma tuli kun kasasin rungon, sillä pienet kiinanservot hyytyivät painon alla. Tai itse asiassa virtaa ei riittänyt pitää haarukkaa ääriasennossa, vaan mikropiiri rupesi boottailemaan. Paikkasin tilannetta lisäämällä tietokoneen muuntajan virtalähteeksi kovimmassa rasituksessa oleville servoille.",
        url: "/projects/2"
    },
    {
        id:"3",
        name: "Lämpötilaennustin",
        description: "Iot-kurssilla toteutettu Arduino MKR1000-projekti.",
        img:wp,
        content:"Tässä projektissa Arduino hakee tietoa Openweathermapin APIsta ja lähettää itse mittaamansa sekä OWM-datan Googlen Firebaseen. Tässä projektissa otin ensiaskeleet sekä APIen käyttöön että asynkroniseen javascriptiin. jChart piirteli tyhjää kaaviota, joten päädyin vanhanaikaiseen XHMR-pyyntöjen käyttöön. Nyttemmin toki olen tutustunut enemmän async/awaitiin. Mielenkiintoista oli myös saada yksittäisinä lähetetyt tiedot näkymään Firebasessa listana. Firebasen Realtime Databasessa (RTDB) oli kokeilun jälkeen ominaisuus, että mikäli nimi/arvoparissa nimet ovat järjestyksessä lukuja nollasta eteenpäin, tulkitsee RTDB tiedon listana. Siten indeksoimalla pystyi Arduinolta lähettämään tietoa, joka RTDB:ssä näkyy listana.",
        url: "/projects/3"
    },
    {
        id:"4",
        name: "ADC-RasPi",
        description: "IoT-projektina analog-to-digital-convertterin kautta liitetty sensori RasPiin.",
        img: mcp,
        content: "ADC MCP3008 toimintaan tutustumista koulun IoT-kurssilla. Dashboard ja backend olivat vaihtareiden käsialaa, itse postasin Raspilta Pythonilla dataa backendin APIlle. Mielenkiintoisin osuus oli tutkia koodia, jolla Raspi spi.dev kirjaston kautta lukee dataa ADC:lta. SPI-yhteyden toiminta oli c-koodia em. kirjastossa. Kryptinen koodinpätkä johtui ensinnäkin 10bittisestä tiedonsiirrosta, sekä siitä että lukeakseen Masterin oli myös kirjoitettava, vaikka sitten tyhjää jos ei muuta...",
        url: "/projects/4"
    }
]

export default projectsList