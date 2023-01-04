// IDEIAS
//FAZER TODAS AS FRASES SEGUIDAS

$("#btn-frase").click(fraseAleatoria);
$("#btn-frase-id").click(buscaFrase);

function fraseAleatoria() {
  //   $.get("url", data,
  //     function (data, textStatus, jqXHR) {

  //     },
  //     "dataType"
  //   );

  $("#spinner").toggle();
  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(() => {
      $("#error").toggle();
      setTimeout(() => {
        $("#error").toggle();
      }, 2000);
    })
    .always(() => {
      $("#spinner").toggle();
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

async function buscaFrase () {
  $("#spinner").toggle();
  var fraseId = $("#frase-id").val();
  var dados = { id: fraseId }; //{id: '1'}
  console.log(dados);
  $.get("http://localhost:3000/frases", dados, trocaFrase) //dados = dado a ser requisitado = string ou objecto json || DEPENDE DO SERVIDOR, nesse caso = {id: 1}
    .fail(() => {
      $("#error").toggle();
      setTimeout(() => {
        $("#error").toggle();
      }, 2000);
    })
    .always(() => {
      $("#spinner").toggle();
    });

//   // Em JS Vanilla
//   try {
//     var consultar = await fetch("http://localhost:3000/frases")
//     console.log('c', consultar);

//     var resposta = await consultar.json()
//     console.log(resposta);
    
//     var pegandoObjecto = await resposta[2]
//     console.log(pegandoObjecto);
//   } catch (error) {
    
//   }
}

function trocaFrase(data) {
  $(".frase").text(data.texto);
  atualizaTamanhoFrase()
  atualizaTempoInicial(data.tempo)
}
