/*
console.log('DIA 5 DEL CURSO DE JAVASCRIPT')
console.log('ARRAYS')
const arr = Array()
const arr2 = []

console.log(arr, typeof arr)
console.log(arr2, typeof arr2)

const lenguajes =['python', 'java', 'javascript', 'html', 'css']
const frutas = ['mango', 'melon', 'uva', 'manzana', 'banana']
const paises = ['mexico', 'canada', 'colombia', 'peru', 'españa']
const vegetales = ['papa', 'tomate', 'cebolla', 'zanahoria']
const numero = [3,2,4,1,4,5,6,7,8,6,8,575,7545,454]

console.log('lenguajes de programacion:',lenguajes)
console.log('cantidad de lenguajes de programacion:',lenguajes.length)

console.log('algunas frutas como:', frutas)
console.log('cantidad de frutas:', frutas.length)

console.log('algunos paises son:', paises)
console.log('cantidad de paises mostrados:', paises.length)

console.log('Algunos numeros son:', numero)
console.log('los numeros mostrados son:', numero.length)

console.log('Algunos vegetales son:', vegetales)
console.log('los vegetales mostrados son:', vegetales.length)

/// pueden contener diferentes tipos de datos

const arr3 =[
    'hola',
    3.16,
    true,
    {paises:'mexico', ciudad:'toluca'}, 
    {lenguajes:['html', 'css', 'javascript', 'pyhton']}
]
console.log(arr3)

// se puede crear arrays usando la funcion SPLIT 
let js = 'javascript'
const letras = js.split('')
console.log(letras, typeof letras, letras.length)

let empresas = 'apple, google, IBM, tesla, amazon, spotify, oracle, microsoft'
const empre = empresas.split(',')
console.log(empre, typeof empre, empre.length)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const palab = text.split(' ')
console.log(palab, typeof palab, palab.length)

// accediendo al array por su indice 
const fruit = ['mango', 'limon', 'lima', 'melon', 'sandia']
console.log (fruit)
console.log ('la fruta 1 es:',fruit[0])
console.log ('la fruta 2 es:',fruit[1])
console.log ('la fruta 3 es:',fruit[2])
console.log ('la fruta 4 es:',fruit[3])
let ultimo = fruit.length-1
ultimaFruta =fruit[ultimo]
console.log('la ultima fruta del array es:', ultimaFruta)

const numero2 = [0,2,3,4,5,6,7,100]
console.log('numeros', numero2)
console.log('cantidad de numeros', numero2.length)
console.log('primer numero:', numero2[0])
console.log('ultimo numero:', numero2[7])
let lastindex = numero2.length-1
console.log(numero2[lastindex])

const webtech = ['mongoDB', 'html', 'css', 'javascript', 'react', 'redux', 'node']
console.log('tecnologias:', webtech)
console.log(webtech.length)
console.log('tecnologias como:', webtech[0])
console.log('la ultima como:', webtech[6])
let lastTec = webtech.length-1
console.log('la ultima webtech como:', webtech[lastTec])

const paises2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log('paises:', paises2)
console.log(paises2.length)
console.log(paises2[0])
console.log(paises2[10])
let lastpais = paises2.length-1
console.log('el ultimo pais del array es:', paises2[lastpais])

const shoppingCar = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
]
console.log('carrito de compras', shoppingCar)
console.log('la cantidad de articulos es:', shoppingCar.length)
console.log('el ultimo articulo es:', shoppingCar[7])
let lastSC = shoppingCar.length-1
console.log('EL ULTIMO ARTICULO ES:', shoppingCar[lastSC])

// MODIFICANDO ELEMENTOS DE UN ARRAY

const numeros2 = [1,2,3,4,5]
console.log('los numeros:', numeros2)
console.log('cantidad de numeros:',numeros2.length)
numeros2[0]= 11
numeros2[1]= 22
numeros2[2]= 33
numeros2[3]= 44
numeros2[4]= 55

console.log('Numeros modificados:', numeros2)
console.log('cantidad de numeros:', numeros2.length)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log('Array original:', countries)

countries[0] = 'Afganistan'
let lastCountr = countries.length-1
countries[lastCountr] = 'Mexico'

console.log('Array modificado:', countries)

// METODOS PARA MANIPULAR UN ARRAY
console.log('////////////////')

// array
const arr4 = Array()
console.log(arr4)
const lugaresvacios8 = Array(8)
console.log(lugaresvacios8)

// fill
const arr5 = Array()
console.log(arr5)

const lugaresde8conX = Array(8).fill('x')
console.log(lugaresde8conX)

const lugaresde8con0 = Array(8).fill('0')
console.log(lugaresde8con0)

const lugares4con4 = Array(4).fill('4')
console.log(lugares4con4)


// concat
const primerArray = ['verde', 'azul', 'gris', 'rojo']
const segundArray = ['naranja', 'amarillo', 'negro']

console.log(primerArray)
console.log(segundArray)

const tercerArray = primerArray.concat(segundArray)
console.log(tercerArray)

const frutas2 = ['manzana', 'uva', 'pera', 'melon', 'sandia']
const verdura2 = ['zanahoria', 'pepino', 'lechuga', 'limon']
console.log(frutas2)
console.log(verdura2)

const frutasVerduras = frutas2.concat(verdura2)
console.log(frutasVerduras)

//lenght

const numerito = [1,2,3,4,5]
console.log(numerito, numerito.length)

//index se obtiene el indice de los elementos

console.log(numerito.indexOf(1))
console.log(numerito.indexOf(2))
console.log(numerito.indexOf(3))
console.log(numerito.indexOf(4))
console.log(numerito.indexOf(5))

// check items  revisar si un elemento existe en un array

const frutillas = ['melon', 'mango', 'banana', 'sandia']
let index = frutillas.indexOf('banana')

if (index===-1){
    console.log('Este elemento NO existe en el array')
}
else {
    console.log('Este elemento SI existe en el array')
}
///// TAMBIEN SE PUEDEN USAR OPERADORES TERNARIOS

index ===-1 
    ? console.log('Este elemento No existe en el array')
    : console.log('Este elemento Si existe en el array')

/////
 let indexAguacate = frutillas.indexOf('aguacate')
 if (indexAguacate ===-1){
     console.log('Este elemento No existe en el array')
 }
 else {
     console.log('Este elemento Si existe en el array')
 }

 //// lastIndexOf devuelve la ultima posicion de ese elemento si existe si no envia un (-1)

 const numbers = [1,2,3,4,5,3,1,2]

 console.log(numbers.lastIndexOf(1))
 console.log(numbers.lastIndexOf(2))
 console.log(numbers.lastIndexOf(3))
 console.log(numbers.lastIndexOf(4))
 console.log(numbers.lastIndexOf(5))
 console.log(numbers.lastIndexOf(6)) // enviara un -1 porque no existe en el array

/// includes (revisa si existe un elemento enviando un TRUE O FALSE)

console.log(numbers.includes(1))
console.log(numbers.includes(2))
console.log(numbers.includes(3))
console.log(numbers.includes(4))
console.log(numbers.includes(5))
console.log(numbers.includes(6))
console.log(numbers.includes(7))

const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
console.log(webTechs2.includes('Node'))
console.log(webTechs2.includes('C'))

//Array.isArray revisa si el tipo de dato es un array
const numbers2 = [0,1,2,3,4,5,6]
console.log('Es un array?', numbers2, Array.isArray(numbers2))

const numbers3 = 2000
console.log('Es un array?', numbers3, Array.isArray(numbers3))

///toString (convierte un array en un string)
console.log('//////toString')
console.log(numbers2.toString())

const nombres = ['yair', 'Agustin', 'maria', 'gabriel', 'antonio']
console.log(nombres, typeof nombres)
const nombresTS = nombres.toString()
console.log(nombresTS, typeof nombresTS)

/// JOIN junta los elementos de un array

console.log(numbers2)
console.log(numbers2.join())

console.log(nombres)
console.log(nombres.join())
console.log(nombres.join(''))
console.log(nombres.join(' '))
console.log(nombres.join(', '))
console.log(nombres.join('* '))
console.log(nombres.join('# '))

console.log(webTechs2)
console.log(webTechs2.join())
console.log(webTechs2.join(' # '))

/// slice

console.log(numbers2)
console.log(numbers2.slice()) // se copian todos los elementos
console.log(numbers2.slice(0)) // se copian todos los elementos
console.log(numbers2.slice(0, numbers2.length)) // se copian todos los elementos
console.log(numbers2.slice(1,4)) // se copian los elemtos [1,2,3] no incluye la posicion final

//splice necesita de 3 parametros posicion inicial, numero de veces a remover y numero de veces a agregar

console.log(numbers2)
console.log(numbers2.splice()) //remueve todos los elementos dentro del array
console.log(numbers2.splice(0,1)) // remueve el primer elemento

const numerito2 =[1,2,3,4,5]
console.log(numerito2)
numerito2.splice(3, 3, 7, 8, 9)
console.log(numerito2.splice(3, 3, 7, 8))

//push agrega elementos al final del array
console.log(webTechs2)
webTechs2.push('C++','Ruby')
console.log(webTechs2)

webTechs2.push('C#')
console.log(webTechs2)

/// POP remueve el ultimo item del array
webTechs2.pop()
console.log(webTechs2)

// shift remueve el primer elemento del array
console.log(webTechs2)
console.log(webTechs2.shift())
console.log(webTechs2)

//unshift agrega un elemento al array en la primera posicion
console.log(webTechs2)
console.log(webTechs2.unshift('Swift'))
console.log(webTechs2)

//reverse se invierte el orden de los elementos del array
console.log(webTechs2)
console.log(webTechs2.reverse())

//sorting acomoda los elementos del array en forma asecndente
console.log(webTechs2)
console.log(webTechs2.push('BBDD'))
console.log(webTechs2.sort())
console.log(webTechs2)

// array dentro de un array 
const primerNum = ['a','b','c']
const segundNum = [1,2,3,4]
const arrayOfarray = [['a','b','c'],[1,2,3,4]]
console.log(arrayOfarray)
console.log(arrayOfarray[0])

const frontEnd = ['html', `css`, 'js', 'react', 'redux']
const backEnd = ['Node', 'Express', 'mongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])
*/

