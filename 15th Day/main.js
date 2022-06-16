console.log('%c Classes', 'color:red')

// las clases son como un objeto constructor 
// las clases define atributos y comportamientos del object mientras que el object representa la clase

// una vez que creamos la clase podemos crear le objeto cuando queramos 
    // creando un object desde una clase se le llama creacion de instancias de clases 
// las clases permiten crear muchos objetos lo cual ayuda a reducir mucho la cantidad de codigo asi como su repeticion

// para definir clases se usa la palabra CLASS seguida de curly backets

//class person {}
    

//console.log(person)

// creacion de ((((((((((((((((((((instancias de clases))))))))))))))))))))
console.log('%c INSTANCIAS DE CLASES', 'color:red')

// esto significa crear objecto desde la clase. se usa la palabra NEW y el nombre de la clase despues

class person1 {

}
const person2 = new person1()
console.log(person2)


//                    ((((((((((((((((((class constructor))))))))))))))))))
console.log('%c CLASS CONSTRUCTOR', 'color:red')

//el constructor es una funcion incorporada que permite crear un modelo para nuestro objeto.
// el constructor comienza con una palabra clave seguido de un parentesis 
// dentro del parentesis pasamos las propiedades del objeto como parametro 
// se usa la palabra this para adjuntar los parametros del constructor en la clase

// la siguiente clase Person tiene firstName y lastName las propiedades se adjuntan a Person class usando this
// this refiere a la clase misma

class person {
    constructor(firstName, lastName, age, city, isMarried){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.isMarried = isMarried
    }
}

const persona = new person('Yair', 'Hernandez', 20, 'Finl', true)
const personaA = new person('Asabeneh', 'Yetaye', 24, 'Toluca', false)
const personaA1 = new person('Lydiya', 'Tekle', 34, 'Helsinki', false)
const personaA2 = new person('Abraham', 'Yetaye', 80, 'Mexico', true)

console.log(persona)
console.log(personaA)
console.log(personaA1)
console.log(personaA2)


//               (((((((((((((((((((((((((((Default values with constructor))))))))))))))))))))))))))) 
console.log('%c DEFAULT VALUES WITH CONSTRUCTOR', 'color:red')

// valores predeterminados con constructor
// Las propiedades de la funcion constructora pueden tener un valor predeterminado como otras funciones regulares


class persona1 {
    constructor (
        nombre = 'Yair',
        apellido = 'Hernandez',
        edad = 30,
        pais = 'Mexico',
        ciudad = 'Toluca'
    )
    {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.pais = pais,
        this.ciudad = ciudad
    }
}

const prueba = new persona1() // va a tomar los valores que se le asignaron por default desde el constructor
const prueba1 = new persona1('Marvin', 'Hernandez', 30, 'Canada', 'Toluca') // se asignan nuevos valores que no son los default
console.log(prueba)
console.log(prueba1)

//                      ((((((((((((((((((((((((((((Class Methods))))))))))))))))))))))))))))
console.log('%c CLASS METHODS', 'color:red')

// El constructor dentro de una clase es una funcion integrada que nos permite crear un modelo.
// En una clase podemos crear metodos de clase.
// los metodos son funciones de JS dentro de la clase


class persona2 {
    constructor(nombre, apellido, edad, pais, ciudad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.pais = pais
        this.ciudad = ciudad
    }
    nombreComplet(){
        const fullName = this.nombre+ ' '+ this.apellido
        return fullName
    }
    allData (){
        const data = `Su nombre es ${this.nombre} ${this.apellido}, su edad es ${this.edad} años, vive en ${this.ciudad} en ${this.pais}`
        return data
    }
}

const test1 = new persona2('Agustin', 'Hernandez', 40, 'Colombia', 'Ciudad')

console.log(test1)
console.log(test1.nombreComplet())
console.log(test1.allData())

//               (((((((((((((((Propiedades con valor inicial)))))))))))))))
console.log('%c propiedades con valor inicial', 'color:red')

