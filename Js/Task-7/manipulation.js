const para = document.getElementById("para");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const resetAll = document.getElementById("btn4");

btn1.addEventListener("click", buttonOne);
btn2.addEventListener("click", buttonTwo);
btn3.addEventListener("click", buttonThree);
resetAll.addEventListener("click", reset);

 let i=0;
function buttonOne(){
    colors = ["coral", "gainsboro", "palegoldenrod", "lightpink", "bisque", "aquamarine", "burlywood", "cadetblue", "darksalmon", "lavenderblue", "thistle" ];
    
    para.style.backgroundColor = colors[i]; 
    
    i++;
    if(i>=colors.length){ i=0; }
};

let size= 16;
function buttonTwo(){
    size++;
    para.style.fontSize = size + "px";
    

};

function buttonThree(){
    para.style.textAlign = "center";
};

function reset(){
    para.style.backgroundColor = "";
    para.style.fontSize = 16;
    para.style.textAlign = "";

}