///////////////////////////////////////////////////////////////////
console.log('///////////////////////////////// ejercicios')
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Dinamarca',
    'Etiopia',
    'Finlandia',
    'Alemania', 
    'Hungria',
    'Irlanda',
    'Japon',
    'Kenia'
]

const webTechss = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const test = []
const test2 = ['a','b','c','d','e','f','g','h']
console.log(test.length)
console.log(test2.length)
console.log(test2[0])
console.log(test2[3])
console.log(test2[7])

const mixedDatatypes = ['Hola', 1,2,true,false,'adios']

const itCompanies = ['Facebook', 'Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[4])
console.log(itCompanies[5])

//////////////
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())

//////////////
console.log(itCompanies.toString(), ' Son grandes compañias IT')

///////////7

if (itCompanies.includes('Google')){
    console.log(`Si se encuentra!`)
}
else {
    console.log ('No se encuentra')
}

//////////////
console.log(itCompanies.sort())

/////////////
console.log(itCompanies.reverse())

////////////
console.log(itCompanies.slice(0,3))

///////////
console.log(itCompanies.slice(4,7))

///////////
console.log(itCompanies.slice(3,4))

///////////
console.log(itCompanies)
console.log(itCompanies.shift())
console.log(itCompanies)

////////
console.log(itCompanies)
console.log(itCompanies.slice(5))
console.log(itCompanies)

