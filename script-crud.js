const botaoAdicionarTarefa = document.querySelector(".app__button--add-task")
const formularioAdicionarTarefa = document.querySelector(".app__form-add-task")
const textoArea = document.querySelector(".app__form-textarea")
const ListasDetarefas = []

botaoAdicionarTarefa.addEventListener("click", () => {
formularioAdicionarTarefa.classList.toggle("hidden")
})

formularioAdicionarTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const tarefa = {descrição: textoArea.value
     }
    ListasDetarefas.push(tarefa)
    localStorage.setItem("tarefa", JSON.stringify(ListasDetarefas))
    console.table(ListasDetarefas)
})