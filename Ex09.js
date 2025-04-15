//Crie uma função que verifica se uma palavra
//é palíndroma usando split(), reverse() e join().

function verificarPalindromo(palavra) {
    const palavraReversa = palavra.split('').reverse().join('');
    return palavra === palavraReversa;
  }

  console.log(verificarPalindromo('laura'));
  console.log(verificarPalindromo('level'));
  console.log(verificarPalindromo('arara')); 
  console.log(verificarPalindromo('ovo')); 
  