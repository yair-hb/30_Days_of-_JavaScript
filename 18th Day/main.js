console.log('%c Promises', 'color:red')

// una promesa es una forma de maneajr operaciones asincronas en javascript 
// esto permite que los metodos asincronos devuelvan valores en algun momento en el futuro

/*      => una promesa puede estar en uno de estos estados
            *** pendiente: estado inicial, ni ha sido cumplida ni rechazada
            *** cumplida: significa que la operacion se completo con exito
            *** rechzada: significa que la operacion falló

            PENDINDG
            FULFILLED
            REJECTED

Una promesa PENDING puede completarse con un valor o rechazarse con una razon(error)
cuando una de laas anteriores sucede los controladores asociados que esstan a la espera entonces el metodo es llamado

*** si la promesa ya ha sido cumplida o rechazada, se llamara al controlador
*** los metodos Promise.prototype.then() y Promise.prototype.catch devuelven promesas se pueden encadenar 


    CALLBACKS
son funciones que pasan como parametros de otra funcion
*/


const doAlgo = callback =>{
    setTimeout(() =>{
        const skill = ['HTML','CSS','JS']
        callback('no va bien', skill)
    }, 3000)
}

const callback = (err, result) => {
    if (err){
        return console.log(err)
    }
    //return console.log(result)
}

//doAlgo(callback)

// en este caso el ERR es false por lo que va a returnar el bloque ELSE 

const doSomething = callback =>{
    setTimeout(() =>{
        const skill =['html', 'css', 'js']
        callback(false, skill)
    }, 3500)
}

doSomething((err, result) => {
    if (err){
        return console.log(err)
    } 
    //return console.log(result)
})


//      PROMISES CONSTRUCTOR
// se puede crear una promesa usando el PROMISE CONTSRUCTOR. 
// se crea una promesa usando la palabra NEW seguido de la palabra PROMISE y seguido de un parentesis
// dentro del parentesis toma la funcion  CALLBACK 
// la funcion de CALLBACK tiene dos parametros que son la RESOLVE y la REJECT functions

/*              const promise =  new Promise ((resolve, reject) =>{
                    resolve('success')
                    reject('failure')
                })
*/

/*
const doPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const skills = ['Python','C++', 'Javascript']
        if (skills.length > 0){
            //resolve(skills), console.log('%c---------------', 'color:orange')
        }
        else {
            reject('ha ocurrido un error')
        }
    }, 4000)
})

doPromise
    .then(result => {
    //console.log(result)
    })
    .catch(error => console.log(error))


//-------------------------

const doPromise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        const skill = ['html', 'css', 'javascript']
        if (skill.includes('node')){
            resolve('Fullstack developer')
        }
        else {
            reject('Ha ocurrido un error')
        }
    }, 5000)
})

doPromise2
    .then(result =>{
        console.log(result)
    })
    .catch(error => console.log(error))


/*          FETCH API 
la fetch API proporciona una interfaz para obtener recursos incluso en toda la red
es muy similar a XMLHttpRequest pero la API proporciona mas y flexibles caracteristicas

        => En est desafio vamos a usar FETCH para solicitar URL y APIS 
            ademas de eso veamos una demostracion del caso de uso de las promesas
            para acceder a los recursos de la red mediante FETCH API
*/
/*
const url = 'https://restcountries.com/v2/all' // API DE PAISES
fetch(url)
    .then(response => response.json()) //ACCESSANDO A LA API EN FORMATO JSON
    .then(data => {
        //console.log(data) //OBTENIENDO LA DATA
    })
    .catch(error => console.log(error))


/*          ASYNC y AWAIT
ASYNC y AWAIT es una forma elegante de manejar las promesas. es facil de entender muy facil de escribir
*/

/*const square = async function(n){
    return n*n
}
*/
//square(10)

// la palabra ASYNC despues de una funcion significa que returnara una promesa
// para acceder al valor de la promesa se usa AWAIT 

/*
const url2 = 'https://restcountries.com/v2/all'
fetch(url2)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
    })
    .catch(error => console.error(error))

// ASYNC y AWAIT

const fetchData = async () =>{
    try{
        const response = await fetch(url)
        const countries = await response.json()
        //console.log(countries)
    }
    catch(err){
        console.error(err)
    }
}

console.log('===== async and wait')
fetchData()


const square = async function (n) {
    return n * n
}
async function func (){
    const value = await square(2)
    console.log(value)
}

func()


*/
console.log('%c EJERCICIOS DEL DIA 18 DEL CURSO DE JAVASCRIPT', 'color:red')

//*************************************************************** */

const sq = async function(n) {
    return n*n
}

async function sd (){
    const value = await sq(6)
    
}

console.log(sd())