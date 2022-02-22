const form  = document.getElementById('form');
const username  = document.getElementById('username');
const password  = document.getElementById('password');
const password2  = document.getElementById('password2');

const regexEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



function showError(input, message){
    const formControl = input.parentElement
   
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkEmail(input){

    
    if(regexEmail.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'This email not is valid')
    }

}


//check required fields
function checkRequired(inputArray){

    inputArray.forEach((input) => {
        if(input.value.trim() === ''){
            showError(input, `The ${getFieldName(input)} field is required`)
        }else{
            showSuccess(input)
        }

        
    })

}


// check size

function checkLength(input, min, max){

    if(input.value.length < min){
     
        showError(input, `${getFieldName(input)} must have more more than ${min} characters`)

    }else if(input.value.length > max){

        showError(input, `${getFieldName(input)} must be less then ${max}`)

    }else{
        showSuccess(input)
    }
}


function checkPasswordMatch(input1, input2){

    if(input1.value !== input2.value){
        showError(input2, 'The password do not match')
    }

}




function getFieldName(input){

    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
   
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, password, password2]);
    checkLength(username, 4, 6)
    checkLength(password, 4, 8)
    checkEmail(email)
    checkPasswordMatch(password, password2)
    
 

 
});
