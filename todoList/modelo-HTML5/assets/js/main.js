const inputTarefa = document.querySelector(".dadosEntrada")
const botaoTarefa = document.querySelector(".btnEnviar")
const ulLista = document.querySelector(".tarefas")



inputTarefa.addEventListener('keypress', function (e) {
    if (e.charCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
        limpaInput()
    }
})

function limpaInput() {
    inputTarefa.value = ""
    inputTarefa.focus()
}

function botaoApagar(li) {
    li.innerText += ' ';
    const botaoApaga = document.createElement('button')
   botaoApaga.setAttribute('class', 'btn btn-primary apagar')
    botaoApaga.innerText = "Apagar"
    li.appendChild(botaoApaga)
}

function criaTarefa(textoInput) {
    const elementoLista = document.createElement('li');
    elementoLista.innerText = textoInput;
    ulLista.appendChild(elementoLista)
    botaoApagar(elementoLista)
    limpaInput()
    salvarTarefa()

}


function salvarTarefa(){
    const liTarefas = ulLista.querySelectorAll('li')
    const listaDeTarefa = [];

    for(rodando of liTarefas){
        let tarfefaTexto = rodando.innerText;
        tarfefaTexto = tarfefaTexto.replace('Apagar', '').trim()
        listaDeTarefa.push(tarfefaTexto)
        
    }
    const tarefasJSON = JSON.stringify(listaDeTarefa)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefadas = JSON.parse(tarefas);
    for (let terefas of listaTarefadas){
        criaTarefa(terefas)
    }
}

adicionaTarefas()

botaoTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('apagar')){
       elemento.parentElement.remove()
       salvarTarefa()
    }
})