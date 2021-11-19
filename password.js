const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome user!');

reader.question('Please enter a password to validate:', function(password){
    if(password.length >= 10){
        console.log('Password success!')
    } else{
        console.log('Password fail :(')
    }
})

