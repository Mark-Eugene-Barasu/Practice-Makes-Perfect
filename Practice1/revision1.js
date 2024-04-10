document.getElementById("startMagic").onclick = newStuff;

function newStuff (){
var yourName = prompt("What is your name?");
alert("Hello "+yourName+"! We made it here, lets get to it. So if we are ready click 'OK' and lets rock and roll");
var yourSong = prompt("What is the name of your song?");
var numberOfLetters = prompt("How many copies do you wanna make?");
for(var i=0; i<numberOfLetters; i++){document.write("Dear "+yourName+",<br><br>We are pleased to inform you that your song, "+'"'+yourSong+'"'+", has been voted the Best Song of ALL Time by the awarding committee.<br><br>Sincerely,<br>The Grammy Awards.<hr>");}
}