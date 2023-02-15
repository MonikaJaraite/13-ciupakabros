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

