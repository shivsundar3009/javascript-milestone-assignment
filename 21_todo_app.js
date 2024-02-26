<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

  body{
    background-color: #f5cac3;
  }
  .box{
    color:white;
    padding: 4vh 4vw;
    background-color: #f9c74f;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .todo-box{
    padding: 4vh 4vw;
    background-color: #03045e;
  }
  .input-box{
    gap: 0.5vw;
    display: flex;
    /* width: 100%; */
  }
  .input-field{
    width: 40vw;
  }
  .btn{
    color: red;
    font-weight: 800;
    padding: 2% 5%;
  }
  .btn:hover{
    cursor: pointer;
  }
  li{
    padding: 2vh 1vw;
    width: max-content;
    background-color: red;
  }
  .todo-list{
    justify-content: center;
    font-weight: bold;
    gap: 3vh;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .todo-list-div{
   
    width: 40vw;
    display: flex;
  }
  
</style>

<body>

    <div class="todo-box">
            
        <div class="box"> 
            <h1>Todo Application</h1>

            <div class="input-box">
                <input type="text" class="input-field" placeholder=" Enter todo">
                <button class="btn">Add</button>
            </div>

            <div class="todo-list-div">

                <div class="">
                  <ul class="todo-list">

                  </ul>
        
                </div>

            </div>

          
        </div>

    </div>


<script>

let inputFieldValue= document.querySelector('.input-field')

let btn = document.querySelector('.btn')

let todoListRef = document.querySelector('.todo-list')


let todo

btn.addEventListener('click', () => {

    
    todo = inputFieldValue.value

    console.log(todo)
    
    let todoItem = document.createElement('li')

    todoItem.innerHTML = "<input type ='checkbox' class = 'checkbox' /> "  + todo

    console.log(todoItem)

    todoListRef.appendChild(todoItem)
    
})

onchange('input',() => {
  console.log(checked);
})

</script>
</body>

</html>
