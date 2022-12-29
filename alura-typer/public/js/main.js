// var frase = jQuery(".frase"); //jQuery = Dolar sign
var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase") 

// tamanhoFrase.text() Diz o que está escrito
tamanhoFrase.text(numPalavras) //Muda o que está escrito

var campo = $(".campo-digitacao");
// campo.on('click', () => {
campo.on('input', () => { //Evento de dado sendo adicionado em qualquer input
    var conteudo = campo.val() //.val dá acesso ao que está dentro de uma tag de input
    var qtdPalavras = conteudo.split(/\S+/g).length;
    if (qtdPalavras === 1) {
        qtdPalavras = 0
    }
    $("#contador-palavras").text(qtdPalavras)
    
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres)

    console.log(qtdPalavras);
    // console.log('caracteres', conteudo.length);
})