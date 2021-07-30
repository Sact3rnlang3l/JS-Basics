console.log('Welcome, Please input password for validation')
function verifyPW(){

// }
function CheckPassword(inputtxt) { 
let paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(inputtxt.value.match(paswd)) 
    { alert('Correct, try another...')
    return true;
} else { 
    alert('Wrong...!')
    return false;
}
}  
