const table = document.createElement('table')
table.style.borderSpacing = '4px'
table.align = 'center'
document.body.appendChild(table)

const titulo = document.getElementById('titulo')
titulo.textContent = 'Generador de Numeros'
titulo.align = 'center'
titulo.style.fontFamily = 'arial'
titulo.style.fontSize = '30px'
titulo.style.fontWeight = 'bold'

const main = document.getElementById('main')
main.textContent = '30 dias de Javascript: DOM Day 2'
main.align = 'center'
main.style.fontFamily = 'arial'
main.style.textDecoration = 'underline'

const autor = document.getElementById('autor')
autor.textContent = 'Author: Yair Hernandez'
autor.align = 'center'
autor.style.fontFamily = 'arial'
autor.style.fontSize = '13px'
autor.style.textDecoration = 'underline'

const ver = document.getElementById('ver')
ver.textContent = 'Numeros Naturales'
ver.style.color = '#21BF73'
ver.style.fontFamily = 'calibri'
ver.style.fontWeight = 'bold'
ver.align = 'center'

const roj = document.getElementById('roj')
roj.textContent = 'Numeros Primos'
roj.style.color = '#FD5E53'
roj.style.fontFamily = 'calibri'
roj.style.fontWeight = 'bold'
roj.align = 'center'

const ama = document.getElementById('amari')
ama.textContent = 'Numeros Nones'
ama.style.color = '#FDDB3A'
ama.style.fontFamily = 'calibri'
ama.style.fontWeight = 'bold'
ama.align = 'center'



let contador = 0
const np = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101]

for (let i=0; i<17; i++){
    const fila = document.createElement('tr')
    table.appendChild(fila)

    //console.log('fila')

    for (let a=0; a<6; a++){
        
        const cuadro = document.createElement('td')
        cuadro.setAttribute('id', contador)
        cuadro.textContent = contador
        cuadro.style.backgroundColor = '#FDDB3A'
        cuadro.style.border = '5px'
        cuadro.style.paddingLeft = '35px'
        cuadro.style.paddingRight = '35px'
        cuadro.style.paddingBottom = '20px'
        cuadro.style.paddingTop = '20px'
        cuadro.style.fontFamily = 'arial'
        cuadro.style.fontSize = '24px'
        cuadro.style.fontWeight = 'bold'
        cuadro.style.color = 'white'
        
        if (contador %2 == 0){
            cuadro.style.backgroundColor = '#21BF73'
        }
        else if (np.includes(contador) == true){
            cuadro.style.background = '#FD5E53'

        }
        fila.appendChild(cuadro)
        contador = contador +1
        
    }
}


