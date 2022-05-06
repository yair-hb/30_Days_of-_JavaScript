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
// funciones ananonimas o SIN NOMBRE

const anonymousFun = function(){
    console.log('Soy una funcion anonima y mi valor esta almacenada en anonymousFun')
}

anonymousFun()

//--------------------------------- FUNCIONES EXPRESS
console.log('----------------------FUNCIONES EXPRESS')
// son funciones anonimas 

const square2 = function(n){
    return n*n
} 

console.log(square2(5))

// ----------------------------------FUNCIONES SELF INVOKING 
console.log('--------------------------FUNCIONES SELF INVOKING')
// son funciones anonimas que no necesitan ser llamadas para regresar un valor

let squaredNum = (function(g){
    return g*g
})(10)

console.log(squaredNum)

///--------------------------------- FUNCIONES FLECHA 
console.log('-------------------------FUNCIONES FLECHA')
// ES UNA FORMA DISTINTA DE DECLARAR UNA FUNCION 

function square3 (n){
    return n*n
}
console.log(square3(3))
////////////////////////////+

const square33 = n => {
    return n*n
}
console.log(square33(3))

const changeMayus = arr2 => {
    const nuevArr = []
    for (const element of arr2){
        nuevArr.push(element.toUpperCase())
    }
    return nuevArr
}
const country = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(country)
console.log(changeMayus(country))

/////////////////////////////

const imprimeFullName2 = (primerNombre, apellido2) =>{
    return primerNombre+' '+ apellido2
}

console.log(imprimeFullName2('Agus','GHGHGH'))

////////////////////////
const imprimeFullName3 = (nombre1, apellido1) => `Este es el resultado ${nombre1} ${apellido1}`

console.log(imprimeFullName3('javier', 'Beitez'))

//------------------------------------FUNCION CONNPARAMETROS POR DEFAULT
console.log('----------------------------FUNCIONES CON PARAMETROS DEFAULT')

function saludos (nombre = 'Pedro'){
    let saludo = `${nombre} eres bienvenido al dia 7 del curso de JS`
    return saludo
}
console.log(saludos())
console.log(saludos('Yair'))
console.log(saludos('Maria'))

////////////7

function generaNombre (nombre='Yair', apellido='Hernan'){
    let espacio = ' '
    let full = nombre+espacio+apellido
    return full
}

console.log(generaNombre())
console.log(generaNombre('Gabriel','Bne'))

/////////// 
function pesoObjct (masa, gravedad=9.81){
    let peso = masa*gravedad
    return peso
}

console.log(pesoObjct(100))
console.log(pesoObjct(200, 1.62))

////////////// ejemplos de funciones con parametros default con funciones flecha

const saludos2 = (nombre='Pedro') => {
    let saludo = nombre + ' Bienvenido al dia 7 del curso de javascript'
    return saludo
}

console.log(saludos2())
console.log(saludos2('Yairrrr'))

const generaFullNam = (nombre= 'agustin', apellido='Jacinto') => {
    let espacio = ' '
    let fullName = nombre+espacio+apellido
    return fullName
}
console.log(generaFullNam())
console.log(generaFullNam('Alan', 'Benitez'))

const calculaAge = (añoNac, añoActual=2022) => añoActual-añoNac
console.log(calculaAge(1992))
console.log(calculaAge(1900, 2010))

const pesoOb = (mass, gravedad=9.81) => mass*gravedad+'N'
console.log('El peso del objeto en N es:',pesoOb(100))
console.log('El peso del objeto en N es:',pesoOb(100, 1.62))


/////////////////////////////////////////////////////////// EJERCICIOS DEL DIA 7 DEL CURSO DE JS
console.log('//////////////////////////////////////////////// ejercicios del dia 7 de js')

function fullNameE (){
    console.log('Yair Hernandez')
}
fullNameE()
//////////////
function nombreC (nombre, apellido){
    let espacio = ' '
    let nameComp = nombre+espacio+apellido
    return nameComp
}
console.log(nombreC('Yair', 'Hernandez'))
//////////////

