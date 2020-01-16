import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import wp from '../../images/wp.jpg'


const Ennustin = () => {

return (
    <div>
        <Header as="h1">Lämpötilan ennustin</Header>
        <Header as="h3">Iot-kurssilla toteutettu Arduino MKR1000-projekti.</Header>
        <Image src={wp} size='medium' floated='left'/>
        <p>Projektin tavoitteena oli toteuttaa kokonainen IoT-pipeline sekä imitoida tekoälyä. Iot:n hyödyt tulevat sen tuottaamasta datasta ja datan hydöyntmämisestä. Tässä tehty malli on karkea toteutus siihen suuntaan.</p>
        <p>Tässä tuotteessa Arduino MKR1000, jossa on integroitu wifi-moduuli, hakee tietoa Openweathermapin APIsta. Arduinoon on kytketty DHT22 lämpötilasensori. Arduinolta lähetetään mitattu sekä OWM-datan Googlen Firebaseen. </p>
        <p>Dataa hyödynnetään niin, että kerätään verrokkiaineistoa sekä openweathermapista että itse mitattuna parvekkeelta. Arvioidakseen parvekkeen lämpötilaa huomenna, voidaan tätä dataa sekä openweathermapin ennustetta hyödyntää ennusteessa.</p>
        <p>Minulle nämä olivat ensiaskeleet sekä APIen käyttöön että asynkroniseen javascriptiin. jChart piirteli tyhjää kaaviota, joten päädyin vanhanaikaiseen XMR-pyyntöjen käyttöön. Nyttemmin toki olen tutustunut enemmän async/awaitiin. Mielenkiintoista oli myös saada yksittäisinä lähetetyt tiedot näkymään Firebasessa listana. Firebasen Realtime Databasessa (RTDB) oli kokeilun jälkeen ominaisuus, että mikäli nimi/arvoparissa nimet ovat järjestyksessä lukuja nollasta eteenpäin, tulkitsee RTDB tiedon listana. Siten indeksoimalla pystyi Arduinolta lähettämään tietoa, joka RTDB:ssä näkyy listana.</p>
        <p>Mikäli ennustetta haluttaisiin tarkentaa, tulisi ottaa huomioon myös esimerkiksi auringon paiste parvekkeelle (valon määrä) sekä muutoksen nopeus. Parveke on suljettu laseilla, joten sisäpuolella oleva ilmamassa muuttaa lämpöään yleensä viiveellä ulkopuoleen verrattuna</p>
        <p>Koodi ei ole mitään kaunista, eikä tässä vaiheessa osaaminen riittänyt kunnollisen backendin tekemiseen. Koodi kuitenkin ajoi asiansa, sillä visualisoidaan kerättyä dataa.</p>
        <p>Koodi löytyy <a href="https://github.com/aapokar/weatherPredicter_Arduino">gitHubista</a>.</p>
    </div>
)

}

export default Ennustin