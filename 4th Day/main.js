console.log ('ESTE ES EL INICIO DEL CODIGO DEL DIA 4 DEL CURSO DE JAVASCRIPT')
// if y else 
/*
let num = prompt('Ingresa un numero para verificarlo')
if (num >0 ){alert('este numero es positivo')}
else {
    alert('Este numero es negativo')
}

let estaLloviendo = true
if (estaLloviendo){console.log('No olvides llevar una chamarra!')}
else {console.log('No hay necesidad de llevar una chamarra')}


// else if 
console.log('//////////ELSE IF')
let num2 = prompt('Ingresa un numero para darte una caracteristica')
if (num2 >0){alert(`El numero que ingresaste (${num2}) es Positivo`)}
else if (num2 ==0){alert(`El numero que ingresaste es ${num2}`)}
else if (num2 <0){alert(`El numero que ingresaste (${num2}) es Negativo`)}

let clima = prompt('Elige el clima que esta haciendo: soleado, llueve, nieva')
if (clima == 'soleado'){console.log('Deberias usar protector solar y gorra!'),alert('Deberias usar protector solar y gorra!')}
else if (clima == 'llueve'){console.log('No olvides llevar un paraguas!'),alert('No olvides llevar un paraguas!')}
else if (clima == 'nieva'){console.log('No olvides tu chamarra guantes y bufanda!'), alert('No olvides tu chamarra guantes y bufanda!')}

//SWITCH
console.log('/////////SWITCH')
let clima2 = prompt('Selecciona un clima: soleado, lluvioso, nublado')
switch (clima2) {
    case 'soleado':alert('Deberias usar protector solar')
    break
    case 'lluvioso':alert('Deberias usar chamarra y llevar paraguas')
    break
    case `nublado`:alert('Deberias usar un sueter para no resfriar')
    break
    default:
        alert('selecciona un clima')
}

let dia = prompt('Que dia de la semana es hoy: lunes, martes, miercoles...')
switch (dia){
    case 'lunes':alert(`Hoy es ${dia}, es el inicio de la semana!`)
    break
    case 'martes':alert(`Hoy es ${dia}, es el segundo dia de la semana!`)
    break
    case 'miercoles':alert(`Hoy es ${dia}, ya vamos a la mitad de la semana!`)
    break
    case 'jueves':alert(`Hoy es ${dia}, ya se acerca el Viernes!`)
    break
    case 'viernes':alert(`Hoy es ${dia}!!!!!, por fin!!`)
    break
    case 'sabado':alert(`Hoy es ${dia}, puedes descansar!!`)
    break
    case 'domingo':alert(`Hoy es ${dia}, ya se acabo el fin de semana :(`)
    break
    default:
        alert('selecciona un dia valido')
}

let num3 = prompt('ingresa un numero:')
switch(true){
    case num3>0: alert(`El numero que ingresaste ${num3} es positivo`)
    break
    case num3<0: alert(`El numero que ingresaste ${num3} es negativo`)
    break
    case num3 ==0: alert(`El numero que ingresaste es ${num3}`)
    break
    default:
        alert('Ingresa solo numeros')
}

/////////////OPERADORES TERNARIOS
console.log('/////////// OPERADORES TERNARIOS')

let haceCalor = false
haceCalor
    ? alert('Lleva una gorra!')
    : alert('No lleves gorra')
*/

////////////////////////////////EJERCICIOS DEL DIA 4 DEL CURSO DE JAVASCRIPT
console.log('///////////////////EJERCICIOS DEL DIA 4 DEL CUROS DE JAVASCRIPT')
let edad = parseInt(prompt('Introduce tu edad en años cumplidos'))
if (edad >= 18){alert('Ya tienes edad suficiente para conducir')}
else {alert('Aun no tines edad suficiente para conducir')}
