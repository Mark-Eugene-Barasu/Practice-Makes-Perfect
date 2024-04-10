
setInterval(() => {
    let The_body = document.querySelector("body");
    let randomNumber1 = Math.round(Math.random() * 255)
    let randomNumber2 = Math.round(Math.random() * 255)
    let randomNumber3 = Math.round(Math.random() * 255)
    // alert(`First number: ${randomNumber1} Second number: ${randomNumber2} Third number: ${randomNumber3}` )
    The_body.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`

    
    let newElement = document.querySelector("#newElement");
    // let newElement = document.createElement("h2");
    newElement.innerText = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    The_body.appendChild(newElement);
    
}, 1000);