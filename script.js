function clearTable(){
  document.getElementById("firstname").value ="";
document.getElementById("lastname").value ="";
document.getElementById("address").value ="";
document.getElementById("pincode").value ="";
document.getElementById("gender").value ="";
  document.getElementById("food1").value = "";
  document.getElementById("food2").value ="";
document.getElementById("state").value ="";
document.getElementById("country").value ="";
}

let data = document.querySelector("#addDatas");
let tableRow = "";
data.addEventListener("click", function () {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let address = document.getElementById("address").value;
  let pincode = document.getElementById("pincode").value;
  let gender = document.getElementById("gender").value;
  let food1 = document.getElementById("food1").value;
  let food2 = document.getElementById("food2").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  
  let tableBody=document.querySelector("#tablebody");
        tableRow+=`<tr>
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food1} , ${food2}</td>
        <td>${state}</td>
        <td>${country}</td>
        </tr>
        `;
        console.log(tableRow);
  tableBody.innerHTML = tableRow;
  setTimeout(clearTable, 100);
});
