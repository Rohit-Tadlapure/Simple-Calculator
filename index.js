let input = document.getElementById('inputBox'); //accessing the value in inputBox by id='inputBox'
let buttons = document.querySelectorAll('button') // accessing all buttons by querySelectorAll

let result = ''; //setting empty string to store the result
let btnArray = Array.from(buttons);
let reload =  false;

// document.write(btnArray[1]);
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

            console.log(result);
            console.log(input.value);
        }

        if(reload){
            result = '';
            reload = false;
            console.log(result,"herere");
            console.log(input.value,"ajdhga");
        }

    })
})
