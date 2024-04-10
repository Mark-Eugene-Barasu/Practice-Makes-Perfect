var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

function replaceIt(){
    var storyDiv = document.getElementById("story");
    var adj1 = "<span class='replacement'>"+ document.getElementById("adj1").value +"</span>";

    /* Insert more variable definitions here */
    var theStory = "<h1>Douglas's Dance Party</h1>"
    theStory += "One "+ adj1 +" day.";

    /* Put the rest of the story here, using the += operator */
    storyDiv.innerHTML = theStory;
}