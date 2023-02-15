console.log('Tikrinu');

/*
1. Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.
*/

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const dice1 = (getRandom(1, 6));
const dice2 = (getRandom(1, 6));

console.log (dice1, dice2);

if (dice1 + dice2 >= 8) {
    console.log ('Laimejau!');
} else {
    console.log ('Pralosiau...')
}

/*
2. Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, kuris katinukas yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.
*/

const Pilkis = (getRandom(3, 6));
const Murklys = (getRandom(3, 6));

console.log (Pilkis, Murklys);

if (Pilkis < Murklys) {
    console.log (
        'Pilkis' + '=' + Pilkis +';' + 
        ' Murklys' + '=' + Murklys +';' +        
        ' Lengvesnis Pilkis')
} else if (Pilkis > Murklys) {
    console.log (
        'Pilkis' + '=' + Pilkis +';' + 
        ' Murklys' + '=' + Murklys +';' +        
        ' Lengvesnis Murklys')
} else {
    console.log ('Katinukų svoriai vienodi');
}

/*
3. Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.
*/

const katinukai = (getRandom(1, 30));
const karves = (getRandom(1, 30));

console.log (katinukai, karves);

if (katinukai <= 15 && karves <=15 && katinukai + karves <=30) {
    console.log('Telpa');
} else {
    console.log('Netelpa');
}

/*
4. Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
*/

const pirkti = (getRandom(1, 6));

console.log(pirkti);

if (pirkti === 1 || pirkti === 5) {
    console.log ('televizorių');
} else if (pirkti === 3 || pirkti === 4) {
    console.log ('skalbyklę');
} else {
    console.log ('šaldytuvą');
}

