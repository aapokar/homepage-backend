(this.webpackJsonphp=this.webpackJsonphp||[]).push([[0],{159:function(a,e,t){a.exports=t.p+"static/media/mcp_datasheet.cfe0bc25.png"},160:function(a,e,t){a.exports=t.p+"static/media/ss.08d9aba0.JPG"},161:function(a,e,t){a.exports=t.p+"static/media/ss_cont1.8e19b295.JPG"},162:function(a,e,t){a.exports=t.p+"static/media/ss_cont2.fc6124d6.JPG"},163:function(a,e,t){a.exports=t.p+"static/media/mearm_on.16e48e83.JPG"},164:function(a,e,t){a.exports=t.p+"static/media/mearm_contents.d39280ee.JPG"},165:function(a,e,t){a.exports=t.p+"static/media/polo1.da422af7.JPG"},166:function(a,e,t){a.exports=t.p+"static/media/keittio.c008b653.JPG"},169:function(a,e,t){a.exports=t.p+"static/media/me.47d49092.jpg"},180:function(a,e,t){a.exports=t(338)},338:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),l=t(31),s=t.n(l),o=(t(185),t(23)),r=t.n(o),u=t(26),k=t(36),m=t(342),p=t(18),c=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INIT_PROJECTS":return e.data;default:return a}},v=t(40),d=t.n(v),h=function(){return d.a.get("/api/weather").then((function(a){return a.data}))},y=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INIT_WEATHER":return a.concat(e.data);default:return a}},j=function(){return d.a.get("https://api.icndb.com/jokes/random").then((function(a){return a.data}))},E=function(a){return function(a){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(j());case 2:e=t.sent,a({type:"SET_JOKE",data:e});case 4:case"end":return t.stop()}}))}},f=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_JOKE":return e.data.value.joke;default:return a}},b=function(a){return{type:"SET_STATUS",data:a}},g=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_STATUS":return e.data;default:return a}},P=t(68),A=t.n(P),T=t(69),w=t.n(T),S=t(70),I=t.n(S),x=t(71),C=t.n(x),M=t(72),O=t.n(M),K=t(73),R=t.n(K),N=t(74),_=t.n(N),z=t(350),D=t(351),J=t(171),L=t(153);var G=Object(p.b)((function(a){return{weatherCharts:a.weatherCharts}}))((function(a){var e=a.weatherCharts,t=n.a.useMemo((function(){return[{primary:!0,type:"linear",position:"bottom"},{type:"linear",position:"left"}]}),[]);return n.a.createElement("div",{style:{width:"100%",height:"300px"}},n.a.createElement(L.Chart,{data:e,axes:t,tooltip:!0}))})),H=Object(p.b)((function(a){return{weatherCharts:a.weatherCharts}}))((function(a){return n.a.createElement("div",null,n.a.createElement(z.a,{padded:"very"},n.a.createElement(D.a,{as:"h1"},"L\xe4mp\xf6tilan ennustin"),n.a.createElement(D.a,{as:"h3"},"Iot-kurssilla toteutettu Arduino MKR1000-projekti."),n.a.createElement(J.a,{src:O.a,size:"medium",floated:"left"}),n.a.createElement("p",null,"Projektin tavoitteena oli toteuttaa kokonainen IoT-pipeline sek\xe4 imitoida teko\xe4ly\xe4. Iot:n hy\xf6dyt tulevat sen tuottaamasta datasta ja datan hyd\xf6yntm\xe4misest\xe4. T\xe4ss\xe4 tehty malli on karkea toteutus siihen suuntaan."),n.a.createElement("p",null,"T\xe4ss\xe4 tuotteessa Arduino MKR1000, jossa on integroitu wifi-moduuli, hakee tietoa Openweathermapin APIsta. Arduinoon on kytketty DHT22 l\xe4mp\xf6tilasensori. Arduinolta l\xe4hetet\xe4\xe4n mitattu sek\xe4 OWM-datan Googlen Firebaseen. "),n.a.createElement("p",null,"Dataa hy\xf6dynnet\xe4\xe4n niin, ett\xe4 ker\xe4t\xe4\xe4n verrokkiaineistoa sek\xe4 openweathermapista ett\xe4 itse mitattuna parvekkeelta. Arvioidakseen parvekkeen l\xe4mp\xf6tilaa huomenna, voidaan t\xe4t\xe4 dataa sek\xe4 openweathermapin ennustetta hy\xf6dynt\xe4\xe4 ennusteessa."),n.a.createElement("p",null,"Minulle n\xe4m\xe4 olivat ensiaskeleet sek\xe4 APIen k\xe4ytt\xf6\xf6n ett\xe4 asynkroniseen javascriptiin. jChart piirteli tyhj\xe4\xe4 kaaviota, joten p\xe4\xe4dyin vanhanaikaiseen XHR-pyynt\xf6jen k\xe4ytt\xf6\xf6n. Nyttemmin toki olen tutustunut enemm\xe4n async/awaitiin. Mielenkiintoista oli my\xf6s saada yksitt\xe4isin\xe4 l\xe4hetetyt tiedot n\xe4kym\xe4\xe4n Firebasessa listana. Firebasen Realtime Databasessa (RTDB) oli kokeilun j\xe4lkeen ominaisuus, ett\xe4 mik\xe4li nimi/arvoparissa nimet ovat j\xe4rjestyksess\xe4 lukuja nollasta eteenp\xe4in, tulkitsee RTDB tiedon listana. Siten indeksoimalla pystyi Arduinolta l\xe4hett\xe4m\xe4\xe4n tietoa, joka RTDB:ss\xe4 n\xe4kyy listana."),n.a.createElement("p",null,"Mik\xe4li ennustetta haluttaisiin tarkentaa, tulisi ottaa huomioon my\xf6s esimerkiksi auringon paiste parvekkeelle (valon m\xe4\xe4r\xe4) sek\xe4 muutoksen nopeus. Parveke on suljettu laseilla, joten sis\xe4puolella oleva ilmamassa muuttaa l\xe4mp\xf6\xe4\xe4n yleens\xe4 viiveell\xe4 ulkopuoleen verrattuna."),n.a.createElement("p",null,"Koodi ei ole mit\xe4\xe4n kaunista, eik\xe4 t\xe4ss\xe4 vaiheessa osaaminen riitt\xe4nyt kunnollisen backendin tekemiseen. Koodi kuitenkin ajoi asiansa, sill\xe4 visualisoidaan ker\xe4tty\xe4 dataa."),n.a.createElement("p",null,"Koodi l\xf6ytyy ",n.a.createElement("a",{href:"https://github.com/aapokar/weatherPredicter_Arduino"},"gitHubista"),".")),n.a.createElement(z.a,null,void 0!=a.weatherCharts&&n.a.createElement(G,null)))})),B=t(159),F=t.n(B),U=function(){return n.a.createElement(z.a,{padded:"very"},n.a.createElement(D.a,{as:"h1"},"ADC mcp3008"),n.a.createElement(J.a,{src:w.a,size:"medium",floated:"left"}),n.a.createElement(D.a,{as:"h3"},"Analogisen sensorin liitt\xe4minen Raspberry Pin digitaaliseen porttiin"),n.a.createElement("p",null,"Dashboardin ja palvelimen Apin koodit olivat vaihto-opiskelijoiden k\xe4sialaa, joten en niit\xe4 t\xe4h\xe4n laita"),n.a.createElement("p",null,"Itse perehdyin seuraavaan kahteen riviin pythonia, jotka l\xf6ytyv\xe4t nopeasti netist\xe4"),n.a.createElement("p",null,"r = spi.xfer([1, (8+channel) << 4, 0])"),n.a.createElement("p",null,"adcOut = ((r[1]\\&3) << 8) +r[2]"),n.a.createElement("p",null,"Yhdistettyn\xe4 mcp3008 datasheettiin",n.a.createElement(J.a,{src:F.a,size:"huge",floated:"right"})),n.a.createElement("p",null,"n\xe4hd\xe4\xe4n, ett\xe4 ensimm\xe4inen rivi vastaa datasheetilla Mcu transmitted dataa ja received data tulee 10 bitill\xe4."),n.a.createElement("p",null,"Siten ykk\xf6sell\xe4 aloitetaan transfer, kanava valitaan siirt\xe4m\xe4ll\xe4 valittu kanava tavun vasempaan laitaan ja lopuksi viel\xe4 l\xe4hetet\xe4\xe4n jotakin, jotta transfer pysyy k\xe4ynniss\xe4"),n.a.createElement("p",null,"SPI kirjastoa tutkiessa huomasin mm. ett\xe4 muistia varataan saman verran vastaanottoon kuin l\xe4hetykseen."),n.a.createElement("p",null,"Datasheetiss\xe4 n\xe4kyv\xe4t kolme vastaanotettua tavua. r[0] on merkitykset\xf6n, r[1] :st\xe4 maskataan 6 bitti\xe4 ja kerrotaan 8. T\xe4m\xe4 lis\xe4t\xe4\xe4n tavuun r[2] ja voil\xe1!"))},V=t(160),W=t.n(V),X=t(161),Y=t.n(X),q=t(162),Q=t.n(q),Z=function(){return n.a.createElement(z.a,{padded:"very"},n.a.createElement(D.a,{as:"h1"},"Nopeuspeli"),n.a.createElement(J.a.Group,{size:"medium"},n.a.createElement(J.a,{src:A.a}),n.a.createElement(J.a,{src:W.a})),n.a.createElement(D.a,{as:"h3"},"Speden Speleist\xe4 tuttu nopeutta vaativa peli. Itse tehtyn\xe4 tietenkin. Kolmen tonnin haaste!!"),n.a.createElement(J.a.Group,{size:"large"},n.a.createElement(J.a,{src:Y.a}),n.a.createElement(J.a,{src:Q.a})),n.a.createElement("p",null,"Projektissa tutustuin PICAXEn kehitysalustaan, tavoitteena oli tehd\xe4 BASICilla peli. PICAXE on opetustarkoitukseen kehitetty alusta hyvin rajallisilla ominaisuuksilla. Aloitus on kuitenkin helppoa ja graafinen ohjelmointikin onnistuu. T\xe4ss\xe4 projektissa haasteita olivat mm. rajalliset muistipaikat(muistaakseni 24 tavua muistia, jokainen erikseen valmiiksi osoitettu) ja estetty/ei-mahdollinen p\xe4\xe4sy timer interrupteihin. Pysyv\xe4\xe4 muistia eli eepromia k\xe4ytet\xe4\xe4n highscoren tallennukseen. Teknisesti lamppujen paloaika ja samanaikainen n\xe4pp\xe4inten kuuntelu tapahtuu PICAXEn pseudomoniajon ja external-interruptien yhdistelm\xe4ll\xe4.",n.a.createElement("br",null),n.a.createElement("br",null),"N\xe4in vuosien j\xe4lkeen on toki karmeaa katsoa koodia. Kertoo hyvin siit\xe4, miksi kirjoitetun koodin tulisi olla hyvin dokumentoitua ja selke\xe4\xe4. Projekti oli kuitenkin todella haasteellinen ja sen toimimaan saaminen oli kyll\xe4 v\xe4lill\xe4 ty\xf6n ja tuskan takana. Yll\xe4tt\xe4v\xe4n vaikeaa oli saada toimimaan esimerkiksi sellainen ominaisuus, ett\xe4 peli loppuu, mik\xe4li pelaaja ei paina mit\xe4\xe4n nappia. Vastaavasti pelaaja voi antaa pari eteen ja vasta sittenruveta painelemaan."),n.a.createElement("p",null,"Koodista on olemassa useita eri versioita, jossain vaiheessa lis\xe4ilin viel\xe4 PWM:ll\xe4 pelin mittaan kirkastuvia ledej\xe4. Sis\xe4ll\xe4 on luultavasti t\xe4m\xe4 ",n.a.createElement("a",{href:"https://github.com/aapokar/SpedenSpeli_Picaxe_basic"},"koodi"),"."))},$=t(163),aa=t.n($),ea=t(164),ta=t.n(ea),ia=function(){return n.a.createElement(z.a,{padded:"very"},n.a.createElement(D.a,{as:"h1"},"Mearm DIY"),n.a.createElement(J.a.Group,{size:"medium"},n.a.createElement(J.a,{src:C.a}),n.a.createElement(J.a,{src:aa.a}),n.a.createElement(J.a,{src:ta.a})),n.a.createElement(D.a,{as:"h3"},"MeArmista tehty versio AtMega328P-sirulla 2mm opaalin v\xe4risest\xe4 akryylista."),n.a.createElement("p",null,"Alun perin suunnittelin hexapodia, mutta p\xe4\xe4dyin omaan versioon MeArmista. Molemmista, hexapodista ett\xe4 mearmista, l\xf6ytyy monenlaista toteutusta. En n\xe4hnyt mielekk\xe4\xe4n\xe4 kopioida valmiita piirustuksia, vaan itseasiassa punainen lanka olikin itse piirrell\xe4 Vertexill\xe4 osat ja mietti\xe4 miten rakenne saadaan toimimaan. Liitostavat ja joitakin yksityiskohtia toki katsoin suoraan valmiista malleista, mutta mitat ja muodot piirsin kaikki itse. Monissa valmiissa toteutuksissa runko n\xe4ytt\xe4isi olevan kiinnitetty suoraan servon roottoriin kiinni, itse p\xe4\xe4dyin sorvaamaan alustan alumiinista ja kiinnitt\xe4m\xe4\xe4n sen isoon laakeriin. Servon kiinnitit laakerin alle alumiinikeski\xf6\xf6n, sis\xe4kuvassa n\xe4kyy servon sivusuuntainen lukitus muovilevyll\xe4 tappeihin. Kotelo on muuten jyrsitty MDF-kakusta CNC:ll\xe4. Ohjelman kehitysvaiheessa tutkin mahdollisuuksia puhelimella ohjaukseen ja lopulta p\xe4\xe4dyin k\xe4ytt\xe4m\xe4\xe4n valmista ratkaisua (Ardudroid, linkki lopussa). Tuossa koodissa olikin jo k\xe4yt\xe4nn\xf6ss\xe4 kaikki virheentunnistusta my\xf6ten valmiina, muutamat yksityiskohdat (kuten portit) piti asettaa sopivaksi t\xe4h\xe4n projektiin. Olisi ollut melkoinen ty\xf6maa l\xe4hte\xe4 itse siin\xe4 vaiheessa opiskelemaan Android-ohjelmointia. Kuvissa n\xe4kyy, ett\xe4 en k\xe4ytt\xe4nyt Arduinon valmiita boardeja, vaan tein itse AtMega328P:lle piirilevyn. K\xe4yt\xe4nn\xf6ss\xe4 kyseess\xe4 on siis kuitenkin Arduinon tekniikka, itse tehtyn\xe4, ilman ylim\xe4\xe4r\xe4isi\xe4 development boardin komponentteja. Tila loppui kotelosta kesken, joten piirilevy piti jakaa kahteen osaan.",n.a.createElement("br",null)),n.a.createElement("h4",null,n.a.createElement("i",null,"Lopputulos")),n.a.createElement("p",null,"Iso ongelma tuli kun kasasin rungon, sill\xe4 pienet kiinanservot hyytyiv\xe4t painon alla. Tai ilmeisesti virtaa ei riitt\xe4nyt pit\xe4\xe4 haarukkaa \xe4\xe4riasennossa, vaan mikropiiri rupesi boottailemaan j\xe4nnitteen laskettua n. 4,5V. Paikkasin tilannetta lis\xe4\xe4m\xe4ll\xe4 tietokoneen muuntajan virtal\xe4hteeksi kovimmassa rasituksessa oleville servoille, v\xe4liin tosin tarvitsi s\xe4\xe4dett\xe4v\xe4n muuntajan. T\xe4m\xe4 s\xe4hk\xf6ongelma j\xe4i lopulta ratkaisematta, sill\xe4 oskilloskoopin k\xe4ytt\xf6 ei silloin onnistunut. Servojen k\xe4ytt\xf6virta oli muistaakseni luvattu ~400mA, mutta yleismittarin piikkin\xe4 k\xe4vi yli 800mA. Harmillisesti t\xe4m\xe4 projekti j\xe4i viimeistelem\xe4tt\xe4. Siihen aikaan hain t\xf6it\xe4 syksyksi ja kes\xe4ksi, viimeistelin muita opintoja ja gradua, tein matematiikan sijaisuutta, pelasin ja tuomaroin salibandya..."),n.a.createElement("p",null,"Koodina sovelsin ",n.a.createElement("a",{href:"http://www.techbitar.com/ardudroid-simple-bluetooth-control-for-arduino-and-android.html"},"t\xe4t\xe4"),"."))},na=t(165),la=t.n(na),sa=function(){return n.a.createElement(z.a,{padded:"very"},n.a.createElement(D.a,{as:"h1"},"2003 Polon lukon vaihto"),n.a.createElement(D.a,{as:"h3"},"Repsikan puolen takaoven lukkopes\xe4n vaihto."),n.a.createElement(J.a,{src:I.a,size:"medium",floated:"left"}),n.a.createElement("p",null,'Takaoven lukko alkuun temppuili niin, ett\xe4 avaamiseen ovet piti "avata kaksi kertaa". Kovin kest\xe4v\xe4 ratkaisu t\xe4m\xe4 ei ollut, ja varsinkin l\xe4mp\xf6tilan laskiessa ei ovi l\xe4htenyt en\xe4\xe4 auki.'),n.a.createElement("p",null,"Merkkiliikkeest\xe4 ilmoitettiin, ettei lukkopes\xe4\xe4 l\xf6ydy bulkkivaraosana vaan on pakko ottaa merkkiosa, ovh 240\u20ac. Saksasta tilattuna lukkopes\xe4 taisi maksaa n. 55\u20ac."),n.a.createElement("p",null,"Verhoiluiden irrottaminen ei taaskaan ollut mit\xe4\xe4n lysti\xe4. Todellisuushan ei vastannut videota, mutta idea oli kuitenkin sama. Manuaalissa ja videolla on verhoilun pohjassa ruuvi, t\xe4ss\xe4 Polossa ei verhoilun ruuveja ollut muualla kuin sis\xe4kahvassa. Alhaalta klipsien irroituksen aloitus, lopuksi paneeli nostetaan yl\xf6sp\xe4in."),n.a.createElement(J.a,{src:la.a,size:"medium",floated:"right"}),n.a.createElement("p",null,"Ikkunan kiinnikkeen kanssa oli omat haasteensa, l\xe4hinn\xe4 sen takaisin laittaminen. Irtikopautus onnistui n\xe4tisti, ja lasi teipattiin yl\xe4asentoon ty\xf6skentelyn ajaksi."),n.a.createElement("p",null,"Lukkopes\xe4 tulee n\xe4tisti pellin mukana pois, paikalleen laittaminen olikin oma hommansa. Lukkopes\xe4 kiinnitet\xe4\xe4n peltiverhoiluun ja puolisokkona sihdataan paikalleen omaan ahtaaseen rakoonsa. Itse jouduin v\xe4h\xe4n kopauttamaan ett\xe4 upposi."),n.a.createElement("p",null,"Onni takaovessa oli, ettei siell\xe4 ollut s\xe4hk\xf6ikkunaa. S\xe4hk\xf6ikkunan mekanismi olisi tuonut omat hankaluutensa-"),n.a.createElement("p",null,"Suuntaa antava ",n.a.createElement("a",{href:"https://www.youtube.com/watch?v=ScYiNu2W0Lw"},"video")," aiheesta."))},oa=function(){return n.a.createElement(z.a,{padded:"very"},n.a.createElement(J.a,{src:R.a,size:"medium",floated:"left"}),n.a.createElement(D.a,{as:"h1"},"Laatikosto eteiseen"),n.a.createElement(D.a,{as:"h3"},"Eteiseen mittaty\xf6n\xe4 tehty laatikosto/kenk\xe4teline"),n.a.createElement("p",null,"Uuteen asuntoon muuttaessa 2016 tarvittiin uusia huonekaluja. Ongelma t\xe4ss\xe4 uudessa asunnossa oli ensinn\xe4kin se, ett\xe4 tarkoitus on asua vain muutaman vuoden, sek\xe4 tietenkin erikoiset mitat."),n.a.createElement("p",null,"Tietyille mitoille ostetut huonekalut eiv\xe4t v\xe4ltt\xe4m\xe4tt\xe4 sovi kovin hyvin seuraavaan asuntoon ja is\xe4nn\xe4ll\xe4 oli sopivasti virtaa ylim\xe4\xe4r\xe4isen\xe4. Ajatuksena oli tehd\xe4 eteiseen s\xe4ilytystaso, muutama laatikko ja sain my\xf6s ylipuhuttua laatikoston alaosaan lis\xe4tilaa kengille, jotka eiv\xe4t meinanneet mahtua kuvassa n\xe4kyv\xe4\xe4n peilikaappiin."),n.a.createElement("p",null,'Ajatuksena oli tehd\xe4 omaper\xe4ist\xe4 muotoilua, jossa on viel\xe4 v\xe4h\xe4n "luontoa j\xe4ljell\xe4", niinkuin sanotaan. T\xe4ss\xe4 tapauksessa laatikoston runkoon k\xe4ytin vanhaa koivulankkua, jonka s\xe4rm\xe4\xe4m\xe4tt\xf6m\xe4t pinnat saisivat j\xe4\xe4d\xe4 selv\xe4sti n\xe4kyviin. Koivulankku oli tietysti kuivaa kuin alkoholistin kurkku Saharassa. Meinasin kesken kaiken tehd\xe4 koko homman uusiksi, sill\xe4 h\xf6yl\xe4tess\xe4 lankut tietenkin suoristumisen sijaan k\xe4yristyiv\xe4t milloin mitenkin. Sovitukset kanteen ja v\xe4lipohjaan tein jyrsimell\xe4 ja tapeilla. Kierojen lankkujen ansiosta kes\xe4ll\xe4 joku laatikko saattaa v\xe4h\xe4n kanittaa...'),n.a.createElement("p",null,'Muotoilun puolesta oppi oli kovaa. N\xe4in j\xe4lkik\xe4teen katsottuna tuote saattaa olla hiukan "overengineered", sill\xe4 kun kerroin tuttavalleni joka oli k\xe4ym\xe4ss\xe4 ett\xe4 tuo on minun tekem\xe4, kysymys kuului: "Ai nuo molemmat??" Muotoilussa t\xe4ss\xe4kin tapauksessa v\xe4hemm\xe4n olisi saattanut olla enemm\xe4n, mutta ainakin tuote toimii siin\xe4 mihin se on tarkoitettu!'))},ra=t(166),ua=t.n(ra),ka=function(){return n.a.createElement(z.a,{padded:"very"},n.a.createElement(D.a,{as:"h1"},"Keitti\xf6n tasollinen kaappi."),n.a.createElement(D.a,{as:"h3"},"Keitti\xf6\xf6n lasku- ja s\xe4ilytystilaa, tee se itse tietenkin."),n.a.createElement(J.a,{src:_.a,size:"medium",floated:"left"}),n.a.createElement("p",null,"Muutettuamme juuri remontoituun vuokra-asuntoon tuli tarve eteisen laatikoston lis\xe4ksi saada lasku- ja s\xe4ilytystilaa keitti\xf6\xf6n. Tason pit\xe4isi olla mittaan tehty ja sopia muuhun kalustukseen."),n.a.createElement("p",null,"No mik\xe4s sen parempaa kuin itse l\xe4hte\xe4 kyseist\xe4 projektia suunnittelemaan. Materiaalina on ylij\xe4\xe4m\xe4tavaraa: Runkona mm. pystyviiluparkettia, olisiko ollut Saima-mallistoa. Aika raskas runko tuli, mutta saipahan nurkissa py\xf6rinytt\xe4 tavaraa pois varastoista."),n.a.createElement("p",null,"Suunnittelussa katsottiin halutut mitat ja mietittiin sopivuus kiinteisiin kalusteisiin. Maalin v\xe4rin valinta oli yll\xe4tt\xe4v\xe4n vaikea, vaikka kannoimme maaliliikkeest\xe4 v\xe4rikortteja useampaankin otteeseen. Eri valossa pinta n\xe4ytti aina erilt\xe4 ja valkoisia s\xe4vyj\xe4h\xe4n oli tietysti kymmenitt\xe4in. Lopulta pintamaalin v\xe4ri saatiin p\xe4\xe4tetty\xe4 ja muilla tasoilla n\xe4kyv\xe4\xe4 pintaa l\xe4hdettiin imitoimaan DC-FIXill\xe4."),n.a.createElement(J.a,{src:ua.a,size:"medium",floated:"right"}),n.a.createElement("p",null,"T\xe4m\xe4 projekti meni silloin ammattitaidon kehitt\xe4misest\xe4. Samalla tuli tutustuttua paremmin tarkistussahaan (eli sirkkeliin) joka konesalista l\xf6ytyi. Katkaisuohjain oli noin 1,5 astetta vinossa... Suoristamiseen menikin sitten yksi iltap\xe4iv\xe4 hyvin rattoisasti."),n.a.createElement("p",null,"DC-FIX tuntuu hyvin kest\xe4v\xe4n k\xe4ytt\xf6\xe4 ja kulutusta keitti\xf6n tason pintana. Voin suositella! Paikalleen asentaminenkin sujuun n\xe4pp\xe4r\xe4sti, kun pala on leikattu siististi mittaan ja kulmat suunniteltu hyvin. Sulkaa kun ei ollut niin paineltiin kirjalla kuplat pois."),n.a.createElement("p",null,"Aivan samanlaisia vetimi\xe4, pintaa tai maalia ei tietenk\xe4\xe4n l\xf6ytynyt kuin mit\xe4 kiinteiss\xe4 kalusteissa on k\xe4ytetty. Pulverimaalaus on tietenkin aina erin\xe4k\xf6inen kuin telalla maalattu. Taso sopii varsin hyvin keitti\xf6\xf6n, onhan se mittaan tehty, ja s\xe4vyerot h\xe4ipyv\xe4t n\xe4kyvist\xe4 koska taso on eri puolella keitti\xf6t\xe4 kuin kiinte\xe4t kalusteet."))},ma=[{id:"1",name:"Nopeuspeli",description:"Speden Speleist\xe4 tuttu nopeutta vaativa peli.",img:A.a,codeUrl:"https://github.com/aapokar/SpedenSpeli_Picaxe_basic",content:"Projektissa tutustuin PICAXEn kehitysalustaan, tavoitteena oli tehd\xe4 BASICilla peli. PICAXE on opetustarkoitukseen kehitetty alusta hyvin rajallisilla ominaisuuksilla. T\xe4ss\xe4 projektissa haasteita olivat mm. rajalliset muistipaikat(muistaakseni 8 tavua muistia, jokainen erikseen valmiiksi osoitettu) ja estetty/ei-mahdollinen p\xe4\xe4sy timer interrupteihin. Teknisesti lamppujen paloaika ja samanaikainen n\xe4pp\xe4inten kuuntelu tapahtuu PICAXEn pseudomoniajon ja external-interruptien yhdistelm\xe4ll\xe4.",url:"/projects/1"},{id:"2",name:"MeArm",description:"MeArmista tehty versio AtMega328P-sirulla 2mm akryylista.",img:C.a,codeUrl:"http://www.techbitar.com/ardudroid-simple-bluetooth-control-for-arduino-and-android.html",content:"Alun perin suunnittelin hexapodia, mutta p\xe4\xe4dyin omaan versioon MeArmista. En n\xe4hnyt mielekk\xe4\xe4n\xe4 kopioida valmiita piirustuksia, vaan itseasiassa punainen lanka olikin itse piirrell\xe4 Vertexill\xe4 osat ja mietti\xe4 miten rakenne saadaan toimimaan. Liitostavat ja joitakin yksityiskohtia toki katsoin suoraan valmiista malleista, mutta mitat ja muodot piirsin kaikki itse. Monissa valmiissa runko n\xe4ytt\xe4isi olevan kiinnitetty suoraan servon roottoriin kiinni, itse p\xe4\xe4dyin sorvaamaan alustan alumiinista ja kiinnitt\xe4m\xe4\xe4n sen isoon laakeriin. Ohjelman kehitysvaiheessa tutkin mahdollisuuksia puhelimella ohjaukseen ja lopulta p\xe4\xe4dyin k\xe4ytt\xe4m\xe4\xe4n\xe4 suht valmista ratkaisua (Ardudroid, linkki lopussa). Tuossa koodissa olikin jo k\xe4yt\xe4nn\xf6ss\xe4 kaikki virheentunnistusta my\xf6ten valmiina, muutamat yksityiskohdat piti asettaa sopivaksi t\xe4h\xe4n projektiin. Olisi ollut melkoinen ty\xf6maa l\xe4hte\xe4 itse siin\xe4 vaiheessa opiskelemaan Android-ohjelmointia. Kuvissa n\xe4kyy, ett\xe4 en k\xe4ytt\xe4nyt Arduinon runkoa, vaan tein itse AtMega328P:lle piirilevyn. K\xe4yt\xe4nn\xf6ss\xe4 kyseess\xe4 on siis kuitenkin Arduinon tekniikka, itse tehtyn\xe4, ilman ylim\xe4\xe4r\xe4isi\xe4 development boardin komponentteja. Tila loppui kotelosta kesken, joten piirilevy piti jakaa kahteen osaan. Iso ongelma tuli kun kasasin rungon, sill\xe4 pienet kiinanservot hyytyiv\xe4t painon alla. Tai itse asiassa virtaa ei riitt\xe4nyt pit\xe4\xe4 haarukkaa \xe4\xe4riasennossa, vaan mikropiiri rupesi boottailemaan j\xe4nnitteen laskettua n. 4,5V. Paikkasin tilannetta lis\xe4\xe4m\xe4ll\xe4 tietokoneen muuntajan virtal\xe4hteeksi kovimmassa rasituksessa oleville servoille, v\xe4liin tosin tarvitsi s\xe4\xe4dett\xe4v\xe4n muuntajan.",url:"/projects/2"},{id:"3",name:"L\xe4mp\xf6tilaennustin",description:"Iot-kurssilla toteutettu Arduino MKR1000-projekti.",img:O.a,codeUrl:"https://github.com/aapokar/weatherPredicter_Arduino",content:"T\xe4ss\xe4 projektissa Arduino hakee tietoa Openweathermapin APIsta ja l\xe4hett\xe4\xe4 itse mittaamansa sek\xe4 OWM-datan Googlen Firebaseen. T\xe4ss\xe4 projektissa otin ensiaskeleet sek\xe4 APIen k\xe4ytt\xf6\xf6n ett\xe4 asynkroniseen javascriptiin. jChart piirteli tyhj\xe4\xe4 kaaviota, joten p\xe4\xe4dyin vanhanaikaiseen XHMR-pyynt\xf6jen k\xe4ytt\xf6\xf6n. Nyttemmin toki olen tutustunut enemm\xe4n async/awaitiin. Mielenkiintoista oli my\xf6s saada yksitt\xe4isin\xe4 l\xe4hetetyt tiedot n\xe4kym\xe4\xe4n Firebasessa listana. Firebasen Realtime Databasessa (RTDB) oli kokeilun j\xe4lkeen ominaisuus, ett\xe4 mik\xe4li nimi/arvoparissa nimet ovat j\xe4rjestyksess\xe4 lukuja nollasta eteenp\xe4in, tulkitsee RTDB tiedon listana. Siten indeksoimalla pystyi Arduinolta l\xe4hett\xe4m\xe4\xe4n tietoa, joka RTDB:ss\xe4 n\xe4kyy listana.",url:"/projects/3"},{id:"4",name:"ADC-RasPi",description:"IoT-projektina analog-to-digital-convertterin kautta liitetty sensori RasPiin.",img:w.a,codeUrl:null,content:"ADC MCP3008 toimintaan tutustumista koulun IoT-kurssilla. Dashboard ja backend olivat vaihtareiden k\xe4sialaa, itse postasin Raspilta Pythonilla dataa backendin APIlle. Mielenkiintoisin osuus oli tutkia koodia, jolla Raspi spi.dev kirjaston kautta lukee dataa ADC:lta. SPI-yhteyden toiminta oli c-koodia em. kirjastossa. Kryptinen koodinp\xe4tk\xe4 johtui ensinn\xe4kin 10bittisest\xe4 tiedonsiirrosta, sek\xe4 siit\xe4 ett\xe4 lukeakseen Masterin oli my\xf6s kirjoitettava, vaikka sitten tyhj\xe4\xe4 jos ei muuta...",url:"/projects/4"},{id:"5",name:"Lukon vaihto",description:"2003 Polo takaoven lukon vaihto",img:I.a,codeUrl:null,content:"K\xe4vip\xe4 niin, ett\xe4 hyvin palvelleesta Polosta alkoi repsikan puolen takaovi j\xe4\xe4m\xe4\xe4n lukkoon. Lukon vaihto oli p\xe4iv\xe4n homma.",url:"/projects/5"},{id:"6",name:"Eteisen laatikosto",description:"Eteiseen laatikosto ja lis\xe4tilaa kengille.",img:R.a,codeUrl:null,content:"Laatikosto.",url:"/projects/6"},{id:"7",name:"Keitti\xf6n taso",description:"Keitti\xf6n kalustoon sopiva taso ja kaappi.",img:_.a,codeUrl:null,content:"Laatikosto.",url:"/projects/7"}],pa=ma,ca=t(46),va=t(349),da=t(37),ha=function(){var a=Object(i.useState)(""),e=Object(ca.a)(a,2),t=e[0],l=e[1],s=function(a){l(a)};return n.a.createElement(va.a,{stackable:!0,fluid:!0,widths:5},n.a.createElement(va.a.Item,{as:u.b,to:"/",active:"home"===t,onClick:function(){return s("home")}},n.a.createElement(da.a,{name:"home"})),n.a.createElement(va.a.Item,{as:u.b,to:"/kuka",active:"kuka"===t,onClick:function(){return s("kuka")}},"Kuka"),n.a.createElement(va.a.Item,{as:u.b,to:"/projektit",active:"projektit"===t,onClick:function(){return s("projektit")}},"Projektit"),n.a.createElement(va.a.Item,{as:u.b,to:"/joke",active:"joke"===t,onClick:function(){return s("joke")}},"Viihde"),n.a.createElement(va.a.Item,{as:u.b,to:"/about",active:"about"===t,onClick:function(){return s("about")}},"About"))},ya=t(169),ja=t.n(ya),Ea=function(){return n.a.createElement("div",null,n.a.createElement(D.a,{size:"large"},"Aapo K\xe4rki"),n.a.createElement(J.a,{src:ja.a,size:"small",rounded:!0,floated:"left"}),n.a.createElement("p",null,"Tieto- ja viestint\xe4tekniikan opiskelija, kasvatustieteiden maisteri, luokanopettaja, teknisen ty\xf6n opettaja, urheiluhieroja."),n.a.createElement("p",null,"Ty\xf6kokemusta mm. Teknisen ty\xf6n opettajana Lahden l\xe4hist\xf6ll\xe4, pienemm\xe4n paikkakunnan koulussa 3v. Teknisen ty\xf6n opettajan sijaisuuksia useassa eri koulussa, mm. Joensuussa ja Savonlinnassa. Kokemusta my\xf6s Fazerin karkkitehtaalta, Amazonin keskusvarastolta(Leipzigissa), hierojayritt\xe4j\xe4n\xe4 franchiseketjussa. Kes\xe4isin mm. ollut kunnan hommissa ja keikkasiivousta L&T:lla, sis\xe4lt\xe4en mm. ikkunanpesuja ja lattioiden vahauksia. "),n.a.createElement("p",null,"Harrastuksiin aina kuulunut vahvasti salibandy ja jalkapallo. Meriittin\xe4 hopeamitali pelaajavalmentajana Saksan salibandyn Bundesliigasta. Suomen Cupin pikkufinaalin voitto LeBassa, legendaarisen jalkapalloturnauksen Leka-cupin voitto Juvalla ja Jussin tuvan katus\xe4hlyn mestaruus Pontuksella. Ja tietysti Hipan nousu Lahden Korttelin Mestigaan salibandyssa. Nykyisin my\xf6s 2. valmentajana SB Heinolan edustusjoukkueessa(2.div)."),n.a.createElement("p",null,"Saksassa asutun vuoden hedelmin\xe4 my\xf6s kielitaitona englantia ja tietysti saksaa."),n.a.createElement("p",null,"Jos on asiaa sivustosta/projekteista tai haluat vaikka tarjota t\xf6it\xe4, email on muotoa etunimi.sukunimi ja p\xe4\xe4tteen\xe4 student.lab.fi"),n.a.createElement("a",{href:"https://www.linkedin.com/in/aapokarki",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(da.a,{name:"linkedin",color:"blue",size:"huge"})),n.a.createElement("a",{href:"https://github.com/aapokar",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(da.a,{name:"github",size:"huge",color:"grey"})," "))},fa=t(345),ba=Object(p.b)((function(a){return{projects:a.projects}}))((function(a){var e=a.projects.map((function(a){return n.a.createElement(fa.a,{as:u.b,to:a.url,key:a.id},n.a.createElement(J.a,{src:a.img,wrapped:!0,ui:!1}),n.a.createElement(fa.a.Content,null,n.a.createElement(fa.a.Header,null,a.name),n.a.createElement(fa.a.Description,null,a.description)))}));return n.a.createElement(z.a,{textAlign:"center",padded:"very"},n.a.createElement(fa.a.Group,null,e))})),ga=function(a){return n.a.createElement("div",null,n.a.createElement(D.a,{as:"h1",icon:!0,textAlign:"center"},n.a.createElement(da.a,{name:"home"}),"Tervetuloa kotisivuilleni!"),n.a.createElement(z.a,{textAlign:"center",color:"grey"},n.a.createElement("p",null,"Sivusto on ennen kaikkea webbiohjelmointiportfolio. Projekteista l\xf6ytyy tosin paljon muutakin!")))},Pa=t(346),Aa=t(344),Ta=function(){var a=Object(i.useState)(-1),e=Object(ca.a)(a,2),t=e[0],l=e[1];return n.a.createElement("div",null,n.a.createElement("h1",null,"Tietoa sivustosta"),n.a.createElement("p",null,"Sivusto on rakennettu Reactilla. Muotoilut on tehty Semantic UIn React-yhteensopivilla komponenteilla. Semantic UI vastaa my\xf6s responsiivisuudesta. Muita kirjastoja: Redux, Redux-React, React-router."),n.a.createElement("p",null,"Backend toteutettu Nodella."),n.a.createElement("p",null,"Viihdepuolella tarinoita(ei vitsej\xe4) haetaan Chuck Norris-tarinoiden tietokannasta, en ole keksinyt kaikkia itse..."),n.a.createElement(Pa.a,{styled:!0,fluid:!0},n.a.createElement(Pa.a.Title,{active:0===t,index:0,onClick:function(a,e){var i=e.index;l(t===i?-1:i)}},n.a.createElement(da.a,{name:"dropdown"}),"Tarkempaa tietoa sivun toteutuksesta"),n.a.createElement(Pa.a.Content,{active:0===t},n.a.createElement("ul",null,n.a.createElement("li",null,"Reactin toiminnoista sivu k\xe4ytt\xe4\xe4 useEffecti\xe4 sek\xe4 useStatea. Statehook on esimerkiksi t\xe4ll\xe4 About-sivulla avaamassa ja sulkemassa t\xe4t\xe4 Accordionia. useEffectill\xe4 pidet\xe4\xe4n kirjaa mm. painikepelin pisteist\xe4 ja alustetaan Chuck Norris-tarina."),n.a.createElement("li",null,"Redux-Reactilla saadaan reducerit yhdistetty\xe4 ja tuotua storesta Providerilla komponenteille. T\xe4ss\xe4 appissa on omat reducerit painikepelille, ChuckNorris-tarinalle, ilmoitukselle sek\xe4 projektien tilalle."),n.a.createElement("li",null,"Projektien kuviin pit\xe4isi saada klikattava zoomi. Lis\xe4t\xe4\xe4n kunhan ehdit\xe4\xe4n."),n.a.createElement("li",null,"Koodit l\xf6ytyv\xe4t tietenkin ",n.a.createElement("a",{href:"https://github.com/aapokar",target:"_blank",rel:"noopener noreferrer"}," githubista.",n.a.createElement(da.a,{name:"github",size:"large",color:"blue"})," "))))),n.a.createElement(z.a,{color:"blue"},n.a.createElement(D.a,{as:"h1"},"Known bugs"),n.a.createElement(Aa.a,null,n.a.createElement(Aa.a.Item,null,n.a.createElement(Aa.a.Icon,{name:"bug"}),n.a.createElement(Aa.a.Content,null,n.a.createElement(Aa.a.Header,null,"Viesti painikepeliss\xe4 on toteutettu setTimeOutilla, ei kest\xe4 nopeita klikkauksia."),n.a.createElement("i",null,"Korjattu j\xe4\xe4m\xe4\xe4n n\xe4kyviin."))),n.a.createElement(Aa.a.Item,null,n.a.createElement(Aa.a.Icon,{name:"bug"}),n.a.createElement(Aa.a.Content,null,n.a.createElement(Aa.a.Header,null,"Reititys ei toimi _viel\xe4_ backendilt\xe4 frontendin polkuihin. Toimii pelk\xe4ss\xe4 frontendiss\xe4."),n.a.createElement("i",null,"Korjattu reititt\xe4m\xe4\xe4n kaikki aloitussivulle."))))))},wa=t(348),Sa=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"NEW_NOTIFICATION":return e.message;case"CLEAR":return"";default:return a}},Ia=function(a){return d.a.put("/api/game",a).then((function(a){return a.data}))},xa=t(347),Ca=Object(p.b)((function(a){return{message:a.message}}))((function(a){var e=a.message;return null===e||""===e?null:"neutral"===e[1]?n.a.createElement(xa.a,{compact:!0},n.a.createElement(xa.a.Header,null,"Ei voittoa t\xe4ll\xe4 kertaa."),n.a.createElement("p",null,n.a.createElement("b",null,"Seuraavaan voittoon ",e[0]," klikkausta."))):n.a.createElement(xa.a,{positive:!0,compact:!0},n.a.createElement(xa.a.Header,null,"Voitit juuri ",e," pistett\xe4 ja ne lis\xe4ttiin pistetilanteeseesi!"),n.a.createElement("p",null,n.a.createElement("b",null,"Seuraavaan voittoon 10 klikkausta.")))})),Ma={setJoke:E,setStatus:b,newNotification:function(a){return function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"NEW_NOTIFICATION",message:""}),t.next=3,r.a.awrap(e({type:"NEW_NOTIFICATION",message:a}));case 3:case"end":return t.stop()}}))}}},Oa=Object(p.b)((function(a){return{joke:a.joke,score:a.score}}),Ma)((function(a){var e=Object(i.useState)(-1),t=Object(ca.a)(e,2),l=t[0],s=t[1];return n.a.createElement("div",null,n.a.createElement(z.a,{textAlign:"center"},n.a.createElement(wa.a,{icon:!0,onClick:function(e){a.setJoke()}},"Paina t\xe4st\xe4 ja lis\xe4\xe4 viihtymist\xe4si!",n.a.createElement("br",null),n.a.createElement(da.a,{name:"random",loading:!0})),n.a.createElement("p",null,a.joke)),n.a.createElement(z.a,{textAlign:"center"},n.a.createElement("div",null,n.a.createElement(D.a,{as:"h1"},"Painikepeli"),0===a.score?n.a.createElement("div",null,n.a.createElement("h2",null,"Valitettavasti pisteesi loppuivat."),n.a.createElement(wa.a,{onClick:function(){a.setStatus(20)}}," Aloita alusta ")):n.a.createElement(wa.a,{icon:!0,onClick:function(e){var t={score:a.score};Ia(t).then((function(e){e.prize?a.newNotification(e.prize):a.newNotification([e.next,"neutral"]),window.localStorage.setItem("scorePoints",e.score),a.setStatus(e.score)}))}},"Paina t\xe4st\xe4 pelataksesi!",n.a.createElement("br",null),n.a.createElement(da.a,{name:"wrench",loading:!0})),n.a.createElement("h2",null,"Pistetilanteesi: ",a.score),n.a.createElement(Ca,null))),n.a.createElement(z.a,{raised:!0,textAlign:"center"},n.a.createElement(Pa.a,{styled:!0,fluid:!0},n.a.createElement(Pa.a.Title,{active:0===l,index:0,onClick:function(a,e){var t=e.index;s(l===t?-1:t)}},n.a.createElement(D.a,{as:"h2"},n.a.createElement(da.a,{name:"dropdown"}),"Painikepelin tiedot")),n.a.createElement(Pa.a.Content,{active:0===l},n.a.createElement(D.a,{as:"h3"},"Painikepeli on tehty seuraavan teht\xe4v\xe4nannon perusteella."),n.a.createElement("p",null,"Tavoitteena on toteuttaa yksinkertainen moninpeli, jota pelataan painamalla painiketta. Painikkeen painaminen maksaa yhden pisteen, joita pelaajalla on l\xe4ht\xf6tilanteessa 20."),n.a.createElement("p",null,"Painiketta voi painaa vain, jos pelaajan pistesaldo on positiivinen. Pelaajan painettua painiketta h\xe4nelle ilmoitetaan mahdollisesta voitosta."),n.a.createElement("p",null,"Pelaaja voittaa",n.a.createElement("br",null),"\u25cf 5 pistett\xe4 joka 10. painallus",n.a.createElement("br",null),"\u25cf 40 pistett\xe4 joka 100. painallus",n.a.createElement("br",null),"\u25cf 250 pistett\xe4 joka 500. painallus.",n.a.createElement("br",null)),n.a.createElement("p",null,"Pelaaja voi voittaa enimmill\xe4\xe4n yhden palkinnon yhdell\xe4 painalluksella. Mik\xe4li samalla painalluksella voittaisi yll\xe4 olevan listan mukaan monta palkintoa, voittaa pelaaja n\xe4ist\xe4 suurimman. Painiketta painaessa pelaaja ei tied\xe4, mik\xe4 laskurin nykyinen arvo on, sill\xe4 kaikki pelaajat kasvattavat saman laskurin arvoa."),n.a.createElement("p",null,"Kun pelaaja painaa painiketta, tapahtuu seuraavat asiat:",n.a.createElement("br",null),"1. Pelaajalta v\xe4hennet\xe4\xe4n yksi piste.",n.a.createElement("br",null),"2. Laskurin arvo kasvaa yhdell\xe4.",n.a.createElement("br",null),"3. Mik\xe4li laskurin arvolle osuu palkinto (esim. laskurin arvolla 500 voittaa 250 pistett\xe4), ilmoitetaan t\xe4st\xe4 pelaajalle ja lis\xe4t\xe4\xe4n voitto pelaajan pistesaldoon.",n.a.createElement("br",null),"4. Pelaajalle n\xe4ytet\xe4\xe4n vaadittujen painallusten m\xe4\xe4r\xe4 seuraavaan voittavaan arvoon.",n.a.createElement("br",null)),n.a.createElement("p",null,"Pelin k\xe4ytt\xf6liittym\xe4ss\xe4 tulee n\xe4ky\xe4 pelaajan pistesaldo. Pelitilanteen tulee s\xe4ily\xe4, vaikka selaimen (mik\xe4li selainsovellus) tai sovelluksen (mik\xe4li mobiilisovellus) k\xe4ynnist\xe4\xe4 uudelleen. Mik\xe4li pelaajan pistesaldo on 0, tarjotaan pelaajalle mahdollisuus aloittaa alusta, jolloin h\xe4nen pistesaldonsa palautetaan j\xe4lleen arvoon 20. Sovellus koostuu kahdesta osasta: k\xe4ytt\xf6liittym\xe4st\xe4 ja palvelimesta.")))))}));var Ka={initializeProjects:function(a){return{type:"INIT_PROJECTS",data:a}},initializeWeatherData:function(a){return function(a){var e,t,i,n,l,s,o,u,k;return r.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,r.a.awrap(h());case 2:e=m.sent,t=e.data.dht,i=e.data.owm,n=e.data.current,l=function(){for(var a=0,e=0;e<t.length;e++)a=a+t[e]-i[e];return a}(),s=n+l/t.length,o=function(){for(var a=[],e=0;e<t.length;e++)a[e]=t[e]-i[e];return a}(),console.log(o),u=t.concat(s).map((function(a,e){return[e,a]})),k=i.map((function(a,e){return[e,a]})),a({type:"INIT_WEATHER",data:[{label:"Dht-22",data:u},{label:"OpenWeatherMap",data:k}]});case 14:case"end":return m.stop()}}))}},setJoke:E,setStatus:b},Ra=Object(p.b)((function(a){return{projects:a.projects}}),Ka)((function(a){Object(i.useEffect)((function(){a.initializeProjects(pa)}),[]),Object(i.useEffect)((function(){a.setJoke()}),[]),Object(i.useEffect)((function(){r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(a.initializeWeatherData());case 2:case"end":return e.stop()}}))}),[]),Object(i.useEffect)((function(){var e=window.localStorage.getItem("scorePoints");if(e){var t=e;a.setStatus(t)}else window.localStorage.setItem("scorePoints",20),a.setStatus(20)}),[]);var e=function(a){return function(a){switch(a){case"1":return n.a.createElement(Z,null);case"2":return n.a.createElement(ia,null);case"3":return n.a.createElement(H,null);case"4":return n.a.createElement(U,null);case"5":return n.a.createElement(sa,null);case"6":return n.a.createElement(oa,null);case"7":return n.a.createElement(ka,null);default:return null}}(a)};return(n.a.createElement(u.a,null,n.a.createElement(m.a,null,n.a.createElement(ha,null),n.a.createElement(k.c,null,n.a.createElement(k.a,{path:"/about"},n.a.createElement(Ta,null)),n.a.createElement(k.a,{path:"/kuka"},n.a.createElement(Ea,null)),n.a.createElement(k.a,{path:"/joke"},n.a.createElement(Oa,null)),n.a.createElement(k.a,{path:"/projektit"},n.a.createElement("h1",null,"Menneit\xe4 projekteja vuosien varrelta"),n.a.createElement(ba,null)),n.a.createElement(k.a,{exact:!0,path:"/projects/:id",render:function(a){var t=a.match;return n.a.createElement("div",null,e(t.params.id))}}),n.a.createElement(k.a,{exact:!0,path:"/"},n.a.createElement(ga,null))))))})),Na=t(47),_a=t(170),za=Object(Na.c)({projects:c,message:Sa,joke:f,score:g,weatherCharts:y}),Da=Object(Na.d)(za,Object(Na.a)(_a.a));s.a.render(n.a.createElement(p.a,{store:Da},n.a.createElement(Ra,null)),document.getElementById("root"))},68:function(a,e,t){a.exports=t.p+"static/media/nopeuspeli.f667b80d.jpg"},69:function(a,e,t){a.exports=t.p+"static/media/mcp3008.7a2a0e96.jpg"},70:function(a,e,t){a.exports=t.p+"static/media/polo0.02fc54d1.JPG"},71:function(a,e,t){a.exports=t.p+"static/media/mearm.b643eb11.jpg"},72:function(a,e,t){a.exports=t.p+"static/media/wp.246fdb28.jpg"},73:function(a,e,t){a.exports=t.p+"static/media/laatikosto.450a5003.JPG"},74:function(a,e,t){a.exports=t.p+"static/media/taso.212fcec9.JPG"}},[[180,1,2]]]);
//# sourceMappingURL=main.d8e6488f.chunk.js.map