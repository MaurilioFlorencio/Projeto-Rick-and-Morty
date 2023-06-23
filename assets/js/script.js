const main = document.querySelector("main")

fetch("https://rickandmortyapi.com/api/character")
.then (res => res.json())
.then(res => {
    res.results.forEach(perso => {
        main.innerHTML += 
        `
        <div class="card" onclick="redirecionar(${perso.id})">
            <span class="nome">${perso.name}</span>
            <img class= "imagem-card" src="${perso.image}" alt="${perso.image}">
            <span class="origem">${perso.origin.name}</span>
        </div>
        `   
    });
    console.log(res.results)
})

function redirecionar (id) {
    window.location.href = 'info.html?id=' + encodeURIComponent(id);
}
