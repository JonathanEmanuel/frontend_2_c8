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
function jugadaRandom(){
    let numero = parseInt( Math.random() * 3 + 1 );
    console.log('La Compu Juega con ' + numero);
    return numero;
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
// 👇 Retorna el resultado del juego
function compararJugada(){
                            //           0                       1              2
    const resultados_posible = ['¡Felicitaciones Ganaste!', 'Empate', 'Perdiste, Segui participando'];
    const eleccionUsuario = pedirJugada();
    const eleccionCompu = jugadaRandom();

    let resultado;
    //  1.Piedra 2.Papel y 3.Tijera
    // Si empataron
    if( eleccionCompu === eleccionUsuario  ){
        resultado = resultados_posible[1];
    } else if( 
        ( eleccionUsuario === 1 && eleccionCompu === 2) ||
        ( eleccionUsuario === 2 && eleccionCompu === 3) ||
        ( eleccionUsuario === 3 && eleccionCompu === 1) 
     ){
        resultado = resultados_posible[2];
    } else {
        resultado = resultados_posible[0];
    }

    return resultado;
}


/* let resultadoPartida = compararJugada(); */

function recibirResultado(resultado){
    console.log('El resultado es ' + resultado);
    // alert(resultado);
    if(  resultado == 'Perdiste, Segui participando'){
        alert(' Esta vez perdiste, las proxima será :)');
    }
    
}
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.

