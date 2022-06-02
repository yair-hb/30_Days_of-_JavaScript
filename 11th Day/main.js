console.log('DIA 11 DEL CURSO DE JAVASCRIPT')
console.log('DESTRUCTURING AND SPREAD')

// la desestructuracion es una forma de desempacar arrays y objetos y asignarlos a variables
console.log('Se desempacan los valores y se asignan en variables')
const arr = [1,2,3,4]
let [numero1, numero2, numero3, numero4] = arr
console.log(numero1, numero2, numero3, numero4)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [name1, name2, name3, name4] = names
console.log(name1, name2, name3, name4)

const constantes = [2.71, 3.14, 9.81, 37, 100]
let [e, pi, gravedad, temp, boilingTemp] = constantes
console.log(e, pi, gravedad, temp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'REACT'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(backEnd, frontEnd)

// PARA SALTAR ALGUN ELEMENTO DEL ARRAY SE USA UNA COMA ADICIONAL LA CUAL NOS AYUDA CON EL INDICE ESPECIFICO
console.log('(((((((((((((((((((Para evitar algunos elementos)))))))))))))))))))')
let [nu1, nu2, ,nu4]=arr
console.log(nu1,nu2,nu4)

let [,nom1, nom2, nom3]= names
console.log(nom1, nom2, nom3)

// PODEMOS DESEESCTRUCTURAR SOLO ALGUNOS ELEMENTOS DEL ARRAY
console.log('(((((((((((((((((Desestructurar solo algunos items)))))))))))))))))')

const numeros = [1,2,3,4,5,6,7,8,9,10]
let [primer, segundo, tercero, ...rest] = numeros
console.log(numeros)
console.log(primer, segundo, tercero, rest)

// DESESTRUCTRANDO EN UNA ITERACION
console.log('((((((((((((((((((Usando loop para desestructurar))))))))))))))))))')
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
console.log(countries)

for (const [pais, ciudad] of countries){
    console.log(pais, ciudad)
}

console.log(fullStack)
for (const [primero, segundo, tercero] of fullStack){
    console.log(primero, segundo, tercero)
}

//DESESCTRUCTURANDO UN OBJETO 
// cuando desestructuramos un objeto el nombre de la variable debe ser exacta a la propiedad del objeto
console.log('(((((((((((((((((((((Desestruturando un objeto)))))))))))))))))))))')
const rectangle = {
    ancho: 20, 
    alto: 10,
    area: 200
}

console.log(rectangle)
let {ancho, alto, area, perimetro} = rectangle

console.log(ancho, alto, area)

// RENOMBRAR DURANTE LA DESESTRUCTURACION 
console.log('((((((((((((((Renombrando durante la desestructuracion))))))))))))))')

console.log(rectangle)
let {ancho: width, alto: height, area: A} = rectangle
console.log(width, height, A)

// SI EL VALOR NO ES ENCONTRADO SE ASIGNA COMO UNDEFINED 
// en ocasiones el valor no estara en el objeto por lo cual lo podemos declarar en la desestructuracion
const info = {
    nombre: 'Yair',
    apellido: 'Hernandez',
    edad:20
}
console.log(info)

let {nombre, apellido, edad, color= 'Azul'} = info
console.log(nombre, apellido, edad, color)
console.log(info)

const rectangle2 = {
    ancho2:30,
    alto2:10,
    area2:200,
    perimetro2:80
}
console.log(rectangle2)

let {ancho2, alto2, area2, perimetro2= 60} = rectangle2
console.log(ancho2, alto2, area2, perimetro2)

//-------------------
const rect = {
    width:20,
    height:10
}

const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect))

//-------------------

const persona = {
    firstName: 'Asabaneh',
    lastName: 'Yetaye',
    age: 200,
    country: 'Finland',
    job: 'Instrutor',
    skills: [
        'HTML',
        'CSS',
        'jAVASVCRIPT',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    languages:['Amharic','English','Suomi(Finish)']
}

const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0,-1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0,-1).join(', ')
}


