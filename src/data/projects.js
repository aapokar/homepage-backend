import React from 'react'
import nopeuspeli from '../images/nopeuspeli.jpg'
import mcp from '../images/mcp3008.jpg'
import myarm from '../images/mearm.jpg'
import wp from '../images/wp.jpg'
import Ennustin from './projectComponents/Ennustin'
import ADCRaspi from './projectComponents/ADCRaspi'
import Nopeuspeli from './projectComponents/Nopeuspeli'
import Mearm from './projectComponents/Mearm'

const projectsList =  

    [{
            id: "1",
            name: "Nopeuspeli",
            description: "Speden Speleistä tuttu nopeutta vaativa peli.",
            img: nopeuspeli,
            codeUrl: "https://github.com/aapokar/SpedenSpeli_Picaxe_basic",
            content: "Projektissa tutustuin PICAXEn kehitysalustaan, tavoitteena oli tehdä BASICilla peli. PICAXE on opetustarkoitukseen kehitetty alusta hyvin rajallisilla ominaisuuksilla. Tässä projektissa haasteita olivat mm. rajalliset muistipaikat(muistaakseni 8 tavua muistia, jokainen erikseen valmiiksi osoitettu) ja estetty/ei-mahdollinen pääsy timer interrupteihin. Teknisesti lamppujen paloaika ja samanaikainen näppäinten kuuntelu tapahtuu PICAXEn pseudomoniajon ja external-interruptien yhdistelmällä.",
            url: "/projects/1"
        },
        {
            id: "2",
            name: "MeArm",
            description: "MeArmista tehty versio AtMega328P-sirulla 2mm akryylista.",
            img: myarm,
            codeUrl: "http://www.techbitar.com/ardudroid-simple-bluetooth-control-for-arduino-and-android.html",
            content: "Alun perin suunnittelin hexapodia, mutta päädyin omaan versioon MeArmista. En nähnyt mielekkäänä kopioida valmiita piirustuksia, vaan itseasiassa punainen lanka olikin itse piirrellä Vertexillä osat ja miettiä miten rakenne saadaan toimimaan. Liitostavat ja joitakin yksityiskohtia toki katsoin suoraan valmiista malleista, mutta mitat ja muodot piirsin kaikki itse. Monissa valmiissa runko näyttäisi olevan kiinnitetty suoraan servon roottoriin kiinni, itse päädyin sorvaamaan alustan alumiinista ja kiinnittämään sen isoon laakeriin. Ohjelman kehitysvaiheessa tutkin mahdollisuuksia puhelimella ohjaukseen ja lopulta päädyin käyttämäänä suht valmista ratkaisua (Ardudroid, linkki lopussa). Tuossa koodissa olikin jo käytännössä kaikki virheentunnistusta myöten valmiina, muutamat yksityiskohdat piti asettaa sopivaksi tähän projektiin. Olisi ollut melkoinen työmaa lähteä itse siinä vaiheessa opiskelemaan Android-ohjelmointia. Kuvissa näkyy, että en käyttänyt Arduinon runkoa, vaan tein itse AtMega328P:lle piirilevyn. Käytännössä kyseessä on siis kuitenkin Arduinon tekniikka, itse tehtynä, ilman ylimääräisiä development boardin komponentteja. Tila loppui kotelosta kesken, joten piirilevy piti jakaa kahteen osaan. Iso ongelma tuli kun kasasin rungon, sillä pienet kiinanservot hyytyivät painon alla. Tai itse asiassa virtaa ei riittänyt pitää haarukkaa ääriasennossa, vaan mikropiiri rupesi boottailemaan jännitteen laskettua n. 4,5V. Paikkasin tilannetta lisäämällä tietokoneen muuntajan virtalähteeksi kovimmassa rasituksessa oleville servoille, väliin tosin tarvitsi säädettävän muuntajan.",
            url: "/projects/2"
        },
        {
            id: "3",
            name: "Lämpötilaennustin",
            description: "Iot-kurssilla toteutettu Arduino MKR1000-projekti.",
            img: wp,
            codeUrl: "https://github.com/aapokar/weatherPredicter_Arduino",
            content: "Tässä projektissa Arduino hakee tietoa Openweathermapin APIsta ja lähettää itse mittaamansa sekä OWM-datan Googlen Firebaseen. Tässä projektissa otin ensiaskeleet sekä APIen käyttöön että asynkroniseen javascriptiin. jChart piirteli tyhjää kaaviota, joten päädyin vanhanaikaiseen XHMR-pyyntöjen käyttöön. Nyttemmin toki olen tutustunut enemmän async/awaitiin. Mielenkiintoista oli myös saada yksittäisinä lähetetyt tiedot näkymään Firebasessa listana. Firebasen Realtime Databasessa (RTDB) oli kokeilun jälkeen ominaisuus, että mikäli nimi/arvoparissa nimet ovat järjestyksessä lukuja nollasta eteenpäin, tulkitsee RTDB tiedon listana. Siten indeksoimalla pystyi Arduinolta lähettämään tietoa, joka RTDB:ssä näkyy listana.",
            url: "/projects/3"
        },
        {
            id: "4",
            name: "ADC-RasPi",
            description: "IoT-projektina analog-to-digital-convertterin kautta liitetty sensori RasPiin.",
            img: mcp,
            codeUrl: null,
            content: "ADC MCP3008 toimintaan tutustumista koulun IoT-kurssilla. Dashboard ja backend olivat vaihtareiden käsialaa, itse postasin Raspilta Pythonilla dataa backendin APIlle. Mielenkiintoisin osuus oli tutkia koodia, jolla Raspi spi.dev kirjaston kautta lukee dataa ADC:lta. SPI-yhteyden toiminta oli c-koodia em. kirjastossa. Kryptinen koodinpätkä johtui ensinnäkin 10bittisestä tiedonsiirrosta, sekä siitä että lukeakseen Masterin oli myös kirjoitettava, vaikka sitten tyhjää jos ei muuta...",
            url: "/projects/4"
        }
    ]


export const selector = (id) => {
    switch(id) {
        case "1":
            return <Nopeuspeli />
        case "2":
            return <Mearm />
        case "3":
            return <Ennustin />
        case "4":
            return <ADCRaspi />
        default:
            return null
    }
     
}

export default projectsList