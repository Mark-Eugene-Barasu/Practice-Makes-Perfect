var holdItForMe;
var x = document.getElementById("playGround");
var y = document.getElementById("theText");
document.getElementById("theButton").onclick = doSomething;



function doSomething (){
    holdItForMe = prompt("Please type any word or sentence below;")
    nextThing();
}

function nextThing (){
    document.getElementById("theText").innerHTML = holdItForMe;
    changeColor();
}

function changeColor (){
    x.style.backgroundColor="rgb(139, 137, 137";
    y.style.color="gold";
    y.style.fontSize="26px";
    y.style.fontFamily=" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
}