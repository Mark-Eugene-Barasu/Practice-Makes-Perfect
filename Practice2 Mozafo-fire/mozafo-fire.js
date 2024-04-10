var food1;
var food2;
var food3;
var food4;
document.getElementById("chooseFood").onclick = foodList;

function foodList(){
   food1 = prompt("Enter your first choice of food");
   food2 = prompt("Enter your second choice of food");
   food3 = prompt("Enter your third choice of food");
   food4 = prompt("Enter your fourth choice of food");
   displayList1();
}

function displayList1(){
   document.getElementById("firstFood").innerHTML = food1;
   document.getElementById("secondFood").innerHTML = food2;
   document.getElementById("thirdFood").innerHTML = food3;
   document.getElementById("fourthFood").innerHTML = food4;
}  

var place1;
var place2;
var place3;
document.getElementById("choosePlace").onclick = placeList;

function placeList(){
   place1 = prompt("What is the name of the first place? Write below;");
   place2 = prompt("What is the name of the second place? Write below;");
   place3 = prompt("What is the name of the third place? Write below;");
   displayList2();
}

function displayList2(){
   document.getElementById("firstPlace").innerHTML = place1;
   document.getElementById("secondPlace").innerHTML = place2;
   document.getElementById("thirdPlace").innerHTML = place3;

}

var girlFriendsName;
document.getElementById("herName").onclick = letter;
function letter(){
   girlFriendsName = prompt("What is her name?");
   displayHerLetter();
}
function displayHerLetter(){
   alert(girlFriendsName+" is also browsing on this website and she says she loves you soo much! She would love to eat "+food1+" at "+place1+" because that's what she likes too!!!");
}

var reason1;
var reason2;
var reason3;
document.getElementById("choosereasons").onclick = reasonList;

function reasonList(){
   reason1 = prompt("Why her?");
   reason2 = prompt("What actually do you love about her?");
   reason3 = prompt("Tell us why she is perfect for you:");
   displayList3();
}

function displayList3(){
   document.getElementById("firstreason").innerHTML = reason1;
   document.getElementById("secondreason").innerHTML = reason2;
   document.getElementById("thirdreason").innerHTML = reason3;
}

function firmIt() {
   document.getElementById("mozafoFire").style.background="black";
   document.getElementById("mozafoFire").style.borderRadius="10px";
}