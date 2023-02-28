const titulo = document.createElement('h2');
const header = document.querySelector('header');
const fotos = document.querySelectorAll('article img');
const mainNoticias = document.querySelector('.noticias');

titulo.innerText = 'Soy un texto desde un innerText';

fotos.forEach(foto => {
    console.log(foto);
    foto.setAttribute('title', 'Imagen');

});

console.log(mainNoticias);

header.appendChild( titulo );


// 1.Recorro el array
// 2.Crear cada elemento
// 3.Agrego el elemento creado en el padre
noticiasLista.forEach( noticia => {

    const articulo = document.createElement('article');
    const subtitulo = document.createElement('h2');
    const foto = document.createElement('img');
    const texto = document.createElement('p');

    subtitulo.innerText = noticia.titulo;
    texto.innerText = noticia.epigrafe;
    
    foto.setAttribute('src', noticia.foto );
    foto.setAttribute('title', 'Foto de la noticia');

    //articulo.setAttribute('class', 'border');
    //articulo.classList.add('border');

    if( noticia.importante == true ){
        articulo.classList.add('especial');
    }

    articulo.appendChild( subtitulo );
    articulo.appendChild( foto );
    articulo.appendChild( texto );

    console.log(articulo, subtitulo, foto, texto)

    mainNoticias.appendChild(articulo);

});

function renderizarNoticias(){
    
    
}

renderizarNoticias();


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "noticiasLista" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;