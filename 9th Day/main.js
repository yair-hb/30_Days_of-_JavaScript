console.log('(((((((((((((((((DIA 9 DEL CURSO DE JAVASCRIPT)))))))))))))))))')
console.log('FUNCIONES DE ALTO ORDEN')

console.log('SE PUEDE ALMACENAR EN UNA VARIABLE')
//////////////// FUNCION NORMAL

function porTres (numero){
    return numero*3
}

console.log(porTres(10))

///////////////// FUNCION DE ALTO ORDEN

let por3 = function(numero) {
    return numero * 3;
  }
  
  const multiplicaTres = por3;
  
  console.log(multiplicaTres(10)); //30

console.log('SE PUEDE PASAR POR COMO ARGUMENTOS')
///// FUNCIONA CON CALLBACKS QUE SON FUNCIONES QUE SE EJECUTAN UNA VEZ HAYA TERMINADO DE EJECUTARSE OTRA FUNCION
/// LO CUAL NOS PERMITE USAR CODIGO ASINCRONO PARA NO ESPERAR AL DEMAS CODIGO MIENTRAS SE RESUELVE EL DEMAS CODIGO

const callback = (n) => {
    return n**2
}

function cubo(callback, n){
    return callback(n)*n
}
console.log(cubo(callback, 3))

///// LAS FUNCIONES DE ALTO ORDEN RETURN UNA FUNCION COMO VARIABLE 
const altoOrden = n =>{
    const haceAlgo = m =>{
        const haceOtraCosa = t =>{
            return 2* n + 3* m +t
        }
        return haceOtraCosa
    }
    return haceAlgo
}

console.log(altoOrden(2)(3)(10))

//////////

const numeros = [1,2,3,4,5]
const sumArray = arr => {
    let sum =0
    const callback = function(element){
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numeros))

///////////

const numero = [1,2,3,4,5]
const sumArray2 = arr => {
    let sum = 0
    arr.forEach(function(element){
        sum += element
    })
    return sum
}
console.log(sumArray(numero))

//////////////////////////// SETTING TIME
console.log('(((((((((((((((SETTING TIME)))))))))))))))')
// SE PUEDE PROGRAMAR FUNCIONES O EJECUTAR EN UN CIERTO TIEMPO 
console.log('---------setInterval')
/// SE USA PARA EJECUTAR UNA ACTIVIDAD CONTINUAMENTE EN UN INTERVALO DE TIEMPO
/// LA FUNCION USA LOS PARAMETROS DE CALLBACK Y DE DURACION
// LA DURACION ES EN MILISEGUNDOS Y EL CALLBACK SERA LLAMADO EN ESE INTERVALO DE TIEMPO

function callback2 (){
    console.log('Hola')
}
//setInterval(callback2, 1000) // imprime Hola cada segundo
 

console.log('---------setTimeout')
// SE PUEDE TEMPORIZAR UNA ACTIVIDAD LA CUAL SE EJECUTA AL PASAR EL TIEMPO ESTABLECIDO
// LA FUNCION TOMA PARAMETROS DE CALLBACK Y DE DURACION 
// LA DURACION ES EN MILISEGUNDOS Y EL CALLBACK SE LLAMA AL CUMPLIRSE EL TIEMPO


function diHola (){
    console.log('Adios')
}
//setTimeout(diHola, 3000) // imprime Adios despues de 3 segundos

console.log('((((((((((((((((PROGRAMACION FUNCIONAL))))))))))))))))')
// ES UN ESTILO DE PROGRAMACION QUE SE BASA EN EL USO DE FUNCIONES PURAS Y AISLADAS (forEach, map, filter, reduce...)
console.log('------------forEach')
// ITERA ENTRE LOS ELEMENTOS DE UN ARRAY Y SOLO SE USA EN ARRAYS, TOMA COMO PARAMETROS ELEMENT, INDEX(OPCIONAL), ARRAY 

/*
arr.forEach(function(element, index, arr){
    console.log(index, element, arr)
})
 
arr2.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
arr3.forEach((element, index, arr3) => console.log(index, element, arr3))
*/

