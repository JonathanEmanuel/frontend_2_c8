/* -------------------------------------------------------------------------- */
/*                           FUNCION 01: Captura los datos y los retorna      */
/* -------------------------------------------------------------------------- */
function capturarDatos(){
    const informacion = {
        nombre: '',
        password: '',
        telefono: '',
        hobbies: [],
        nacionalidad: ''
    }

    const inputNombre = document.querySelector('#nom');
    const inputPassword = document.querySelector('#pass');
    const inputTel = document.querySelector('#tel');
    const hobbies = document.querySelectorAll('[name=hobbies]');
    const nacionalidades = document.querySelectorAll('[name=nacionalidad]');


   // console.log(hobbies)
    informacion.nombre = inputNombre.value;
    informacion.password = inputPassword.value;
    informacion.telefono = inputTel.value;

    // Recorro el nodeList y verifico su atributo checked
    for (const elemento of hobbies) {
        if( elemento.checked == true){
            informacion.hobbies.push(  elemento.id )
        }
    }

    // Recorro el nodeList y verifico su atributo checked
    nacionalidades.forEach(elemento => {
        if( elemento.checked ){
            informacion.nacionalidad = elemento.id;
        }
    });

/* 
    Versión clasica
    for (let index = 0; index < hobbies.length; index++) {
        const element = hobbies[index];
        
        if( element.checked  ){
            console.log(element)
        }
    }

*/

    return informacion;
}


/* -------------------------------------------------------------------------- */
/*         FUNCION 02: Escuchamos el evento SubmitEvent del Formulario        */
/* -------------------------------------------------------------------------- */
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(e) {
    //console.log(e);
    // Evito la recarga del formulario
    e.preventDefault();
    //console.log('Acción del Formulario');

    const datos = capturarDatos();
    //console.log('Datos desde la F 2:' ,datos);


    const listaErrores = validarInformacion(datos);

    //console.log(listaErrores);

    renderizarErrores(listaErrores);
})


/* -------------------------------------------------------------------------- */
/*                       FUNCION 03: Validamos los datos                      */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejeto Informacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error:
//  "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 6- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(informacion) {
    let errores = [];
    // 👇 desarrollar aqui la funcion
    if(  !isNaN( informacion.nombre) || informacion.nombre.length < 3   ){  // Valido el nombre
        errores.push('El nombre debe tener al menos 3 caracteres.');
    }

    
    if(   informacion.password.trim().length < 6   ){  // Valido el password
        errores.push('La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.');
    }

    if( informacion.telefono.length < 10  ){  // Valido el teléfono
        errores.push('No es un teléfono válido..');
    }

    if( informacion.hobbies.length  > 4  ){  // Valido los hobbies
        errores.push('Sólo es posible seleccionar 4 hobbies.');
    }


    if( informacion.nacionalidad === '' ) {  // Valido la nacionalidad
        errores.push('Debe seleccionar una nacionalidad.');
    }
    return errores;
}