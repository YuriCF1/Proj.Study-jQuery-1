$("#btn-placar").click(mostraPlacar)

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody"); //find = procura dentro dos nós do DOM = querySelector dentro de outro querySelector
    var usuario = "Yurii";
    var numPalavras = $("#contador-palavras").text();
    
    var linha = `<tr>
    <td>${usuario}</td>
    <td>${numPalavras}</td>
    <td><i class="small material-icons icons btn-remover">delete</i></td>
    </tr>`;
    
    // corpoTabela.prepend(linha) //Coloca no começo
    corpoTabela.append(linha)
    
    $(".btn-remover").click(function() { //Using 'this'
        var linha = $(this).parent().parent() 
        linha.fadeOut(750) //Esmaecer //fadeIn, Out, Toggle || Não remove
        setTimeout(() => {
            linha.remove() //Removendo o <tr>
        }, 750);
    })
}

// ____________________________________MOSTRA PLACAR_________________________________
function mostraPlacar() { 
    // $(".placar").toggle(); //show() != hide();
    $(".placar").slideToggle(200) //Tempo que vai mostrar|| slideDown e slideUp
    
 }