const btn = document.querySelector('.btn')

const resultP = document.querySelector('.resultP')



btn.addEventListener('click', ()=> {

    let color1 = document.querySelector('#color1')

    let color2 = document.querySelector('#color2')
     
    if(color1.value || color2.value === ""){
        resultP.style.backgroundColor = 'red'
        resultP.style.color = 'white'
        resultP.style.fontWeight = '900'
 
        resultP.textContent = 'please enter colors properly'
    }
    console.log(color1.value);
    switch (color1.value) {
        case 'red':
            switch (color2.value) {
                case "blue" :
                     console.log('purple');
                    break;

                case "yellow" :
                     console.log('orange');
                    break;
            
                default:
                    console.log('enter correct color');
                    break;
            }
            break;

        case 'blue':
            switch (color2.value) {
                case "red" :
                     console.log('purple');
                    break;
            
                case "yellow" :
                     console.log('green');
                    break;
            
                default:
                    console.log('enter correct color');
                    break;
            }
            break;
    
        default:
            break;
    }
    // resultP.innerHTML = 'button working'
})

const btnClear = document.querySelector('.btnClear')

btnClear.addEventListener('click',()=>{
     color1.value = ''
     color2.value = ''

     resultP.textContent = ''
})