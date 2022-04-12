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