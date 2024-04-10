var item1;
var item2;
var item3;
var item4;
var item5;
document.getElementById("abcButton").onclick = newList;

function newList() {
    item1 = prompt("Please type your first sentence:");
    item2 = prompt("Please type your second sentence:");
    item3 = prompt("Please type your third sentence:");
    item4 = prompt("Please type your fourth sentence:");
    item5 = prompt("Please type your fifth sentence:");
    changeList();
}

function changeList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
    document.getElementById("fourthThing").innerHTML = item4;
    document.getElementById("FithThing").innerHTML = item5;
}

var myLeftSquare = document.getElementById("squareOne");
myLeftSquare.addEventListener("click", moveLeftRight);

function newFunction() {
    return "click";
}

function moveLeftRight(e) {
    var sqarePart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame(){
        sqarePart.style.left = left + "%"; 
        left++;
        if( left === 7){
            clearInterval(id);
        }
    }
}

var myRightSquare = document.getElementById("squareTwo");
myRightSquare.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var sqarePart = e.target;
    var left = 60;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame(){
        sqarePart.style.left = left + "%"; 
        left--;
        if( left === 52){
            clearInterval(id);
        }
    }
}

var microBall1 = document.getElementById("one");
var microBall2 = document.getElementById("two");
var microBall3 = document.getElementById("three");
var microBall4 = document.getElementById("four");
var microBall5 = document.getElementById("five");
var microBall6 = document.getElementById("six");
var microBall7 = document.getElementById("seven");
var microBall8 = document.getElementById("eight");
var microBall9 = document.getElementById("nine");
var microBall10 = document.getElementById("ten");
microBall1.addEventListener("mousemove", moveUpDown);
microBall2.addEventListener("mousemove", moveUpDown);
microBall3.addEventListener("mousemove", moveUpDown);
microBall4.addEventListener("mousemove", moveUpDown);
microBall5.addEventListener("mousemove", moveUpDown);
microBall6.addEventListener("mousemove", moveUpDown);
microBall7.addEventListener("mousemove", moveUpDown);
microBall8.addEventListener("mousemove", moveUpDown);
microBall9.addEventListener("mousemove", moveUpDown);
microBall10.addEventListener("mousemove", moveUpDown);

function moveUpDown(e) {
    var sqarePart = e.target;
    var top = 206;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame(){
        sqarePart.style.top = top + "px"; 
        top++;
        if( top === 234){
            clearInterval(id);
        }
    }
}