// cuando creamos una clase para algunas propiedades podemos tener un valor inicial.
// por ejemplo si esta jugando un juego la puntuacion sera 0 
// de este modo podemos tener algunas propiedades e ir incrementando las mismas 


class person3 {
    constructor(nombre, apellido, edad, pais, ciudad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.pais = pais
        this.ciudad = ciudad
        this.score = 0
        this.skills = []
    }
    getNombreComp (){
        const nombreComp = `Su nombre es ${this.nombre} ${this.apellido}`
        return nombreComp
    }
}

const test2 = new person3('Toni', 'Gordo', 40, 'USA', 'Cali')
console.log(test2)
console.log(test2.getNombreComp())
console.log(test2.skills)  
console.log(test2.score)


//               (((((((((((((((((((((((GETTER )))))))))))))))))))))))
console.log('%c GETTER', 'color:red')

//el metodo getter permite acceder a los valores desde el objecto
//escribimos el motodo get seguido de la funcion 
// en lugar de acceder a las propiedades directamente desde el objeto, usamos getter para obtenerel valor

class person4 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 100
        this.skills = [1,2,3]
    }
    getFullName (){
        const gfn = this.firstName + ' ' + this.lastName
        return gfn
    }

    get getScore(){
        return this.score
    }
    
    get getSkills(){
        return this.skills
    }
}

const test3 = new person4 ('Hola', 'Adios', 50, 'ciudad', 'pais')
console.log(test3)
console.log(test3.getFullName())
console.log(test3.getScore)
console.log(test3.getSkills)


//                  ((((((((((((((((((((SETTER)))))))))))))))))))) 
console.log('%c SETTER', 'color:red')

// el metodo setter nos permite modificar un valor de ciertas propiedades 
// se escribe SET seguido de de una funcion 

class person5 {
    constructor(nombre, apellido, edad, ciudad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.ciudad = ciudad
        this.score = 0
        this.skills =[]
    }
    getFullName(){
        const fn = this.nombre + ' '+ this.apellido
        return fn
    }
    get Wciudad (){
        return this.ciudad
    }
    get mApellido (){
        return this.apellido
    }

    set setScore(score){
        this.score += score
    }

    set setSkills(skills){
        this.skills.push(skills)
    }
}


const test4 = new person5('Tony', 'Hernandez', 20, 'Tolu')
const test5 = new person5('T', 'mr', 60, 'can')
console.log(test4)
console.log(test5)

console.log(test4.score, test4.skills)
console.log(test5.score, test5.skills)

test4.setScore = 10000
test4.setSkills = 'Hola'
test4.setSkills = 'Saludar'
test4.setSkills = 'Despedir'

test5.setScore = 88888888
test5.setSkills = 'HTML'
test5.setSkills = 'JAVASCRIPT'
test5.setSkills = 'CSS'


console.log(test4.score, test4.skills)
console.log(test5.score, test5.skills)

// tambien se puede usar el metodo regular 
console.log('%c USANDO EL METODO REGULAR', 'color:red')


class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const test6 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const test7 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  const test8 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')
  
  test6.setScore = 1
  test6.setSkill = 'HTML'
  test6.setSkill = 'CSS'
  test6.setSkill = 'JavaScript'
  
  test7.setScore = 1
  test7.setSkill = 'Planning'
  test7.setSkill = 'Managing'
  test7.setSkill = 'Organizing'
  
  console.log(test6.getScore)
  console.log(test7.getScore)
  
  console.log(test6.getSkills)
  console.log(test7.getSkills)
  console.log(test8.getSkills)
  
  console.log(test6.getPersonInfo())
  console.log(test7.getPersonInfo())
  console.log(test8.getPersonInfo())


  // (((((((((((((((((((((((((STATIC METHOD)))))))))))))))))))))))))
console.log('%c STATIC METHOD', 'color:red')

// define un metodo estatico para una clase 
// los metodos estaticos nose llaman en instancias de la clase. En lugar se llaman en su propia clase 
// suelen ser funciones de utilidad como funciones para crear o clonar objetos.
// ejemplo: el metodo estatico Date.now()

