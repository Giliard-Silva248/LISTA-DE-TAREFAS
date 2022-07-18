const txt = document.querySelector('.txt')
const but = document.querySelector('.but')
const tarefas = document.querySelector('.tarefas')

/*cria o elemento 'li' no 'ul'*/
function criaLi(){
    const li = document.createElement('li')
    return li  
}

/*deixa o campo vazio dps que uma tarefa é add*/
function limpaInput(){
    txt.value = ''
    txt.focus()
}

function criaTarefas(textoInput){
    
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li) 
    let data = new Date()
    let hora = data.toLocaleTimeString()
    /*add os itens na lista*/
    limpaInput()//chamando essa função e limpa a área de texto dps de add o item

    li.innerHTML += ` (${hora})`
}

/*add no doc o valor inserido no input*/
function add(){
    if (!txt.value) return //impede q add itens vazios a lista
    criaTarefas(txt.value) 
}

function butExcluir(){
    const lii = document.querySelector('li')
    lii.remove('li')
}


