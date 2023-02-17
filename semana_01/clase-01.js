console.log('Clase 01 - Front II');
/* ------------------------------- FUNCION 01 ------------------------------- */
function iniciarJuego(){
    // Saludo al usuario
    alert('Bievenido al Juego del Piedra Papel o Tijera');
    let nombre;
    do {
        nombre = prompt('¿Cual es tu nombre?');
        console.log('Bienvenido ' + nombre);
        //        false           true           -> false 
    } while( !isNaN(nombre) || nombre.trim().length <= 3 );
    // Solicito el nombre del usuario

    return nombre;
}
// Constante Global
// const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.