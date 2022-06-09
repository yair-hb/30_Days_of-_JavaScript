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

const getPersonalData = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0,-1).join(', ')
    const languages = obj.languages
    const formattedLanguajes = languages.slice(0,-1).join(', ')

    personData = `${obj.firstName} ${obj.lastName} vive en ${obj.country}. el tiene ${obj.age} años, el es un ${obj.job} y enseña sobre ${formattedSkills} y sobre ${skills[skills.length -1]} tambien habla en ${formattedLanguajes} y un poco de ${languages[2]}`

    return personData
}

console.log(getPersonalData(persona))



// -------------------------------------
// object parameter with destructuring


const calculatePerimeter2 = ({width, height}) => {
    return 2* (width+ height)
}

console.log(calculatePerimeter2(rect))


//----------------------------------------

const getPersonData = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const formattedSkills = skills.slice(0,-1).join(', ')
    const formattedLanguajes = languages.slice(0,-1).join(', ')

    personData = `${firstName} ${lastName} vive en ${country}. El tiene ${age} de edad y se dedica a ${job}, enseña sobre ${formattedSkills} y tambien sobre ${skills[skills.length -1]}. El habla ${formattedLanguajes} y un poco de ${languages[2]}`
    return personData
}

console.log(getPersonData(persona))

//------------------------------------------
// destructurando objeto durante su iteracion 

const todolist = [
    {
        task:"prepare js test",
        time:'4/1/2020 8:30',
        completed: true
    },
    {
        task:"Give js test",
        time:'4/1/2020 10:00',
        completed: false
    },
    {
        task:"Asses test result",
        time:'4/1/2020 1:00',
        completed: false
    }
]

for (const{task, time, completed} of todolist){
    console.log(task, time, completed)
}

//// --------------------------SPREAD O REST OPERADOR ----------------------
// cuando destructuramos un array usando spread  el resto de los elementos se mueatran en un array y para eso usamos spread operador 
// para separar los elementos de un array en otro array


const numb = [1,2,3,4,5,6,7,8,9,10]
let [num1, num2, num3,...rest2] = numb

console.log(num1, num2, num3)
console.log(rest2)

//----------------------------

const countries2 = ['Germany', 'France', 'Belgium', 'Finland', 'Sweden', 'Norway','Denmark', 'Iceland']

let [gem, fra,,...nordicountries] = countries2

console.log(gem)
console.log(fra)
console.log(nordicountries)

//------------------------------ SPREAD OPERATOR TO COPY ARRAY


const pares = [2,4,6,8,10]
const numerosPares = [...pares]

const impares = [1,3,5,7,9,11]
const numerosImpares = [...impares]

const todos = [...pares, ...impares]

console.log(numerosPares)
console.log(numerosImpares)
console.log(todos)

// ------------------------------- COPY AN OBJECT USING SPREAD OPERATOR 

const usuario = {
    name: 'Yair',
    apellido: 'Hernandez',
    age: 30,
    title: 'Student',
    country: 'Mexico',
    city: 'CDMX'
}

console.log(usuario)

const copyUser = {...usuario}
console.log(copyUser)

// --------------- SE PUEDE EDITAR LAS KEYS DEL OBJETO EN EL MISMO OPERADOR SPREAD

const copy2 = {...usuario, title:"Programador"}
console.log(copy2)

//------------------SPREAD OPERATORS CON FUNCION FLECHA

// siempre que usemos una funcion flecha que tome cualquier numero de argumentos usados como sprread operator los arggumentos pasados seran cambiados a un array

const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1,2,3,4,5,6,7,8,9)
// el resultado mostrado sera en un array

const sumAllNums2 = (...args) => {
    let sum = 0
    for (const num of args){
    sum += num
    }
    return sum
}

console.log(sumAllNums2(1,2,3,4,5))

///-------------------------------------------EJERCICIOS DEL DIA 11 DEL CURSO DE JS
console.log('((((((((((((((Ejercicios del dia 11 del curso de js))))))))))))))')

const constantes1 = [2.72, 3.14, 9.81, 37, 100]

let [e1,pi1, gravedad1, hbt, boilingT] = constantes1
console.log(e1, pi1, gravedad1, hbt, boilingT)

//---------------------------------

const constantes2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, swe, den, nor] = constantes2

console.log(fin, est, swe, den, nor)

//---------------------------------

const rectangle1 = {
    width3:20,
    height3:10,
    area3:200,
    perimeter3:60
}

let {width3, height3, area3, perimeter3} = rectangle1

console.log(width3, height3, area3, perimeter3)

//----------------------------------

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

for (const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
}

//---------------------------------
console.log('--------------------------')

const obt1 = {}
for (const {name, skills} of users){
    //console.log(name, skills.length)
    if (skills.length < 2){
        console.log("El usuario que tiene menos de dos skills es:",name, skills)
    }   
}


//--------------------------------

const student = ["David", ["HTML","CSS", "JS","React"],[98, 85, 90, 95]]

console.log(student)

let [nameE, skills, scores] = student
let [ , ,jsScore, reactScore] = student[2]
console.log(nameE, skills, jsScore, reactScore)

//---------------------------------

const Estudiantes = [
    ['David', ['HTML','CSS','JS','React'],[98,85,90,95]],
    ['John', ['HTML','CSS','JS','React'],[85,80,85,80]]
]

let arr3 =[]
function convertArrayToObject (args){
    for (let a=0; a<args.length; a++){
        const [namess, skillss, scoress] = args[a]
        const objEstud = {namess, skills, scoress}
        console.log(objEstud)
        arr3.push(objEstud)
    }
    return arr3
}
console.log(convertArrayToObject(Estudiantes))


//----------------------------

const Estudiante = {
    name: "David",
    age: 25,
    skills: {
        frontEnd: [
            {skills: 'HTML',level:10},
            {skills: 'CSS', level:8},
            {skills: 'JS', level:8},
            {skills: 'React', level:9}
        ],
        backEnd: [
            {skills: 'Node', level:7},
            {skills: 'GraphQL', level:8},
        ],
        dataBase: [
            {skills: 'MongoDB', level:7.5}
        ],
        dataScience: [
            {skills: ['Python', 'R', 'D3.js']}
        ]
    }
}

console.log(Estudiante)
const copyEst = {...Estudiante}
copyEst.skills.frontEnd.push({skills:"BootStrap", level:8})
copyEst.skills.backEnd.push({skills:"Express", level:9})
copyEst.skills.dataBase.push({skills:"SQL", level:8})
console.log(copyEst)

