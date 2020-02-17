var listElemet =  document.querySelector('#app ul');
var inputElement =  document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = [
    'Fazer café',
    'Estudar javascript',
    'Acessar a comunidade da Rocketseat'
];

function renderTodos(){
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText  = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElemet.appendChild(todoElement);
    }
}

renderTodos();