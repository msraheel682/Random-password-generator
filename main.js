const passwordbox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+|{}[]:<>'?=/";

const allchars = upperCase + lowerCase + number + symbol;

function passwordfunction(){
    let getpassword = " ";
    
    getpassword += upperCase[Math.floor(Math.random()*upperCase.length)];
    getpassword += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    getpassword += number[Math.floor(Math.random()*number.length)];
    getpassword += symbol[Math.floor(Math.random()*symbol.length)];

    while(lenght>getpassword.length){

        getpassword += allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value = getpassword;
}

function copyfunction(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    passwordbox.select();
    document.execCommand("copy");
}
