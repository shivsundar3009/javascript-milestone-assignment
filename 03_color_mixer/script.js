const btn = document.querySelector('.btn')

const resultP = document.querySelector('.resultP')



btn.addEventListener('click', ()=> {

    let color1 = document.querySelector('.color1')

    let color2 = document.querySelector('.color2')
    
    console.log(color1.value);
    switch (color1.value) {
        case 'red':
            resultP.innerHTML = 'switch casw working'
            break;
    
        default:
            break;
    }
    // resultP.innerHTML = 'button working'
})