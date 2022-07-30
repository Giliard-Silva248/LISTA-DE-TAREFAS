let txt = document.querySelector('.txt')
let but = document.querySelector('.but')
let tarefas = document.querySelector('.tarefas')

/*cria o elemento 'li' no 'ul'*/
function criaLi(){
    let li = document.createElement('li')   
    return  li
}   

/*deixa o campo vazio dps que uma tarefa é add*/
function limpaInput(){
    txt.value = ''
    txt.focus()
}

function criaTarefas(textoInput){
   
    let button = document.createElement('button');
    button.addEventListener('click', () =>{
        li.remove()
        button.remove()
    })

    button.setAttribute('type','button')
    button.appendChild(document.createTextNode('APAGAR'));
    button.className = 'btn2'
    let li = criaLi()
    li.innerHTML += textoInput
    tarefas.appendChild(li)
    tarefas.appendChild(button)
    
    let data = new Date()
    let hora = data.toLocaleTimeString()
    li.innerHTML += ` (${hora})`
    /*add os itens na lista*/
    limpaInput()//chamando essa função e limpa a área de texto dps de add o item
    
}

/*add no doc o valor inserido no input*/
function add(){
    if (!txt.value) return //impede q add itens vazios a lista
    criaTarefas(txt.value) 
}




