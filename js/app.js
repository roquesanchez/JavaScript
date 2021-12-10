
const esculturas = [
    {
        id:1,
        name : "Platos",
        img : './imagenes_fc/plato1.jpg'
    },
    {
        id:2,
        name : "Esculturas Replicas",
        img : './imagenes_fc/escultura6.jpeg'
    },
    {
        id:3,
        name : "Trofeos",
        img : './imagenes_fc/trofeo6.jpg'
    },
    {
        id:4,
        name : "Colgantes",
        img : './imagenes_fc/colgante1.jpeg'
    },
    {
        id:5,
        name : "Cabezas",
        img : './imagenes_fc/cabeza3.jpg'
    },
    {
        id:6,
        name : "Centro de Cucardas",
        img : './imagenes_fc/trofeo2.jpg'
    },
    {
        id:7,
        name : "Imanes",
        img : './imagenes_fc/iman2.jpg'
    },
]

let favoritos = [];

const contenedorEsculturas = $('.contenedor-esculturas');
const contenedorFavoritos = document.querySelector('.listado-favoritos');

document.addEventListener('DOMContentLoaded', () => {
    favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    mostrarFavoritos(favoritos);
    mostrarEsculturas();
})

function mostrarEsculturas(){
    esculturas.forEach( escultura => {
        const div = document.createElement('div');
        div.classList.add('card');

        const imagenEscultura = document.createElement('img');
        imagenEscultura.src = escultura.img
        imagenEscultura.classList.add('imagen-escultura');

        const titulo = document.createElement('h3');
        titulo.textContent = escultura.name;
        titulo.classList.add('titulo-escultura');

        const btnAgregar = document.createElement('button');
        btnAgregar.textContent = "Agregar Favoritos";
        btnAgregar.classList.add('btn-favorito');
        btnAgregar.onclick = () => {
            agregarFavorito(escultura.id);
        }

        div.appendChild(imagenEscultura);
        div.appendChild(titulo);
        div.appendChild(btnAgregar);

        contenedorEsculturas.append(div)
    })
}

function agregarFavorito(id){
    const esculturaFavorita = esculturas.find( escultura =>  escultura.id === id);
    favoritos.push(esculturaFavorita);

    guardarLocalStorage(favoritos)
    limpiarHtmlPrevio();

    mostrarFavoritos(favoritos);
}

function mostrarFavoritos(favoritos) {
    favoritos.forEach( esculturafavorita => {
        contenedorFavoritos.innerHTML += `
            <div class = "card">
                <img src="${esculturafavorita.img}" class = "imagen-escultura"/>
                <h3 class = "titulo-escultura">${esculturafavorita.name}</h3>
            </div>
        `
    })
}

function guardarLocalStorage(arreglo){
    localStorage.setItem('favoritos', JSON.stringify(arreglo));
}

function limpiarHtmlPrevio () {
    while(contenedorFavoritos.firstElementChild){
        contenedorFavoritos.removeChild(contenedorFavoritos.firstElementChild)
    }
}

$('body .favorito').append("Mis Favoritos");