// var frase = jQuery(".frase"); //jQuery = Dolar sign
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

// tamanhoFrase.text() Diz o que está escrito
tamanhoFrase.text(numPalavras); //Muda o que está escrito

var campo = $(".campo-digitacao");
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
    
var tempoRestante = $("#contador-tempo").text();
// campo.on("focus", () => {
campo.one("focus", () => {  //Executa apenas uma vez = once: true no javascrip, document.getElementById('btn').addEventListener('click', () => {console.log('Hello and goodbye');}, {once: true,});
  var cronometroID = setInterval(() => {
    tempoRestante--;
    console.log(tempoRestante);
    $("#contador-tempo").text(tempoRestante);

    if (tempoRestante < 1) {
      campo.attr("disabled", true); // attr = setAttribute() e getAttribute()  || Já que o 'disabled' não tem valor, tenho que dizer que agora irá existir
      clearInterval(cronometroID);
    }
    // campo.attr("rows", 50) //Colocando o dado
  }, 1000);
});
