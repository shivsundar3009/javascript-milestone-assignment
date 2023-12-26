const firstValue = document.getElementById('firstValue')

const secondValue = document.getElementById('secondValue')

const operatorValue = document.getElementById('operatorValue')


const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    console.log(firstValue.value);
    console.log(secondValue.value);
    
    switch(operatorValue.value){
        case "+":
            console.log("addition");
            break;
        case "-":
            console.log('minus');
            break;
        case "*":
            console.log('multiply');
            break;
        case "/":
            console.log('division');
            break;
        
        default:
            console.log('error');  
            break;  
    }
    if(operatorValue.value === "+"){
        console.log(Number(firstValue.value) + Number(secondValue.value));
    }
    // console.log(Number(firstValue.value) + Number(operatorValue.value) + Number(secondValue.value));
})

