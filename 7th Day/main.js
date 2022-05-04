console.log('AQUI COMIENZA EL DIA 7 DEL CURSO DE JAVASCRIPT')
console.log('------------FUNCIONES-----------')

// DECLARACION DE FUNCION

//declaracion de una funcion de SIN un parametro
function functionName (){
    // el codigo a ejecutar va aqui
}
functionName()// llamando una funcion por su nombre mas los parentesis


// FUNCION SIN UN PARAMETRO Y RETURN
//----- FUNCION SIN UN PARAMETRO
function square() {
    let num = 2
    let sq = num*num
    console.log('se ha ejecutado la funcion SQUARE',sq)
}
square()

//-------FUNCION SIN UN PARAMETRO
function addTwoNumbers (){
    let num1 = 10
    let num2 = 20
    let sum = num1+num2
    console.log('la funcion se ejecutó y el resultado es:' ,sum)
}

addTwoNumbers() //se llama a la funcion para ser ejecutada

function printfullName () {
    let nombre = 'Yair'
    let apellido = 'Hernandez'
    let espacio = ' '
    let fullName = nombre+espacio+apellido
    console.log(fullName)
}

printfullName()

// ----------------FUNCION RETURNING VALUE

// SI LA FUNCION NO REGRESA VALOR ENTONCES ES UNA FUNCION NO DEFINIDA

function printfullName2 (){
    let apellido = 'Hernandez'
    let nombre = 'Agustin'
    let espacio = ' '
    let fullName = nombre+espacio+apellido
    return fullName
}

console.log(printfullName2())

function addTwoNumbers2 (){
    let num1 = 50
    let num2 = 50
    let sum = num1+num2
    return sum
}

console.log(addTwoNumbers2())

// ------------- FUNCION CON UN PARAMETRO
// EN LAS FUNCIONES PODEMOS USAR DIFERENTES TIPOS DE DATOS (NUMEROS, STRINGS, BOLEANOS, OBJETOS, FUNCIONES) COMO PARAMETROS

//funciones con un parametro

function areaCirculo (r){
    let area = Math.PI*(r*r)
    return area
}

console.log('El area del circulo es:',areaCirculo(10))


function areaCuadrado (lado){
    let area = lado*lado
    return area
}

console.log('El area del cuadrado es:',areaCuadrado(8))

//--------------------FUNCION CON DOS PARAMETROS

function sumDosNum (num1, num2) {
    let resultado = num1+num2
    return resultado
}

console.log('La suma de dos numeros es:',sumDosNum(30,60)) //se requieren dos argumentos para que se ejecute la funcion
//si una funcion no usa return entonces no se almacena el resultado

function imprimeFullName (nombre, apellido) {
    let fullName = nombre+' '+apellido
    return fullName
}
console.log('El nombre completo es:',(imprimeFullName('Toni', 'Benitez')))

//---------------------- FUNCION CON MUCHOS PARAMETROS
function sumArray (arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
const numb1 = [1,2,3,4,5]
const numb2 = [2,4,6,8]

console.log('La suma de los elementos del array es:',sumArray(numb2))

//------------------------- FUNCION CON PARAMETROS ILIMITADOS
console.log('-----------------------------------')
//vamos a acceder a los argumentos 

function sumAll (){
    console.log(arguments)
}
sumAll(1,2,3,4)
//los argumentos se muestran como un objeto o un array

function sumAll (){
    let sum = 0
    for (let i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumAll(1,1,1,1,1,1))
console.log(sumAll(3,3,3,3,3,3,3,3,3,3))
console.log(sumAll(10,10,10,10))

//-------------------------argumentos infinitos en una funcion flecha
console.log('---------------------argumentos ILIMITADOS en funcion flecha')

const sumAll2 = (...args) => {//se usa los tres puntos suspensivos 
    console.log(args)
}
sumAll2(1,2,3,4,5,6)

// un ejemplo es 

const sumAll3 = (...args) => {
    let sum = 0
    for (let i=0; i<args.length; i++){
        sum += args[i]
    }
    return sum
}

console.log(sumAll3(2,2,2,2,2,2))
console.log(sumAll3(3,3))
console.log(sumAll3(100,100,100,100,100,100))

// ------------------------------FUNCIONES ANONIMAS 
console.log('----------------------FUNCIONES ANONIMAS')

