function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
  
    // tamanhoFrase.text() Diz o que está escrito
    tamanhoFrase.text(numPalavras); //Muda o que está escrito
  }