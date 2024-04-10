
// This has really worked out perfectly fine after a long use of different stratagie.
let button = document.getElementById("button")
button.onclick = changeSize;

function changeSize(){
    let txt = document.getElementById("demo");
    if(txt.style.fontSize === "15px" && txt.style.color === "black"){
        txt.style.color = "red";
        txt.style.fontSize = "35px";
    } else if(txt.style.fontSize === "35px" && txt.style.color === "red"){
        txt.style.color = "black";
        txt.style.fontSize = "15px";
    } else {
        txt.style.color ="red";
        txt.style.fontSize = "35px";
    }
}

// This code I wrote makes the paragraph disappear after 5 seconds.
let f = setTimeout(() => {
    document.getElementById("demo").style.display = "none";
}, 5000);



