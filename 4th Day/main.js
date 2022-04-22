console.log ('ESTE ES EL INICIO DEL CODIGO DEL DIA 4 DEL CURSO DE JAVASCRIPT')
// if y else 

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


////////////////////////////////EJERCICIOS DEL DIA 4 DEL CURSO DE JAVASCRIPT
console.log('///////////////////EJERCICIOS DEL DIA 4 DEL CUROS DE JAVASCRIPT')
let edad = parseInt(prompt('Introduce tu edad en años cumplidos'))

if (edad >= 18){
    alert('Ya tienes edad suficiente para conducir')
}
else {let dif = 18-edad 
    alert(`Aun no tines edad suficiente para conducir, te faltan ${dif}`)
}
///////////////////////

alert('Este programa compara las dos edades y muestra la diferencia de años')
let miEdad = 27
let edad2 = prompt('Introduce tu edad en años')
let dif2 = miEdad-edad2
let dif3 = edad2-miEdad
if (miEdad >edad2){
    alert(`Yo soy mayor que tu por ${dif2} años`)
}
else if(edad2>miEdad){
    alert(`Tu eres mayor que yo por ${dif3} años`)
}

///////////////////////
alert('Este programa verifica cual es ma grande de los dos numeros')
let a = prompt('Introduce un valor numerico para A')
let b = prompt('Introduce un valor numerico para B')
let dif5 = (a>b)

if (a>b){
    alert(`${a} es mayor que ${b}`)
}
else{
    alert(`${a} es menor que ${b}`)
}

////// el mismo programa pero usando OPREADORES TERNARIOS //////
dif5 
    ? alert(`${a} es mayor que ${b}`)
    : alert(`${a} es menor que ${b}`)

////////////////////
alert('Este programa verifica si el numero introducido es par o inpar')
let numero1 = prompt('Ingresa un numero para verificar si es PAR o IMPAR')
if (numero1 % 2 == 0){
    alert("El número es par")}
else
    {alert("El número es impar")}

///////////////////

alert('Este programa califica a los alumnos dependiendo de sus calificaciones')
let calif = parseInt(prompt('Ingresa tu promedio del 0 al 100 y obtendras tu calificacion!'))
console.log(calif, typeof calif )

switch (true){
    case calif <50: alert(`Tu calificacion es 'F' porque tu promedio es de ${calif} de 100`)
    break
    case calif >=50 && calif <=59: alert(`Tu calificacion es 'D' porque tu promedio es de ${calif} de 100`)
    break
    case calif >=60 && calif <=69: alert(`Tu calificacion es 'C' porque tu promedio es de ${calif} de 100`)
    break
    case calif >=70 && calif <=79: alert(`Tu calificacion es 'B' porque tu promedio es de ${calif} de 100`)
    break
    case calif >=80 && calif <=100: alert(`Tu calificacion es 'A' porque tu promedio es de ${calif} de 100`)
    break
    default:
            alert('ingresa solo numeros')
}

/////////////////////////

console.log('Este programa te dice en que estacion del año esta cada mes')
let mes2 = prompt('Ingresa un mes del año: Enero, Febrero, Marzo, Abril, Mayo, Junio...Diciembre')
let mes2Min = mes2.toLowerCase()
let mes2May = mes2Min.toUpperCase()
console.log(mes2, mes2Min)

switch(mes2Min){
    case 'diciembre':
    case 'enero':
    case 'febrero': alert(`El mes de ${mes2May} pertenece a la estacion INVIERNO`)
    break
    case 'marzo':
    case 'abril':
    case 'mayo': alert(`El mes de ${mes2May} pertenece a la estacion de PRIMAVERA`)
    break
    case 'junio':
    case 'julio':
    case 'agosto': alert(`El mes de ${mes2May} pertenece a la estacion de VERANO`)
    break
    case 'septiembre':
    case 'octubre':
    case 'noviembre': alert(`El mes de ${mes2May} pertenece a la estacion de OTOÑO`)
    break
    default:
        alert('ingresa un mes correcto, revisa la ortografia')
}

//////////////////////////
console.log('Este programa sabe que dias son de trabajo y cuando es finde semana')
let dia2 = prompt('Introduce el dia de la semana: lunes, martes, miercoles...')
let diaMin = dia2.toLowerCase()
let diaMay = dia2.toUpperCase()
switch(diaMin){
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes': alert(`El dia ${diaMay} es dia de trabajo`)
    break
    case 'sabado':
    case 'domingo': alert(`El dia ${diaMay} es Fin de semana, Descansa!!!`)
    break
    default:
        alert('introduce un dia o revisa tu ortografia')
}

////////////////////////////
console.log('Este programa te dice cuanto dias tiene el mes que le indiques')
let mes = prompt('Introduce el mes que quieres saber cuantos dias tiene')
let mesMin = mes.toLowerCase()
let mesMay = mes.toUpperCase()

switch(mesMin){
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre': alert(`El mes de ${mesMay} tiene 31 DIAS`)
    break
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre': alert(`El mes de ${mesMay} tiene 30 DIAS`)
    break
    case 'febrero': alert(`El mes de ${mesMay} tiene 28 DIAS`)
    break
    default:
        alert('Introduce un mes o revisa tu ortografia')
}