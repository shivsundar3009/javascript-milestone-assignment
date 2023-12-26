const firstValue = document.getElementById('firstValue')

const secondValue = document.getElementById('secondValue')

const operatorValue = document.getElementById('operatorValue')

const btn = document.getElementById('btn')

const result = document.getElementById('result')

btn.addEventListener('click',()=>{
    
    switch(operatorValue.value){
        case "+":
            result.innerText = "Result is : "; Number(firstValue.value) + Number(secondValue.value);
            break;
        case "-":
            result.innerText = "Result is : "; Number(firstValue.value) - Number(secondValue.value);
            break;
        case "*":
            result.innerText = "Result is : "; Number(firstValue.value) * Number(secondValue.value);
            break;
        case "/":
            result.innerText = "Result is : "; Number(firstValue.value) / Number(secondValue.value);
            break;
        
        default:
            console.log('Please enter correct operator');  
            break;  
    }

})

