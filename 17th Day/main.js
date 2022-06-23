console.log('%c WEB STORAGE', 'color:red')

/* web storage ( sessionStorage  y localStorage) es una nueva api de HTML5  que ofrece grandes beneficios comprado con las cookies
    - Antes de HTML5 la data se almacenaba en cookies incluido en cada server request
    - Web Storage  es mas seguro y grandes cantidades de data se pueden almacenar localmente sin afectar el performance de la pagina web
    - El limite de almacenamiento de las cookies en muchos sitios es de 4KB por cookie
    - WebStorage permite hasta 5MB de data y nunca se transfiere al servidor 
    - Todos los sitios del mismo origen oueden almacenar y acceder a los mismos datos 
*/

/*  - se pueden acceder a los datos almacenados usando Javascript
    - lo que brinda las capacidades de los comandos que usualmente se involucran en el lado del servidor y DDBB
    - Hay dos tipos de WEBSTORAGE OBJECTS
        - sessionStorage
        - localStorage

    - localStorage es muy similar a sessionStorage excepto que si bien los datos almacenados en localStorage no caducan
        -los datos almacenados en sessionStorage se borran cuando finaliza la session osea que se cierra la pagina
    - cabe señalar que los datos almacenados en localStorage o sessionStorage son especificos del protocolo de la pagina

    - Las KEYS y los VALUES son siempre strings
    - Asi como con los objetos las KEYS seran convertidas a strings automaticamente
*/


// SESSIONSTORAGE

/*  - sessionStorage esta solamente disponible cuando la pestaña del navegador esta abierta.
    - esta diseñada para almacenar data en una sola sesion de pagina web.
    - significa que cuando cerremos la pagina la data sera borrada 
*/

// LOCALSTORAGE

/*  - El localStorage de HTML5 es la parte de la API de almacenamiento  que se usa para guardar data en el navegador 
        - sin que esta expire.
    - La data estars disponible incluso despues de cerrar el navegador.
    - localStorage se mantiene incluso entre las sesiones del navegador
        - significa que la data esta disponible cuando se cierra el navegador y se vuelve a abrir 
    - WEBSTORAGE data es en ambos casos no esta disponible entre navegadores diferentes.
        - por ejemplo no se puede acceder a la data creada in Firefox desde IE. exactamente como las cookies 
    - Hay 5 metodos para trabajar con la local storage

    setItem()
    getItem()
    removeItem()
    clear()
    key()

CASOS DE USO DEL WEB STORAGE

    algunos casos del webStorage son
    -guardar data temporalmente
    -guardar articulos de compra en el carrito
    -data puede ser utilizada entre solicitudes de multiples ventanas y tambien entre sesiones del navegador
    -pueden ser ustilizadas de manera offline usando localStorage
    -usar el webStorage puede ayudar en agilizar el rendimiento de la pagina cuando algunos datos estaticos se
        - almacenan en el cliente para minimizar la cantidad de solicitudes posteriores, incluso imagenes usando la codificacion Base64
    - se puede usar para el metodo de autenticacion del usuario


    - En algunos casos que queramos desahacernos del data tan pronto como se cierre una ventana 
    - En casos que no queremos que se interfiera con la misma aplicacion que esta abierta en otra ventana
    - se suele usar SESSIONSTORAGE

HTML5 WEBSTORAGE OBJECTS 

    -HTML web storage provee de dos tipos de objects para almacenar data en el cliente:
        => window.localStorage - (almacena data sin fecha de expiracion)
        => widow.sessionStorage - (almacena data para una sola sesion)*la data sera borrada cuando la pestaña del
                                    navegador sea cerrada.
            ** muchos de los navegadores mas recientes soportan webStorage.
            ** es importante verificar si el navegador soporta webStorage

METHODS PARA WEBSTORAGE
        => localStorage - para mostrar el localStorage object
        => localStorage.clear() - para remover todo el local storage 
        => localStorage.setItem() - para guardar en el local storage. toma un key y un value como parametros
        => localStorage.getItem() - para mostrar guaradada en el localStorage. toma un key como parametro
        => localStorage.removeItem() - para remover un item del localStorage. toma un key como parametro 
        => localStore.key() - para mostrar una data almacenada en el localStorage. toma un indice como parametro

Setting item en localStorage
        - cuando seteamos un item en localstorage se guarda como STRING.
        - si queremos guardar un array o un objeto debemos usar el metodo .stringify() para mantener el formato
                de otra forma perderemos la estructura original de la data


SET STORE IN LOCALSTORAGE USANDO localStorage.setItem() 

        localStorage('key', 'value')

        localStorage('firstName', 'Asabaneh')
        **** por ser un string aqui no se usa strigify()


SET A NUMBER IN localStorage()

        -localStorage.setItem('age', 200)

 SET AN ARRAY en localStorage()
        - si queremos seteat un array en localStore se debe usar antes .stringify() 
*/
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python']
        const skillsJSON = JSON.stringify(skills, undefined, 4)
        localStorage.setItem('skills', skillsJSON)
        console.log(localStorage)

let skills2 = [
    { tech: 'HTML', level:10},
    { tech: 'CSS', level:9},
    { tech: 'JS', level:8},
    { tech: 'React', level:9},
    { tech: 'Redux', level:10}, 
    { tech: 'Node', level:8},
    { tech: 'MongoDB', level:8}
]

let skills2JSON = JSON.stringify(skills2, undefined, 4)
localStorage.setItem(skills, skills2JSON)
console.log(localStorage)

const user = {
    nombre: 'Yair',
    edad:40,
    skills:['python', 'c++', 'Javascript']
}

const userJSON = JSON.stringify(user, undefined, 4)
localStorage.setItem('usuario', userJSON)

/* GETTING ITEM FROM LOCALSTORAGE
        - se obtiene la data usando el metodo localStorage.getItem()

        *localStorage.getItem('key')

*/

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills3 = localStorage.getItem('skills')

console.log(firstName, age, skills)

// la data viene en formato STRING usaremos JSON.parse() para convertirlo en un array normal

let skillsParse = localStorage.getItem('skills')
let skillsObj = JSON.parse(skillsParse, undefined, 4)
console.log(skillsObj)

/* CLEARING the localStorage

    -Para limpiar el localStorage se usa clear()
    
*/
//console.log(localStorage.getItem('firstName'))
//localStorage.clear()
console.log(localStorage.getItem('firstName'))


//((((((((((((((((((((((((ejericicios del dia 17 del curso de javascript))))))))))))))))))))))))

localStorage.setItem('firstName', 'Yair')
localStorage.setItem('lastName', 'Hernandez')
localStorage.setItem('age', 30)
localStorage.setItem('country', 'Mexico')
localStorage.setItem('ciudad', 'Toluca')

let fn = localStorage.getItem('firstName')
console.log(fn)
let ln = localStorage.getItem('lastName')
console.log(ln)
let ag = localStorage.getItem('age')
console.log(ag)
let cou = localStorage.getItem('country')
console.log(cou)
let ciu = localStorage.getItem('ciudad')
console.log(ciu)

const student = {
        nombre: 'pepe',
        apellido: 'LAL', 
        edad: 400,
        habilidades: ['Hablar', 'Saludar', 'Comer', 'Dormir']
}

let studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem('Estudiante', studentJSON)
