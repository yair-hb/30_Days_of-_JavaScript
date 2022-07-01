const table = document.createElement('table')
document.body.appendChild(table)
table.style.border = 'black 3px'
console.log(table)

let contador = 0

for (let i=0; i<20; i++){
    const fila = document.createElement('tr')
    table.appendChild(fila)

    //console.log('fila')

    for (let a=0; a<5; a++){
        contador = contador +1
        const cuadro = document.createElement('td')
        cuadro.setAttribute('id', contador)
        cuadro.textContent = contador
        cuadro.style.backgroundColor = 'orange'
        cuadro.style.border = 'Black 5px'
        cuadro.style.paddingLeft = '35px'
        cuadro.style.paddingRight = '35px'
        
        fila.appendChild(cuadro)
        
        
    }
}

