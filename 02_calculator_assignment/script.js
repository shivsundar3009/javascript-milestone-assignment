const firstValue = document.getElementById('firstValue')

const secondValue = document.getElementById('secondValue')

const operatorValue = document.getElementById('operatorValue')


const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    console.log(firstValue.value);
    console.log(secondValue.value);
    if(operatorValue.value === "+"){
        console.log(Number(firstValue.value) + Number(secondValue.value));
    }
    // console.log(Number(firstValue.value) + Number(operatorValue.value) + Number(secondValue.value));
})

