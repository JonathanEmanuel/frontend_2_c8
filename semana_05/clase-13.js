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
// Iniciamos con los estados como si estarian en error, para que no se pueda enviar el formulario vacio
const estadosErrores = {
    email: true,
    password: true,
    rol: true,
    terminos: true
}

/* -------------------------------------------------------------------------- */
/*                    FUNCION 01 MUESTRA ERRORES AL USUARIO                   */
/* -------------------------------------------------------------------------- */
function mostrarErrores(){

    if(  estadosErrores.email == true){
        emailError.classList.add('visible');
        console.log('Email No valido');
    } else {
        emailError.classList.remove('visible');
        console.log('Email Valido');
    }
    //                               if                                       else 
    estadosErrores.password === true  ? passwordError.classList.add('visible') : passwordError.classList.remove('visible');
    estadosErrores.rol  ? rolError.classList.add('visible') : rolError.classList.remove('visible');
    estadosErrores.terminos  ? terminosError.classList.add('visible') : terminosError.classList.remove('visible');

}


/* -------------------------------------------------------------------------- */
/*                   FUNCION 02 EVENTO CHANGE DEL FORMULARIO                  */
/* -------------------------------------------------------------------------- */
// Cadavez que se realiza un cambio en los valores de los campos, actualizo el objeto estadoUsuario
formulario.addEventListener('change', function() {
    console.log('Cambio el formulario');
    estadoUsuario.email = inputEmail.value;
    estadoUsuario.password = inputPassword.value;
    estadoUsuario.rol = selectRol.value;
    estadoUsuario.terminos = inputTerminos.checked;

    // Actualizo los estado de Errores
    estadosErrores.email = validarEmail(estadoUsuario.email);
    estadosErrores.password = validarPassword(estadoUsuario.password);
    estadosErrores.rol = validarRol(estadoUsuario.rol);
    estadosErrores.terminos = validarTerminos(estadoUsuario.terminos);
    mostrarErrores();
})


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if( estadosErrores.email == true  ||  estadosErrores.password || estadosErrores.rol || estadosErrores.terminos  ){
        alert('No se puede enviar');
    } else {
        console.info('✉');
        localStorage.setItem('usuario', JSON.stringify( estadoUsuario) );
  


        location.href = 'usuario.html';
    }

})


// Si sale la validación del email mejor
// 💡 .includes(' ') 
function validarEmail(email){
    const regEx = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i; 
    return ! regEx.test(email)

    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    
    //new RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/;');

    //let regEx = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
    if( regEx.test(email)   ){
        return false;
    } else {
        return true;
    }


/*     if(  email.includes('@') && !email.includes(' ') && email.includes('.')  ){
        return false; // 👌
    } else {
        return true;
    } */

}


function validarPassword(password){
    // Deben ser al menos 6 caracteres sin espacios e incluir un número.
    if(  password.length >= 6  && !password.includes(' ') ){
        return false; // 👌
    } else {
        return true;
    }
}



// Si no hay errores retorna false
function validarRol(rol){
    if( rol == ''){
        return true;
    } else {
        return false;
    }
}


// false -> No hay errores
function validarTerminos(terminos){
    // Si  No esta tildado
    if (terminos == true ){
        return false;
    } else {
        return true;
    }
}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
