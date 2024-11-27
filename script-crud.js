const botaoAdicionarTarefa = document.querySelector(".app__button--add-task")
const formularioAdicionarTarefa = document.querySelector(".app__form-add-task")

botaoAdicionarTarefa.addEventListener("click", () => {
formularioAdicionarTarefa.classList.toggle("hidden")
})