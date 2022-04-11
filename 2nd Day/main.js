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

//metodo REPEAT
console.log('Metodo Repeat')
console.log(string4.repeat(2))

//metodo CONVERTI NUMEROS DE CADENA 
console.log('Metodo de convertir un numero de cadena')
let ab = '10'
console.log(ab, typeof ab)
let abInt = parseInt(ab)
console.log(abInt, typeof abInt)

//metodo CONVERTIR CADENAS A FLOTANTES
console.log('Metodo de convertir una cadena a flotante')
let ac = '9.81'
console.log(ac, typeof ac)
// se puede usar este tipo de metodo o solo colocando un signo +
//let acFloat = parseFloat(ac)
let acFloat = +ac
console.log(acFloat, typeof acFloat)

//metodo CONVERTIR UN FLOTANTE A UN ENTERO
console.log('Metodo convertir un flotante a un entero')
let ad = '99.9999'
console.log(ad, typeof ad)
let adInt = parseInt(ad)
console.log(adInt, typeof adInt)


// ejercicios de practicas **********************************
console.log('Ejercicios del dia 2 del curso de javascript')
console.log('/////////////////////////////////////////')
let desafio = '30 dias de JavaScript'
console.log(desafio)
console.log(desafio.length)
console.log(desafio.toLocaleUpperCase())
console.log(desafio.toLowerCase())
console.log(desafio.substring(2))
console.log(desafio.substring(3))
console.log(desafio.includes('Script'))
console.log(desafio.split())
console.log(desafio.split(' '))
let desafio2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(desafio2.split(' '))
console.log(desafio.replace('JavaScript', 'Python'))
console.log(desafio.charAt(15))
console.log(desafio.charCodeAt('J'))
console.log(desafio.indexOf('a'))
console.log(desafio.lastIndexOf('a'))
let desafio3 = 'No puedes terminar una oracion con porque porque porque es una conjuncion' 
console.log(desafio3.indexOf('porque'))
console.log(desafio3.lastIndexOf('porque'))
console.log(desafio3.search('porque'))
console.log(desafio.trim(' '))
console.log(desafio.startsWith('30'))
console.log(desafio.endsWith('t'))
console.log(desafio.match('a'))
let desafio4 = '30 dias'
let desafio5 = ' de JavaScript'
console.log(desafio4.concat(desafio5))
console.log(desafio.repeat(2))

//ejercicios del dia 2 del curso de Javascript
console.log('/////////////////////////////////////////')
let exc = 'There si no excercise better for the heart than reaching down and linfting people us'
let mt = "Love is not patronizing and charity isn't about pity, it is about love. \
Charity and love are the same with charity you give love, so don't just give money \
but reach out your hand instead"
console.log(exc)
console.log(mt)
let numex = '10'
let numex2 = '9.8'
let numxInt = parseFloat(numex)
let numxFloat = parseFloat(numex2)
console.log(typeof numxInt)
console.log(typeof numxFloat)
let py2 = 'Python'
console.log(py2.includes('on'))
let esp = 'Espero que este curso no este lleno de jerga'
console.log(esp.includes('jargon'))
let nume100 = Math.floor(Math.random()*110)
console.log(nume100)
let num50100 = Math.random()*(255)
console.log(num50100)
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t25')
console.log(desafio3.substring(35, 55))

//ejercicios nivel 3 del curso de javascript
console.log('////////////////////////////////////////////')
let love = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavia estan buscando su amor'
let c = love.split(' ')
console.log (c)
let cd = c.length
console.log(cd)
