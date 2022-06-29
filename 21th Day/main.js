console.log('%c DOM', 'color:red')

// el documento HTML esta estructurado como un object en JAVASCRIPT
// cada elemento de HTML tiene diferentes propiedades que se pueden manipular.
// es posible obtener, crear, adjuntar o remover elementos HTML usando JAVASCRIPT
// para seleccionar elementos HTML usamos tag name, id, nombres class u otros atributos


/*GETTING ELEMENT
    podemos acceder a los elementos ya creados usando JAVASCRIPT y para acceder se usan distintos metodos
*/


/*      GETTING ELEMENTS BY TAG NAME
=> getElementsByTagName() toma un TAG NAME como string parametro y este metodo returna un HTMLCollection OBJECT 
=> un HTMLCollection es un array como HTML object
=> la propiedad LENGHT muestra el tamañode la coleccion
=> cada vez que usamos este metodo accedemos a los elementos individuales usando index o un ciclo loop por cada elemento
=> un HTMLCollection no es compatible con todos los metodos de matriz, por lo tanto se debe usar for loop en vez de forEach
*/

console.log('%c getElementByTagName()', 'color:orange')

document.getElementsByTagName('tagname')

const allTitles =  document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)

// USANDO FOR LOOP

for (let i = 0; i < allTitles.length; i++){
    console.log(allTitles[i])
}


/*      GETTING ELEMENT BY ID 
el metodo getElementById apunta a un solo elemento HTML pasamos por el ID sin # como argumento
*/

console.log('%c getElementById()', 'color:orange')

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)


/*      GETTING ELEMENTS BY USING QUERYSELECTOR METHODS
el document.querySelector metodo puede seleccionar un HTML elemento o elementos por TAG NAME, por ID, o por CLASS NAME
QUERYSELECTOR puede ser usadopara selccionar elementos HTML por TAG NAME, ID, CLASS. si se usa el tag solo sera el primer elemento
*/
console.log('%c GET ELEMENT BY QUERYSELECTOR', 'color:orange')

let firstTitle2 = document.querySelector('h1')
let firstTitle3 = document.querySelector('first-title')
let firstTitle4 = document.querySelector('.title')

console.log(firstTitle2)
console.log(firstTitle3)
console.log(firstTitle4)



/*      QuerySelectorAll
puede ser usado para seleccionar elementos HTML por su TAG NAME, o CLASSE
returna una NODELIST la cual es un array como objeto que soporta motodos de ARRAY
se pueden usar FOR LOOP y FOREACH
*/

console.log('%c querySelectorAll()', 'color:orange')

const allTitles2 = document.querySelectorAll('h1')
console.log(allTitles2.length)

for (let i = 0; i < allTitles2.length; i++){
    console.log(allTitles2[i])
}

allTitles2.forEach(title => console.log(title))
const allTitles3 = document.querySelectorAll('.title')

/*      ADDING ATTRIBUTE */
console.log('%c ADDING ATRIBUTE', 'color:orange')

/* se agrega un atributo en la etiqueta de apertura de HTML que nos brinda informacion adicional sobre el elemento
*/


/*      ADDING ATTRIBUTE USING setAttribute*/
console.log('%c setAttribute()', 'color:orange')

//este metodo puede establecer cualquier atributo HTML. toma dos parametros: el tipo del parametro y el nombre 

const title = document.querySelectorAll('h1')
title[2].setAttribute('class', 'title')
title[2].setAttribute('id', 'fourth-title')


/*      ADDING ATTRIBUTE WITHOUT setAttribute()*/
console.log('%c ADDING ATTRINBUTE WITHOUT setAttribute()', 'color:orange')

/*
podemos usar el metodo normal para objetos para establecer atributos pero este metodo no fuciona para todos los metodos
Algunos atributos son object DOM y pueden establecerse de forma directa
*/

const titles = document.querySelectorAll('h1')
titles[2].className = 'title'
titles[2].id = 'fourth-title'


/*      ADDING CLASS USING CLASSLIST*/
console.log('%c ADDING CLASS USSING CLASS LIST', 'color:orange')

/*el metodo de lista de clases es un buen metodo para agregar clases adicionales
no anula la clase original si existe una clase sino que agrega una clase adicional patra el elemento
*/

titles[1].classList.add('title', 'header-title')


/*      REMOVING CLASS USING REMOVE
es muy similar a add tambien se pueden remover clases desde un elemento. podemos remover una clase espcifica de un elemento
*/
console.log('%c REMOVING CLASS USING REMOVE', 'color:orange')

titles[1].classList.remove('title', 'header-title')


//---------------------------------ADDING TEXT TO HTML ELEMENT
console.log('%c ADDING TEXT TO HTML ELEMENT', 'color:orange')
/*
un HTML es un bloque de cosntruccion de una etiqueta de apertura de cierrey de contexto. podemos agregar un contenido de texto usando
la propiedad textContent o innerHTML
*/

const titles32 = document.querySelectorAll('h1')
titles32[2].textContent = 'Fourth Title'

/*      ADDING TEXT CONTENT USING innerHTML*/
console.log('%c ADDING TEXT CONTENT USING innerHTML', 'color:orange')
/*
textContent esta destinado a agregar texto a un elemento HTML sin embargo innerHTML puede agregar un elementoo elementos de texto o HTML
como un elemento CHILD 
*/

const titles33 = document.querySelectorAll('h1')
titles33[2].textContent = 'Fourth titulo'

/*      innerHTML*/
console.log('%c innerHTML', 'color:orange')
/*
se usa esta propiedad cuando queremos reemplazar o un contenido secundario completamente nuevo en un elemento principal
el valor que le asignemos sera una cadena de elementos HTML


/*      ADDING STYLE */
console.log('%c ADDING STYLE', 'color:red')

//      ADDING STYLE COLOR
console.log('%c ADDING COLOR', 'color:orange')

const titulo3 = document.querySelectorAll('h1')
titulo3.forEach((title, i) =>{
    title.style.fontSize = '24px'
    if (i % 2 === 0){
        title.style.color = 'red'
    } else {
        title.style.color = 'green'
    }
})

//      ADDING BACKGROUND COLOR
console.log('%c ADDING BACKGROUND COLOR', 'color:orange')

const titulo33 = document.querySelectorAll('h1')
titulo33.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})


//      ADDING STYLE FONT SIZE 
console.log('%c ADDING STYLE FONT SIZE  ', 'color:orange')

const titulo34 = document.querySelectorAll('h1')
titulo34.forEach((title, i) => {
    title.style.fontSize = '24px'
    if (i % 2 === 0){
        title.style.fontSize = '240px'
    } else {
        title.style.fontSize = '30px'
    }
})

/*las propiedades de CSS cuando se usan en JAVASCRIPT cambian a CAMELCASE 
background-color a backgroundColor, 
font-size a fontSize, 
font-family a fontFamily, 
margin-bottom a marginBottom.
*/