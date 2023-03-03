/* const logo = document.querySelector('#logo');

console.log(logo);

logo.addEventListener('click', function(){
    console.log('click 1')
})

window.addEventListener('keypress', function(e){
    console.log('tecla:', e.key);
})
 */

function marcarLike(){
    const botones = document.querySelectorAll('.fa-heart');

    botones.forEach( btn => {
        
        btn.addEventListener('click', function(){
            console.log('Se hizo click en ', btn);
            const id = btn.id;


            albumesFamosos.forEach( item => {
                if( item.id == id){
                    item.like = ! item.like;
                }
            });

            //btn.classList.toggle('like');
            renderizarAlbumes(albumesFamosos);
            marcarLike();
            
        })

    });


    
}


marcarLike();


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
    // desarrollar la función 👇


}
eliminarAlbum();