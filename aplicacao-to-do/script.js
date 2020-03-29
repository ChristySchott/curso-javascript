var listElement = document.querySelector('#app');
var inputElement = document.querySelector(' input');
var buttonElement = document.querySelector (' button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// tenho que renderizar os elementos em tela, para isso tbm devo percorrer a var todos, faço isso em uma função
// para depois só chamála

function renderTodos(){
    listElement.innerHTML = ''; //limpo a lista para quando chamar a função nao adicionar o que ja tenho
    // INNER significa pegar tudo que ta dentro do html 

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        var posicao = todos.indexOf(todo); //defini a posição dele
        linkElement.setAttribute('onclick','deleteTodo('+ posicao +')');
        
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);


        listElement.appendChild(todoElement);
    }

}
renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(posicao){
    todos.splice(posicao,1); //a partir da posicao que eu receber, exclui um item
    renderTodos();
    saveToStorage();
}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));
}