console.log('%c DIA 16 DEL CURSO DE JS', 'color:red')
console.log('%c JSON', 'color:yellow')

// JSON significa javascript Object Notation que es un formato de datos para transportar y almacenar datos
// es usado comunmente cuando se envia data desde el servidor al cliente 
// JSON es la alternativa mas facil de usar que el XML

// JSON es muy similar a los objetos en JS solo que se usan comillas dobles 
// Se pueden convertir desde OBJECT a JSON y viceversa 
// para convertir de JSON a OBJECT se usa JSON.parse()
// para convertir de OBJECT a JSON se usa JSON.stringify()

console.log('%c JSON.parse()', 'color:orange')

const userText = `{
    "users":[
        {
            "firstName":"Asabeneh",
            "lastName":"Yeteyeh",
            "age":"250",
            "email":"asab@asb.com"
        },
        {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
        },
        {
            "firstName":"Lidiya",
            "lastName":"Tekle",
            "age":28,
            "email":"lidiya@lidiya.com"
        }
    ]
}`

const userObj = JSON.parse(userText, undefined, 4)
console.log(userObj)

// para usar la funcion REVIVER como formateador, colocamos las claves que queremos formatear

const userObj2 = JSON.parse(userText, (key, value) =>{
    let newValue =
        typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})

console.log(userObj2)

// el JSON.parse() es muy util de usar. No tienes que pasar el parametro adicional, solo con el paramtro requerido


console.log('%c OBJECT to JSON', 'color:orange')

// cuando se quiere cambiar de OBJECT a JSON se usa JSON.stringify()
// el metodo requiere de un parametro y dos parametros opciionales 
// el sustituto se usa como filtro y el espacio como identacion 
// si no queremos pasar por filtro ninguna de las claves del object usamos UNDEFINED

const users2 = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'Javascript'],
        age: 20,
        isLoggedIn: false,
        points:30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
            'HTML',
            'CSS',
            'Javascript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age:25,
        isLoggedIn: false,
        points:50
    },
    Brook: {
        email:'daniel@daniel.com',
        skills:['HTML','CSS','Javscript','React', 'Redux'],
        age:30,
        isLoggedIn:true,
        points:50
    },
    Daniel: {
        email:'daniel@alex.com',
        skills:['HTML', 'CSS', 'Javascript', 'Python'],
        age:20,
        isLoggedIn:true,
        points:40
    },
    John: {
        email:'john@john.com',
        skills:['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Node.js'],
        age:20,
        isLoggedIn:true,
        points:50
    },
    Thomas: {
        email:'thomas@thomas.com',
        skills:['HTML', 'CSS', 'Javascript', 'React'],
        age:20,
        isLoggedIn:false,
        points:40
    },
    Paul: {
        email:'paul@paul.com',
        skkills:['HTML', 'CSS', 'Javascript', 'MongoDB', 'Express', 'React', 'Node'],
        age:20,
        isLoggedIn:false,
        points:40
    }
}

console.log(users2)
const txt = JSON.stringify(users2, undefined, 4)
console.log(txt)

// ----------------

console.log('%c Usando un array filtro con JSON.stringify()', 'color:orange')


const user3 = {
    fisrName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki', 
    email: 'alex@alex.com', 
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'Python'],
    age:250,
    isLoggedIn: false,
    points:30
}

//se especifican las keys que queremos mostrar
const txt2 = JSON.stringify(user3, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(txt2)



// EJERCICIOS DEL DIA 16 DEL CURSO DE JS
console.log('%c Ejercicios del dia 16', 'color:red')

const skills2 = ['HMTL', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250
let isMarried = true
const student = {
    firstName:'Asabaneh', 
    lastName:'Yetayeh', 
    age:250, 
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
}


const e1 = JSON.stringify(skills2, undefined, 4)
console.log(e1, typeof e1)

const e2 = JSON.stringify(age, undefined, 4)
console.log(e2, typeof e2)

const e3 = JSON.stringify(isMarried, undefined, 4)
console.log(e3, typeof e3)

const e4 = JSON.stringify(student, undefined, 4)
console.log(e4, typeof e4)


// -----------------------

const e5 = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(e5, typeof e5)

//-------------------------

const txt3 = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const e6 = JSON.parse(txt3, undefined, 4)
console.log(e6)

//-------------

for (const user in e6){
    console.log(user)
    for (let valor in user.skills){
        console.log(valor)
    }
    
}
