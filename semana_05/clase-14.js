window.addEventListener('load', function(){
    const usuario =  recuperarDataStorage();
    console.table(usuario)

    renderizarElemento(usuario);

})

/* -------------------------------------------------------------------------- */
/*                 [7] FUNCION: Recuperar la info del storage                 */
/* -------------------------------------------------------------------------- */
function recuperarDataStorage() {
    const datosEnJSON = localStorage.getItem('usuario');

    const datosParseados = JSON.parse(datosEnJSON);

    return datosParseados;
}


/* -------------------------------------------------------------------------- */
/*                [8] FUNCION: Renderizamos la info en pantalla               */
/* -------------------------------------------------------------------------- */
function renderizarElemento(usuario){

}