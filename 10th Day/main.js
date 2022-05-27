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

let x = [1,2,3,4,5]
let y = [3,4,5,6]

let X = new Set(x)
let Y = new Set(y)

let w = a.filter((num) => B.has(num))
let W = new Set (w)

console.log(W)

//DIFRENCIAS ENTRES LOS SETS 