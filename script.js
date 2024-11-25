const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoCurto = document.querySelector(".app__card-button--curto");
const botaoLongo = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const texto = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaInput = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const tempoNaTela = document.querySelector("#timer");
musica.loop = true;
let tempoDecorridoEmSegundos = 1500;
const botaoIniciarOuPausar = document.querySelector("#start-pause span");

const startPauseButton = document.querySelector("#start-pause");
const startPauseImg = document.querySelector("#start-pause img");
let intervaloId = null;
const audioStart = new Audio("/sons/play.wav");
const audioEnd = new Audio("/sons/pause.mp3");
const audioFim = new Audio("/sons/beep.mp3");

musicaInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

botaoFoco.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 1500;
  mudarContexto("foco");
  botaoFoco.classList.add("active");
});

botaoCurto.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 300;
  mudarContexto("descanso-curto");
  botaoCurto.classList.add("active");
});

botaoLongo.addEventListener("click", () => {
  tempoDecorridoEmSegundos = 900;
  mudarContexto("descanso-longo");
  botaoLongo.classList.add("active");
});

function mudarContexto(contexto) {
  mostrarTempo();
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  img.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      texto.innerHTML = `<h1 class="app__title">
          Otimize sua produtividade,<br />
          <strong class="app__title-strong">mergulhe no que importa.</strong>
        </h1>`;
      break;
    case "descanso-curto":
      texto.innerHTML = `<h1 class="app__title">
          Que tal um descanso?<br />
          <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case "descanso-longo":
      texto.innerHTML = `<h1 class="app__title">
        Hora de voltar a superficie!<br />
          <strong class="app__title-strong">Faça uma pausa longa!</strong>`;
      break;
    default:
      break;
  }
}
const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    parar();
    console.log("tempo acabou");
    audioFim.play();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo()
  console.log("Temporizador: " + tempoDecorridoEmSegundos);
};

startPauseButton.addEventListener("click", iniciaOuPausar);
function iniciaOuPausar() {
  if (intervaloId) {
    audioEnd.play();
    parar();
    return;
  }
  audioStart.play();
  intervaloId = setInterval(contagemRegressiva, 1000);
  botaoIniciarOuPausar.textContent = "Pausar";
  startPauseImg.setAttribute("src", "/imagens/pause.png");
}
function parar() {
  clearInterval(intervaloId);
  botaoIniciarOuPausar.textContent = "Começar";
  startPauseImg.setAttribute("src", "/imagens/play_arrow.png");
  intervaloId = null;
}

function mostrarTempo(){
  const tempo = new Date(tempoDecorridoEmSegundos * 1000)
  const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {minute: "2-digit", second: "2-digit"})/*tempoDecorridoEmSegundos*/
  tempoNaTela.innerHTML = `${tempoFormatado}`
}
mostrarTempo()