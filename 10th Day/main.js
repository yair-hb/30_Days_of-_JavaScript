console.log('DIA 10 DEL CURSO DE JAVASCRIPT')

// LOS SETS SON  UNA COLECION DE ELEMENTOS. SOLO PUEDEN CONTENER ELEMENTOS UNICOS

const companies = new Set()
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const setOfLanguages = new Set(languages)
console.log(languages)
console.log(setOfLanguages)

// LOS SETS SON OBJETOS POR LO CUAL PODEMOS ITERAR A TRAVES DE ELLOS

for (const lang of setOfLanguages){
    console.log(lang)
}

// AGREGANDO ELEMENTOS AUN SET 
console.log('((((((((((((Agregando elementos a un set))))))))))))')

const empre = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const companies2 = new Set ()
console.log(companies2)

for (let i=0; i<empre.length; i++){
    companies2.add(empre[i])
    console.log(companies2)
}
console.log(companies2.size)

// BORRAR ELEMENTOS DEL SET 
console.log('((((((((((((Eliminando elementos de un set))))))))))))')

console.log(companies2)
companies2.delete('Facebook')
console.log(companies2)
 
// CHECANDO SI CONTIENE UN ELEMENTO EL SET 
// metodo HAS retorna un boleano
console.log('((((((((Revisando si hay un elemento en el set))))))))')

console.log(companies2.has('Facebook'))
console.log(companies2.has('Apple'))
console.log(companies2.has('Oracle'))

//LIMPIANDO EL SET 
// el metodo CLEAR elimina todos los elementos del set
console.log('(((((((((((((((((((Limpiando el Set)))))))))))))))))))')

console.log(companies2)
companies2.clear()
console.log(companies2)

// EJEMPLO
console.log('(((((((((((((((((((EJEMPLO)))))))))))))))))))')

const lenguajes = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const LangSet = new Set(lenguajes)
console.log(LangSet)
console.log(LangSet.size)

const contador = []
const cuenta = []
for (const l of LangSet){
    const filterLang =lenguajes.filter((lng) => lng ===l)
    console.log(filterLang)
    contador.push({lenguaje: l, cuenta: filterLang.length})
}
console.log(contador)

// EJEMPLO
console.log('((((((((((Ejemplo))))))))))')

const numeros =[5,3,2,5,5,9,4,5]
const numerSet = new Set(numeros)
console.log(numeros)
console.log(numerSet)

//UNION DE SETS 
// PARA UNIR SETS SE USA SPREAD OPERATORS
console.log('((((((((((((((Union de sets))))))))))))))')

let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a,...b]

console.log(a,b,c)

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// INTERSECCION DE SETS (SON LAS SIMILITUDES ENTRE LOS DOS SETS)
// PARA ENCONTAR LA INTERSECCION DE DOS SETS SE PUEDE USAR EL METODO FILTER
console.log('((((((((((((((((Interseccion entre dos Sets))))))))))))))))')

let x = [1,2,3,4,5]
let y = [3,4,5,6]

let X = new Set(x)
let Y = new Set(y)

let w = a.filter((num) => B.has(num))
let W = new Set (w)

console.log(x,y)
console.log(W)

//DIFRENCIAS ENTRES LOS SETS 
//PARA ENCONTAR DIFRENCIAS ENTRE DOS SETS SE USA EL METODO FILTER 
console.log('((((((((((((Diferencia entre sets))))))))))))')

let a1 = [1,2,3,4,5]
let b1 = [3,4,5,6]

let A1 = new Set (a1)
let B1 = new Set (b1)

let c1 = a1.filter((num) => !B1.has(num))
let C1 = new Set(c1)

console.log(a1,b1)
console.log(C1)

//-------------------------------------------------- MAPS
console.log('--------------------------------------------MAP---------------------------------')
console.log('((((((((((((((((((((Creando un Map vacio))))))))))))))))))))')

const map = new Map()
console.log(map)

const countries = [['Finalnd','Helsinki'],['Sweden','Stockholm'],['Norway','Oslo']]
console.log(countries)
const map1 = new Map(countries)
console.log(map1)
console.log(map1.size)

// AGREGANDO VALORES AL MAP 
console.log('(((((((((((((((((((((Agregando valores al Map)))))))))))))))))))))')

const mapCountr = new Map ()
console.log(mapCountr, mapCountr.size)
mapCountr.set('Mexico','CDMX')
mapCountr.set('Sweden','Stockholm')
mapCountr.set('Norway', 'Oslo')
console.log(mapCountr, mapCountr.size)

//OBTENIENDO VALORES DE UN MAP
console.log('((((((((((((((((((((Obteniendo valores de Map))))))))))))))))))))')

console.log(mapCountr.get('Mexico'))
console.log(mapCountr.get('Norway'))
console.log(mapCountr.get('Sweden'))

// REVISANDO VALORES EN MAP
// PARA REVISAR SI EXISTE UN VALOR EN UN MAP SE USA has Y NOS DEVUELVE UN TRUE O FALSE 
console.log('((((((((((((((((((((((CHEKING KEYS IN MAP))))))))))))))))))))))')
console.log(mapCountr.has('Mexico'))
console.log(mapCountr.has('CDMX'))
console.log(mapCountr.has('Sweden'))
console.log(mapCountr.has('Stockholm'))
console.log(mapCountr.has('Norway'), mapCountr.has('Oslo'))

// OBTENIENDO TODOS LOS VALORES DE UN MAP USANDO UN CICLO
console.log('((((((((Obteniendo todos loa valores de un map usando un loop))))))))')

for (const countries of mapCountr){
    console.log(countries)
}

for (const [pais, ciudad] of mapCountr){
    console.log(pais, ciudad)
}

/// ------------------------------------------EJERCICIOS DEL DIA 10 DEL CUROS DE JAVASCRIPT
console.log('-----------------------ejercicios del dia 10 del curso de JS-----------------------')

const h = [4,5,8,9]
const i = [3,4,5,7]
const paises = ['Finland','Sweden','Norway']

const nuevoSet = new Set()
console.log(nuevoSet)

console.log('----------------------------------')

for (let i=0; i<=10; i++){
    nuevoSet.add(i)
}
console.log(nuevoSet)

console.log('----------------------------------')

nuevoSet.delete(0)
console.log(nuevoSet)

console.log('----------------------------------')

nuevoSet.clear()
console.log(nuevoSet, nuevoSet.size)

console.log('----------------------------------')

const nuArray = ['Mexico','Canada','Colombia','Ecuador','Francia']
const setNuArr = new Set(nuArray)
console.log(nuArray, setNuArr)

console.log('----------------------------------')

const pais = ['Mexico','Canada','Colombia','Ecuador','Francia']
const elp =  []
const mapElp = new Map()
let contador1 = 0
for (const p of pais){
    console.log(p)
    for (const cl of p){
        contador1 += 1
    }
    mapElp.set(p,contador1) 
    contador1 = 0  
}
console.log(mapElp)

console.log('---------------------------------')

console.log(h,i)
let j = [...h,...i]
console.log(j)
const jj = new Set(j)
console.log(jj)

console.log('--------------------------------------------')

let hh = new Set(h)
let ii = new Set(i)

let k = h.filter((num) => ii.has(num))
let K = new Set (k)
console.log(K)

console.log('--------------------------------------------')

let kk = h.filter((num) => !ii.has(num))
let KK = new Set(kk)
console.log(KK)