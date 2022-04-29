//////////////////// dia 6 del curso 

console.log('/////////////////LOOPS')
console.log('for loop')

for (let i =0; i<=5; i++){
    console.log(i)
}

for (let a=5; a>=0;a--){
    console.log(a)
}
for (let b=0;b<=5; b++){
    console.log(`${b}*${b}=${b*b}`)
}
const countries = ['Finlandia','Suecia','Dinamarca','Noruega','Islandia']
console.log(countries)
const newArray =[]
for (let i=0; i<countries.length; i++){
    newArray.push(countries[i].toLocaleUpperCase())
}
console.log(newArray)

/////////////// agregando elementos a un array mediante loop
/////////////////////////se suman todos los elementos del array mediante un ciclo for

const numeros = [10,10,10,10,10]
let suma = 0

for (let i=0; i< numeros.length; i++){
    suma = suma +numeros[i]
    console.log(suma)
}

///////////// creando un nuevo array basado en otro existente

const numeros2 = [1,2,3,4,5]
const newArray2 = []
let suma2 = 0
for (let i = 0; i< numeros2.length; i++){
    newArray2.push(numeros2[i]**2)
    console.log(newArray2)
}

const paises = ['mexico','colombia','españa','ecuador']
const nuevoPais = []
let sum  = 0
for (let i=0; i< paises.length; i++){
    nuevoPais.push(paises[i].toUpperCase())
    console.log(nuevoPais)
}
///////////// ciclo WHILE ////////////////////////////////

let i = 0
while(i<=10){
    console.log(i)
    i++
}

///////////// ciclo DO WHILE ///////////////////77

let aa = 0
do {
    console.log(aa)
    aa++
} while (aa <=7)


/////////////// ciclo FOR OF  /////////////// 
// se usa para trabajar con arrays si no estamos interesados en conocer el indice de cada elemento
console.log('///////////////ciclo FOR OF')

const numeritos = [1,2,3,4,5]
for (const num of numeritos){
    console.log(num)
}

for (const num of numeritos){
    console.log(num*num)
}

// sumando todos los numeros del array

let summ = 0
for (const num of numeritos){
    console.log(summ = summ +num)
}
///////////////////////////

const webTechs =[
    'HTML',
    'CSS',
    'JavasScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs){
    console.log(tech.toLocaleUpperCase())
}

for (const tech of webTechs){
    console.log(tech.toLowerCase())
}
for (const tech of webTechs){
    console.log(tech[0], tech[1], tech[2], tech[3],tech[4])
}
for (const tech of webTechs){
    console.log(webTechs[0].toLowerCase())
}

/////////////////// BREAK se usa para detener un loop
console.log('////////////// BREAK')

for (let i=0; i<= 10; i++){
    if (i == 8){
        break
    }
    console.log(i)
}

//////////////////// CONTINUE se usa para saltarse ciertas iteraciones
console.log('////////////////// CONTINUE')

for (let i=0; i<= 10; i++){
    if (i==5){
        continue
    }
    console.log(i)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
/// ///////////////////////////////// EJERCICIOS DEL DIA 6 

const pais = [
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

const webTech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express','React','Node']

for (i=0 ; i<=10; i++){
    console.log(i)
}
console.log('-------------')

let a = 0
while(a<=10){
    console.log(a)
    a++
}
console.log('-------------')

let b = 0
do{
    console.log(b)
    b++
} while (b<=10)
console.log('///////////////////////////////')

for (i=10; i>=0; i--){
    console.log(i)
}
console.log('--------------')

let c =10
while (c>= 0){
    console.log(c)
    c--
}
console.log('---------------')

let d =10
do {
    console.log(d)
    d--
}while(d>=0)
console.log('////////////////////////////////')

for (let i=0; i<=10; i++){
    console.log(i)
}
console.log('////////////////////////////////')

const uArray = ['#']
const aArray =[]
let cont = 0

for (let i =7; i>uArray.length; i--){
    aArray.push(uArray[0])
    console.log(aArray.join(''))
}
console.log('////////////////////////////////')

for (let i =0; i<=10; i++){
    console.log(`${i} x ${i} =`,i*i)
}

console.log('/////////////////////////////')

for (let i=0; i<=10; i++){
    let h = i**2
    let j = i**3
    console.log(`${i} ${h} ${j}`)
}

console.log('//////////////////////////7')

for (let i =0; i<=100; i++){
    if (i %2 ==0){
        console.log(i)
    }
}

console.log('////////////////////////')

for (let i=0; i<=100; i++){
    if (i %2 ==1){
        console.log(i)
    }
}
console.log('////////////////////////7')
for (let a=1; a<=100; a++){
    if (a%2 !=0){
        let k = ((2**a)-1)
        //console.log(k)
        let m = k-1
        //console.log(m)
        let n = m%a
        if (m%a==0){
            console.log(a)
        }
    }
}
const nuevoArray = []
console.log('///////////////////')
for (let b =1; b<=100; b++){
        nuevoArray.push(b)
}
console.log(nuevoArray)
let suum = 0
for (let i=0; i<nuevoArray.length; i++){
        suum += nuevoArray[i]
}
console.log('la suma de todos los numeros del 1 al 100 es:',suum)

console.log('---------------')
const evens = []
const odds = []
for (let x = 1; x<=100; x++){
    if (x%2 ==0){
        evens.push(x)
    }
    else {
        odds.push(x)
    }
}

console.log(evens)
let s1 = 0
console.log(odds)
let s2 = 0
const s1s2 =[]

for (let s =0; s<evens.length; s++){
    s1 += evens[s]
}
s1s2.push(s1)

for (let r=0; r<odds.length; r++){
    s2 += odds[r]
}
s1s2.push(s2)
console.log('La suma de los pares es de:', s1)
console.log('La suma de los nones es de:', s2)

console.log('---------------------')
console.log(s1s2)

console.log('---------------------')

let numerito = Math.random()*11
numerito = Math.floor(numerito)
console.log(numerito)

const nu = []
while (nu.length <= 5){
    numerito = Math.random()*11
    numerito = Math.floor(numerito)
    nu.push(numerito)
}
console.log(nu)

console.log('--------------------')

