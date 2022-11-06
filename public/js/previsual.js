console.log("FUNCIONA Y ANDA");


var titulo= document.getElementById('titulo')
var tematica = document.getElementById('categoria')
var contenido = document.getElementById('descripcion')
var imagen = document.getElementById('imagen')

console.log(imagen)


function preVisual(){
    var rellenarTematica = document.getElementById('tematica');
    var rellenarTitulo = document.getElementById('titulobtenido');
    var rellenarContenido = document.getElementById('rdescripcion')
    var img = document.getElementById('img')
    var cardt= document.getElementById('cardt')
    var cardd= document.getElementById('cardd')
    var cardi= document.getElementById('cardi')


    tematica.addEventListener ('change', () =>{
        rellenarTematica.innerText =  tematica.value
        cardd.innerText = tematica.value
    });

    titulo.addEventListener ('change', () =>{
        rellenarTitulo.innerText =  titulo.value
        cardt.innerText = titulo.value
    });

    contenido.addEventListener ('change', () =>{
        rellenarContenido.innerText =  contenido.value
    });

    imagen.addEventListener('change', (event) => {
        // Los archivos seleccionados, pueden ser muchos o uno
        const archivos = imagen.files;
        // Si no hay archivos salimos de la función y quitamos la imagen
        if (!archivos || !archivos.length) {
            img.src = "";
            return;
        }
        const primerArchivo = archivos[0];
        // Lo convertimos a un objeto de tipo objectURL
        const objectURL = URL.createObjectURL(primerArchivo);
        // Y a la fuente de la imagen le ponemos el objectURL
        img.src = objectURL;
        cardi.src = objectURL
    });

}

preVisual()