console.log('%c Manejo de errores', 'color:red')

// javascript es un lenguaje poco tipificado 
// javascript cuenta con mecanismos de manejo de errores para poder detectar errores en tiempo de ejecucion
// usando el bloque try-catch -finally

try {
    // codigo que puede arrojar un error
} catch (err) {
    // codigo a ejecutar si ocurre un error
} finally {
    // codigo que se ejecutara independiente si ocurre un error o no
}


// TRY 
// envuelve el codigo sospechoso que puede arrojar un error en el bloque TRY 
// la declaracion de prueba nos permite dfinir un bloque d codigo para probarlo en busca de errores mientras se ejecuta

// CATCH
// escribe codigo para hacer algo en el bloque CATCH. 
// puede tener parametros que te daran informacion del error.
// el bloque CATCH se utiliza para registrar un error o mostrar mensajes especificos al usurio

// FINALLY 
// el bloque siempre se ejecutara independientemente de si ocurre o no un error
// el bloque FINALLY se puede usar para completar la tarea restante o restablecer las variables que podrian haber cambiado en la prueba de error


try {
    let lastName = 'Yetayeh'
    let fullName = firstName + ' ' + lastName
} catch(err){
    console.log(err)
}

try {
    let apellido = 'Yetayeh'
    let fullName = nombre + ' ' + apellido
} catch(erro){
    console.log(erro)
} finally {
    console.log('En cualquier caso se ejecutara el codigo')
}


// THROW 
// la funcion THROW nos permite crear un error personalizado.
// puede ser a traves de un numero, string, boleano o un object 
// se puede usar THROW para lanzar una EXCEPCION, cuando se lanza una EXCEPCION la expresion especifica el valor de la EXCEPCION


//throw 'Error2' // genera una excepcion con un valor de string
//throw 42 // genera una excepcion con el valor 42
//throw true // genera una excepcion con un valor true
//throw new Error ('Requerido') // genera un object error con el mansaje de 'Requerido'


const throwErrorExampleFun = () => {
    let message 
    let x = prompt('Ingresa un numero: ')
    try{
        if (x == '') throw 'Vacio'
        if (isNaN(x)) throw 'No es un numero'
        x = Number(x)
        if (x<5) throw 'Demasiado bajo'
        if (x>10) throw 'Demasiado alto'
    } catch(err) {
        console.log(err)
    }
}
//throwErrorExampleFun()


// tipo de errores 
console.log('%c Tipo de errores', 'color:red')

// ReferenceError 
// cuando una referencia ilegal ha ocurrido.
// a REFERENCEERROR es mostrado si usamos una variable que no ha sido declarada
//********************** se muestra un ReferenceError ******************************* 

let primerN = 'Asabeneh'
//let fullNam = primerN + ' ' + lastNa

//console.log(fullNam)


//SyntaxError 
// se muestra cuando un error de sintaxis ha ocurrido
// ************************ Uncaught SyntaxError: Unexpected identifier

//let square = 2 x 2
//console.log(square)

//onsole.log('Hola mundo")


//TypeError 
//un error de tipo ha ocurrido
//*************************Uncaught TypeError: num.toLowerCase is not a function 

let num = 10
console.log(num.toLowerCase())