///////////////// 22222222222
const shoppingCar2 = ['leche','cafe','te','miel']
console.log(shoppingCar2)
console.log(shoppingCar2.unshift('meat'))
console.log(shoppingCar2.push('sugar'))
console.log(shoppingCar2.splice(4,5))
console.log(shoppingCar2)
shoppingCar2[3] = 'te verde'
console.log(shoppingCar2)

/////////////////////

let index = countries.indexOf('Etiopia')

if (index===-1){
    console.log('Este elemento NO existe en el array')
    countries.push('Etiopia')
    console.log('Se agregó Etiopia al array')
}
else {
    console.log('Este elemento SI existe en el array')
}

let index2 = webTechss.indexOf('Sass')
if (index2 ===-1){
    console.log('Este elemento no existe')
    webTechss.push('Sass')
    console.log(webTechss)
}
else {
    console.log('Sass es un procesador de CSS')
}

//////////////
const frontEnd2 = ['HTML', 'CSS', 'JS', 'Redux']
console.log(frontEnd2)
const backEnd2 = ['Node', 'Express','MongoDB']
console.log(backEnd2)

const fullStack2 = frontEnd2.concat(backEnd2)
console.log(fullStack2)

///////////////////////3333333333333333333333333333333
console.log('////////////////////////////////')
const ages = [19,22,19,24,20,25,26,24,25,24]
const ages2 = [19,22,19,24,20,25,26,24,25,24]
console.log(ages2.sort())
console.log(ages2.shift())
console.log(ages2.splice(-1))

/////////////////

console.log(ages)
let prom = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/10
console.log((ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/10)
console.log(ages.sort())

let min = Math.min.apply(Math, ages)
console.log('Valor minimo',min)
let max = Math.max.apply(Math, ages)
console.log('Valor maximo',max)
console.log('Rango:',max-min)

////////////////////
console.log(Math.abs(min-prom))
console.log(Math.abs(max-prom))

/////////////////////
console.log(countries)
console.log(countries.slice(0,10))

////////////////////
let mit1 = Math.floor(countries.length/2)
let mit2 = Math.ceil(countries.length/2)
console.log(mit1,mit2)

console.log('la mitad del array es:', countries[mit1],countries[mit2])
