const form = document.getElementById("form");
const profile = document.getElementById("profile");
const roll = document.getElementById("roll");
const dept = document.getElementById("dept");
const rollLabel = document.getElementById("rollLabel");
const deptLabel = document.getElementById("deptLabel");

dept.style.display = "none";
deptLabel.style.display = "none";
roll.style.display = "none";
rollLabel.style.display = "none";
    

profile.addEventListener("change", one);

function one(){

    if(profile.value === "Student")
    {
        dept.style.display = "none";
        deptLabel.style.display = "none";
        roll.style.display = "block";
        rollLabel.style.display = "block";
    }

    else if(profile.value === "Teacher")
    {
        roll.style.display = "none";
        rollLabel.style.display = "none";
        dept.style.display = "block";
        deptLabel.style.display = "block";
    }

    else
    {
        dept.style.display = "none";
        deptLabel.style.display = "none";
        roll.style.display = "none";
        rollLabel.style.display = "none";
    }
}