// Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
// formato de CPF (123.456.789-01) usando slice e concatenação.

function formatarCPF (cpf) {
  if (cpf.length !== 11) {
    return "Sinto muito. CPF inválido. Tente Novamente.";
  }
  
  return (
    cpf.slice(0, 3) + '.' +
    cpf.slice(3, 6) + '.' +
    cpf.slice(6, 9) + '-' +
    cpf.slice(9, 11)
  );
}

const cpfFormatado = formatarCPF('12345678901');
console.log(cpfFormatado);