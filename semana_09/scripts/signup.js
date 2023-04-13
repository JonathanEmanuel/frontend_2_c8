/* ---------------------- obtenemos variables globales ---------------------- */
const form = document.querySelector('form');   
const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const inputPasswordRepetida = document.querySelector('#inputPasswordRepetida');


    

/* -------------------------------------------------------------------------- */
/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
/* -------------------------------------------------------------------------- */
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.info('✉');
    const nombre =  normalizarTexto( inputNombre.value );
    const apellido = normalizarTexto( inputApellido.value );
    const email = inputEmail.value;
    const password1 = inputPassword.value;
    const password2 = inputPasswordRepetida.value;
    

    if ( !compararContrasenias( password1, password2 )){
        alert('Las contraseñas No son iguales');
        return;
    }

    const datos = {
        firstName: nombre,
        lastName: apellido,
        email: email,
        password: password1
    }

    //console.log(datos);

    realizarRegister(datos);
});

/* -------------------------------------------------------------------------- */
/*                    FUNCIÓN 2: Realizar el signup [POST]                    */
/* -------------------------------------------------------------------------- */
function realizarRegister(datos) {
    const endpoint= 'https://todo-api.ctd.academy/v1/users'
     
    const settings = {
        method: 'POST',
        body: JSON.stringify( datos ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }
    
    fetch(endpoint, settings)
    .then( respuesta => {
        console.log(respuesta);

        return respuesta.json();
    
    }).then( respuestaJSON => {
        console.log(respuestaJSON);
        if( respuestaJSON.jwt){
            localStorage.setItem('jwt', JSON.stringify(respuestaJSON.jwt) );
            location.replace('mis-tareas.html');

        } else {
            alert('Ups tenemos un error '+ respuestaJSON);

        }
    
    }).catch( error => {  // Si falla
        console.error(error);
        alert('Upss tenemos un error :(');
    })

};
