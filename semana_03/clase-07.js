/* ------------------- FUNCION 01 - Solictamos el usuario ------------------- */
function getUser(){
    const nameUser = document.querySelector('#nombreUsuario');
    let nombre = '';
    do{
        nombre = prompt('Hola! ¿Cómo te llamas?')

    } while( nombre === null || nombre.trim() === '' || nombre.length < 3);

    nameUser.innerText = nombre;
}

/* ------------------- FUNCION 02 - Renderizamos los datos ------------------ */
function renderizarAlbumes(listado){
    const listadoAbumes = document.querySelector('.covers');
    // Limpio el contenedor padre
    listadoAbumes.innerHTML = '';

    listado.forEach(album => {

        const fotoUrl = album.imagen;

        listadoAbumes.innerHTML += // html
                        `<li>
                            <img src="${ fotoUrl}" alt="${ album.nombre}">
                            <p> ${ album.nombre }</p>
                            <i  id="${album.id}" class="fa fa-heart ${ album.like == true ? 'like' : '' } "></i>
                        </li>`;

    });
    
}



//getUser();
renderizarAlbumes(albumesFamosos);

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil() {
    // desarrollar la función 👇

}
mostrarDatosEnPerfil();