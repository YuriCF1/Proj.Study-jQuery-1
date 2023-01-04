$("#btn-placar").click(mostraPlacar);
$("#btn-sync").click(sincronizaPlacar);

var placar = $(".placar");

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
  corpoTabela.append(linha);

  placar.slideDown(500);
  scrollPlacar();

  $(".btn-remover").click(function () {
    //Using 'this'
    var linha = $(this).parent().parent();
    // linha.fadeOut(750); //Esmaecer //fadeIn, Out, Toggle || Não remove
    linha.fadeOut(function () {
      linha.remove();
    }); //O remover só é chamado depois que o fadeOut é feito com o valor padrão de aprox 400ms
    // setTimeout(() => {
    //   linha.remove(); //Removendo o <tr>
    // }, 750);
  });
}

function scrollPlacar() {
  var posicaoPlacar = placar.offset().top;
  $("html").animate(
    //
    {
      scrollTop: `${posicaoPlacar}px`,
    },
    1000
    // "swing" // https://www.w3schools.com/jquery/eff_animate.asp - Tem mais parãmetros
  );
}

// ____________________________________MOSTRA PLACAR_________________________________
function mostraPlacar() {
  // $(".placar").toggle(); //show() != hide();
  $(".placar").stop().slideToggle(1000); //Tempo que vai mostrar|| slideDown e slideUp ||
  // .stop() = Evita um monte de animações, executa apenas a última em clcks seguidos
}

function sincronizaPlacar() {
  var arrayPlacar = [];
  var jogadores = $("tbody>tr"); //Todas as tr filhas diretas do tbody

  jogadores.each((linha) => {
    var linhas = jogadores[linha];
    var trUser = $(linhas).find("td")[0];
    var trScore = $(linhas).find("td")[1];

    var usuario = $(trUser).text();
    var pontos = $(trScore).text();
    var score = {
      usuario,
      pontos,
    };

    arrayPlacar.push(score);
    console.log("array", arrayPlacar);
  });

  var dados = {
  placar: arrayPlacar,
  };

  $.post(
    "http://localhost:3000/placar",
    dados,
    function () {
      console.log("dados: ", dados);
    }
    // "dataType"
  );
}

// ______________________________POST___________________________
