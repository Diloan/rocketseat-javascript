var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderizaRepositorios(repositorios){
    listElement.innerHTML = '';

    for(repo of repositorios){
        textNodeElement = document.createTextNode(repo.name);
        liElement = document.createElement('li');

        liElement.appendChild(textNodeElement);
        listElement.appendChild(liElement);
    }
}

function renderizaCarregamento(Carregando){
    listElement.innerHTML = '';

    textNodeElement = document.createTextNode("Carregando...");
    loadingElement = document.createElement('li');

    loadingElement.appendChild(textNodeElement);
    listElement.appendChild(loadingElement);
    
}

function renderizaErro(Carregando){
    listElement.innerHTML = '';

    textNodeElement = document.createTextNode("Erro!");
    erroElement = document.createElement('li');

    erroElement.style.color = '#F00';
    erroElement.appendChild(textNodeElement);
    listElement.appendChild(erroElement);
    
}

function listaRepositorios(){
    var user = inputElement.value;

    if(!user) return;
    renderizaCarregamento();
    axios.get('https://api.github.com/users/'+ user +'/repos')
        .then(function(response){
            renderizaRepositorios(response.data)
        })
        .catch(function(error){
            renderizaErro()
        });
    inputElement.value = '';
}
