const form = document.getElementById("form");
form.addEventListener("submit", function (event){

    let hasErr = false;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const confirmPass = document.getElementById("confirmpass");
    const number = document.getElementById("number");

    const nameERR = document.getElementById("nameErr");
    const emailERR = document.getElementById("emailErr");
    const passERR = document.getElementById("passErr");
    const confirmPassERR = document.getElementById("confirmPassErr");
    const numERR = document.getElementById("numErr");

    if(!email.value.includes("@") || !email.value.includes("."))
    {   hasErr = true ;
        emailERR.innerHTML = "<br>Email address must include @";
    }
    if(pass.value.length<6){
        hasErr = true;
        passERR.innerHTML = "<br>Password cannot be less than 6 characters";
    }
    if(pass.value!=confirmPass.value){
        hasErr = true;
        confirmPassERR.innerHTML = "<br>Password and Confirm Password does not match";
    }
    if(isNaN(number.value)){
        hasErr = true;
        numERR.innerHTML = "<br>Number must contain only digits."
    }
    if(hasErr==true){
        event.preventDefault();
        
    }
    else{
        alert("Registration Successful!")
    }
   
})