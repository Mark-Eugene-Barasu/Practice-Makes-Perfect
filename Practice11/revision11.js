var v = document.getElementById("test");
var w = document.getElementById("here");
var x = document.getElementById("firstThing");
var y = document.getElementById("secondThing");
var z = document.getElementById("thirdThing");
var b = document.getElementById("theOnlyButton");
document.getElementById("theOnlyButton").onclick = makeTheMagic;

function makeTheMagic(){
    v.style.color="blue";
    w.style.color="blue";
    x.style.color="blue";
    y.style.color="blue";
    z.style.color="blue";
    b.style.color="violet";
    b.style.backgroundColor="cyan";
}