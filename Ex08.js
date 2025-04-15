// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando replace() com regex.

function removerCaracteresEspeciais(texto) {
    return texto.replace(/[^a-zA-Z0-9\s]/g, ''); // remover caracteres especiais de uma string, e aqui vai a explicação bem simples:
  }
  
  console.log(removerCaracteresEspeciais('Olá, Mundo. Como vai?'));