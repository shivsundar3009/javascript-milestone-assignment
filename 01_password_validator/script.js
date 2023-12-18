const enterPassword = document.getElementById('passwordField')
const confirmPassword = document.getElementById('confirmPasswordField')
const btn = document.getElementById('btn')
const clear = document.getElementById('clear')

const result = document.getElementById('result')




btn.addEventListener('click', ()=> {
    if (enterPassword.value === ""){
        result.innerHTML = 'please enter your password'
        console.log("please enter your password");
    } else if (confirmPassword.value === "" ){
        result.innerHTML = 'please confirm your password'
        console.log('please confirm password')
    } else if (enterPassword.value === confirmPassword.value) {
        result.style.backgroundColor = "green"
        result.innerHTML = 'password matched'
        console.log('password matched')
    } else {
        result.style.backgroundColor = "red"
        result.innerHTML = 'password did not matched'
        console.log('password did not matched');
    }

})

clear.addEventListener('click',()=>{
    enterPassword.value = ""
    confirmPassword.value = ""
    result.innerHTML = ''
})
