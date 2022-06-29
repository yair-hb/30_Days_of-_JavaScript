const ex1 = document.querySelector('p')
console.log(ex1)


console.log('---------------------------')

const ex21 = document.querySelector("#ex1")
const ex22 = document.querySelector('#ex2')
const ex23 = document.querySelector('#ex3')
const ex24 = document.querySelector('#ex4')

console.log(ex21)
console.log(ex22)
console.log(ex23)
console.log(ex24)


console.log('---------------------------')

const allP = document.querySelectorAll('p')
console.log(allP)

console.log('---------------------------')

const nodeL = document.querySelectorAll('p')
const nodelenght = nodeL.length
for (let i = 0; i < nodeL.length; i++){
    console.log(nodeL[i].textContent)
}

console.log('---------------------------')

const e5 = document.querySelectorAll('p')
e5[3].textContent = 'Fourth Paragraph'

console.log(nodeL[3])

console.log('---------------------------')

const e6 = document.querySelectorAll('p')
e6[0].setAttribute('class', 'paragraph')
e6[0].setAttribute('id', 'primer-paragraph')

e6[1].setAttribute('class', 'paragraph')
e6[1].setAttribute('id','segundo-paragraph')

e6[2].setAttribute('class', 'paragraph')
e6[2].setAttribute('id', 'tercer-paragraph')

e6[3].setAttribute('class', 'paragraph')
e6[3].setAttribute('id', 'cuarto-parrafo')

console.log('Revisar la consola con las salidas de los p')

console.log('---------------------------')
console.log('%c Exercise LEVEL 2', 'color:orange')

const e2 = document.querySelectorAll('p')
e2.forEach((paragraph, i) =>{
    paragraph.style.fontSize = '30px'
})
e2[0].style.fontFamily = 'Arial'
e2[1].style.fontFamily = 'calibri'
e2[2].style.fontFamily = 'sans-serif'
e2[3].style.fontFamily = 'calibri'

e2[1].style.backgroundColor = 'green'
e2[0].style.backgroundColor = 'pink'
e2[2].style.backgroundColor = 'blue'
e2[3].style.backgroundColor = 'orange'
console.log('revisar la pagina para ver los resultados')

console.log('---------------------------')

const e3 = document.querySelectorAll('p')
e3.forEach((paragraph, i) =>{
    if (i == 0){
        paragraph.style.backgroundColor = 'green'
        paragraph.textContent = 'El primer parrafo'
    }
    else if (i == 1){
        paragraph.style.backgroundColor = 'red'
        paragraph.textContent = 'El segundo parrafo'
    }
    else if (i == 2){
        paragraph.style.backgroundColor = 'green'
        paragraph.textContent = 'El tercer parrafo'
    }
    else if (i == 3){
        paragraph.style.backgroundColor = 'red'
        paragraph.textContent = 'El cuarto parrafo'
    } 
})
