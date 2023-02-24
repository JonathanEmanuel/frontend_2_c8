console.info('Clase 05.js');
const sitio = document.querySelector('body');
const titulo = document.querySelector('h1');
const menuItems = document.querySelectorAll('nav ul li');
const articulos = document.querySelectorAll('article');
const clima = document.querySelector('.clima');

console.log(titulo, clima);
console.log(menuItems);
console.log(articulos);

titulo.innerText = 'Clase 05 news';

console.log( articulos[1] );


menuItems.forEach( (item) =>{

    console.log(item);

    item.style.color = '#e4f587';
    item.style.textTransform = 'uppercase';

});

sitio.classList.add('dark');


/* for (let i = 0; i < menuItems.length; i++) {
    console.log(menuItems[i])
    
} */


/* 
let noticiaTitulo = 'Futbol noticia';
let noticiaFoto = 'http://127.0.0.1:5500/Semana_02/img/escuela.webp';

articulos[1].innerHTML =  // html
                            `<div>
                                <h2> ${ noticiaTitulo }</h2> 
                                <img src="${ noticiaFoto }" alt="foto">
                                <p>una texto mas</p>
                            </div>`; */

function actualizarClima(){

    const datos = {
        temperatura: 31,
        zona: 'Monte Grande',
        icon: '🌤'
    }

/*     clima.innerText =  datos.icon + ' ' + datos.temperatura + ' ' +datos.zona; */
    
    clima.innerText = `${datos.icon} ${datos.temperatura} ${datos.zona}`;

}

actualizarClima();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo dark, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
