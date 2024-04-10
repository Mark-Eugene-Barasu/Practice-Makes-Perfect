
// btn.onclick = displayTime();
// btn.addEventListener("click", displayTime());
function displayTime() {
    let btn = document.querySelector("#btn");
    // btn.style.backgroundColor="tomato";
    document.querySelector("#emptySpace").innerHTML = new Date();
    let the_paras = document.querySelector("p");
    the_paras.innerHTML = "<p>I love all Programming Languages <span id='lover'>&hearts;</span></p>";
    the_paras.style.color="black";
    the_paras.style.fontSize="300%";
}