// alert ('ciao');

let chilometri = prompt ('Quanti Km devi fare?');
// console.log(chilometri);
document.getElementById ('km').innerHTML = chilometri;
let eta = prompt ('Digita la tua età');
// console.log(eta);
document.getElementById('eta').innerHTML = eta;
let prezzoAlChilometro = 0.21;
// console.log(prezzoAlChilometro);
let prezzo = chilometri * prezzoAlChilometro;
// console.log(prezzo);
const over65 = 65;
const minorenni = 17;

if (eta > over65) {
    prezzo = prezzo - ((prezzo * 40)/ 100);
    // console.log(prezzo);
    document.getElementById('prezzokm').innerHTML = prezzo;
}
else if (eta <= minorenni) {
    prezzo = prezzo - ((prezzo * 20)/100);
    // console.log(prezzo);
    document.getElementById('prezzokm').innerHTML = prezzo;
}
else {
    // console.log(prezzo);
    document.getElementById('prezzokm').innerHTML = prezzo;
}