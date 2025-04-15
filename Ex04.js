// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().

function gerarSenha(tamanho = 10) {
    const senha = [];

    console.log("Olá! Essa é sua nova senha:");
    
    for (let i = 0; i < tamanho; i++) {
     
      const tipo = Math.floor(Math.random() * 4);
  
      let codigo;
  
      if (tipo === 0) {
      
        codigo = Math.floor(Math.random() * 26) + 97;
      } else if (tipo === 1) {
       
        codigo = Math.floor(Math.random() * 26) + 65;
      } else if (tipo === 2) {
      
        codigo = Math.floor(Math.random() * 10) + 48;
      } else {
     
        codigo = Math.floor(Math.random() * (47 - 33 + 1)) + 33;
      }

      senha.push(String.fromCharCode(codigo));
    }
  
    return senha.join('');
  }
  
  console.log(gerarSenha());