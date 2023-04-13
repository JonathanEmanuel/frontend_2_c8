AOS.init();
// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const jwt = JSON.parse( localStorage.getItem('jwt') );
// Si no éxiste el JWT entonce lo mando al login
if( !jwt){
  location.replace('index.html');
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  const btnCerrarSesion = document.querySelector('#closeApp');
  const formCrearTarea = document.querySelector('.nueva-tarea');
  const userName = document.querySelector('.user-info p');
  const inputTarea = document.querySelector('#nuevaTarea');

  obtenerNombreUsuario();
  consultarTareas();
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */
  btnCerrarSesion.addEventListener('click', function () {

    Swal.fire({
      title: 'ToDo App',
      text: "¿Seguro que desea Salir de la APP?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {
        localStorage.removeItem('jwt');
        location.replace('index.html');
      }
    })


  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */
  function obtenerNombreUsuario() {
   
    const endpoint = 'https://todo-api.ctd.academy/v1/users/getMe';
    const settings = {
      method: 'GET',
      headers: {
        authorization: jwt
      }
    }

    fetch( endpoint, settings )
    .then(  resp => resp.json() )
    .then( json => {
        //console.log(json);
        userName.textContent = `${json.firstName}  ${json.lastName} `;
    })

  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {

    const endpoint = 'https://todo-api.ctd.academy/v1/tasks';
    const settings = {
      method: 'GET',
      headers: {
        authorization: jwt,
      }
    }
   
    fetch( endpoint, settings )
    .then(  resp => resp.json() )
    .then( json => {
        renderizarTareas(json);
    })

  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */
  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();

    const description = inputTarea.value;
    const completed = false;

    const nuevaTarea = {
      description,
      completed
    }

    inputTarea.value = '';


    const endpoint = 'https://todo-api.ctd.academy/v1/tasks';
    const settings = {
      method: 'POST',
      body:  JSON.stringify( nuevaTarea),
      headers: {
        authorization: jwt,
        'Content-type': 'application/json; charset=UTF-8'
      }
    }

    fetch( endpoint, settings )
    .then(  resp => resp.json() )
    .then( json => {
        console.log(json);
        consultarTareas();
    })

  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    const tareasPendientes = document.querySelector('.tareas-pendientes');
    const tareasTerminadas = document.querySelector('.tareas-terminadas');

    //console.log(listado);
    tareasPendientes.innerHTML = '';
    tareasTerminadas.innerHTML = '';
    // Creamos los elemento en el DOM
    listado.forEach(tarea => {
      const fecha = new Date(tarea.createdAt);

      if( tarea.completed == true ){
        tareasTerminadas.innerHTML += // html
          `<li class="tarea" data-aos="flip-up">
              <div class="hecha">
                <i class="fa-regular fa-circle-check"></i>
              </div>
              <div class="descripcion">
                <p class="nombre"> ${tarea.description}</p>
                <div class="cambios-estados">
                  <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                  <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
                </div>
              </div>
            </li>`;

      } else {
        tareasPendientes.innerHTML += // html
          `<li class="tarea" data-aos="flip-down">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre"> ${tarea.description} </p>
              <p class="timestamp"> ${fecha.toLocaleDateString()}</p>
            </div>
          </li>`;
      }
    });

    // Seleccionar los btn y agregamos un eventListener
    botonesCambioEstado();
    botonBorrarTarea();
  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    const botones = document.querySelectorAll('.change');
    
    botones.forEach(btn => {
      btn.addEventListener('click', function(evento){
        //console.log('Se hizo click', evento.target);
                                        // contains('incompleta') retorna un true o false
        const terminada = evento.target.classList.contains('incompleta');
        const id = evento.target.id;
        const endpoint = 'https://todo-api.ctd.academy/v1/tasks/'+id;
        const datos = {
          completed: !terminada
        }

        const config = {
          method: 'PUT',
          body:  JSON.stringify( datos),
          headers: {
            authorization: jwt,
            'Content-type': 'application/json; charset=UTF-8'
          }
        }
      
        fetch(endpoint, config)
        .then( response => response.json())
        .then( json => {
          console.log(json);
          consultarTareas();
        })


      })
    });



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   const botones = document.querySelectorAll('.borrar');
    
    botones.forEach(btn => {
      btn.addEventListener('click', function(evento){

        const id = evento.target.id;
        const endpoint = 'https://todo-api.ctd.academy/v1/tasks/'+id;

        const config = {
          method: 'DELETE',
          headers: {
            authorization: jwt
          }
        }
      

        Swal.fire({
          title: 'ToDo App',
          text: "¿Seguro que desea eliminar la tarea?",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
    
          if (result.isConfirmed) {
            fetch(endpoint, config)
            .then( response => response.json())
            .then( json => {
              consultarTareas();
            })
          }
        })


      })
    });


  };

});