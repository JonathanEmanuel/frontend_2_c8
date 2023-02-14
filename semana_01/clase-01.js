console.log('Clase 01 - Front II');
/* ------------------------------- FUNCION 01 ------------------------------- */
function inciarJuego(){
    // Saludo al usuario
    alert('Bievenido al Juego del Piedra Papel o Tijera');
    // Solicito el nombre del usuario
    let nombre = prompt('¿Cual es tu nombre?');

    console.log('Bienvenido ' + nombre);

    return nombre;
}
// Constante Global
const nombreJugador = inciarJuego();