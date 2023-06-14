function verificarTipoDado() {
    var dado = document.getElementById("numero").value;

    if (isNaN(dado)) {
      document.getElementById("tipoDado").textContent = "É uma String";
    } else if (Number.isInteger(parseFloat(dado))) {
      document.getElementById("tipoDado").textContent = "É um Int";
    } else {
      document.getElementById("tipoDado").textContent = "É um Float";
    }
  }