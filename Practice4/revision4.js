var item1;
var item2;
var item3;
document.getElementById("changeList").onclick = newList;

function newList(){
item1 = prompt("Please enter your first thing below;");
item2 = prompt("Please enter your second thing below;");
item3 = prompt("Please enter your third thing below;");
displayList()

}

function displayList (){
document.getElementById("firstThing").innerHTML = item1;
document.getElementById("secondThing").innerHTML = item2;
document.getElementById("thirdThing").innerHTML = item3;

}