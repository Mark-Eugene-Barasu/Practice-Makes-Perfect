var x = document.getElementById("navElement");
var a = document.getElementById("myHeader");
var b = document.getElementById("theBody");
b.addEventListener("click", makeChanges);

function makeChanges(){
    a.style.backgroundColor="rgb(221, 63, 63)";
    a.style.color="white";
    x.style.color="black";
}

