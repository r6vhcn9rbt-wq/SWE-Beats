
/*
    SWE BEATS - JAVASCRIPT

    I den här filen har jag skrivit JavaScript-koden
    som används på artistsidorna på min hemsida.

    Jag ville göra hemsidan mer interaktiv och
    inte bara ha bilder och information om artisterna.

    Därför har jag skapat en funktion där besökaren
    kan klicka på en knapp för att slumpa fram en låt.

    När man klickar på knappen väljer JavaScript
    en av fyra låtar från artisten man läser om.

    Låtens namn visas sedan på hemsidan och
    en länk till låten på YouTube blir synlig.

    Jag har lagt in fyra låtar från varje artist:

    Alesso
    Otto Knows
    Swedish House Mafia
    Nicky Romero

    Det blir totalt 16 låtar.

    Jag använder samma JavaScript-fil på alla
    artistsidor istället för att skapa en
    separat JavaScript-fil för varje artist.
*/


/* ==========================================
   1. ALESSOS LÅTAR
   ========================================== */

/*
    Här har jag skapat en array som innehåller
    fyra låtar från Alesso.

    En array används för att samla flera
    värden i en och samma variabel.

    Jag använder const eftersom jag inte
    behöver tilldela variabeln en ny array.

    Varje låt är ett objekt med två egenskaper:

    namn = låtens namn
    lank = adressen till låten på YouTube

    Jag har gjort på det här sättet för att
    JavaScript enkelt ska kunna hämta både
    låtens namn och rätt YouTube-länk.
*/

const alessoLatar = [

    {
        namn: "Heroes (We Could Be)",
        lank: "https://www.youtube.com/watch?v=a7SouU3ECpU"
    },

    {
        namn: "FADE",
        lank: "https://www.youtube.com/watch?v=dyNV5WGKJS8"
    },

    {
        namn: "Destiny",
        lank: "https://www.youtube.com/watch?v=_QcgxGxk1kQ"
    },

    {
        namn: "When I'm Gone",
        lank: "https://www.youtube.com/watch?v=N-4YMlihRf4"
    }

];


/* ==========================================
   2. OTTO KNOWS LÅTAR
   ========================================== */

/*
    Här har jag gjort en likadan array,
    fast med fyra låtar från Otto Knows.

    Jag använder samma struktur som för Alesso
    eftersom alla artister ska fungera på
    samma sätt när man slumpar en låt.

    Det gör också koden enklare att förstå
    och ändra om jag vill lägga till fler
    låtar i framtiden.
*/

const ottoLatar = [

    {
        namn: "Million Voices",
        lank: "https://www.youtube.com/watch?v=S8jhXmfdRFY"
    },

    {
        namn: "Dying For You",
        lank: "https://www.youtube.com/watch?v=JVt4oljqL38"
    },

    {
        namn: "Parachute",
        lank: "https://www.youtube.com/watch?v=I6P7lgfo9Gk"
    },

    {
        namn: "Back Where I Belong",
        lank: "https://www.youtube.com/watch?v=OggDVRkivs8"
    }

];


/* ==========================================
   3. SWEDISH HOUSE MAFIAS LÅTAR
   ========================================== */

/*
    Den här arrayen innehåller fyra låtar
    från Swedish House Mafia.

    Varje objekt har ett namn och en länk.

    När besökaren är inne på Swedish House
    Mafias sida ska JavaScript använda
    just den här listan.

    På så sätt kan jag använda samma
    slumpfunktion för flera olika artister.
*/

const shmLatar = [

    {
        namn: "Save The World",
        lank: "https://www.youtube.com/watch?v=BXpdmKELE1k"
    },

    {
        namn: "Don't You Worry Child",
        lank: "https://www.youtube.com/watch?v=1y6smkh6c-0"
    },

    {
        namn: "Lifetime",
        lank: "https://www.youtube.com/watch?v=t0RwGmzFCdA"
    },

    {
        namn: "Ray Of Solar",
        lank: "https://www.youtube.com/watch?v=5YqG9-ViFSg"
    }

];


/* ==========================================
   4. NICKY ROMEROS LÅTAR
   ========================================== */

/*
    Här har jag lagt in fyra låtar
    från Nicky Romero.

    Några av låtarna är samarbeten
    med andra artister.

    Därför har jag även skrivit med
    deras namn i låttitlarna.

    JavaScript kommer att använda
    den här arrayen när besökaren
    klickar på knappen på Nicky Romeros sida.
*/

const nickyLatar = [

    {
        namn: "Like Home (med NERVO)",
        lank: "https://www.youtube.com/watch?v=6agp_W-rqgQ"
    },

    {
        namn: "I Could Be The One (med Avicii)",
        lank: "https://www.youtube.com/watch?v=TrnUKfSg_kg"
    },

    {
        namn: "Harmony (med Stadiumx)",
        lank: "https://www.youtube.com/watch?v=awa188svgmg"
    },

    {
        namn: "Take Me (med Colton Avery)",
        lank: "https://www.youtube.com/watch?v=0gR_Hh66mfI"
    }

];


