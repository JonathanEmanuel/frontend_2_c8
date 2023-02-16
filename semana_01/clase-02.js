console.log('Clase 02');

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
// 👇 Solicito la opción del usuario para jugar 1. Piedra 2. Papel y 3. Tijera
// Validad que sea un número entre 1 y 3
function pedirJugada(){
    let opcion;

    do {
        opcion = parseInt( prompt('Ingrese 1.Piedra, 2.Papel o 3.Tijera') );
    // Mientras no sea un número isNaN y opcion > 3 y opcion < 1
    } while(  isNaN(opcion) || opcion > 3 || opcion < 1  )
    
    console.log('La opción es ' + opcion);
    return opcion;
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
// 👇 Obtengo un número randon entre 1 y 3 

