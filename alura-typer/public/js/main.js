// var frase = jQuery(".frase"); //jQuery = Dolar sign
var tempoInicial = $("#contador-tempo").text();
var campo = $(".campo-digitacao");

// $(document).ready(() => {} //Mesma coisa do atalho abaixo = Carregar quando o html for baixado

$(function () {
  atualizaTamanhoFrase();
  incializaContadores();
  inicializaCronometro();
  $("#btn-reinicia").click(reiniciaJogo);
  //Eventos comuns como click, focus, blur, change... Tem suas funções próprias

  inicializaBordas();
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");

  // tamanhoFrase.text() Diz o que está escrito
  tamanhoFrase.text(numPalavras); //Muda o que está escrito
}

function incializaContadores() {
  // campo.on('click', () => {
  campo.on("input", () => {
    //Evento de dado sendo adicionado em qualquer input
    var conteudo = campo.val(); //.val dá acesso ao que está dentro de uma tag de input
    var qtdPalavras = conteudo.split(/\S+/g).length;
    if (qtdPalavras === 1) {
      qtdPalavras = 0;
    }

    $("#contador-palavras").text(qtdPalavras); //Adiciona num de palavras

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres); //Adiciona num de caracteres

    // campo.val('a') //Também adiciona valor nos inputs
  });
}

function inicializaBordas() {
  var frase = $(".frase").text();
  campo.on("input", () => {
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length); //Parte da frase com o mesmo numero de caracteres que foi digitado

    if (digitado == comparavel) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.removeClass("borda-verde");
      campo.addClass("borda-vermelha");
    }

    if (digitado == "") {
      campo.removeClass("borda-verde");
      campo.removeClass("borda-vermelha");
    }
  });
}

function inicializaCronometro() {
  var tempoRestante = $("#contador-tempo").text();
  $("#btn-reinicia").attr("disabled", true);

  // campo.on("focus", () => {
  campo.one("focus", () => {
    //Executa apenas uma vez = once: true no javascrip, document.getElementById('btn').addEventListener('click', () => {console.log('Hello and goodbye');}, {once: true,});
    var cronometroID = setInterval(() => {
      tempoRestante--;
      $("#contador-tempo").text(tempoRestante);

      if (tempoRestante < 1) {
        campo.attr("disabled", true); // attr = setAttribute() e getAttribute()  || Já que o 'disabled' não tem valor, tenho que dizer que agora irá existir
        clearInterval(cronometroID);
        $("#btn-reinicia").attr("disabled", false);

        // campo.css("background-color","lightgray") //Pode fazer assim, mas é errado mudar css no JS
        // campo.addClass("campo-desativado")
        campo.toggleClass("campo-desativado"); //Desliga e liga a classe. Em JS= .classList.toggle('hidden-phone')
      }
      // campo.attr("rows", 50) //Colocando o dado
    }, 1000);
  });
}

// $('#btn-reinicia').on('click', () => {
//   console.log('clicado');
// })

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  // campo.removeClass("campo-desativado")
  campo.toggleClass("campo-desativado");

  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#contador-tempo").text(tempoInicial);
  inicializaCronometro();

  campo.removeClass("borda-verde");
  campo.removeClass("borda-vermelha");
}
