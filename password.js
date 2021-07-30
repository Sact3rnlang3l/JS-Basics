
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome to Password Validatinator')
rl.question("What is your password ? ", function(password) {
     { if(password.length >= 10){
         console.log('Great success, long password, welcome back')
     } else {
         console.log('Wrong password, it was not validatinated and you will be ejected.')
     }  
    };
    rl.close();
});

// });
// rl.question("Welcome, Please input your Password",function() {
//     if(rl.input.value.length >= 10){
//         console.log('Success')
//     } else {
//         console.log('Wrong Password')
//     }
//     rl.close();
//     });


// I love modules, they make things nice, so nice, and it only took and hour and change to find/understand enough about the
//  readline to get this working

