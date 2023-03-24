/* -------------------------------------------------------------------------- */
/*                     FUNCION 01 - Consume dato de la API                    */
/* -------------------------------------------------------------------------- */
// API: https://reqres.in/
// EndPoint: https://reqres.in/api/users?page=1
const main = document.querySelector('#app');
const btn = document.querySelector('button');
const select = document.querySelector('#pages');
const servidor = 'https://reqres.in/api/';


btn.addEventListener('click', function() {
    let page =select.value;
    let endPoint = `${servidor}users?page=${page}`;
    fetch(endPoint)
    .then( response => response.json() )
    .then( dataJSON => {
        console.log(dataJSON);
        console.log(dataJSON.data);

        let datos = dataJSON.data;

        renderizarUsuarios(datos);
    }) 
    .catch( error => {
        main.innerHTML = '<h2>Ups ocurrio un error</h2>';
        console.error(error);
    })

})


/* -------------------------------------------------------------------------- */
/*                       FUNCION 02 - Renderiza usuarion                      */
/* -------------------------------------------------------------------------- */
function renderizarUsuarios(listado){
    main.innerHTML = '';

    if( listado.length == 0){
        main.innerHTML = '<h2>No hay nada para mostrar</h2>';
        return;
    }

    listado.forEach(user => {
       main.innerHTML += // html
       `<div class="card">
            <h4> ${user.first_name}</h4>
            <p>${user.email}</p>
            <img src="${user.avatar}" alt="${user.first_name}">
            <a href="#">Ver detalle</a>
        </div>`
    });
}