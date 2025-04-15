// Peça uma frase e retorne cada palavra com a primeira letra maiúscula. Use split(),
// map(), toUpperCase() e slice().

var prompt = require('prompt-sync')();

let frase = prompt("digite sua frase: ");

const fraseMaiuscula = frase
  .toLowerCase()
  .split(" ")
  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
  .join(" ");

console.log(fraseMaiuscula);
