/*console.log('OBJETOS EN JAVASCRIPT')

a = 'Javascript'
b = 10

function letsLearnScope (){
    console.log(a,b)
    if (true){
        console.log(a,b)
    }
}
console.log(a,b)

/////////////////////

let a = 'javascript'
let b = 10
function letsLearnScope2 (){
    console.log(a,b)
    if (true){
        let a = 'python'
        let b = 100
        console.log(a,b)
    }
    console.log(a,b)
}
letsLearnScope2()
console.log(a,b)

//////////////////

let a = 'javascript'// variables que se puede encontrar en cualquier parte del documento
let b = 10 // variable global que se puede encontar en cualquier parte del documento
function letsLearnScope3 (){
    console.log(a,b) //--------------- javascript 10
    let value = false
    //bloque 
    if (true){ // se puede acceder a estas variables desde fuera y se puede acceder alas variables globales 
        // no se puede acceder desde fuera a las variables declaradas dentro del bloque
        let a = 'Python'
        let b = 20
        let c = 30
        let d = 40
        value != value
        console.log(a,b,c, value)//-----------------Python 20 30 true
    console.log(a,b,c,value) // ------------------no se puede acceder a la variable //JavaScript 10 true
    }
}
letsLearnScope3()
console.log(a,b) //----------------------- JavaScript 10, accessible

//////////////////////////

function letsLearnScope4 (){
    var gravedad = 9.81 // declarada solo en el bloque
    console.log(gravedad)
}
letsLearnScope4()
console.log(gravedad) // ERROR  porque no ha sido declarada fuera del bloque

if (true){
    var gravedad = 9.81
    console.log(gravedad)
}
console.log(gravedad)
for (var i=0; i<3; i++){
    console.log(i)
}
console.log(i)

////////////////////////7

function letsLearnScope5 (){
    //puedes usar CONST o LET pero gravedad es una constante
    const gravedad = 9.81
    console.log(gravedad)
}
letsLearnScope5() // se muestra porque es parte de la funcion
console.log(gravedad) // muestra un error porque no ha sido declarada la variable

if (true){
    const gravedad = 9.81
    console.log(gravedad)
}
console.log(gravedad) // muestra un error por no declarar la variable

for (let i=0; i<3; i++){
    console.log(i)
}
console.log(gravedad) // muestra un error por no declarar la variable*/

//////////////////////////////7

// creando un objeto 

const person = {}

// las propiedades del objeto pueden ser strings, numeros, boleanos, y objetos

const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle)

const persona = {
    nombre: 'Yair',
    apellido: 'Hernandez',
    edad: 27,
    pais: 'Mexico',
    ciudad: 'Toluca',
    habilidades: [
        'python',
        'html',
        'Css',
        'javascript',
        'c++'
    ],
    isMarried: false,
    getFullName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    'Numero de telefono': '+12345678910'
}
console.log(persona)

//////////////////////// accediendo a los valores de un objeto

console.log('------------------Se puede acceder a los valores del objeto usando punto .')

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.ciudad)
console.log(persona.edad)
console.log(persona.getFullName())
console.log(persona["Numero de telefono"])

console.log('------------------Se puede acceder de esta form usando brackets')

console.log(persona['nombre'])
console.log(persona['apellido'])
console.log(persona['edad'])
console.log(persona['Numero de telefono'])
console.log(persona['getFullName()'])

///////////////////////// agregando nuevos valores al objeto

console.log(`---------------------agregando nuevos valores al objeto`)

persona.nacionalidad = 'Mexicano'
console.log(persona.nacionalidad)
persona.titulo = 'Estudiante'
console.log(persona.titulo)
//////////////// para agregar 
console.log(persona.habilidades)
persona.habilidades.push('toma agua','Duerme mucho')
console.log(persona.habilidades)
//////////////////// para cambiar boleano
persona.isMarried = true
console.log(persona.isMarried)
//////////////////// para agregar una nueva funcion 

persona.getPersonInfo = function (){
    let skillsinUltimaSkill = this.habilidades.splice(0, this.habilidades.length-1).join(', ')
    let ultimaSkill = this.habilidades.splice(this.habilidades.length-1)[0]

    let habilidades = `${skillsinUltimaSkill}, and ${ultimaSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} es un ${this.titulo}.\nEl vive en ${this.pais}.\nEl aprende ${habilidades}`
    return statement
}

console.log(persona)
console.log(persona.getPersonInfo())


//////////////////////// METODOS PARA LOS OBJETOS 
console.log('--------------------------Metodos para los objetos')


