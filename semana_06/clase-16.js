let listadoComentarios = [
    {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'
    },
    {
        postId: 1,
        id: 2,
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'
    },
    {
        postId: 1,
        id: 3,
        name: 'odio adipisci rerum aut animi',
        email: 'Nikita@garfield.biz',
        body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'
    },
    {
        postId: 1,
        id: 4,
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body: 'non et atque\noccaecati deserunt quas accusantium u…r itaque dolor\net qui rerum deleniti ut occaecati'
    },
    {
        postId: 1,
        id: 5,
        name: 'vero eaque aliquid doloribus et culpa',
        email: 'Hayden@althea.biz',
        body: 'harum non quasi et ratione\ntempore iure ex volupta…ugit inventore cupiditate\nvoluptates magni quo et'
    },
    {
        postId: 2,
        id: 6,
        name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        email: 'Presley.Mueller@myrl.com',
        body: 'doloribus at sed quis culpa deserunt consectetur q…utem\nvoluptatem repellendus aspernatur dolorem in'
    },
    {
        postId: 2,
        id: 7,
        name: 'repellat consequatur praesentium vel minus molestias voluptatum',
        email: 'Dallas@ole.me',
        body: 'maiores sed dolores similique labore et inventore … corporis molestiae mollitia quia et magnam dolor'
    },
    {
        postId: 2,
        id: 8,
        name: 'et omnis dolorem',
        email: 'Mallory_Kunze@marie.org',
        body: 'ut voluptatem corrupti velit\nad voluptatem maiores…samus maiores\nvoluptates quia aliquid ullam eaque'
    },
    {
        postId: 2,
        id: 9,
        name: 'provident id voluptas',
        email: 'Meghan_Littel@rene.us',
        body: 'sapiente assumenda molestiae atque\nadipisci laboru…natur odit sit rem expedita\nquas enim ipsam minus'
    },
    {
        postId: 2,
        id: 10,
        name: 'eaque et deleniti atque tenetur ut quo ut',
        email: 'Carmen_Keeling@caroline.name',
        body: 'voluptate iusto quis nobis reprehenderit ipsum ame…s\nnostrum quaerat nulla et accusamus nisi facilis'
    },
    {
        postId: 3,
        id: 11,
        name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
        email: 'Veronica_Goodwin@timmothy.net',
        body: 'ut dolorum nostrum id quia aut est\nfuga est invent…s quo est\nut blanditiis quia ut vel ut maiores ea'
    }
];

/* -------------------------------------------------------------------------- */
/*                      [1] FUNCION: Escuchamos el click                      */
/* -------------------------------------------------------------------------- */
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    console.info('Carga de comentarios', new Date().toLocaleTimeString());
    
    // Desactivo btn...

    consultaAsincrona('comentarios')
    .then( respuesta => {   // Si se cumple
        console.log(respuesta)
        // Activo el btn...
    })
    .catch( error => {  // Si falla
        console.error(error);
    })

    

    console.log( new Date().toLocaleTimeString() );
})


/* -------------------------------------------------------------------------- */
/*                      [2] FUNCION: creamos una promesa                      */
/* -------------------------------------------------------------------------- */
function consultaAsincrona(url){
    //            resolve, reject
    return new Promise( (resolve, reject) => {

        setTimeout(function(){
            if( url === 'comentarios'){
                // Si todo va bien, retorno esto
                resolve(listadoComentarios);
                
            } else {
                // Si algo falla retorno
                reject({error: 'endpoint invalido'});
            }
        }, 3000)
    });
}




/* ----------------------------- Mesa de trabajo ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                       [3] FUNCION: Pintar en pantalla                      */
/* -------------------------------------------------------------------------- */
// 1- Hay que desarrollar esta función para que reciba los comentarios y los muestre en pantalla.
// 2- La funcion debe ser llamada en el lugar correspondiente.
// 3- En el HTML hay un comentario creado, el mismo debe ser eliminado de ahí, pero hay que respetar
// esa estructura de etiquetas para el resto de los comentarios.
// 4- Para el renderizado podemos utilizar .forEach() pero se valora también intentar
//  llegar al mismo resultado utilizando .map()
// Muchos éxitos!

function renderizarElementos(listado){
    // desarrollar la funcion 👇
}