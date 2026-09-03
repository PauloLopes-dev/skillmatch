function solicitarEmprestimo(renda) {
  return new Promise((resolve, reject) => {
    if (renda >= 1700) {
      resolve("Empréstimo aprovado!");
    } else {
      reject("Empréstimo recusado. Renda insuficiente.");
    }
  });
}

solicitarEmprestimo(1500)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });
