//datos PRIMITIVOS
console.log('Datos Primitivos')
let numero1 = 3
let numero2 = 3

console.log(numero1 == numero2)

let js = 'javascript'
let py = 'python'

console.log (js == py)

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)

//datos No PRIMITIVOS
//los datos primitivos no se comparan(matrices, funciones, objetos)
//los valores NO PRIMITIVOS dara como resultado al compararlos FALSE
console.log ('Datos No Primitivos')
let nums = [1,2,3,4,5]
nums[0] = 10

console.log(nums)

let num2 = [1,2,3]
let num3 = [1,2,3]

let usuario1 = {
    nombre: 'Yair',
    apellidos: 'Hernandez',
    pais: 'Mexico'
}
let usuario2 = {
    nombre: 'Yair',
    apellidos: 'Hernandez',
    pais: 'Mexico'
}
console.log(num2 == num3)
console.log(usuario1 == usuario2)

let numeros1 = [0,1,2,3]
let num = numeros1

console.log(numeros1 == num)

let usuario22 = {
    nombre: 'Yair',
    apellidos: 'Hernandez',
    pais: 'Mexico'
}
 let usuario33 = usuario22
 console.log(usuario22 == usuario33)

//numeros todo tipo de numeros por ejemplo
console.log('Numeros')

let numerosdeprueba = 100
const gravedad = 9.81
const biolingpoint = 100
let masa = 72
const PI = 3.1416
const bodytemp = 37

console.log(numerosdeprueba, gravedad, biolingpoint, masa, PI, bodytemp)
console.log(typeof numerosdeprueba, gravedad, biolingpoint, masa, PI, bodytemp)

//objeto matematico

console.log('Objeto matematico')

const PIv = Math.PI
console.log(PIv)

//redondeo al numero mas cercano
// si es uperior a 0,5 toma el valor superior, de lo contrario el redondeo es hacia abajo
console.log('Funcion redondeo toma el valor mas cercano')
console.log(Math.round(PI))
console.log(Math.round(9.81))

//funcion Floor/Ceil
console.log('Funcion Floor/ Ceil lo convierten en valor hacia arriba o hacia abajo')
console.log(Math.floor(PI))
console.log(Math.ceil(PI))

//fuincion MIN/MAX
console.log('Funcion MIN / MAX devuelve el valor minimo o maximo')
console.log(Math.min(-1,0,1,2,3,4))
console.log(Math.max(-1,0,1,2,3,4))

//funcion RANDOM 
console.log('Funcion RANDOM devuelve un numero aleatorio entre 0 y 0.99999')
const rndm = Math.random()
console.log(rndm)

// creamos un numero aleatorio entre 0 y 10
console.log('Creamos un valor aleatorio entre 0 y 10')
const rand010 = Math.floor(Math.random()*11)
console.log(rand010, typeof rand010)

//valor absoluto 
console.log('Funcion de valor absoluto')
console.log(Math.abs(-22))

//raiz cuadrada
console.log('raiz cuadrada')
console.log(Math.sqrt(10))
console.log(Math.sqrt(100))

//potenciar un numero
console.log('Potenciar un numero con base que queramos')
console.log(Math.pow(10, 3))
console.log(Math.E)

//logaritmo
//devuelve el logaritmo natural  con base E de x
console.log('logaritmos')
console.log(Math.log(2))
console.log(Math.log(10))

//devuelve el logaritmo entre 2 y 10 respectivamente
console.log(Math.LN2)
console.log(Math.LN10)

//trigonometria 
console.log('Trigonometria')
console.log(Math.sin(0))
console.log(Math.sin(90))
console.log(Math.cos(0))
console.log(Math.cos(90))

//generar un numero aleatporio entre 0 y 10 
console.log('genera un numero aletario entre 0 y 10')
let numerito = Math.random()*11
numerito = Math.floor(numerito)
console.log(numerito)

// cadenas 
console.log('Cadenas')
let espacio = ' '
let primerNombre = 'Yair'
let apelli2 = 'Hernandez'
let country = 'Mexico'
let ciudad = 'Toluca'
let lenguaje ='JavasCript'
let estatus = 'programing'
let quote = 'The saying, "seeing is believing" is not correct in 2020'
let edad = 222

let nombreCompleto = primerNombre + espacio +apelli2
console.log(nombreCompleto)