/* ==========================================
   5. HÄMTA ELEMENT FRÅN HTML
   ========================================== */

/*
    Nu behöver jag koppla JavaScript-koden
    till elementen som finns i HTML.

    Jag använder document.getElementById()
    för att hitta element med ett visst id.

    Ett id är ett namn som jag har gett
    ett HTML-element.

    När JavaScript hittar elementet
    kan jag exempelvis ändra texten,
    ändra en länk eller reagera på klick.
*/


/*
    Här hämtar jag musikspelarens behållare.

    I HTML har jag använt:

    <div id="musikspelare" data-artist="otto">

    Attributet data-artist visar vilken
    artist som hör till sidan.

    På Otto Knows sida är värdet "otto".
    På Swedish House Mafias sida är det "shm".
    På Nicky Romeros sida är det "nicky".

    På så sätt kan samma JavaScript-kod
    användas på flera olika sidor.

    Om elementet inte finns får variabeln
    värdet null.
*/

const musikspelare = document.getElementById(
    "musikspelare"
);


/*
    Här hämtar jag knappen som besökaren
    ska klicka på för att slumpa en låt.

    Knappen har id="slumpa-knapp" i HTML.

    Jag sparar elementet i variabeln
    slumpaKnapp så att jag kan använda
    det längre ner i koden.
*/

const slumpaKnapp = document.getElementById(
    "slumpa-knapp"
);


/*
    Här hämtar jag textfältet där
    namnet på den valda låten ska visas.

    I HTML står det från början:

    Ingen låt vald ännu.

    När besökaren klickar på knappen
    kommer JavaScript att ersätta
    den texten med låtens namn.
*/

const slumpadLat = document.getElementById(
    "slumpad-lat"
);


/*
    Här hämtar jag YouTube-länken.

    Från början är länken dold i HTML
    med hjälp av attributet hidden.

    När JavaScript har valt en låt
    ändrar jag länkens adress och
    gör den synlig.

    Besökaren kan då klicka på länken
    för att lyssna på låten på YouTube.
*/

const youtubeLank = document.getElementById(
    "youtube-lank"
);


/* ==========================================
   6. FUNKTION SOM SLUMPAR EN LÅT
   ========================================== */

/*
    Här skapar jag själva funktionen
    som gör att musikknappen fungerar.

    En funktion är en del av koden
    som kan köras när något händer.

    Jag har döpt funktionen till slumpaLat.

    Den ska köras när besökaren
    klickar på knappen "Slumpa en låt".

    Funktionen ska:

    1. Ta reda på vilken artist sidan gäller.
    2. Välja rätt lista med låtar.
    3. Slumpa fram en låt från listan.
    4. Visa låtens namn på hemsidan.
    5. Uppdatera länken till YouTube.
*/

