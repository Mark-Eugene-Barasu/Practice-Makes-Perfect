var r = document.getElementById("red");
var lyric = document.getElementById("lyric")
var bdy = document.getElementById("theBody");
var headB = document.getElementById("headBoard");
var theFooter = document.getElementById("theFooter");
r.addEventListener("click", changeBackgroundColor1);
function changeBackgroundColor1 (){
    bdy.style.backgroundColor="red";
    headB.style.backgroundColor="rgb(109, 6, 6)";
    theFooter.style.backgroundColor="rgb(109, 6, 6)";
    lyric.style.color="yellowgreen";
}

var o = document.getElementById("orange");
o.addEventListener("click", changeBackgroundColor2);
function changeBackgroundColor2 (){
    bdy.style.backgroundColor="orange";
    headB.style.backgroundColor="rgb(160, 104, 1)";
    theFooter.style.backgroundColor="rgb(160, 104, 1)";
    lyric.style.color="blue";
}

var gl = document.getElementById("gold");
gl.addEventListener("click", changeBackgroundColor3);
function changeBackgroundColor3 (){
    bdy.style.backgroundColor="gold";
    headB.style.backgroundColor="rgb(173, 148, 4)";
    theFooter.style.backgroundColor="rgb(173, 148, 4)";
    lyric.style.color="blueviolet";
}

var y = document.getElementById("yellow");
y.addEventListener("click", changeBackgroundColor4);
function changeBackgroundColor4 (){
    bdy.style.backgroundColor="yellow";
    headB.style.backgroundColor="rgb(184, 184, 1)";
    theFooter.style.backgroundColor="rgb(184, 184, 1)";
    lyric.style.color="violet";
}

var yg = document.getElementById("yellowgreen");
yg.addEventListener("click", changeBackgroundColor5);
function changeBackgroundColor5 (){
    bdy.style.backgroundColor="yellowgreen";
    headB.style.backgroundColor="rgb(100, 184, 5)";
    theFooter.style.backgroundColor="rgb(100, 184, 5)";
    lyric.style.color="red";
}

var g = document.getElementById("green");
g.addEventListener("click", changeBackgroundColor6);
function changeBackgroundColor6 (){
    bdy.style.backgroundColor="green";
    headB.style.backgroundColor="rgb(1, 97, 1)";
    theFooter.style.backgroundColor="rgb(1, 97, 1)";
    lyric.style.color="deeppink";
}

var lb = document.getElementById("lightblue");
lb.addEventListener("click", changeBackgroundColor7);
function changeBackgroundColor7 (){
    bdy.style.backgroundColor="rgb(0, 191, 255)";
    headB.style.backgroundColor="rgb(2, 128, 170)";
    theFooter.style.backgroundColor="rgb(2, 128, 170)";
    lyric.style.color="yellow";
}

var b = document.getElementById("blue");
b.addEventListener("click", changeBackgroundColor8);
function changeBackgroundColor8 (){
    bdy.style.backgroundColor="blue";
    headB.style.backgroundColor="rgb(3, 3, 167)";
    theFooter.style.backgroundColor="rgb(3, 3, 167)";
    lyric.style.color="orange";
}

var ind = document.getElementById("indigo");
ind.addEventListener("click", changeBackgroundColor9);
function changeBackgroundColor9 (){
    bdy.style.backgroundColor="indigo";
    headB.style.backgroundColor="rgb(53, 2, 90)";
    theFooter.style.backgroundColor="rgb(53, 2, 90)";
    lyric.style.color="yellowgreen";
}

var bv = document.getElementById("blueviolet");
bv.addEventListener("click", changeBackgroundColor10);
function changeBackgroundColor10 (){
    bdy.style.backgroundColor="blueviolet";
    headB.style.backgroundColor="rgb(64, 0, 124)";
    theFooter.style.backgroundColor="rgb(64, 0, 124)";
    lyric.style.color="gold";
}

var v = document.getElementById("violet");
v.addEventListener("click", changeBackgroundColor11);
function changeBackgroundColor11 (){
    bdy.style.backgroundColor="rgb(255, 0, 255)";
    headB.style.backgroundColor="rgb(161, 0, 161)";
    theFooter.style.backgroundColor="rgb(161, 0, 161)";
    lyric.style.color="lightyellow";
}

var bl = document.getElementById("black");
bl.addEventListener("click", changeBackgroundColor12);
function changeBackgroundColor12 (){
    bdy.style.backgroundColor="black";
    headB.style.backgroundColor="gray";
    theFooter.style.backgroundColor="gray";
    lyric.style.color="white";
    lyric.style.border="white";
}

var br = document.getElementById("brown");
br.addEventListener("click", changeBackgroundColor13);
function changeBackgroundColor13 (){
    bdy.style.backgroundColor="sandybrown";
    headB.style.backgroundColor="brown";
    theFooter.style.backgroundColor="brown";
    lyric.style.color="cyan";
}

var wht = document.getElementById("white");
wht.addEventListener("click", changeBackgroundColor14);
function changeBackgroundColor14 (){
    bdy.style.backgroundColor="white";
    headB.style.backgroundColor="black";
    theFooter.style.backgroundColor="black";
    lyric.style.color="black";
}

var wordHolder;
document.getElementById("button").onclick = askForTheWord;

function askForTheWord (){
    wordHolder = prompt("What word would you want to be displayed?");
    displayaIt();
}

function displayaIt(){
    document.getElementById("lyric").innerHTML = wordHolder;
}