var listElemet =  document.querySelector('#app ul');
var inputElement =  document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElemet.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText  = document.createTextNode(todo);

        linkElement = document.createElement('a');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElemet.appendChild(todoElement);
        
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    savaToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    savaToStorage();
}

function savaToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}