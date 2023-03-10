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


