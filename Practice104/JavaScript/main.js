// assignment is to fit " and JavaScript " after the word CSS in html 1st header
// to show that both CSS and JavaScript are properly linked to the HTML file.

function forbiden(params) {
    var header = document.getElementById("something").innerText;
// alert(header); is was just to check if my identifier is working
console.log(header); // helps with debugging

console.log(header.indexOf("CSS"));
console.log(header.includes("CSS"));

console.log(header.indexOf("CSS") + 1)
let newsentence;
newsentence = header[header.indexOf("CSS") + 3];
  
header[header.indexOf("CSS") + 1]  = "and JavaScript ";
console.log(header[header.indexOf("CSS")])


// let newsent = header.concat(" and JavaScript ");
// console.log(newsent);
 document.getElementById("something").innerHTML = header;
}

// forbiden();



//short solution is here.

document.getElementById("jsHolder").innerText = "and JavaScript";