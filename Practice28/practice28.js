var BODY = document.getElementById("theBody");

//Making the background color red upon clicking the red button.
var RED = document.getElementById("red");
RED.addEventListener("click", makeBackgroundColorRed);
function makeBackgroundColorRed(){
    BODY.style.backgroundColor="red";
}

//Making the background color orange after clicking the orange button.
var ORANGE = document.getElementById("orange");
ORANGE.addEventListener("click", makeBackgroundColorOrange);
function makeBackgroundColorOrange(){
    BODY.style.backgroundColor="orange";
}

/*This code makes the background color of the webpage yellow after
clicking the yellow button.
*/
var YELLOW = document.getElementById("yellow");
YELLOW.addEventListener("click", makeBackgroundColorYellow);
function makeBackgroundColorYellow(){
    BODY.style.backgroundColor="yellow";
}

//This code makes the background color green when you click green button.
var GREEN = document.getElementById("green");
GREEN.addEventListener("click" , makeBackgroundColorGreen);
function makeBackgroundColorGreen() {
    BODY.style.backgroundColor="lightgreen";
}

//This code makes background look blue
var BLUE = document.getElementById("blue");
BLUE.addEventListener("click", makeBackgroundColorBlue);
function makeBackgroundColorBlue(){
    BODY.style.backgroundColor="lightblue";
}

//Making background indigo.
var INDIGO = document.getElementById("indigo");
INDIGO.addEventListener("click", makeBackgroundColorIndigo);
function makeBackgroundColorIndigo(){
    BODY.style.backgroundColor="rgb(190, 115, 243)";
}

//Making the background color violet with the violet button.
var VIOLET = document.getElementById("violet");
VIOLET.addEventListener("click", makebackgroundColorViolet);
function makebackgroundColorViolet(){
    BODY.style.backgroundColor="violet"
} 

/*This code makes the background change to an image of a person or a girl.*/
var PERSON = document.getElementById("person");
PERSON.addEventListener("click", changeIntoPersonsImage);
function changeIntoPersonsImage(){
   BODY.style.backgroundImage="url(img_girl.jpg)";
}

// this code helps to change the background image into food.
var FOOD = document.getElementById("food");
FOOD.addEventListener("click", changeIntoFoodImage);
function changeIntoFoodImage(){
    BODY.style.backgroundImage="url(img_food.jpg)";
}

// This code helps to change background into a house image.
var HOUSE = document.getElementById("house");
HOUSE.addEventListener("click", makeTheHouseImageAppear);
function makeTheHouseImageAppear(){
    BODY.style.backgroundImage="url(Gingerbread_House_Essex_CT.jpg)";
}



var buttonONE = document.getElementById("linkButton").onclick = makemagic;
function makemagic(){
    alert("So I work after all. But this is a link")
}
// OR
/*var buttonONE = document.getElementById("linkButton");
buttonONE.addEventListener("click", makemagic);
function makemagic(){
    alert("So I work after all")
}*/



var buttonTWO = document.getElementById("buttonButton").onclick = makemagic2;
function makemagic2(){
    alert("Did you click the second button?. This is a regular button.");
}
// OR
/*var  buttonTWO = document.getElementById("buttonButton");
buttonTWO.addEventListener("click", makemagic2);
function makemagic2(){
    alert("Did you click the second button?. This is a regular button.");
}*/



var buttonTHREE = document.getElementById("textButton").onclick = makemagic3;
function makemagic3(){
    alert("This also works on text buttons. I'm getting in love with HTML5.");
}
// OR
/*var buttonTHREE = document.getElementById("textButton");
buttonTHREE.addEventListener("click", makemagic3);
function makemagic3(){
    alert("This also works on text buttons. I'm getting in love with HTML5.");
}*/



//This is the codes for the name start button for the webpage.
var nameHolder;
var contentName = document.getElementById("userName");
document.getElementById("firstStartButton").onclick = askForName;
function askForName() {
    nameHolder = prompt("What is your name please?");
    comfermation1();
}
function comfermation1(){
    alert("Is "+nameHolder+" your name?");
    displayName();
}
function displayName(){
    document.getElementById("userName").innerHTML = "__"+nameHolder+"__";
    contentName.style.textDecoration="underline";
}

// This is the codes for the E-mail part of the webpage.
var EmailHolder;
var contentEmail = document.getElementById("userEmail");
document.getElementById("secondStartButton").onclick = askForEmail;
function askForEmail(){
    EmailHolder = prompt("Please enter your Email below:");
    comfermation2();
}
function comfermation2(){
    alert(EmailHolder+" will be displayed as the Email of "+nameHolder+". Click Okay if you agree:")
    displayEmail();
}
function displayEmail() {
    document.getElementById("userEmail").innerHTML = "__"+EmailHolder+"__";
    contentEmail.style.textDecoration="underline";
}