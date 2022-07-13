let select = document.querySelector('select')
let bg = document.querySelector('img')
let button = document.getElementById('mass')

select.addEventListener('change', backgrounds)

function calcular(mass, g){
    peso = mass*g
    return peso
}

function backgrounds (){
    let opcion = select.value

    if (opcion === 'Tierra'){
        bg.style.backgroundImage = "url('Images/earth.png')"
        calcular(mass, 10)
    }
    else if (opcion === 'Venus'){
        bg.style.backgroundImage = "url('Images/venus.png')"
    }
    else if (opcion === 'Luna'){
        bg.style.backgroundImage = "url(Images/moon.png)"
    }
    else if (opcion === 'Mercurio'){
        bg.style.backgroundImage = "url(Images/mercury.png)"
    }
    else if (opcion === 'Marte'){
        bg.style.backgroundImage = 'url(Images/mars.png)'
    }
    else if (opcion === 'Jupiter'){
        bg.style.backgroundImage = 'url(Images/jupiter.png)'
    }
    else if (opcion === 'Saturno'){
        bg.style.backgroundImage = 'url(Images/saturn.png)'
    }
    else if (opcion === 'Urano'){
        bg.style.backgroundImage = 'url(Images/uranus.png)'
    }
    else if (opcion === 'Neptune'){
        bg.style.backgroundImage = 'url(Images/neptune.png)'
    }
    else if (opcion === 'Pluton'){
        bg.style.backgroundImage = 'url(Images/pluto.png)'
    }
}
