console.log('%c CLOSURES', 'color:red')

//javascript permite escribir una funcion dentro de otra funcion externa.
//se pueden escribir tantas funciones internas como sean requeridas.
// si la funcion inter accede a las variables de la funcion externa, enconces se llama  CLOSURE
// tambien llamadas clausulas o funciones de cierre 
// todas las funciones em javacript es un objeto u heredan propiedades de la clase object
        //=> se pueden guaradr una funciion en una variable y despues invocarla


const a = 'Hola'

function global(){
    const b = 'Que'

    function local (){
        const c = 'tal'
        return a+b+c
    }
    return local
}

global()
global()()

const closure = global()
console.log(closure())

// las variables privadas dentro de las closures se suelen iniciar con un _
// y las funciones internas se encierran en un parentesis
// y se debe ejecutar al final para completar el closure 
// se deben returnar las funciones internas 
//usa un patron parecido a las clases pues se puede accerder a valores o funciones que existen dentro



const miContador = (function (){
    let _contador = 0
    
    function incrementar (){
        return _contador++
    }
    function decrementar (){
        return _contador--
    }
    function valor (){
        return _contador
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})()

console.log(miContador.valor())
console.log(miContador.incrementar())
console.log(miContador.incrementar())
console.log(miContador.incrementar())
console.log(miContador.valor())
console.log(miContador.decrementar())
console.log(miContador.decrementar())
console.log(miContador.valor())

//----------------------------------

const func1 = function(){
    let contador = 0
    function func2 (){
        contador++
        return contador
    }
    return func2
}

const laF = func1()

console.log(laF())
console.log(laF())
console.log(laF())
console.log(laF())
