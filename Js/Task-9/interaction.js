
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

    
    if (current === "dark"){
        button.textContent = "Switch to light mode";
        button.style.backgroundColor = "midnightblue";
        button.style.color = "white";
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
