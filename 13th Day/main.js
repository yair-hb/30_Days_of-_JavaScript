console.log('Metodos de la consola')

// SE USAN PARA MOSTRAR SALIDAS EN LA CONSOLA DEL NAVEGADOR Y SE SUELE USAR document.write PARA MOSTRAR
// SALIDAS EN EL NAVEGADOR(view port). AMBOS METHODOS SE USAN UNICAMENTE PARA EL DEBUG Y EL TEST 
// LOS METODOS DE LA CONSOLA SON LOS MAS POPULARES PARA EL TEST Y DEBUGG.
// SE USA document.getElementById() cuando se quiere interactuar con el DOM 

// console.log() 
console.log('%c console.log()', 'color:red')
// se usa para mostrar salidas en la consola del navegador se pueden sustituir valores incluso se pueden cambiar el estilo de la salida

console.log('30 days of Javascript')

// usando susitucion  %

console.log('%d %s od javascript', 30, 'Days')

// estilar los mensajes en la consola usando CSS 

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
)

console.log('%c Hola este es un mensaje para Yair', 'color:blue')

// cconsole.warn()
console.log('%c console.warn()', 'color:red')

//se usa para mostrar advertencias en el navegador para informar de una falta de version en el paquete o malaas practicas

console.warn('Esta es una advertencia')
console.warn(
    'Etas usando React. no toques el DOM. virtual DOM cuidara de como tratar en DOM!'
)

console.warn('Advertencia es difrente a error')

// console.error()
console.log('%c console.error()', 'color:red')

//se usa para mostrar los errores en la consola del navegador 

console.error('Este es un mensaje de error')
console.error('todos cometemos errores')

//console.table()
console.log('%c console.table()', 'color:red')

//este metodo muestra data en forma de tabla en la consola. Muestra una tabla de datos, toma la data requerida 
// la cual debe ser de un array en espacifico o un object 

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
    name: 'Asabneh',
    title:'Programer',
    country: 'Finland',
    city: 'Helsinki',
    age: 25
}
console.table(user)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
console.table(users)

//console.time()
console.log('%c console.time()', 'color:red')

  // se usa para iniciar un contador y se puede usar para tomar el tiempo que una operacion toma en ejecutarse
  // le das un nombre unico a cada timer y puedes poner hasta 10000 timers en una misma pagina
  // cuando llamas console.timeEnd() con el mismo nombre el contador mostrara el tiempo en milisegundos desde que fue iniciado

const countries2 = [
    ['Finalnd', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway','Oslo']
]

console.time('Regular for the loop')
for (let i=0; i<countries.length; i++){
    console.log(countries2[i][0], countries2[i][1])
}
console.timeEnd('Regular for the loop')

console.time('for of loop')
for (const [name, city] of countries2){
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries2.forEach(([nam, city]) => {
    console.log(nam, city)
})
console.timeEnd('forEach loop')

// console.info()
console.log('%c console.info()', 'color:red')

// muestra informacion en la consola del navegador 

console.info('30 days of Javascript challenge is trending on Github')
console.info('30 days of fullstack might be released')
console.info('30 days of HMTL and CSS challenge might be released')


// console.assert()
console.log('%c console.assert()', 'color:red')

// este metodo escribe un mensaje de error si la assertion es falsa. si la assertion es veraddera no pasa nada

console.assert(4>3, '4 es mayor que 3')
console.assert(3>4, '3 no es mayor que 4')

for (let i=0; i<=10; i++){
    let errorMessage = `${i} no es numero par`
    console.log('the # is ' + i)
    console.assert(i%2 ===0, {number: i, errorMessage: errorMessage})
}

// console.group()

console.log('%c console.group()', 'color:red')

//puede ayudar en agrupar diferentes grupos de registro

const names2 = ['Asabeneh', 'Brook', 'David', 'John']
const countries22 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user22 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users2 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names2')
console.log(names2)
console.groupEnd()

console.group('Countries')
console.log(countries22)
console.groupEnd()

console.group('Users')
console.log(user22)
console.log(users2)
console.groupEnd()

console.group('Usuarios')
console.log(users2)
console.groupEnd()

// console.count()

console.log('%c console.count()', 'color:red')

// imprime la cantidad de veces que el metodo ha sido llamado
// es muy util para saber cuantas veces una funcion es llamada 

const func = () => {
    console.count('Function has been called')
}

func()
func()
func()

// console.clear()

console.log('%c console.clear()','color:red')

//este metodo limpia la consola del navegador

//console.clear()

//************************************EJERCICIOS DEL DIA 13****************************************/

const paises = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.table(paises)

//----------------------------

console.assert(10>2*10, 'No es mayor')

//---------------------------

console.warn('Este es un mensaje de precaucion')

//----------------------------

console.error('Esto es un mensaje de error')

//----------------------------

console.time('time for While')
let h=0
while (h<10){
    console.log('los numeros',h)
    h++
}
console.timeEnd('time for While')


console.time('time for For')
for (let g=0; g<=10; g++){
    console.log('los numeros', g)
}

console.timeEnd('time for For')


let y=[1,2,3,4,5,6,7,8,9,10]
console.time('time for For Of')
for (let c of y){
    y+=1
    console.log('los numeros', c)
}

console.timeEnd('time for For Of')


console.time('time for forEach')
var miArray = [1,2,3,4,5,6,7,8,9,10];
miArray.forEach(function(valor) {
    console.log("los numeros", valor);
});
console.timeEnd('time for forEach')