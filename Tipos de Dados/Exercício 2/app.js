function exibirDiaSelecionado() {
    var diaSelecionado = document.getElementById("diaSemana").value;

    var numeroDia = parseInt(diaSelecionado);

    var nomeDia = obterNomeDia(numeroDia);

    alert("Dia selecionado: " + nomeDia);
  }

  function obterNomeDia(numeroDia) {
    var diaSemana = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado"
    ];

    return diaSemana[numeroDia];
  }