console.log('Dia 12 del curso de Javascript')
console.log("REGULAR EXPRESSIONS")
 
//las expresiones regulares o RegExp son pequeños lenguajes de programacion que ayudan a encontrar patrones en data.
//los RegExp pueden usarse para verificar si existen patrones en difrentes tipos de datos
//para usar RegExp en javascript se hace uso de RegExp constructor o de la siguiente manera

// (((((((((((((RegExp parametros )))))))))))))
// las expresiones regulares toman dos paremtros uno requerido en la busqueda de patrones y otro en como flag opcional

// PATTERN
// los patterns pueden ser cualquier texto o cualquier forma de patron que tenga algun tipo de similitud

//FLAGS
// Las FLAGS son paremetros opcionales en las expresiones regulares que determinan el tipo de busqueda
// g: una flag global que hace una busqueda por patron en todo el codigo
// i: que hace una busqueda (insensitiva) busca con minusculas o mayusculas
// m: multilinea

// ((((((CREANDO UN PATRON CON REGEXP CONTRUCTOR))))))

//declarando una regular expression sin FLAG GLOBAL y CASE INSENSITIVE FLAG

//SIN FLAG
let pattern = 'love'
let RegExpp = new RegExp(pattern)

// declarando una REGULAR EXPRESSION  CON  FLAG GLOBAL Y CASE INSENSITIVE FLAG

let pattern1 = 'love'
let flag = 'gi'
let RegExp1 = new RegExp(pattern1, flag)

// declarando una regex pattern usando RegExp object. Escribiendo el PATTERN y el FLAG dentro del RegExp cosntructor

let regex = new RegExp('love', 'gi')

//(((((((CREANDO UN PATTERN SIN REGEXP CONSTRUCTOR)))))))

//declarando una expresion regular CON GLOBAL FLAG Y CASE INSENSITIVE FLAG
let regex1 = /love/gi

// es lo mismo que si escribieramos 

let regex11 = new RegExp('love', 'gi')


// (((((((((((METODOS DEL REGEXP)))))))))))

// TESTIN FOR A MATCH

// test() ---------------- prueba si hay coincidencias o no en un string y devuelve un True o False

const str = "I love Javascript"
let RGx = new RegExp('love')
let tes = RGx.test(str)
console.log(tes)

// Array contiene todos los matches

//(((((((match()))))))) returna un array con todas las coincidencias dentro del string incluido los grupos o devuleve un null si no encunetra ningun match
// si no se usa GLOBAL FLAG  retorna un array conteniendo el PATTERN, INDEX, INPUT Y GRUPO

const str1 = 'I love Javascript'
const patt1 = /love/
const result = str1.match(patt1)
console.log(result)

// CON GLOBAL FLAG 

const patt2 = /love/g
const  result2 = str1.match(patt2)
console.log(result2)

//((((((search())))))) busca las coincidencias en el string. returna el INDEX de la coincidencia o un -1 si la busqueda falla 

const str3 = 'I love Javascript'
const patt3 = /love/
const patt33 = /live/
const result3 = str3.search(patt3)
const result33 = str3.search(patt33)
console.log(result3)
console.log(result33)

// (((((replace()))))) busca las coincidencias en el string y las sustituye todas por una espcificada

const text = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = text.replace(/Python|python/g, 'Javascript')
matchReplaced1 = text.replace(/Python/gi, 'C++') 
console.log(text)
console.log(matchReplaced)
console.log(matchReplaced1)

const text1 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = text1.replace(/%/g, '')
console.log(text1)
console.log(matches)


//distintas formas de aplicar un replace son 

/*]: A set of characters

    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

\: uses to escape special characters

    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits(match donde no contenga el digito)

. : any character except new line character(\n)
^: starts with

    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.

$: ends with

    r'substring

    ', sentence ends with a word love

*: zero or more times

    r'[a]*' means a optional or it can occur many times.

+: one or more times

    r'[a]+' means at least once or more times

?: zero or one times

    r'[a]?' means zero times or once

\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or

    r'apple|banana' mean either of an apple or a banana

(): Capture and group
*/

/// SQUARE BRACKETS se usan para incluir lower and upper cases

const pattern3 = '[Aa]pple' // this square bracket means either A or a
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too '
const matches3 = txt3.match(pattern3)

console.log(matches3)  

const pattern33 = /[Aa]pple/g
const matches33 = txt3.match(pattern33)

console.log(matches33)

// si queremos encontrar bananas el patron seria este

const pattern4 = /[Aa]pple|[Bb]anana/g
const matches4 = txt3.match(pattern4)
console.log(matches4)

// ESCAPE CARACTER EN REGEXP

const patter5 = /\d/g
const txt5 = 'This regular expression example was made in January 12, 2020'
const result5 = txt5.match(patter5)
console.log(result5)

//----- UNA O MAS VECES (+)

const patter55 = /\d+/g
const result55 = txt5.match(patter55)
console.log(result55)

// (((((((((((period(.))))))))))))

const pattern6 = /[Aa]./g
const txt6 = 'Apple and banana are fruits'
const result6 = txt6.match(pattern6)
console.log(result6)

const patter66 = /[a].+/g
const result66 = txt6.match(patter66)
console.log(result66)

// ((((((Zero o mas veces (*)))))))

const patter7 = /[a].*/g
const result7 = txt6.match(patter7)
console.log(result7)

// (((((((Zero o una vez (?))))))))

const pattern8 = /[Ee]-?mail/g // ? significa opcional
const txt7 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
match = txt7.match(pattern8)
console.log(match)

// ((((((cuantificador en RegExp))))))
// PODEMOS ESPECIFICAR LA LONGITUD DEL SUBSTRING QUE ESTAMOS BUSCANDO

const txt8 = 'This regular expression example was made in December 6,  2019.'
const pattern88 = /\\b\w{4}\b/g  //  exactly four character words
const matches8 = txt8.match(pattern88)
console.log(matches8)

//---------------

const patter9 = /\b[a-zA-Z]{4}\b/g
const matches9 = txt8.match(patter9)
console.log(matches9)   

// --------------

const pattern10 = /\d{4}/g // nunmero con 4 digitos 
const matches10 = txt8.match(pattern10)
console.log(matches10)

//---------------

const patter11 = /\d{1,4}/g //de 1 a 4 digitos 
const matches11 = txt8.match(patter11)
console.log(matches11   )

// cart^ 
// inicia con 

const txt9 = 'This regular expression example was made in December 6, 2019'
const patter12 = /^This/ // si inicia con This
const matches12 = txt9.match(patter12)
console.log(matches12)

//----------------- negation

const patter13 = /[^a-zA-Z,. ]+/g //significa negacion no de la A la Z, no espacios
const matches13 = txt9.match(patter13)
console.log(matches13)

// ((((((((((((((EXACT MATCH))))))))))))))

// DEBE TENER ^ AL INICIO Y AL FINAL $

let pattern14 = /^[A-Z][a-z]{3,12}$/
let name = 'Asabeneh'
let result14 = pattern14.test(name)
console.log(result14) 

//-----------------------------------------------EJERCICIOS DEL DIA 12 DEL CURSO DE JS -------------------------------

