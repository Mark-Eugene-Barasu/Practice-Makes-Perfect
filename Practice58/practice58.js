setInterval(somefuntion, 1000);


function somefuntion(){
let randomNumber = Math.round(Math.random() * 10);

document.getElementById("Adiv").innerHTML = randomNumber;
};