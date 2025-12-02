const btn = document.getElementById("button");

btn.addEventListener("click", analyze);

function analyze(){
    
    
    const text = document.getElementById("area");
    
    if (text.value.trim()==""){ 
        text.value = "Text cannot be emnpty or contain only spaces."
        text.style.color = "red";
        text.style.fontWeight = "bold"; 
        document.getElementById("result").innerHTML = "";
        return;
    }
    text.style.color = "black";
    text.style.fontWeight = "normal";

    let length = text.value.length;
    let totalWord = text.value.trim().split(/\s+/).length;
    let reverse = text.value.split("").reverse().join("");

    const result = document.getElementById("result");
    result.innerHTML = `
    Total Character: ${length}<br>
    Total Words: ${totalWord}<br>
    Reversed text: ${reverse}`;  
         
    
}

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){ const text = document.getElementById("area"); text.value = "";
    text.style.color = "black";
    text.style.fontWeight = "normal";
    document.getElementById("result").innerHTML = "";


})

