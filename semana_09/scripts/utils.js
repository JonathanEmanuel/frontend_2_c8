/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
}

function normalizarTexto(texto) {
    return texto.trim();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    
}

function normalizarEmail(email) {
    return email.trim();
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    if( contrasenia_1 === contrasenia_2){
        return true;
    } else {
        return false;
    }

}

function msgBox(mensaje, icon){
    Swal.fire({
        icon: icon,
        title: 'ToDo App',
        text: mensaje,
        confirmButtonText: 'Aceptar',
        background: '#1c1c1f'
      })
}