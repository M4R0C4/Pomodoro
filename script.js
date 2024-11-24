const html = document.querySelector('html');
const botaoFoco = document.querySelector('.app__card-button--foco')
const botaoCurto = document.querySelector('.app__card-button--curto')
const botaoLongo = document.querySelector('.app__card-button--longo')
const imgCurto = document.querySelector('.app__image')


botaoFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    imgCurto.setAttribute('src', './imagens/foco.png')
})

botaoCurto.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-curto')
    imgCurto.setAttribute('src', './imagens/descanso-curto.png')
})
botaoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    imgCurto.setAttribute('src', './imagens/descanso-longo.png')
})