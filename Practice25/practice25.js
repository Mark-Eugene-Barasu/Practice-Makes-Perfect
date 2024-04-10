var holdNote;
var noteLines = x;
document.getElementById("eButton").onclick = makeChanges;
function makeChanges() {
    holdNote = prompt("Fill in your note here:");
    useTheInput();
}

function useTheInput(){
    document.getElementById("noteLines").innerHTML = holdNote;
}

var ball = document.getElementById("ballBouncing");
ball.addEventListener("click", bounceUpDown);  

function bounceUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) //draw every 10ms
    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if(top === 51){
            clearInterval(id);
        }
    }
}