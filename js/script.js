// alert ('ciao');

let chilometri = prompt ('Quanti Km devi fare?');
// console.log(chilometri);
let kmDaPercorrere = 
`
<span>Il tuo viaggio &egrave; di </span>${chilometri} <span>Km</span>
`;

document.getElementById ('km').innerHTML = kmDaPercorrere;


let eta = prompt ('Digita la tua età');
// console.log(eta);
let etaUtente = 
`
<span>La tua et&agrave; &egrave; di </span>${eta} <span>anni</span>
`;

document.getElementById('eta').innerHTML = etaUtente;

let prezzoAlChilometro = 0.21;
// console.log(prezzoAlChilometro);
let prezzo = chilometri * prezzoAlChilometro;
// console.log(prezzo);
const over65 = 65;
const minorenni = 17;

if (eta > over65) {
    prezzo = prezzo - ((prezzo * 40)/ 100);
    // console.log(prezzo);
    document.getElementById('prezzokm').innerHTML = 
    `
    <span>Il prezzo del biglietto &egrave; di ${prezzo} &euro;
    `;
}
else if (eta <= minorenni) {
    prezzo = prezzo - ((prezzo * 20)/100);
    // console.log(prezzo);
    document.getElementById('prezzokm').innerHTML = `
    <span>Il prezzo del biglietto &egrave; di ${prezzo} &euro;
    `;
}
else {
    // console.log(prezzo);
    document.getElementById('prezzokm').innerHTML = `
    <span>Il prezzo del biglietto &egrave; di ${prezzo} &euro;
    `;
}