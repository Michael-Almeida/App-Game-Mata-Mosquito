/* 1º
Achar a altura e largura total da página
tornar responsivo com a função 
chamar no body do html com o onresize=ajustaTamanhoPalcoJogo()     */

var altura = 0;
var largura = 0;
ajustaTamanhoPalcoJogo = () => {
  altura = window.innerHeight; //altura interna da janela
  largura = window.innerWidth; //largura interna da janela
  console.log("Largura " + largura, "Altura " + altura);
};
ajustaTamanhoPalcoJogo();

/* 2º
Criar uma posição randomica 
gerar um valor aletório que vá do posição x randon
até o limite da largura e para o x também
*/
var posicaoRandomica = () => {
  //irá decrementar 90px para não estourar a img
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;
  console.log(posicaoX, posicaoY);

  //lógica para mantendo o controle de posição para não ser menor de 0
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  /*  
  Criar o elemento html
  acessar as referência para editar: 
  src, className, style, position
   */
  var mosquito = document.createElement("img");
  mosquito.src = "./imagens/mosquito.png";
  mosquito.className = tamanhoAleatorio(); //o valor retornado pela chamada da função será atribuido como classe do html apresentado no body
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  //adicionar um filho para o body com o apendchild
  document.body.appendChild(mosquito);
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