class person6 {
    constructor(firstName, lastName, age, city, country){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.country = country
        this.score = 0
        this.skill = []
    }
    getFullName(){
        const fullName = this.firstName+ ' '+this.lastName
        return fullName
    }

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skill
    }

    set setScore(score){
        this.score += score
    }

    set setSkills(skill){
        this.skill.push(skill)
    }

    getPersonInfo(){
        let fullName = this.getFullName()
        let skill = 
            this.skill.length > 0 &&
            this.skill.slice(0, this.skill.length -1).join(', ')+ `y ${this.skill[this.skill.length-1]}`

        let formattedSkills = skill ? `Sabe de ${skill}`: ''
        let info = `${fullName} tiene ${this.age} , el vive en ${this.city} en ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkills(){
        const skill = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random()* skill.length)
        return skill[index]
    }
    static showDateTime(){
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth()
        let date = now.getDate()
        let hour = now.getHours()
        let minute = now.getMinutes()
        if (hour <10){
            minute = '0'+ hour
        }
        if (minute <10){
            minute = '0'+ minute
        }

        let dateMothYear = date + '.' + month + '.' + year
        let time = hour +':'+minute
        let fullTime = dateMothYear+' '+time
        return fullTime
    }
}

console.log(person6.favoriteSkills())
console.log(person6.showDateTime())

// (((((((((((((((((((((((((((((((((HERENCIA)))))))))))))))))))))))))))))))))
console.log('%c HERENCIA', 'color:red')

// usando la herencia podemos acceder a todas las propiedades y metodos de la clase padre
// esto reduce la peticion de codigo
// la clase padre es person

class childClassName extends person6 {

}

class student extends person6 {
    saySomething(){
        console.log('Hola, tengo herencia de la clase person6')
    }
}

const s1 = new student('Kevin', 'Hernandez', 10, 'Helsinki','Finland')
console.log(s1)
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
s1.saySomething()

// ((((((((((((((((((((((((((((((((ANULAR METODOS))))))))))))))))))))))))))))))))
console.log('%c Anular metodos', 'color:red')

// se pueden personalizar los metodos principales, podemos agregar propiedades adicionales a una clas secundaria
// si queremos personalizar los metodos y queremos agregar propiedades adicionales se debe usar la funciion construtora de la clase secundaria
// dentro de la funcion constructora llamamos a la funcion super() para acceder a todas las propiedades de la clase principal


class estudiante extends person6 {
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, city, country)
        this.gender = gender
    }

    saySomething(){
        console.log('Soy una funcion hijo, con herencia de la clase Person6')
    }

    getPersonInfo(){
        let fullName = this.getFullName()
        let skill = 
            this.skill.length > 0 &&
            this.skill.slice(0, this.skill.length-1).join(', ')+` y ${this.skill[this.skill.length-1]}`
        
        let formattedSkills = skill ? `Sabe de ${skill}`: ''
        let pronoun = this.gender == 'Male' ? 'El' : 'Ella'
        
        let info = `${fullName} tiene ${this.age}, ${pronoun} y vive en ${this.city} en ${this.country}. ${formattedSkills}`
        return info
    }
}

const s11 = new estudiante(
    'Asabaneh',
    'Yetayeh',
    26,
    'Finland',
    'Helsinki',
    'Male'
)

const s2 = new estudiante(
    'Lydia',
    'Tekle',
    28,
    'Finland',
    'Helsinki',
    'Female'
)

s11.setScore = 111111
s11.setSkills = 'HTML'
s11.setSkills = 'CSS'
s11.setSkills = 'JAVASCRIPT'

s2.setScore = 9999999
s2.setSkills = 'Planear'
s2.setSkills = 'Administrar'
s2.setSkills = 'Organizar'

console.log(s11)
console.log(s2)

s11.saySomething()
console.log(s11.getFullName())
console.log(s11.getPersonInfo())

console.log('--------------------')

s2.saySomething()
console.log(s2.getFullName())
console.log(s2.getPersonInfo())