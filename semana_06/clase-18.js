/* -------------------------------------------------------------------------- */
/*                    FUNCION 01 - ESCUCHA EL EVENTO SUBMIT                   */
/* -------------------------------------------------------------------------- */
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('✉');
    enviarDatos();
})

/* -------------------------------------------------------------------------- */
/*                FUNCION 02 - CAPTURA LOS DATOS DEL FORMULARIO               */
/* -------------------------------------------------------------------------- */
function caputarDatos(){
    const titulo = document.querySelector('#titulo');
    const comentario = document.querySelector('#comentario');

    const datos = {
        titulo: titulo.value,
        comentario: comentario.value
    }

    return datos;
}

/* -------------------------------------------------------------------------- */
/*                    FUNCION 03 - ENVIA LOS DATOS A LA API                   */
/* -------------------------------------------------------------------------- */
function enviarDatos(){
    // FETCH
    const datos = caputarDatos();
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';
    const config = {
        method: 'POST',
        body: JSON.stringify( datos ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    renderizarDatos('Enviando Datos...')
    fetch(endpoint, config)
    .then( respuesta =>  respuesta.json())
    .then( datos => {
        console.log(datos);
        renderizarDatos('Posteo Creado')

    })
     .catch( error => {  // Si falla
        console.error(error);
        renderizarDatos('Upss tenemos un error :(');
    })


}

/* -------------------------------------------------------------------------- */
/*                        FUNCION 04 - RENDERIZA DATOS                        */
/* -------------------------------------------------------------------------- */
function renderizarDatos(mensaje){
    const respuesta = document.querySelector('.respuesta');
    respuesta.innerHTML = `<p>${mensaje}</p>`;
}