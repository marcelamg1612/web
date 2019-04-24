let altura = 0;
let largura = 0;
let vidas = 1;

//capturando o tamanho a tela
function ajustaTamanho() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanho();

//inserindo valor randomico para a posição do mosquito dentro do espaço da tela
function posicaoRandomica() {
  //remover mosquito anterior caso exista
  if (document.getElementById('mosquito')) {
    
    document.getElementById('mosquito').remove();

    if (vidas < 4) {
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
      vidas++;
    }
  }

  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //cria elemento html
  let mosquito = document.createElement('img');
  mosquito.id = 'mosquito';
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico();
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.onclick = function() {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

//insere valor randomico para determinar qual classe será utilizada no elemento do mosquito. Classe css q define tamanho
function tamanhoRandomico() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0: {
      return 'mosquito1';
    }
    case 1: {
      return 'mosquito2';
    }
    case 2: {
      return 'mosquito3';
    }
  }
}

//insere valor randomico para determinar qual classe será utilizada no elemento do mosquito. Classe css q define direção
function ladoRandomico() {
  let lado = Math.floor(Math.random() * 2);

  switch (lado) {
    case 0: {
      return 'ladoA';
    }
    case 1: {
      return 'ladoB';
    }
  }
}