function slumpaLat() {

    /*
        Här skapar jag variabeln latar.

        Jag använder let eftersom värdet
        kan ändras beroende på vilken
        artist besökaren läser om.

        Jag börjar med Alessos låtar
        som standard.

        Om HTML-sidan anger en annan
        artist byter jag till rätt lista.
    */

    let latar = alessoLatar;


    /* ======================================
       7. KONTROLLERA VILKEN ARTIST DET ÄR
       ====================================== */

    /*
        Här kontrollerar jag om elementet
        musikspelare finns på sidan.

        !== betyder "inte lika med".

        null betyder att JavaScript
        inte hittade något element.

        Om musikspelare inte är null
        kan jag läsa vilket artistnamn
        som finns i HTML-elementet.

        Kontrollen behövs eftersom
        inte alla sidor på hemsidan
        har en musikspelare.
    */

    if (musikspelare !== null) {

        /*
            Här läser jag attributet data-artist
            från HTML.

            dataset.artist används för att
            hämta värdet från data-artist.

            Om HTML till exempel innehåller
            data-artist="nicky" får variabeln
            artist värdet "nicky".

            Sedan använder jag det värdet
            för att välja rätt låtlista.
        */

        const artist = musikspelare.dataset.artist;


        /*
            Här använder jag if för att
            kontrollera om artisten är Alesso.

            === betyder att JavaScript
            jämför om två värden är lika.

            Om artist är "alesso"
            används Alessos låtlista.
        */

        if (artist === "alesso") {

            latar = alessoLatar;

        }


        /*
            else if betyder att JavaScript
            kontrollerar ett annat villkor
            om det första inte stämde.

            Om artist är "otto"
            används Otto Knows låtar.
        */

        else if (artist === "otto") {

            latar = ottoLatar;

        }


        /*
            Här kontrollerar jag om
            artisten är Swedish House Mafia.

            I HTML använder jag förkortningen
            "shm" för Swedish House Mafia.

            Om värdet är "shm"
            väljs deras låtlista.
        */

        else if (artist === "shm") {

            latar = shmLatar;

        }


        /*
            Här kontrollerar jag om
            artisten är Nicky Romero.

            Om data-artist är "nicky"
            väljs hans låtlista.
        */

        else if (artist === "nicky") {

            latar = nickyLatar;

        }

    }


    /* ======================================
       8. SLUMPA FRAM EN LÅT
       ====================================== */

    /*
        Nu ska JavaScript välja en
        slumpmässig låt från listan.

        Jag använder Math.random().

        Math.random() skapar ett
        slumpmässigt decimaltal
        från 0 upp till, men inte inklusive, 1.

        Det kan till exempel bli:

        0.15
        0.42
        0.87

        Jag sparar talet i variabeln
        slumptal.
    */

    const slumptal = Math.random();


    /*
        Här räknar jag fram vilket
        nummer i arrayen som ska väljas.

        latar.length visar hur många
        låtar som finns i listan.

        Eftersom varje artist har fyra
        låtar blir latar.length lika med 4.

        Jag multiplicerar slumptalet
        med antalet låtar.

        Sedan använder jag Math.floor()
        för att avrunda nedåt till
        närmaste heltal.

        Resultatet blir då 0, 1, 2 eller 3.

        Det passar eftersom JavaScript
        börjar räkna positionerna
        i en array från 0.

        Den första låten har alltså
        position 0 och den fjärde
        låten har position 3.
    */

    const slumpnummer = Math.floor(
        slumptal * latar.length
    );


    /*
        Här hämtar jag låten som
        finns på den slumpade positionen.

        Hakparenteserna används för att
        välja ett värde ur en array.

        Om slumpnummer exempelvis är 2
        hämtas den tredje låten.

        Jag sparar hela låtobjektet
        i variabeln valdLat.

        Då kan jag använda både
        valdLat.namn och valdLat.lank.
    */

    const valdLat = latar[slumpnummer];


    /* ======================================
       9. VISA DEN VALDA LÅTEN
       ====================================== */

    /*
        Nu ska jag visa låtens namn
        direkt på hemsidan.

        Jag använder textContent för att
        ändra texten i HTML-elementet
        som har id="slumpad-lat".

        Jag skriver först "Din låt: "
        och lägger sedan till namnet
        på den slumpade låten.

        Plustecknet används här för
        att sätta ihop två texter.

        Om JavaScript till exempel
        väljer Million Voices visas:

        Din låt: Million Voices

        Det gör att besökaren direkt
        ser vilken låt som har valts.
    */

    slumpadLat.textContent =
        "Din låt: " + valdLat.namn;


    /* ======================================
       10. UPPDATERA YOUTUBE-LÄNKEN
       ====================================== */

    /*
        Här ändrar jag adressen
        till YouTube-länken.

        href är attributet som bestämmer
        vart en länk ska gå.

        valdLat.lank innehåller adressen
        till den låt som JavaScript valde.

        Genom att ändra href ser jag
        till att länken alltid leder
        till rätt YouTube-video.
    */

    youtubeLank.href = valdLat.lank;


    /*
        Från början har YouTube-länken
        attributet hidden i HTML.

        Det gör att länken inte visas
        innan besökaren har valt en låt.

        Här ändrar jag hidden till false.

        false betyder i det här fallet
        att länken inte längre ska
        vara dold.

        När länken blir synlig kan
        besökaren klicka på den
        och öppna låten på YouTube.
    */

    youtubeLank.hidden = false;

}


/* ==========================================
   11. KOPPLA KNAPPEN TILL JAVASCRIPT
   ========================================== */

/*
    Nu behöver jag koppla knappen
    i HTML till funktionen slumpaLat.

    Jag använder en if-sats för att
    kontrollera att alla HTML-element
    som behövs faktiskt finns.

    && betyder "och".

    Det betyder att alla villkor
    måste vara uppfyllda.

    Jag gör den här kontrollen för
    att undvika fel om JavaScript-filen
    används på en sida som inte har
    någon musikspelare.

    Om alla element finns kan jag
    koppla funktionen till knappen.
*/

if (
    musikspelare !== null &&
    slumpaKnapp !== null &&
    slumpadLat !== null &&
    youtubeLank !== null
) {

    /*
        Här använder jag addEventListener().

        Det betyder att JavaScript
        ska lyssna efter en viss händelse.

        Händelsen "click" betyder
        att besökaren klickar på knappen.

        När det händer körs
        funktionen slumpaLat.

        Jag skriver slumpaLat utan
        parenteser eftersom funktionen
        inte ska köras direkt.

        Den ska bara köras när
        besökaren klickar på knappen.

        Det är den här delen som
        gör musikfunktionen interaktiv.
    */

    slumpaKnapp.addEventListener(
        "click",
        slumpaLat
    );

}
