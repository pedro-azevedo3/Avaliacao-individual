function calcular() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var soma = num1 + num2;
    var subtracao = num1 - num2;
    var multiplicacao = num1 * num2;
    var divisao = num1 / num2;

    document.getElementById("soma").textContent = "Soma: " + soma;
    document.getElementById("subtracao").textContent = "Subtração: " + subtracao;
    document.getElementById("multiplicacao").textContent = "Multiplicação: " + multiplicacao;
    document.getElementById("divisao").textContent = "Divisão: " + divisao.toFixed(2);
  }