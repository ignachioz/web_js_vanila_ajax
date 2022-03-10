var main = document.querySelector('#main');
const navbar = document.querySelector('nav');
const head = document.querySelector('head');

var liPelicula =  document.querySelector('#liPeliculas');
var liGaleria  =  document.querySelector('#liGaleria');
var liPrincipal = document.querySelector('#principal');
var liPremios  =  document.querySelector('#liPremios');


const botonGaleria = document.querySelector('#boton-galeria');

obtenerArchivo('principal.html', main); //para la primera vez.

main.addEventListener('click', function(e){
    if(e.target.id == 'boton-galeria'){
        e.preventDefault()
        obtenerArchivo('galeria.html', main);
    }
})


function obtenerArchivo(archivoUrl, mainInsert) {

    var peticion = new XMLHttpRequest();
    peticion.open('GET', archivoUrl, true);
    peticion.send();
    peticion.addEventListener('loadend', function(e) {
        if(peticion.status == 200) {
            var contenido = peticion.response;

            var splitArchivo = archivoUrl.split('/');
            splitArchivo = splitArchivo[splitArchivo.length - 1];
            var nombreArchivoCss = splitArchivo.split('.')[0];


            head.lastElementChild.href = `estilos/estilos_${nombreArchivoCss}.css`
            mainInsert.innerHTML = contenido;

        }
    });
}

navbar.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.nodeName == 'A'){
        obtenerArchivo(e.target.href, main);
    }
});

