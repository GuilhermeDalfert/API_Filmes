let contador = 1;

function gerarId() {
  return contador++;
}

module.exports = { gerarId };