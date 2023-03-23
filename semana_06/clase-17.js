
/* -------------------------------------------------------------------------- */
/*                          FUNCION 04 - CONSULTA API                         */
/* -------------------------------------------------------------------------- */
function consultarAPI(){

    console.log('----- INICIO -----');
    fetch(endpoint)
    .then( respuesta => {   // Si se cumple
        console.log('Objeto Response', respuesta);
        const respJSON = respuesta.json(); 
        //console.log(respJSON);
        return respJSON;
        
    }).then( datos => {
        console.log(datos);
    })
    .catch( error => {  // Si falla
        console.error(error);
        alert('Upss tenemos un error :(');
    })
    .finally( ()=> {
        console.log('---- FIN -----')
    })


}


const btn = document.querySelector('button');
const endpoint = 'https://jsonplaceholder.typicode.com/comments';

btn.addEventListener('click', function(){
    
    consultarAPI(endpoint);
    
})




function renderizarElementos(listado){
    // desarrollar la funcion 👇
    const areaComentarios = document.querySelector('.comentarios');

     listado.forEach(item => {
           areaComentarios.innerHTML += // html
           ` <div class="comentario">
                <h4>${item.email}</h4>
                <p>${item.body}</p>
            </div>`
    });
}


/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                              Mejoras de código                             */
/* -------------------------------------------------------------------------- */
// 1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
// un error que se le muestre al usuario.
// 2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
// para detectar y arrojar el error deben implementar el bloque try().catch()
// 3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios"
// debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
// 4- Solo deben cargarse los primeros 10 comentarios que nos llegan.