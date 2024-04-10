(function myFunction(){
    let id = setInterval(frame, 5);
    let jsAnm = document.getElementById("javajava");
    let toRight = 0;
    let toBottom = 0;

    function frame(){
        
        if(toRight === 150){
            clearInterval(id)
            let ie = setInterval(() => {
                if(toBottom === 150){
                    clearInterval(ie);
                    let iff = setInterval(() => {
                        if(toRight === 0){
                            clearInterval(iff);
                            let ig = setInterval(() => {
                                if(toBottom === 0){
                                clearInterval(ig);
                                myFunction();
                                } else {
                                    toBottom--;
                                    jsAnm.style.top = toBottom + "px";
                                }
                            }, 5);
                            jsAnm.style.top 
                        } else {
                            toRight--;
                            jsAnm.style.left = toRight + "px";
                        }
                    }, 5);
                } else {
                    toBottom++;
                    jsAnm.style.top = toBottom + "px";
                }
            }, 5);
        } else  {
            toRight++;
            jsAnm.style.left = toRight + "px";
        }
    }
})();
