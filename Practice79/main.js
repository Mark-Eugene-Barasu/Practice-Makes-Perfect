document.write(`<p>The data type of local storage is : ${typeof(localStorage)}.</p>`);

// to create a local storage you need to check if the browser has a 
// storage using ifelse

if (typeof(Storage) !== "undefined") {
    // code for the local storage or session storage (besides "true")

    // setting storage.
    localStorage.setItem("firstName", "Eugene");
    localStorage.setItem("middleName", "Mark Korku");
    localStorage.setItem("lastName", "Barasu");
    localStorage.setItem("age", 21);
    localStorage.setItem("interest", "Software Development");
} else {
    // Sorry!, your browser has no storage.
}

/* I noticed that when data is stored into the local storage, it become string automatically so to work with the origial data type of those numbers change the data type to the number data type for your calculations.*/
    localStorage.setItem("food", 50);
    let y = localStorage.getItem("food")
    let x = localStorage.getItem("age")
    document.write(Number(x) * Number(y));


// To get stored data.
document.getElementById("empty1").innerHTML = localStorage.getItem("firstName");
document.getElementById("empty2").innerHTML = localStorage.getItem("middleName");
document.getElementById("empty3").innerHTML = localStorage.getItem("lastName");
document.getElementById("empty4").innerHTML = localStorage.getItem("age");
document.getElementById("empty5").innerHTML = localStorage.getItem("interest")