function addNumb (num, num2){
    let sum = num+num2
    return sum
}
console.log('la suma de los numeros es:',addNumb(2,3))
/////////////

function rectArea (base, altura){
    let rectArea = base*altura
    return rectArea
}
console.log('el aresa del rectangulo es de:',rectArea(5,10))
//////////////

const perimRect = (base,lado) => {
    let perim = 2*(base*lado)
    return perim
}

console.log('El perimetro del rectangulo es de:',perimRect(2,8))
/////////////

const volPrismRec = (largo,alto,ancho) => {
    let volPrism = largo*alto*ancho
    return volPrism
}
console.log('El volumen de un prisma rectangular es de:',volPrismRec(2,3,10))
/////////////

function areaCirc (radio, pi=Math.PI) {
    let area = pi*(radio*radio)
    return area
}
console.log('El area del circulo es de:',areaCirc(10))
/////////////

function perimCirc (radio, pi=Math.PI){
    let perim = 2*(pi*radio)
    return perim
}

console.log('El perimetro del circulo es de:',perimCirc(10))
/////////////

function densidad (mas, volumen){
    let dens = mas/volumen
    return dens
}

console.log('La densidad es de:', densidad(100,300))
/////////////

function speed (distancia, tiempo){
    let veloc = distancia/tiempo
    return veloc
}
console.log('La velocidad es de:',speed(10000,50),'m/min')
////////////

const peso = (masa, gravedad=9.81) =>{
    let peso = masa*gravedad
    return peso
}
console.log('El peso es de:',peso(30))
//////////

function celciusFarenh (gradC){
    let conver = (gradC*(9/5))+32
    return conver
}

console.log(`celcius a fahrenheit equivalen a:`,celciusFarenh(30))
//////////////

function indiceMC (peso, altura){
    let imc = peso/(altura*altura)
    console.log()
    return imc 
}
//console.log('Tu indice de masa corporal es de:',indiceMC(prompt('Cual es tu peso en kg?'), prompt('Cual es tu altura en metros')))
///////////////

function checkSeason (mesActual){
    let estacion 
    if (mesActual=='diciembre'){//||'enero'|| 'feberero'){
        estacion = 'Invierno'
    }
    else if (mesActual=='enero'){//||'enero'|| 'feberero'){
        estacion = 'Invierno'
    }
    else if (mesActual=='febrero'){//||'enero'|| 'feberero'){
        estacion = 'Invierno'
    }
    else if (mesActual=='marzo'){//||'abril'||'mayo'){
        estacion = 'Primavera'
    }
    else if (mesActual=='abril'){//||'abril'||'mayo'){
        estacion = 'Primavera'
    }
    else if (mesActual=='mayo'){//||'abril'||'mayo'){
        estacion = 'Primavera'
    }
    else if (mesActual=='junio'){//||'julio'||'agosto'){
        estacion = 'Verano'
    }
    else if (mesActual=='julio'){//||'julio'||'agosto'){
        estacion = 'Verano'
    }
    else if (mesActual=='agosto'){//||'julio'||'agosto'){
        estacion = 'Verano'
    }
    else if (mesActual=='septiembre'){//||'octubre'||'noviembre'){
        estacion = 'Otoño'
    }
    else if (mesActual=='octubre'){//||'octubre'||'noviembre'){
        estacion = 'Otoño'
    }
    else if (mesActual=='noviembre'){//||'octubre'||'noviembre'){
        estacion = 'Otoño'
    }
    else{
        console.log('introduce un mes valido o revisa tu ortografia')
    }
    console.log(`El mes de ${mesActual} corresponde a:`)
    return estacion
}
//console.log(checkSeason(prompt('Ingresa un mes del año').toLowerCase()))
//////////////////

function findMinMax (nu1,nu2,nu3){
    //const uno =[0, -101,2,-3,4]
    let max =[0], min = [0]
    for (let i=1; i<arguments.length; i++){
    if (arguments[i]>max){
        max= arguments[i]
    }
    if (arguments[i]<min){
        min= arguments[i]
    }
}
}

console.log(findMinMax(1,2,3))


