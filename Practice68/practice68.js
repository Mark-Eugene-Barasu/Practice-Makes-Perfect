var html = document.getElementById("html");

window.setInterval(changeColor, 1000);

function changeColor(){

        var randomNUm = Math.round(Math.random() * 9)  + 1

        switch (randomNUm) {
            case 1:
                html.style.backgroundColor = "red";
                break;

            case 2:
                html.style.backgroundColor = "brown";
                break;
                
            case 3:
                html.style.backgroundColor = "orange";
                break;
                
            case 4:
                html.style.backgroundColor = "yellow";
                break;
                
            case 5:
                html.style.backgroundColor = "chartreuse";
                break;
                
            case 6:
                html.style.backgroundColor = "green";
                break;
                
            case 7:
                html.style.backgroundColor = "blue";
                break;
                
            case 8:
                html.style.backgroundColor = "indigo";
                break;
                
            case 9:
                html.style.backgroundColor = "violet";
                break;

            default:
                html.style.backgroundColor = "black";
                break;
        }

    }