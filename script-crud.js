const botaoAdicionarTarefa = document.querySelector(".app__button--add-task")
const formularioAdicionarTarefa = document.querySelector(".app__form-add-task")
const textoArea = document.querySelector(".app__form-textarea")
const ListasDetarefas = JSON.parse(localStorage.getItem("tarefa")) || []
const ulQueRecebeAsTarefas = document.querySelector(".app__section-task-list")

function criarElementoTarefa(tarefa){
const li = document.createElement("li")
li.classList.add("app__section-task-list-item")
const svg = document.createElement("svg")
svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
  </svg>
`
const paragrafo = document.createElement("p")
paragrafo.classList.add("app__section-task-list-item-description")
paragrafo.textContent = tarefa.descrição

const botao = document.createElement("button")
botao.classList.add("app_button-edit")
const imagemDoBotao = document.createElement("img")
imagemDoBotao.setAttribute("src", "/imagens/edit.png")
botao.append(imagemDoBotao)
li.append(svg)
li.append(paragrafo)
li.append(botao)
return li
}

botaoAdicionarTarefa.addEventListener("click", () => {
formularioAdicionarTarefa.classList.toggle("hidden")
})

formularioAdicionarTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const tarefa = {descrição: textoArea.value
     }
    ListasDetarefas.push(tarefa)
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulQueRecebeAsTarefas.append(elementoTarefa)
    localStorage.setItem("tarefa", JSON.stringify(ListasDetarefas))
    textoArea.value = ""
    formularioAdicionarTarefa.classList.add("hidden")
    console.table(ListasDetarefas)
})

ListasDetarefas.forEach((tarefa) => {
   const elementoTarefa = criarElementoTarefa(tarefa)
   ulQueRecebeAsTarefas.append(elementoTarefa)
})