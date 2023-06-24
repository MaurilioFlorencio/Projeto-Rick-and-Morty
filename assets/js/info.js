const main = document.querySelector("main")
const url = new URLSearchParams(window.location.search);
const id = url.get('id')

fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then (res => res.json())
.then (res => {
        if (res.type == ""){
            res.type = "unknown"
            
        }
        main.innerHTML += 
        `
        <div class="card1">
            <span class="nome">${res.name}</span>
            <img class= "imagem-card" src= "${res.image}" alt="${res.image}">
            <span class="origem">${res.origin.name}</span>
        </div>
        <div class="card2">
            <span class="info">Informações:</span>
            <div class="container">
                <span class="info1">Status:</span>
                <span class="info11">${res.status}</span>
            </div>
            <div class="container">
                <span class="info1">Species:</span>
                <span class="info11">${res.species}</span>
            </div>
            <div class="container">
                <span class="info1">Type:</span>
                <span class="info11">${res.type}</span>
            </div>
            <div class="container">
                <span class="info1">Gender:</span>
                <span class="info11">${res.gender}</span>
            </div>
            <div class="container">
                <span class="info1">Location:</span>
                <span class="info11">${res.location.name}</span>
            </div>   
        </div>
        <div class="card3">
            <button class="button" onclick="redirecionar()">X</button>
        </div>
        `    
    });
    console.log(res.results)

    function redirecionar () {
        window.location.href = 'index.html';
    }
