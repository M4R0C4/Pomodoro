const botaoAdicionarTarefa = document.querySelector(".app__button--add-task");
const formularioAdicionarTarefa = document.querySelector(".app__form-add-task");
const textoArea = document.querySelector(".app__form-textarea");
let ListasDetarefas = JSON.parse(localStorage.getItem("tarefa")) || [];
const ulQueRecebeAsTarefas = document.querySelector(".app__section-task-list");
const botaoRemoverTarefaConcluida = document.querySelector("#btn-remover-concluidas");


const paragrafoDescricaoTarefa = document.querySelector(
  ".app__section-active-task-description"
);

let tarefaSelecionada = null;
let liTarefaSelecionada = null;
function atualizarTarefas() {
  localStorage.setItem("tarefa", JSON.stringify(ListasDetarefas));
}


function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");
  const svg = document.createElement("svg");
  svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
  </svg>
`;
  const paragrafo = document.createElement("p");
  paragrafo.classList.add("app__section-task-list-item-description");
  paragrafo.textContent = tarefa.descricao;

  const botao = document.createElement("button");
  botao.classList.add("app_button-edit");

  if (tarefa.completa){
    li.classList.add("app__section-task-list-item-complete");
    botao.setAttribute('disabled', true) 
  } else {
    botao.onclick = () => {
      //debugger
      novaDescricao = prompt(
        "Digite a nova descrição da tarefa",
        tarefa.descricao
      );
      if (novaDescricao) {
        paragrafo.textContent = novaDescricao;
        tarefa.descricao = novaDescricao;
        atualizarTarefas();
      }
    };
  }


  const imagemDoBotao = document.createElement("img");
  imagemDoBotao.setAttribute("src", "/imagens/edit.png");
  botao.append(imagemDoBotao);
  li.append(svg);
  li.append(paragrafo);
  li.append(botao);
  li.onclick = () => {
    document.querySelectorAll('.app__section-task-list-item-active')
    .forEach((elemento)=>{
      elemento.classList.remove('app__section-task-list-item-active')
    })
    if (tarefaSelecionada == tarefa) {
      paragrafoDescricaoTarefa = "";
      tarefaSelecionada = null;
      liTarefaSelecionada = null;
      return
    }
    tarefaSelecionada = tarefa;
    liTarefaSelecionada = li;
    paragrafoDescricaoTarefa.textContent = tarefa.descricao;
    li.classList.add("app__section-task-list-item-active");
  }
  return li;
}

botaoAdicionarTarefa.addEventListener("click", () => {
  formularioAdicionarTarefa.classList.toggle("hidden");
});

formularioAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = { descricao: textoArea.value };
  ListasDetarefas.push(tarefa);
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulQueRecebeAsTarefas.append(elementoTarefa);
  atualizarTarefas();
  textoArea.value = "";
  formularioAdicionarTarefa.classList.add("hidden");
});

ListasDetarefas.forEach((tarefa) => {
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulQueRecebeAsTarefas.append(elementoTarefa);
});

document.addEventListener("FocoFinalizado", () => {
  if (tarefaSelecionada && liTarefaSelecionada) {
    liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
    liTarefaSelecionada.classList.add("app__section-task-list-item-complete");
    liTarefaSelecionada.querySelector('button').setAttribute('disabled', true) 
    tarefaSelecionada.completa = true;
    atualizarTarefas()
  }
})

const removerTarefasConcluidas = (somenteCompletas) => {
  const seletor = somenteCompletas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
  document.querySelectorAll(seletor).forEach((elemento) => {
    elemento.remove()
  })
  ListasDetarefas = somenteCompletas? ListasDetarefas.filter(tarefa => tarefa.completa) : []
  atualizarTarefas()
}
botaoRemoverTarefaConcluida.onclick = ()=> removerTarefasConcluidas(true)