const mainIndex = document.querySelector('#main')

const imagenHolland = ['cherry.jpg','endgame.jpg','lo-imposible.jpg','onward.jpg','spiderman2.jpg','the-current-war.jpg','the-devill-all-times.jpg','tom-holland-spider-man.jpg','uncharted.jpg'];

mainIndex.addEventListener('click', function(e){
    if(e.target.id == 'flecha-derecha' || e.target.id == 'flecha-izquierda'){
        var imagenPrincipal = document.querySelector('#imagen-principal');
        cambiarImagen(e.target.id, imagenPrincipal);
    }
})


function posActual(imagen) {
    var splitArrayImg = imagen.split('/');
    var nombre = splitArrayImg[splitArrayImg.length - 1];
    var posicion = imagenHolland.indexOf(nombre);
    return posicion;
}

function cambiarImagen(id, imagenActual) {
    var nombreEnArray;
    var posArray = posActual(imagenActual.src);
    if(id == 'flecha-izquierda') {
        if(posArray == 0) {
            nombreEnArray = imagenHolland[imagenHolland.length - 1];
            imagenActual.src = `./img/galeria/${nombreEnArray}`;
        }else{
            nombreEnArray = imagenHolland[posArray - 1];
            imagenActual.src = `./img/galeria/${nombreEnArray}`;
        }
    }else{
        if(posArray == imagenHolland.length - 1) {
            nombreEnArray = imagenHolland[0];
            imagenActual.src = `./img/galeria/${nombreEnArray}`;
        }else{
            nombreEnArray = imagenHolland[posArray + 1];
            imagenActual.src = `./img/galeria/${nombreEnArray}`;
        }
    }
}


/* flechaDerecha.addEventListener('click', function (e){
    console.log('flechaDerecha');
})

flechaIzquierda.addEventListener('click', function (e){
    console.log('flechaIzquierda');
}) */