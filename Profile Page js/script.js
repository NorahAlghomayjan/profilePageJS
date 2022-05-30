var btns = document.querySelectorAll(".btn");
var rows = document.querySelectorAll (".reqRow");
var edit = document.querySelector(".edit");
var profileName = document.querySelector("#name");
var connectPoints = document.querySelector(".connectPoints");
var requestPoints = document.querySelector(".requestPoints");




var namesArr = ["Jhon","Keith","Saad","Ahmad","Moe"];

for (let i=0, j=0; i < btns.length;i++)
{
    btns[i].addEventListener('click',()=> {removeRow(i)});
}

edit.addEventListener('click',changeName);


function removeRow (i=0)
{
    console.log(i);
    rows[Math.floor(i/2)].remove();
    switch(i)
    {
        case 0: 
        case 2:
        console.log("adding connections");
        connectPoints.innerText = parseInt(connectPoints.innerText) + 1;
        requestPoints.innerText = parseInt(requestPoints.innerText) - 1;
        break;
        case 1: 
        case 3: 
        console.log("decresing requests");
        requestPoints.innerText = parseInt(requestPoints.innerText) - 1
        break;
    }
}

function changeName ()
{
    console.log("inside changeName()");
    var random = Math.floor(Math.random()* namesArr.length);
    profileName.innerText = namesArr[random];
}
