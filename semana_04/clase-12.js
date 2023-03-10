/* -------------------------------------------------------------------------- */
/*                     FUNCION 04: Renderizado de Errores                     */
/* -------------------------------------------------------------------------- */
function renderizarErrores(lista){
    // Limpiamos el contenedor
    const divErrores =  document.querySelector('#erroresDiv');
        
    if( divErrores ) {
        divErrores.remove();

    }

    if( lista.length > 0){
        console.warn('Upss tenemos algunos errores');
        console.table(lista);

        const div = document.createElement('div');
        div.setAttribute('id', 'erroresDiv')
        div.style = "background: red; padding: 1.2rem; margin: 1rem";
        const ul = document.createElement('ul');
        div.appendChild(ul);

        lista.forEach(error => {
            const li = document.createElement('li');
            li.innerText = error;
            ul.appendChild(li);
        });

        console.log(div);
        formulario.appendChild(div);
    }


}


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario
