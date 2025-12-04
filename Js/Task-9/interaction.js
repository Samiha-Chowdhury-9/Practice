
const style = document.createElement("style");
style.innerHTML = `
.dark{
background-color: black;
color : beige;
font-weight : bold;
}

.light{
background-color: oldlace;
color : darkblue;
font-weight : bold;
}
`

document.head.appendChild(style);
document.body.classList.add("light");

const button = document.getElementById("button");
button.addEventListener("click", toggle);

function toggle(){
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    current = current === "light" ? "dark" : "light";
    updateBtn();
}

let current = "light";

function updateBtn(){
    if (current === "light"){
        button.textContent = "Switch to dark mode";
        button.style.backgroundColor = "beige";
        button.style.color = "black";
    }

    
    else {
        button.textContent = "Switch to light mode";
        button.style.backgroundColor = "midnightblue";
        button.style.color = "oldlace";
    }
}

const greeting = document.getElementById("greeting");

const time = new Date();
const now = time.getHours();

if(now>=4 && now<=12){
    greeting.innerHTML = "Good Morning from Samiha Chowdhury";
}
else if(now>=13 && now<=18){
    greeting.innerHTML = "Good Afternoon from Samiha Chowdhury";
}
else{
    greeting.innerHTML = "Good Evening from Samiha Chowdhury";
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event){
    

    let hasErr = false;

    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");


    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const messageErr = document.getElementById("messageErr");

    const emailRegex=/\S+@\S+\.\S+/;


    if(!emailRegex.test(email.value))
        {
            hasErr=true;
            emailErr.innerHTML="Email pattern did not match";
        }
    if(message.value.length<10){
        hasErr = true;
        messageErr.innerHTML = "Message cannot be less than 10 characters";
    }
    if(name.value.trim()==""){
        hasErr = true;
        nameErr.innerHTML = "Name field cannot be empty";
    }
    
    if(hasErr==true){
        
        event.preventDefault();
            name.value = "";
            email.value = "";
            message.value = "";

        
    }
    else{
        alert("Message has been sent successfully!")
            name.value = "";
            email.value = "";
            message.value = "";
    }
   
})

const about = document.getElementById("about");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

const aboutLink = document.getElementById("aboutLink");
const projectLink = document.getElementById("projectLink");
const contactLink = document.getElementById("contactLink");


aboutLink.addEventListener("click", showAbout);
projectLink.addEventListener("click", showProject);
contactLink.addEventListener("click", showContact);

function showAbout(){
    about.style.display = "";
    project.style.display = "none";
    contact.style.display = "none";

}

function showProject(){
    about.style.display = "none";
    project.style.display = "";
    contact.style.display = "none";

}

function showContact(){
    about.style.display = "none";
    project.style.display = "none";
    contact.style.display = "";

}