const palavras = [
  "macaco", "elefante", "baleia", "cachorro", "urubu", "cavalo-marinho"
];

const spPalavraSecreta = document.getElementById("spPalavraSecreta");
const btnNovaPalavra = document.getElementById("btnNovaPalavra");
const btnVerificarPalavra = document.getElementById("btnVerificarPalavra");
const spLetrasJogadas = document.getElementById("spLetrasJogadas");
const ipPalavraResposta = document.getElementById("ipPalavraResposta");
const imgForca = document.getElementById("imgForca");
const viewForca = document.getElementById("viewForca");

const jogo = {
  sorteandoPalavra: "", palavraSorteada: "", arrayPalavraSorteada: "", arrayPalavraSorteadaAnother: "", contadorErros: 0,
contadorVitorias: 0, jogadas: []
}



//SORTEANDO PALAVRA.....
//Função refatorada com 5 sentenças
btnNovaPalavra.addEventListener("click", () => {
  jogo.sorteandoPalavra = Math.floor(Math.random() * palavras.length)
  jogo.palavraSorteada = palavras[jogo.sorteandoPalavra]
  console.log(jogo.palavraSorteada)

  underscorePalavra();
  resetandoGame();
})


//UNDERSCORE PALAVRAS.....
//Função refatorada com 5 sentenças
function underscorePalavra() {
  jogo.arrayPalavraSorteada = jogo.palavraSorteada.split("");
  for (let i = 0; i < jogo.arrayPalavraSorteada.length; i++) {
    jogo.arrayPalavraSorteada.splice(i, 1, "_");
  }
  spPalavraSecreta.innerHTML = `${jogo.arrayPalavraSorteada}`
}


//LENDO UMA LETRA.

btnVerificarPalavra.addEventListener("click", verificarPalavra);

//Função refatorada com 5 sentenças

function verificarPalavra() {
  jogo.jogadas.push(ipPalavraResposta.value)
  spLetrasJogadas.innerHTML = jogo.jogadas 
  

  //ERRANDO UMA LETRA. 

  //SE A PALAVRA NAO CONTEM. 
  if (jogo.palavraSorteada.indexOf(ipPalavraResposta.value) == -1) {
    jogo.contadorErros++;
  }

  desenhandoErrosEncerrando();
  acertandoLetra();
  ipPalavraResposta.value = "";
}


//DESENHANDO CONFORME OS ERROS...
//Função refatorada com 5 sentenças
function desenhandoErrosEncerrando() {
  for (let i = 0; i <= 6; i++) {
    if (jogo.contadorErros == i) {
      imgForca.src = `img/Forca0${i}.png`;
      viewForca.appendChild(imgForca);
    }
  }
  //ENCERRAR NA DERROTA.
  if (jogo.contadorErros == 6) {
    ipPalavraResposta.setAttribute("disabled", "true");
    btnVerificarPalavra.setAttribute("disabled", "true");
  }
}
//ACERTANDO LETRA.
//Função refatorada com 5 sentenças
function acertandoLetra() {
  jogo.arrayPalavraSorteadaAnother = jogo.palavraSorteada.split("");
  for (let i = 0; i < jogo.arrayPalavraSorteadaAnother.length; i++) {
    if (ipPalavraResposta.value == jogo.arrayPalavraSorteadaAnother[i]) {
      jogo.arrayPalavraSorteada[i] = ipPalavraResposta.value
      spPalavraSecreta.innerHTML = jogo.arrayPalavraSorteada
      jogo.contadorVitorias++
    }
  }
  //ENCERRAR NA VITÓRIA
  if (jogo.contadorVitorias == jogo.arrayPalavraSorteadaAnother.length) {
    ipPalavraResposta.setAttribute("disabled", "true");
    btnVerificarPalavra.setAttribute("disabled", "true");
  }

}

//Função refatorada com 5 sentenças
function resetandoGame() {
  spLetrasJogadas.innerHTML = "";
  jogo.jogadas = [];
  ipPalavraResposta.disabled = false;
  btnVerificarPalavra.disabled = false;
  
resetandoGameRefatorandoPraCinco();
}
//Função refatorada com 5 sentenças
function resetandoGameRefatorandoPraCinco() {
  jogo.contadorErros = 0;
  jogo.contadorVitorias = 0;
  imgForca.src = "img/Forca00.png";
}




