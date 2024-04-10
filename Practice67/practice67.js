
// to do something 

function doMeShy(){
    
    var anch = document.getElementById("anch");
    var randnum = Math.round(Math.random() * (10 - 1) + 1);
    switch (randnum) {
        case 1:
            anch.style.backgoundColor = "red";
            alert("One was selected");
            break;
        case 2:
            anch.style.backgoundColor = "gold";
            alert("Two was selected");
            break;
        case 3:
            anch.style.backgoundColor = "orange";
            alert("Three was selected");
            break;
        case 4:
            anch.style.backgoundColor = "yellow";
            alert("Four was selected");
            break;
        case 5:
            anch.style.backgoundColor = "green";
            alert("five was selected");
            break;
        case 6:
            anch.style.backgoundColor = "blue";
            alert("Six was selected");
            break;
        case 7:
            anch.style.backgoundColor = "purple";
            alert("Seven was selected");
            break;
        case 8:
            anch.style.backgoundColor = "violet";
            alert("Eight was selected");
            break;
        case 9:
            anch.style.backgoundColor = "brown";
            alert("Nine was selected");
            break;
        case 10:
            anch.style.backgoundColor = "deeppink";
            alert("Ten was selected");
            break;

        default:
            alert("There is something fishy bro!!!");
            break;
    }
};
