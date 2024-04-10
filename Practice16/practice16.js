var blackSide = document.getElementById("secondPart");
blackSide.addEventListener("click", changeColor);

function changeColor(){
  blackSide.style.backgroundColor="blue";
}

var y = document.getElementById("FirstCodingProject");
var x = document.getElementById("logo");
x.addEventListener("click", moveFirstCodingProject);

function moveFirstCodingProject (e){
  var start = 0;
  var id = setInterval(frame, 10);
  function frame(){
    y.style.margin= start + "px 0 0 0";
    start++;
    if (start === 10){
        clearInterval(id);
    }
  }
}

var J = document.getElementById("element1");
var a1 = document.getElementById("element2");
var v = document.getElementById("element3");
var a2 = document.getElementById("element4");
var S = document.getElementById("element5");
var c = document.getElementById("element6");
var r = document.getElementById("element7");
var i = document.getElementById("element8");
var p = document.getElementById("element9");
var t = document.getElementById("element10");
`  `
document.getElementById("grayButton").onclick = rainbowIt;

function rainbowIt(){
    J.style.color="red";
    a1.style.color="orange";
    v.style.color="yellow";
    a2.style.color="yellowgreen";
    S.style.color="green";
    c.style.color="lightblue";
    r.style.color="blue";
    i.style.color="indigo";
    p.style.color="violet";
    t.style.color="hotpink";
}

function doSomething(){
  alert("You hit the right spot.")
}