let datosPersona = nombreCompleto+ '. Yo tengo '+ edad +'. vivo en '+ country;
console.log(datosPersona)

//cadenas largas 
console.log('Cadenas largas')
let logChain = 'mi nombre es yair hernandez, vivo en mexico.\
soy estudiante de javscript y me gusta aprender lenguajes de.\
y este es un texto largo de prueba donde vamos a ver como se hace'

console.log(logChain)

//insertar datos en una cadena
console.log('insertar datos de forma dinamica en una cadena')
console.log('se debe hacer uso de backticks si no no funciona')
console.log('la suma de 3 y 2 son 5')
let a = 3
let b = 2
console.log(`la suma de ${a} y ${b} es ${a+b}`)

let datosPersona2 = `soy ${nombreCompleto}, tengo ${edad}, vivo en ${country} y me gusta ${estatus}`
console.log(datosPersona2)

console.log(`${a} es mayor que ${b}: ${a>b}`)

//metodo de cadena
console.log('Metodos de cadena')
console.log('Metodo Lenght muestra los caracteres del string')
let jas = 'JavaScript'
console.log(js.length)
console.log(primerNombre.length)

let primeraLetra = jas[0]
let ultimaLetra = jas.length
console.log (primeraLetra, ultimaLetra)

//uppercasse / lowercase
console.log('UPPERCASE LOWERCASE para convertir en mayusculas o minusculas')
console.log(jas)
console.log(jas.toUpperCase())
console.log(jas.toLowerCase())

//substr (debes indicar donde inicia y donde quieres que termine de cortar)
console.log('SUBSTR para recortar strings')
console.log(jas.substr(4,4))
console.log(jas.substr(0,8))

//substring (es muy parecida solo que no incluye el caracter del indice final)
console.log('Substring')
console.log(jas.substring(3,4))
console.log(jas.substring(0,3))

//split (divide una cadena en una posicion especifica)
console.log('split (divide la cadena en un lugar especifico')
let cadena2 = 'Esta es una cadena de prueba'
console.log(cadena2.split())
console.log(cadena2.split(' '))

let cadean3 = 'Hernandez'
console.log(cadean3.split())
console.log(cadean3.split(''))
console.log(cadean3.split('a'))

let cadena4 = 'Mexico, canada, colombia, peru, españa'
console.log(cadena4.split())
console.log(cadena4.split(','))
console.log(cadena4.split(', '))

//metodo TRIM (elimina el espacio final e inicial de una cadena)
console.log('metodo TRIM')
let string4 ='  30 dias de Javascript'
console.log(string4.trim(' '))

//includes (verifica si esa subcadena existe en la cadena a analizar)
console.log('Metodo INCLUDES')
console.log(string4.includes(90))
console.log(string4.includes(30))
console.log(string4.includes(' '))
console.log(string4.includes('Java'))

//replace (sustituye una parte del string con otro elemento)
console.log('Metodo REPLACE')
console.log(string4.replace(30, 999))
console.log(string4.replace('Javascript', 'Python'))

//charAt (toma un indice y lo devuelve)
console.log('Metodo charAt')
console.log(string4.charAt(0))
console.log(string4.charAt(5))

//charCodeAt (toma un indice y lo devuelve en codigo ASCII)
console.log('Metodo, charCodeAt')
console.log(string4.charCodeAt(0))
console.log(string4.charCodeAt(6))

// metodo lastindexOf (toma una subcadena y verifica si se encuentra dentro de la cadena)
console.log('Metodo lastIndexOf')
console.log(string4.lastIndexOf('dias'))
console.log(string4.lastIndexOf('javas'))

// concat (une varias cdenas y las une)
let string5 = '30'
console.log(string5.concat('dias', 'de', 'javascript'))
let me = 'Mex'
console.log(me.concat('ico'))

//StartsWith (se toma una subcadena y se verifica si la cadena inicia con esa especifica)
console.log('Metodo startsWith')
console.log(string4.startsWith(' '))
console.log(string4.startsWith('30'))

//endsWith (se toma una subcadena y se verifica si la cadena termina con esa especifica)
console.log('Metodo endsWith')
console.log(string4.endsWith(' '))
console.log(string4.endsWith('t'))

//metodo SEARCH busca una subcadena dentro de la cadena
console.log('Metodo search')
console.log(string4.search('30'))
console.log(string4.search('dias'))
console.log(string4.search('JavaScript'))
