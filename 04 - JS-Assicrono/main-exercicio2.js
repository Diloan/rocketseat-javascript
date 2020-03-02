var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderizaRepositorios(repositorios){
    
    for(repo of repositorios){
        textNodeElement = document.createTextNode(repo.name);
        liElement = document.createElement('li');

        liElement.appendChild(textNodeElement);
        listElement.appendChild(liElement);
    }
}

function listaRepositorios(){
var user = inputElement.value;

//if(!user) return;

axios.get('https://api.github.com/users/'+ user +'/repos')
    .then(function(response){
        renderizaRepositorios(response.data)
    });
    // .catch(function(error){
    //     console.warn(error);
    // });
}
