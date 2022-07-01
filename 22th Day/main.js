console.log('%c DOM(DOCUMENT OBJECT MODEL) DIA 2', 'color:red')

//      CREATING ELEMENT
//  para crear un elemento usamos tag name
//   es muy facil crear un elemento 
//  se usa el metodo document.createElement()
//  El metodo toma un elemento HTML tag NAME como parametro string

let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creando elementos desde el DOM'

console.log(title)


/*      CREATING ELEMENTS 
    para crear varios elementos usamos loops
    usando loops podemos crear tantos elementos HTML como queramos
    despues de crear los elementos les podemos asignar valor diferentes propiedades
*/
console.log('%c --------------------', 'color:orange')

let titulo 
for (let i = 0; i < 3; i++){
    titulo = document.createElement('h2')
    titulo.className = 'title'
    titulo.style.fontSize = '28px'
    title.textContent =`titulo ${i}`
    console.log(titulo)
}

/*      APPENDING CHILD TO A PARENT ELEMENT
    para poder ver un elemento HTML creado debemos agregarlo como elemento hijo a un elemento padre
    podemos acceder al HTML document body usando document.body
    el document.body soporta el metodo appendChild()
*/
console.log('%c --------------------', 'color:orange')

let titulo2 
for (let i = 0; i < 3; i++){
    titulo2 = document.createElement('h3')
    titulo2.className = 'titulo'
    titulo2.style.fontSize = '24px'
    titulo2.textContent = `Titulo ${i}`
    document.body.appendChild(titulo2)
    console.log(titulo2)
}


/*      REMOVING A CHILD ELEMENT FROM A PARENT NODE
    despues de crear un HTML se pueden remover elementos y podemos usar el metodo 
    removeChild
*/
console.log('%c --------------------', 'color:orange')

/*
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists){
    ul.removeChild(list)
}
*/

/*  como vimos en la seccion anterior hay una mejor manera de eliminar todos los elementos internos secundarios 
    de un elemento principal utilizando las propiedades del metodo innerHTML
*/

const ul = document.querySelector('ul')
ul.innerHTML = ''