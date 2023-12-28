const firstValue = document.getElementById('firstValue')

const secondValue = document.getElementById('secondValue')

const operatorValue = document.getElementById('operatorValue')

const btn = document.getElementById('btn')

const clearBtn = document.getElementById('clear')

const result = document.getElementById('result')

btn.addEventListener('click',()=>{

    result.style.display = 'block'

    let resultVal; 

    result.style.backgroundColor = 'green';

    result.style.color = 'white'

    result.style.padding = '20px'
    
    switch(operatorValue.value.toLowerCase()){
        case "+":
            console.log(Number(firstValue.value) + Number(secondValue.value));
            resultVal = Number(firstValue.value) + Number(secondValue.value)
            result.innerText = `Result is : ${resultVal}`
            break;
        case "-":
            resultVal = Number(firstValue.value) - Number(secondValue.value)
            result.innerText = `Result is : ${resultVal}`
            break;
        case "*":
            resultVal = Number(firstValue.value) * Number(secondValue.value)
            result.innerText = `Result is : ${resultVal}`
            break;
        case "/":
            resultVal = Number(firstValue.value) / Number(secondValue.value)
            result.innerText = `Result is : ${resultVal}`
            break;
        
        default:
            result.innerText = 'Please enter correct operator'
            break;  
    }

})

clearBtn.addEventListener('click', ()=>{
    firstValue.value = ""
    operatorValue.value = ""
    secondValue.value = ''

    result.style.display = 'none'
})



