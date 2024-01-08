const btn = document.querySelector('.btn')

const resultP = document.querySelector('.resultP')



btn.addEventListener('click', ()=> {

    let color1 = document.querySelector('#color1')

    let color2 = document.querySelector('#color2')

    console.log(color1.value);
     
    if(color1.value === "" || color2.value === ""){
        resultP.style.backgroundColor = 'red'
        resultP.style.color = 'white'
        resultP.style.fontWeight = '900'
 
        resultP.textContent = 'please enter colors properly'
    }else {


        // console.log(color1.value);
        switch (color1.value) {
            case 'red':
                switch (color2.value) {
                    case "blue" :
                        resultP.style.backgroundColor = 'purple';
                        resultP.style.color = 'white';
                         resultP.textContent = 'Mixed Color is : purple';
                        break;
    
                    case "yellow" :
                        resultP.style.backgroundColor = 'orange';
                        resultP.style.color = 'white';
                        resultP.textContent = 'Mixed Color is : orange';
                        break;
                
                    default:
                        console.log('enter correct color');
                        break;
                }
                break;
    
            case 'blue':
                switch (color2.value) {
                    case "red" :
                        resultP.style.backgroundColor = 'purple';
                        resultP.style.color = 'white';
                        resultP.textContent = 'Mixed Color is : purple';
                        break;
                
                    case "yellow" :
                        resultP.style.backgroundColor = 'green';
                        resultP.style.color = 'white';
                        resultP.textContent = 'Mixed Color is : green';
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
    }})


const btnClear = document.querySelector('.btnClear')

btnClear.addEventListener('click',()=>{
     color1.value = ''
     color2.value = ''

     resultP.textContent = ''
})