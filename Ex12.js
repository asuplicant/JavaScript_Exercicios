// Peça uma lista de nomes separados por vírgula e sorteie um aleatoriamente usando
// split() e Math.random().

var prompt = require('prompt-sync')();
let nomesDigitados = prompt("Por gentileza, digite os nomes separados por vírgula. Por exemplo: Alícia, Jade, Amelie):");

let nomes = nomesDigitados.split(",").map(nome => nome.trim());

if (nomes.length === 0 || nomes[0] === "") {
  console.log("Você precisa digitar pelo menos um nome");
  
} else {

  let sorteado = nomes[Math.floor(Math.random() * nomes.length)];

  console.log("Parabéns! O nome sorteado foi: " + sorteado + "!");
}