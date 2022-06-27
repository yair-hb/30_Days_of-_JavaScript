console.log('%c CLEAN CODE', 'color:red')

/* WRITING CLEAN CODE 

        GUIA DE ESTILOS DE JAVASCRIPT

=> una guia de estilos de javacript es una lista de caracteristicas de como debe estar escrito y organizado el codigo 
    en javacript
=> la sitaxis de JS tiene una guia que debe seguirse para ser mas facil de comprender y ser mas simple


        POR QUE NECESITAMOS UNA GUIA DE ESTILOS DE JS?

=> una de las principales razones para llevar una GUIA DE ESTILOS DE JS es cuando se trabaja en equipos
    y se requiere que el codigo sea entendible para todo los integrantes y asi poder trabajar de forma mas 
    eficiente

=> cada quien puede crear su propia GUIA DE ESTILOS JS pero algunas de las mas conocidas son:
        -- Airbnb Javacript Style Guide
        -- Javascript Style Guide
        -- Google Javascript Style Guide


        AIRBNB JAVASCRIPT STYLE GUIDE 
=> es una de las mas conocidas guias en el internet. cubre muchos aspectos de JS y ha sido adoptado 
    por muchoos desarrolladores y compañias. El estilo es muy facil de usar y de comprender

        STANDAR JAVASCRIPT STYLE GUIDE 
=> esta guia de estilos no es tan popular como la de AIRBNB pero vale la pena revisarla. Se remueve el punto 
    y coma


        JAVASCRIPT CODING CONVENTIONS
=> en este reto se uso la GENERAL JAVACRIPT CODING WRITE CONVENTION GUIDES
=> las convenciones de codificacion son guias y estilos para la programacion que son desarrolladas por una persona o equipo
    que ayudan a:
        --- Ayudan a escribir codigo limpio 
        --- ayudan a mejorar la lectura del codigo
        --- ayudan a hacer el codigo reusable y facil de mantener
    
=> INCLUYEN 
        --- reglas para nombrar y declarar variables 
        --- reglas para nombrar y decalarar funciones 
        --- reglas para el uso de espacios en blanco, identacion y comentarios

=> En este reto de JS se uso lo siguiente
        --- uso de camelCase para variables y funciones 
        --- todos los nombres de las variables iniciaron con letras
        --- se uso CONST para constantes, arrays, objects y funciones 
        --- en uso de las comillas dobles se reemplazo por comillas simples o backticks
        --- se elimino el uso de punto y coma al final de cada linea
        --- se uso el espacio en operaciones aritmeticas
        --- funcion flecha para uso de funciones
        --- return explicito
        --- sin coma al final de un valor de un object
        --- se uso +=, -=, *=, /= en lugar de la version mas larga
        --- cuando se uso CONSOLE.LOG(), es bueno usar un tag string para identificar de donde proviene 

VARIABLES*/

let firstName = 'Asabeneh'
let lastName = 'Yeteyeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81

// ARRAYS

const names = ['Asabaneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 73, 98.6, 100]
const countries = ['Finland','Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['tomato', 'potato', 'cabbage', 'onion', 'carrot']

// FUNCIONES 

const printFullName = (firstName, lastName) => firstName + ' ' + lastName

const square = (n) => n * n

const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index 
    for (let i = 0; i < 6; i++){
        index = Math.floor(Math.random()* str.length)
        hexa += str[index]
    }
    return hexa
}

const showDateTime = () =>{
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    if (hours < 10){
        minutes = '0' + minutes
    }

    const dateMonthYear = date + ',' + month + ',' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    
    return fullTime
}

// LOOPS 

for (let i = 0; i < 5; i++){
    console.log()
}

let len  = names.length
for (let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}

for (const name of names){
    console.log(name.toLowerCase())
}

names.forEach((name) => name.toUpperCase())

const person = {
    firstName:'Asabaneh',
    lastName:'Yetayeh',
    age:230,
    country:'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'Node', 'MongoDB','Python', 'D3.js'],
    isMarried: true
}
for (const key in person){
    //console.log(key)
}
for (const key in person){
    console.log(key, person[key])
}

// CONDICIONAL

let num = 3
if (num > 0) {
 console.log(`${num} is a positive number`)
} else {
 console.log(`${num} is a negative number`)
}

let a = 0
if (a > 0) {
 console.log(`${a} is a positive number`)
} else if (a < 0) {
 console.log(`${a} is a negative number`)
} else if (a == 0) {
 console.log(`${a} is zero`)
} else {
 console.log(`${a} is not a number`)
}

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
 case 'monday':
   console.log('Today is Monday')
   break
 case 'tuesday':
   console.log('Today is Tuesday')
   break
 case 'wednesday':
   console.log('Today is Wednesday')
   break
 case 'thursday':
   console.log('Today is Thursday')
   break
 case 'friday':
   console.log('Today is Friday')
   break
 case 'saturday':
   console.log('Today is Saturday')
   break
 case 'sunday':
   console.log('Today is Sunday')
   break
 default:
   console.log('It is not a week day.')
}

let isRaining = false
isRaining
? console.log('necesitaras una sombrilla')
: console.log('No necesitas paraguas')

// CLASSES 

// las clases las declaramos con CamelCase pero con la primera letra mayuscula

class Persona {
    constructor(nombre, apellido){
        console.log(this)
        this.nombre = nombre
        this.apellido = apellido
    }
}
