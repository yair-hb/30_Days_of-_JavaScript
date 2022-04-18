//boleanos 
console.log('Boleanos')
let valor = 3>4
let valor2 = 5<8
console.log(valor, valor2)

let firstName 
console.log(firstName)
let nulo = null
console.log(nulo)

//OPERACIONES ARITMETICAS
let numero = 4
let numero2 = 6
let suma = numero + numero2
let resta = numero - numero2
let multi = numero * numero2
let div = numero + numero2
let porce = numero % numero2
let pot = numero ** numero2

console.log(numero, numero2)
console.log(suma, resta, multi, div, porce, pot)

const PI = 3.14
let radius = 10

const areaCirculo = PI*radius*radius
console.log('Area del circulo es: ',areaCirculo)

const gravedad = 9.81
let masa = 72
const fuerza = gravedad*masa
console.log('EL peso del objeto es: ', fuerza)

const puntoEbull = 100
const bodyTemp = 37

console.log(`EL punto de ebullicion del agua es en ${puntoEbull}, la temperatura promedio el cuerpo humano es de ${bodyTemp} y la gravedad de en la Tierra es de ${gravedad}`)

// comparadores 
console.log('comparadores')
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)

console.log('mango'.length =='aguacate'.length)
console.log('mango'.length !='aguacate'.length)
console.log('mango'.length <'aguacate'.length)
console.log('milk'.length =='meat'.length)
console.log('milk'.length !='meat'.length)
console.log('tomato'.length =='potato'.length)
console.log('python'.length =='dragon'.length)

//operadores logicos
console.log('-operadores logicos')
const check = 4>3 && 10>5
const check2 = 4>3 && 10<5
console.log(check)

//OPERADOR INCREMENTAL
console.log ('operador incremental')
//PRE-INCREMENTAL
console.log('PRE-INCREMENTAL')
let contador = 0
console.log(++contador)
console.log(contador)
//POS-INCREMENTAL
console.log('POST-INCREMENTAL')
let contador2 = 0
console.log(contador2++)
console.log(contador2)

//TERNARY OPERATORS
console.log('TERNARY OPERATORS')
let estalloviendo = true
estalloviendo
    ? console.log('Necesitas una chamarra')
    : console.log('No necesitas una chamarra')

estalloviendo = false 
estalloviendo
    ? console.log('Necesitas una chamarra')
    : console.log('No necesitas una chamarra')

let numero5 = 5
numero5 >0
    ? console.log(`${numero5} es un numero postivio`)
    : console.log(`${numero5} es un numero negativo`)
numero5 = -5

numero5 >0 
    ? console.log(`${numero5} es un numero positivo`)
    : console.log(`${numero5} es un numero negativo`)

//window Methods
console.log('//////////////////////WINDOW METHODS')
//alert
console.log('ALERT')
console.log('se mostrara la alerta: Hola!, este un mensaje de prueba para las alertas de javascript')
//alert('Hola!, este un mensaje de prueba para las alertas de javascript')

//PROMP 
console.log('Metodo prompt')
//prompt('ingresa un numero')
//let numeroPrompt = prompt('ingresa un numero', 'el numero va aqui')
//console.log ('este es el numero que ingresaste: ', numeroPrompt)

//confirm
console.log('METHODO CONFIRM')
//const seguro = confirm('Estas seguro que quieres cerrar la alerta?')
//console.log(seguro)

/////////////////////////// DATE OBJECT
console.log('//////////////////////// DATE OBJECT')
const now = new Date()
console.log(now)

// obteniendo el año completo 
console.log('obteniendo el año completo')
const now1 = new Date()
console.log(now1.getFullYear())

//obteniendo el mes (enero = 0)
console.log('obteniendo el mes(enero es=0)')
const now2 = new Date()
console.log(now2.getMonth())

//obteniendo el dia 
console.log ('obteniendo el dia')
const now3 = new Date()
console.log(now3.getDate())

//obteniedo las horas
console.log('obteniendo las horas del dia')
const now4 = new Date()
console.log(now4.getHours())    

//obteniendo los minutos de la hora que llevamos
console.log('Obteniendo los minutos de la hora')
const now5 = new Date()
console.log(now5.getHours())

//obteniendo los segundos 
console.log('Obteniendo los segundos del minuto')
const now6 = new Date()
console.log(now6.getSeconds())

//obteniendo el tiempo unix
console.log('Obteniendo el tiempo unix')
const now7 = new Date()
console.log(now7.getTime())

//obteniendo el tiempo ahora 
console.log('Obteniendo el tiempo ahora')
const todoslosSegundos = Date.now()
console.log(todoslosSegundos)

const tiempoenSegundos = new Date().getTime()
console.log(todoslosSegundos == tiempoenSegundos)

//tiempo en formato legible 
const noww = new Date()
const anio = noww.getFullYear()
const mes = noww.getMonth()+1
const dia = noww.getDate()
const hora = noww.getHours()
const minuto = noww.getMinutes()

console.log(`Hoy es ${dia} del mes ${mes} del año ${anio} y la hora es ${hora} con ${minuto} minutos`)

////////////////////////////ejercicios
console.log ('///////////////////////////////////////////ejercicios')

