var theObject = document.getElementById("object");
theObject.addEventListener("click", moveLeftRight);

function moveLeftRight(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10); //draw every 10ms
    function frame(){
        robotPart.style.left = left + '%';
        left++; 
        if(left === 20){
            clearInterval(id);
        }

    }
}

theObject.addEventListener("mousemove", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) //draw every 10ms
    function frame(){
        robotPart.style.top = top + '%';
        top++;
        if(top === 20){
            clearInterval(id);
        }
    }
}