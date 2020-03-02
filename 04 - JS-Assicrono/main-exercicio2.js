var listElement = document.querySelector('li');
var inputElement = document.querySelector('input');


function renderizaRepositorios(repositorios){
    for(repo of repositorios){
        textElement = document.createTextNode(repo.name);
        liElement = document.createElement('li');

        listElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}


function listaRepositorios(){
var user = inputElement.value;

axios.get('https://api.github.com/users/'+ user +'/repos')
    .then(function(response){
        renderizaRepositorios(response.data)
        console.log(response)
    })
    // .catch(function(error){
    //     console.warn(error);
    // });
}