let primernombre = 'Yair'
let apellido = 'Hernandez'
let pais = 'Mexico'
let ciudad = 'Toluca'
let edad = 28
let esCasado = false
let real = false
let year = 2022

console.log(primernombre, typeof primernombre)
console.log(apellido, typeof apellido)
console.log(pais, typeof pais)
console.log(ciudad, typeof ciudad)
console.log(edad, typeof edad)
console.log(esCasado, typeof esCasado)
console.log(year, typeof year)

let numeroE = '10'
let numeroEE = 10

console.log(typeof numeroE == typeof numeroEE)

console.log(typeof (parseInt(numeroE)) == typeof numeroEE)

console.log('hola'.length == 'gol'.length)
console.log('adios'.length == 'teclado'.length)
console.log('pantalla'.length == 'mouse'.length)

let a1 = 4>3 //true
let a2 = 4>=3 //true
let a3 = 4<3 //false
let a4 = 4<=3 //false
let a5 = 4==3 //false
let a6 = 4!=3 //true
let a7 = 4!==3 //true
let a8 = 4!='3' //true
let a9 = 4==4 //true
let a10 = 4===4 //true

console.log ('///////////////////////////////')
console.log (a1)
console.log (a2)
console.log (a3)
console.log (a4)
console.log (a5)
console.log (a6)
console.log (a7)
console.log (a8)
console.log (a9)
console.log (a10)
console.log('python'.length !='jargon'.length)

console.log ('///////////////////////////////')
let b1= 4 > 3 && 10 < 12 //true
let b2=4 > 3 && 10 > 12 //false
let b3=4 > 3 || 10 < 12 // true
let b4=4 > 3 || 10 > 12 // true
let b5=!(4 > 3) //false
let b6=!(4 < 3) //true
let b7=!(false) //true
let b8=!(4 > 3 && 10 < 12) //false
let b9=!(4 > 3 && 10 > 12) //true
let b10=!(4 === '4') //true

console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.log(b5)
console.log(b6)
console.log(b7)
console.log(b8)
console.log(b9)
console.log(b10)
let letra = 'pyhton'
let letra2 = 'dragon'
console.log('///////////////////////')

console.log(letra.includes('on'))
console.log(letra2.includes('on'))

console.log('////////////////////////')

let c1 = new Date()
console.log('El año es:',c1.getFullYear())

let c2 = new Date()
console.log('El mes es:', c2.getMonth())

let c3 = new Date()
console.log('el dia de hoy es:', c3.getDate())

let c4 = new Date()
console.log('la hora es:', c4.getHours())

let c5 = new Date()
console.log('los minutos son:', c5.getMinutes())

let c6 = new Date()
console.log('los segundos que han pasado desde 1 enero de 1970:', c6.getTime())

console.log('////////////////////////////////////////////////////////////////////////////////////')
//CALCULAR EL AREA DE UN TRIANGULO
/*console.log ('calculadora de areas de triangulos')
let base = parseInt(prompt('ingresa la BASE del triangulo a calcular:'))
let altura = parseInt(prompt('ingresa el ALTURA del triangulo a calcular:'))

let resultado = 0.5*(base*altura)
alert(`La BASE del triangulo es:${base} y la ALTURA es de ${altura}, por lo tanto el area es de:${resultado}`)
console.log('el area del triangulo es de:',resultado)

//CALCULAR EL PERIMETRO DE UN TRIANGULO
console.log('calculadora de perimetros de triangulos')
let lado1 = parseInt(prompt('Ingresa el LADO 1 del triangulo'))
let lado2 = parseInt(prompt('Ingresa el LADO 2 del triangulo'))
let lado3 = parseInt(prompt('Ingresa el LADO 3 del triangulo'))

let resultado2 = lado1 + lado2 + lado3
alert(`El perimetro del triangulo es de ${resultado2}`)
console.log('El perimetro del triangulo es de:', resultado2)
*/ 
/*
// CALCULAR EL AREA Y PERIMETRO DE UN RECTANGULO
alert('este programa calcula el area y perimetro de un rectangulo')
let base1 = parseInt(prompt('ingresa la BASE del rectangulo:'))
let altura1 = parseInt(prompt('ingresa la ALTURA del rectangulo'))

let areaRect = base1*altura1
let perimetroRect = 2*(base1+altura1)

alert(`El AREA del rectangulo es de ${areaRect} y su perimetro es de ${perimetroRect}`)

//CALCULAR EL AREA Y CIRCUMFERENCIA DE UN CIRCULO 
alert('este programa calcula el AREA de un CIRCULO ingresando su radio')
const radio = parseFloat(prompt('Cual es el RADIO del circulo a calcular?'))
const resultado3 = PI*(radio*radio)
const circunferencia = (2*PI)*(radio)
alert(`El AREA  del circulo es de ${resultado3} y su circumferencia es de ${circunferencia}`)
*/

// calcular el pago que recibe un trabajador
console.log('Calcular el salario de un trabajador')
alert('Este programa calcula el pago de un trabajador ingresando las horas de trabajo')
const horas = parseInt(prompt('Cuantas HORAS de trabajo completaste?'))
const salario = parseInt(prompt('Cual es el SALARIO por hora?'))

const sueldo = horas*salario
alert(`Por ${horas} horas de trabajo tu recibes un pago de ${sueldo}`)
