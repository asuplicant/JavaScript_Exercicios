// Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
// objeto como contador.

const prompt = require('prompt-sync')();

let frase = prompt("Por gentileza, digite sua frase: ");
let palavras = frase.split(" ");
let contagem = {};

for (let palavra of palavras) {
    palavra = palavra.toLowerCase();
    contagem[palavra] = (contagem[palavra] || 0) + 1;
}

let palavraMaisRepetida = "";
let maxRepeticoes = 0;

for (let palavra in contagem) {
    if (contagem[palavra] > maxRepeticoes) {
        maxRepeticoes = contagem[palavra];
        palavraMaisRepetida = palavra;
    }
}

console.log(`Perfeito! A palavra que mais se repete é: ${palavraMaisRepetida}.`);

