/* 1º
Achar a altura e largura total da página
tornar responsivo com a função 
chamar no body do html com o onresize=ajustaTamanhoPalcoJogo()     */

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMosquitoTempo = 1500;

//recuperando a informação do nível
var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  criaMosquitoTempo = 1500;
} else if ((nivel = "dificil")) {
  criaMosquitoTempo = 1000;
} else if ((nivel = "chucknorris")) {
  criaMosquitoTempo = 750;
}

ajustaTamanhoPalcoJogo = () => {
  altura = window.innerHeight; //altura interna da janela
  largura = window.innerWidth; //largura interna da janela
  console.log("Largura " + largura, "Altura " + altura);
};
ajustaTamanhoPalcoJogo();

//criando o cronômetro do jogo
var cronometro = setInterval(() => {
  tempo = tempo - 1;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

/* 2º
Criar uma posição randomica 
gerar um valor aletório que vá do posição x randon
até o limite da largura e para o x também
responsável pela criação do elemento html
*/
var posicaoRandomica = () => {
  //5º
  //1 remover o mosquito anterior (caso exista)
  //if para testar se o elemento existe
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    //selecionar os coraçõoes e atribuir o valor ao src vazio
    //console.log('elemento selecionado foi:' + vidas)

    if (vidas > 3) {
      //fazer o redirecionamento através do BOM
      window.location.href = "fim_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "./imagens/coracao_vazio.png";
    }
    vidas++;
  }

  //irá decrementar 90px para não estourar a img
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;
  console.log(posicaoX, posicaoY);

  //lógica para mantendo o controle de posição para não ser menor de 0
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  /*  
  Criar o elemento Mosquito no html
  acessar as referência para editar: 
  src, className, style, position
   */
  var mosquito = document.createElement("img");
  mosquito.src = "./imagens/mosquito.png";
  /* 
  O valor retornado pela chamada da função tamanho aleatorio e lado aleatório será atribuido
   como classe do html apresentado no body

 */

  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  //7º criar o elemento de click para o objeto
  mosquito.onclick = function () {
    this.remove();
  };

  //5º Criar um mosquito por vez para renderizar no html
  mosquito.id = "mosquito";
  //adicionar um filho para o body com o apendchild
  document.body.appendChild(mosquito);

  console.log(ladoAleatorio());
};
/* 3º Criar três classes e atribuir as classes de forma aleatória ao elemento html  */
tamanhoAleatorio = () => {
  //criar um random para obter três casos
  var classe = Math.floor(Math.random() * 3);
  //switch que alteraná as propriedades conforme cada case

  //no css criamos as classes de mosquito variaveis
  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
};
/* 4º Posicionamento aleatório
realizar o transform no estilo.css
*/
ladoAleatorio = () => {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
};