let sum1 = 0
const numero1 = [1,2,3,4,5]
numero1.forEach(num1 => console.log(num1))
console.log(sum1)
// imprime los elementos del array 

let sum2 = 0
numero1.forEach(num2 => sum2 += num2)
console.log(sum2)
// imprime la suma de los elementos del array

const countries = ['Finland', 'Denmark', 'Swenden', 'Norway', 'Iceland']
countries.forEach((element => console.log(element.toUpperCase())))
//imprime los elementos del array en mayusculas

console.log('-----------map')
//ITERA ENTRE LOS ELEMENTOS DE UN ARRAY Y LOS PUEDE MODIFICAR, TIENE COMO PARAMETROS INDEX, ARRAY Y RETURN UN NUEVO ARRAY

/*
const modifiedArray = arr.map(function(element, index, arr){
    return element
})

const modifiedArray = arr.map((element, index)=> element)
*/

const numeros3 = [1,2,3,4,5]
const numeroCuadrado = numeros3.map((num) => num*num)
console.log(numeroCuadrado)
//imprime el mismo array pero con los elementos al cuadrado

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesUpperCase = names.map((nam) => nam.toUpperCase())
console.log(namesUpperCase)
//imprime los nombres pero en mayusculas

const paises =[
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

const paisesMayusc = paises.map((paises) => paises.toUpperCase())
console.log(paisesMayusc)

//FUNCION FLECHA
/*
const paisesMayusc = paises.map((paises) =>{
    return paises.toUpperCase()
})

//FUNCION FLECHA CON RETURN EXPLICITO
const paisesMayusc = paises.map(paises => paises.toUpperCase()
*/

const prim3LetrasPais = paises.map(paises => paises.toUpperCase().slice(0,3))
console.log(prim3LetrasPais)

console.log('------------filter')
// EXTRAE ELEMENTOS DE UN ARRAY QUE TENGAS LAS CARATERISTICAS DESEADAS Y LO MUESTRA EN UN NUEVO ARRAY

const countriesContainingLand = paises.filter((paises) => paises.includes('ia'))
console.log(countriesContainingLand)
// imprime los paises que terminan con ia

const countriesContaininOn = paises.filter((paises) => paises.endsWith('on'))
console.log(countriesContaininOn)
// imprime los paises que terminan con on

const paisesDe5Letras = paises.filter((pai) => pai.length ===5)
console.log(paisesDe5Letras)
// imprime los paises que tienen 5 letras

// CON OBJETOS 
const scores = [
    {name:'Asabaneh', score:95},
    {name:'Lidiya', score:98},
    {name:'Mathias', score:80},
    {name:'Elias', score:50},
    {name:'Martha', score:85},
    {name:'John', score:100}
]

const puntajesMayoresde8 = scores.filter((scores) => scores.score > 80)
console.log(puntajesMayoresde8)
//imprime los puntajes mayores de 80

const names4 = scores.filter((nomb) => nomb.name.length < 5)
console.log(names4)
//imprime los nombres menores de 5 letras

console.log('------------reduce')

const numero2 = [1,2,3,4,5]
const suma = numero2.reduce((acc, cur) => acc + cur, 0)
console.log(suma)

const summ = [10,20,30,40].reduce((a,b) => a+b)
console.log(summ)

const nombres4 = [
    'Jorge', 'Maria', 'Jose',
    'Bob', 'Pat', 'Maria',
    'Jose', 'Jose','Jorge'
]

const cantidadNombres = nombres4.reduce((cont, nomb) => {
    cont[nomb] = (cont[nomb] || 0)+1
    return cont
}, {})

console.log(cantidadNombres)
// CUANDO LA FUNCION SE EJECUTA FUNCIONA MAS O MENOS ASI 
//primera ejecucion
/*
        1.- cont = {} // objeto vacio
        2.- nomb = Jorge //Primer Elemento del array
        3.- {Jorge: 1}
        4.- se retorna el objeto existente -> {Jorge: 1}
        5.- cont = {Jorge: 1}// se repite el ciclo

*/

console.log('------------every')
// CHECA SI TODOS LOS ELEMENTOS SON SIMILARES EN UN ASPECTO Y RETURNA UN BOLEANO

const nombres45 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const sonStrings = nombres45.every((name) => typeof name === 'string')
console.log(sonStrings)
// imprime true porque los elementos del array son strings

const arreglo = [35,28,31,25,29]
const sonMayores = arreglo.every((num) => num > 20)
const sonNumeros = arreglo.every((nu) => typeof nu === 'number')
console.log(sonMayores) // imprime un true porque son mayores a 20
console.log(sonNumeros) // imprime un true porque son numeros

const bool = [true, true, true, false]
const areAllTrue =  bool.every((bol) => bol === true)
console.log(areAllTrue) // imprime false porque no todos los elementos son true

console.log('------------find')
//RETURNA EL PRIMER ELEMENTO QUE SATISFACE LA CONDICION

const ages = [24,22,25,32,35,18]
const age = ages.find((age) => age < 20)
console.log(age)
// imprime 18 pues el unico que satisface la codicion

const nombress = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const nombb = nombress.find((namee) => namee.length > 7)
console.log(nombb)
// imprime el unico nombre que satisface la condicion   

console.log('------------findIndex')
//RETURNA LA POSICION DEL PRIMER ELEMENTO QUE SATISCAFE LA CONDICION

const nombress2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages2 = [24, 22, 25, 32, 35, 18]
const nomm = nombress2.findIndex((no) => no.length <= 5)
console.log(nomm)
//imprime 2 porque es la posicion del elemento que corresponde

const age2 = ages.findIndex((ag) => ag <20)
console.log(age2)
//imprime 5 porque es la posicion del elemento que satisface

console.log('------------some')
//REVISA SI ALGUNOS DE LOS ELEMENTOS SON SIMILARES EN UN ASPECTO

const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools5 = [true, true, false, false]
const sonString2 = names5.some((sst) => typeof sst === 'string')
console.log(sonString2)
// imprime un true porque todos son strings

const areTrue = bools5.some((ab) => ab === true)
console.log(areTrue)
//imprime un true porque algunos son true

console.log('-----------sort')
// EL METODO SORT NOS AYUDA A ACOMODAR LOS ELEMENTOS DEL ARRAY DE DIFRENTES MANERAS 
// SORT MODIFICA EL ARRAY ORIGINAL

const products = ['milk', 'coffe', 'sugar', 'honey', 'apple', 'carrot']
console.log(products.sort())

const numer = [9.81, 3.14, 100, 37]
console.log(numer.sort())
// para hacer un orden correcto con los valores hacemos una funcion de comparacion dentro del metodo sort 
//*********************************
numer.sort(function(a,b){
    return a-b
})
console.log(numer)
//********************************** 

numer.sort(function(a,b){
    return b-a
})
console.log(numer)

//////////////////////////

const users = [
    {name: 'Asabeneh', age:150},
    {name: 'Brook', age:50},
    {name: 'Eyob', age:100},
    {name: 'Elias', age:22}
]

console.log(users)

users.sort((a,b) => {
    if (a.age < b.age) return 1
    if (a.age > b.age) return -1
    return 0
})

console.log(users)

/////////////////////////////////////////////////////////////////////////////////////////
console.log('---------------------------------------EJERCICIOS DEL DIA 9 DEL CURSO')

const countriesE = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const namesE = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbersE = [1,2,3,4,5,6,7,8,9,10]
const productsE = [
    {product: 'banana', price:3},
    {product: 'mango', price:6},
    {product: 'potato', price:' '},
    {product: 'avocado', price:8},
    {product: 'coffee', price:10},
    {product: 'tea', price:' '}
]

/* forEach se usa para iterar en cada unon de los elementos del array
    map se usa para iterar dentro de los elemntos del array pero returna un nuevo array 
    filter extra elos elementos que satisfacen las caracteristicas y los muestra en un nuevo array
    reduce */

countriesE.forEach((element => console.log(element)))

console.log('--------------------------')

namesE.forEach((element => console.log(element)))

console.log('--------------------------')

numbersE.forEach((element => console.log(element)))

console.log('--------------------------')

const CE = countries.map((cou) => cou.toUpperCase())
console.log(CE)

console.log('--------------------------')

const CL = countries.map((coul) => coul.length)
console.log(CL)

console.log('--------------------------')

const CL2 = CL.map((cl2) => cl2*cl2)
console.log(CL2)

console.log('--------------------------')

const nUp = namesE.map((nu) => nu.toUpperCase())
console.log(nUp)

console.log('--------------------------')

const prod = productsE.map((pr) => console.log(pr))

console.log('--------------------------')

const couLand = countriesE.filter((couLand) => couLand.endsWith('land'))
console.log(couLand)

console.log('--------------------------')

const sixC = countriesE.filter((filt) => filt.length === 6)
console.log(sixC)

console.log('--------------------------')

const sixCoM = countriesE.filter((filt) => filt.length >= 7)
console.log(sixCoM)

console.log('--------------------------')

const startsE = namesE.filter((fily) => fily.startsWith('E'))
console.log(startsE)

console.log('--------------------------')

const withPri = productsE.filter((wp) => typeof wp.price === 'number')
console.log(withPri)

console.log('--------------------------')

function getStringList (arr){
    const nue =[]
    for (let i=0; i<=arr.length; i++){
        nue.push(i.toString())
    }
    console.log(nue)
    console.log(typeof nue[1])
}
getStringList(productsE)

console.log('-------------------------')

const sumaNumero = numbersE.reduce((a,b) => a+b)
console.log(sumaNumero)

console.log('------------------------')

const countr = countriesE.reduce((a,b) => a+', '+b)
console.log(countr, 'Are north European countries')

console.log('------------------------')

console.log('SOME revisa si algunos de los lementos del array comparten carateristicas')
console.log('EVERY revisa si todos los elementos del array comparten las mismas carateristicas y returna un boleano')

console.log('------------------------')

const lenghTTT = namesE.some((som) => som.length === 7)
console.log(lenghTTT)

console.log('------------------------')

const everNam = countriesE.every((eve) => eve.includes('land'))
console.log(everNam)

console.log('------------------------')

console.log('FIND retorna el primer elemento que satisface la condicion')
console.log('FINDINDEX retorna la posicion del primer elemento que satisface la condicion')

console.log('------------------------')

const fin = countriesE.find((fi) => fi.length === 6)
console.log(fin)

console.log('------------------------')

console.log(countriesE.findIndex((fi6) => fi6.length === 6))

console.log('------------------------')

console.log(countriesE.findIndex((fi) => fi === 'Norway'))

console.log('------------------------')

console.log(countriesE.findIndex((df) => df === 'Rusia'))

console.log('///////////////////////////////////////////////////////')

const d2 = (productsE.filter((fi) => typeof fi.price === 'number')).map((gh) => gh.price).reduce((a,b) => a+b)
console.log(d2)

console.log('------------------------')

function categorizeCountries (arr){
    const arr2 = arr.filter((fg) => fg.includes('ia'))
    const arr3 = arr.filter((fg) => fg.includes('land'))
    const arr4 = arr.filter((fg) => fg.includes('den'))
    console.log(arr3)
    console.log(arr2)
    console.log(arr4)
}

categorizeCountries(countriesE)

console.log('------------------------')

function times (){
    const cant = countriesE.reduce((cont, letr))
}

//times()

const rt = []
for (let i=0; i<countriesE.length; i++){
    let g = countries[i]
    console.log(countries[i])
    let h = g.split('')
    console.log(h)

    const letras = h.reduce((cont, letr) => {
    cont[letr] = (cont[letr]||0)+1
    return cont
    }, {})
    console.log(letras)
    rt.push(letras)
}
console.log(rt)

console.log('---------------------')