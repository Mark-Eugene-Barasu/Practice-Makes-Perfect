/* I tried to make a code that will automatically change the background image after every 5 seconds. */

window.onload=function() {

    var id = setInterval(frame, 5000);
    
    let backy = document.getElementById("bodyy").style.backgroundImage;

    function frame() {

        var numb = Math.round(Math.random() * 10) + 1

        switch (numb) {
            case 1:
                return backy = `url("background1.jpg")`;
                break;
            
            case 2:
                return backy = `url("background2.jpg")`;
                break;
            
            case 3:
                return backy = `url("background3.jpg")`;
                break;
            
            case 4:
                return backy = `url("background4.jpg")`;
                break;
                
            case 5:
                return backy = `url("background5.jpg")`;
                break;
            
            case 6:
                return backy = `url("background6.jpg")`;
                break;

            case 7:
                return backy = `url("background7.jpg")`;
                break;

            case 8:
                return backy = `url("background8.jpg")`;
                break;
            
            case 9:
                return backy = `url("background9.jpg")`;
                break;

            case 10:
                return backy = `url("background10.jpg")`

            default:
                return backy = `url("background1.jpg")`;
                break;
        }   clearInterval(id);          
    }
}

setInterval(() => {
    
}, interval);