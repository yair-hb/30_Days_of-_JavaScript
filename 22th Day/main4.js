function createSign (title, summary, elements, status){
        const table = document.createElement('table')
        table.style.width = '1100px'
        table.align = 'center'
        table.style.fontFamily = 'Arial'
        document.body.appendChild(table)

        const fila = document.createElement('tr')
        fila.style.height = '50px'
        table.appendChild(fila)

        const titulo = document.createElement('td')
        titulo.textContent = title
        titulo.style.paddingRight = '300px'
        titulo.style.paddingLeft = '30px'
        fila.appendChild(titulo)

        const details = document.createElement('details')
        details.style.paddingRight = '300px'
        details.align = 'left'
        fila.appendChild(details)
        const summ = document.createElement('summary')
        summ.textContent = summary
        details.appendChild(summ)
        const pp = document.createElement('p')
        pp.textContent = elements
        details.appendChild(pp);

        const level = document.createElement('td')
        level.textContent = status
        if (status == 'Ongoing'){
            table.style.backgroundColor = '#FDDB3A'
        } 
        else if (status == 'Done'){
            table.style.backgroundColor = '#21BF73'
            document.body.appendChild(table)
        }
        else if (status == 'Coming'){
            table.style.backgroundColor = '#FD5E53'
        }
        level.style.paddingRight = '30px'
        fila.appendChild(level)
}

createSign('30 Dias de Python', 'Python', 'Python Flask Numpy Pandas Statistics API MongoDB','Done')
createSign('30 Dias de Javascript', 'Javascript','JavaScript, ES6, Promise, async and await, DOM', 'Ongoing')
createSign('30 Days Of HTML & CSS','HTML & CSS', 'CSS, Flex, Grid, CSS Animation', 'Coming')
createSign('30 Days Of React','React', 'React, React Router, Redux, Context API, React, Hooks, MERN,','Coming')
createSign('30 Days Of ReactNative', 'ReactNative', 'ReactNative, Redux', 'Coming')
createSign('30 Days Of Fullstack', 'FullStack', 'React, Redux, MongoDB, Node, MERN', 'Coming')
createSign('30 Days Of Data Analysis', 'Data Analysis','Python, Numpy, Pandas, Statistics, Visualization', 'Coming')
createSign('30 Days Of Machine Learning', 'Machine Learning', 'PythonNumpy, Pandas, Scikit-learn, Scipy, Linear Algebra, Statistics, Visualization', 'Coming')
