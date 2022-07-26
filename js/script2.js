const txt = document.querySelector('.txt')
const but = document.querySelector('.but')
const tarefas = document.querySelector('.tarefas')

function add(){
    const li =document.createElement('li')
    console.log(li);
    return li
}

function tarefas(txtInput){
    const li = add()
    li.innerText = txtInput
}
criaTarefas(txt.value)