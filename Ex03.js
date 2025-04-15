// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();
  
const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:");

// Quebra a frase em palavras, filtra as que começam com a letra informada, e conta
const palavrasComLetra = frase
  .split(" ") // divide a frase em palavras
  .filter(palavra => palavra.startsWith(letra)); // filtra palavras que começam com a letra

console.log(`Quantidade de palavras que começam com '${letra}':`, palavrasComLetra.length);
