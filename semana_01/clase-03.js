console.info('--- clase 03 ---');
// FUNCION 01 - iniciarJuego()
// FUNCION 02 - pedirJugada()
// FUNCION 03 - jugadaRandom()
// FUNCION 04 - compararJugada()
let puntos = {
    usuario: 0,
    maquina: 0
}

const nombreJugador = iniciarJuego();
 /* -------------------------------------------------------------------------- */
 /*                             👇 Bucle Principal                             */
 /* -------------------------------------------------------------------------- */
 // Mientras no ganen tres veces el usuario y tres veces la maquina
while (puntos.usuario < 3 && puntos.maquina < 3 ) {
    const resultadoPartida = compararJugada();
    
    if( resultadoPartida == '¡Felicitaciones Ganaste!'){
        puntos.usuario++;
    } else if( resultadoPartida == 'Perdiste, Segui participando') {
        puntos.maquina++;
    }

    console.table(puntos);
}


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar el objeto puntos para poder contabilizar los empates tambien.
// 2- Modificar el bucle para poder sumar tambien la cantidad de empates.
// 3- Mostrar en cada partida el resultado al usuario.
// 4- Mostrar finalmente la cantidad de partidas jugadas y que sepa cuantas ganó, perdió o empató durante el juego.