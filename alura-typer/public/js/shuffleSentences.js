// IDEIAS
//FAZER TODAS AS FRASES SEGUIDAS

$("#btn-frase").click(fraseAleatoria);

function fraseAleatoria() {
  //   $.get("url", data,
  //     function (data, textStatus, jqXHR) {

  //     },
  //     "dataType"
  //   );

  $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(() => {
    $("#error").toggle();
    setTimeout(() => {
      $("#error").toggle();
    }, 2000);
  });
}

function trocaFraseAleatoria(data) {
  var numeroAleatorio = Math.floor(Math.random() * (data.length - 1));
  var frase = $(".frase");
  frase.text(data[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
  // inicializaCronometro()
  // reiniciaJogo()
}
