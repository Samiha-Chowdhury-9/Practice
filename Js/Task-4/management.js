const data = document.getElementById("data");
const table = document.getElementById("table");

data.addEventListener("submit", addNewRow)

function addNewRow(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const dept = document.getElementById("dept").value.trim();
    
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td>
                    <td>${roll}</td>
                    <td>${dept}</td>
                    <td><button type="button" class="deletebtn">Delete</button></td>`;
    table.append(row);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";

    row.querySelector(".deletebtn").addEventListener("click",function(){
        row.remove();
    } ) 

}