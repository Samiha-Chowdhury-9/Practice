
const style = document.createElement("style");
style.innerHTML = `
.dark{
background-color: black;
color : beige;
}

.light{
background-color: blanchedalmond;
color : darkblue;
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