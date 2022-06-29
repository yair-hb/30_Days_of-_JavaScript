let time =  new Date()
let year = time.getFullYear()
let month = time.getMonth()
let day = time.getDay()
let hour = time.getHours()
if (hour < 10){
    hour = '0' + hour
}
let minutes = time.getMinutes()
if (minutes < 10){
    minutes = '0' + minutes
}
let seconds = time.getSeconds()
if (seconds < 10){
    seconds = '0' + seconds
}

let monthNm 
if (month == 0){
    monthNm = 'Enero'
} else if (month == 1){
    monthNm = 'Febrero'
} else if (month == 2){
    monthNm = 'Marzo'
} else if (month == 3){
    monthNm = 'Abril'
} else if (month == 4){
    monthNm = 'Mayo'
} else if (month == 5){
    monthNm = 'Junio'
} else if (month == 6){
    monthNm = 'Julio'
} else if (month == 7){
    monthNm = 'Agosto'
} else if (month == 8){
    monthNm = 'Septiembre'
} else if (month == 9){
    monthNm = 'Octubre'
} else if (month == 10){
    monthNm = 'Noviembre'
} else if (month == 10){
    monthNm = 'Diciembre'
}

let fullTime = monthNm + ' ' + day + ',' + ' ' + year + ' ' + hour + ':' + minutes + ':' + seconds




const div = document.querySelector('div')

const tiempo = '\
<h1>Asabeneh Yetayeh challenges in <span>2020</span></h1>\
        <h2>30DaysOfJavaScript Challenge</h2>\
        <h2>Challenge</h2>\
        <ul>\
            <li>30DaysOfPython Challenge Done</li>\
            <li>30DaysOfJavaScript Challenge Ongoing</li>\
            <li>30DaysOfReact Challenge Coming</li>\
            <li>30DaysOfFullStack Challenge Coming</li>\
            <li>30DaysOfDataAnalysis Challenge Coming</li>\
            <li>30DaysOfReactNative Challenge Coming</li>\
            <li>30DaysOfMachineLearning Challenge Coming</li>\
        </ul>'
div.innerHTML = tiempo

let yu

const lis = document.querySelectorAll('li')
const h1 = document.querySelector('h1')
const h2 = document.querySelectorAll('h2')
const ul = document.querySelector('ul')
const span = document.querySelector('span')

setInterval(function(){ 
    let n = (Math.random()* 0xfffff *1000000).toString(16)
    yu =  '#' + n.slice(0,6)
    h2[1].style.backgroundColor = yu

}, 1000);

setInterval(function(){ 
    let n = (Math.random()* 0xfffff *1000000).toString(16)
    yu =  '#' + n.slice(0,6)
    span.style.color = yu
}, 1000);


h1.style.fontFamily = 'calibri'
h1.style.textAlign = 'center'
h2[0].style.fontFamily = 'calibri'
h2[0].style.textAlign = 'center'
h2[0].style.textDecoration = 'underline'
h2[1].style.textAlign = 'center'
h2[1].textContent = fullTime
h2[1].style.fontSize = '18px'
h2[1].style.fontFamily = 'calibri'
h2[0].style.lette
span.style.fontSize = '60px'
h2[1].style.paddingTop = '10px'
h2[1].style.paddingBottom = '10px'


lis.forEach((list, i) =>{
    
    list.style.marginTop= '1px'
    list.style.paddingTop = '15px'
    list.style.paddingLeft = '15px'
    list.style.paddingBottom = '15px'
    list.style.fontFamily = 'calibri'
    if (list.textContent.includes('Done')){
            list.style.backgroundColor = '#21BF73'
    } 
    else if (list.textContent.includes('Ongoing')){
        list.style.backgroundColor = '#FDDB3A'
    }
    else if (list.textContent.includes('Coming')){
        list.style.backgroundColor = '#FD5E53'
    }
})

