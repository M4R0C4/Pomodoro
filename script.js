const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoCurto = document.querySelector(".app__card-button--curto");
const botaoLongo = document.querySelector(".app__card-button--longo");
const img = document.querySelector(".app__image");
const texto = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");

botaoFoco.addEventListener("click", () => {
  mudarContexto("foco");
  botaoFoco.classList.add("active");
  
});

botaoCurto.addEventListener("click", () => {
  mudarContexto("descanso-curto");
  botaoCurto.classList.add("active");
});

botaoLongo.addEventListener("click", () => {
  mudarContexto("descanso-longo");
  botaoLongo.classList.add("active");
});

function mudarContexto(contexto) {
    botoes.forEach(function(contexto){
        contexto.classList.remove("active");
    })
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
