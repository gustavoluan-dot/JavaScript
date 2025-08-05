function gerarTabuada() {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpa o conteúdo anterior

  if (numero === "") {
    resultado.innerHTML = "<p>Por favor, digite um número.</p>";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }
}
