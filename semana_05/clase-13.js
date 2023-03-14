/* -------------------------------------------------------------------------- */
/*                          CAPTURAMOS LOS ELEMENTOS                          */
/* -------------------------------------------------------------------------- */
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const selectRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');
const formulario = document.querySelector('form');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                                   ESTADOS                                  */
/* -------------------------------------------------------------------------- */

const estadoUsuario = {
    email: '',
    password: '',
    rol: '',
    terminos: false
}

const estadosErrores = {
    email: false,
    password: false,
    rol: false,
    terminos: false
}


/* -------------------------------------------------------------------------- */
/*                    FUNCION 01 MUESTRA ERRORES AL USUARIO                   */
/* -------------------------------------------------------------------------- */
function mostrarErrores(){
    if(  estadosErrores.email == true){
        emailError.classList.add('visible');
    } else {
        emailError.classList.remove('visible');

    }
}



// Cadavez que se realiza un cambio en los valores de los campos, actualizo el objeto estadoUsuario
formulario.addEventListener('change', function() {
    console.log('Cambio el formulario');

    estadoUsuario.email = inputEmail.value;
    estadoUsuario.password = inputPassword.value;
    estadoUsuario.rol = selectRol.value;
    estadoUsuario.terminos = inputTerminos.checked;

})



// false -> No hay errores
function validarTerminos(terminos){
    // Si  No esta tildado
    if (terminos == true ){
        return false;
    } else {
        return true;
    }
}
