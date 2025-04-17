// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().

// O tipo pode ser:
//0: letra minúscula;
//1: letra maiúscula;
//2: número;
//3: símbolo especial (tipo @, #, !, etc.).

function gerarSenha(tamanho = 10) {
    const senha = [];

    console.log("Olá! Essa é sua nova senha:");
    
    for (let i = 0; i < tamanho; i++) {
     
      const tipo = Math.floor(Math.random() * 4);
  
      let codigo;
  
      if (tipo === 0) { // O número 0 serve para letras minúsculas.
        codigo = Math.floor(Math.random() * 26) + 97;
      } else if (tipo === 1) { // O número 1 serve para letras maiúsculas.
       
        codigo = Math.floor(Math.random() * 26) + 65;
      } else if (tipo === 2) { // O número 2 serve para números.
      
        codigo = Math.floor(Math.random() * 10) + 48;
      } else {
     
        codigo = Math.floor(Math.random() * (47 - 33 + 1)) + 33;
      }

      senha.push(String.fromCharCode(codigo));
    }
  
    return senha.join('');
  }
  
  console.log(gerarSenha());