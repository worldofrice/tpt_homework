# tpt_homework

Siia reposse on üles laetud minu kodutöö lahendused.

## Esimene kodutöö (checkTemp.js)

Katlal on kolm temperatuurivahemikku

0-20 on liiga külm
21-40 on paras temperatuur
41-60 on liiga kuum

Looge funktsioon checkTemp mis võtab sisendiks temperatuuri ja tagastab vahemike puhul järgneva numbri:

Liiga külm tagastab -1
Paras temperatuur tagastab 0
Liiga kuum tagastab 1

## Teine kodutöö (countCode.js)

Meile on antud array koodidega. Oleks vaja luua funktsioon mis loeb kokku mitu koodi algavad kindla algustähega. Suured-väiksed tähed on olulised.

Näiteks soovime kokku lugeda mitu koodi algavad "i" tähega.
Selleks käivitame funktsiooni countCode("i") mis tagastab numbri 4
Funktsioon countCode(letter) tuleb teil ise kirjutada.

Data array saab sellelt aadressilt https://raw.githubusercontent.com/timotr/progre-helper/main/data.js

## Kolmas kodutöö (orderSummary.js)

Lugeda tellimuse objekti seest kõik tellimuse kaubad. Printida iga kauba nimi, kogus ja hind konsooli eraldi reale.
Kõige lõpus printida konsooli tellimuse kogusumma.

Tellimuse objekti leiab GitHubist https://raw.githubusercontent.com/timotr/progre-helper/main/tellimus.js

## Neljas kodutöö (guessTheNumber.js)

Kirjuta numbri ära arvamise programm näiteks veebilehitseja (web browser) konsoolis.
Las arvuti valib ühe numbri vahemikus 1-10 ja jätab selle meelde.
Seejärel küsib kasutajalt ühe numbri kasutades käsklust prompt.

Kontrolli kas kasutaja sisestatud number on sama mille arvuti valis.
Kui arvud on samad kirjuta konsooli: "Yay! Arvasid õige numbri ära!"
Kui arvud ei ole samad kirjuta konsooli: "Sorry, X ei ole õige number" kus X asemel on kasutaja sisestatud number.

Lisaülesanded:

Kui sisestatud arv on 1 võrra suurem või väiksem kirjutaks konsooli "Ai, sa pakkusid väga lähedale." Näiteks arvuti valitud number on 8 ja kasutaja pakkus 7 või 9.
Kasutaja saaks arvu pakkuda 3 korda, enne kui arvuti uue numbri valib.
