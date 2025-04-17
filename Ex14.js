// Receba uma data no formato '2025-04-15'; e transforme para '15/04/2025'; usando
// split() e reverse().

var prompt = require('prompt-sync')();
let data = prompt("Por gentileza, digite uma data no formato YYYY-MM-DD: ");

let divisao = data.split("-");

let dataDividida = divisao.reverse();

let dataInversa = dataDividida.join("-");

console.log("Data com ano e dia invertidos: " + dataInversa);


