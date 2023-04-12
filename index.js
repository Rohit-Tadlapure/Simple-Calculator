let input = document.getElementById('inputBox'); //accessing the value in inputBox by id='inputBox'
let buttons = document.querySelectorAll('button') // accessing all buttons by querySelectorAll
let result = ''; //setting empty string to store the result
let btnArray = Array.from(buttons);
let reload =  false;

btnArray.forEach(button => {
    button.addEventListener('click', (event)=>{
        if(event.target.innerHTML == '='){
            result = eval(result);
            input.value = result;
            reload = true;
        } else if(event.target.innerHTML == 'AC'){
            result = '';
            input.value = result;
        } else if (event.target.innerHTML == 'DEL'){
            result = result.substring(0, result.length - 1);
            input.value = result;
        } else {
            result =  result + event.target.innerHTML;
            input.value = result;
        }

        if(reload){
            result = '';
            reload = false;
        }
    })
})  
