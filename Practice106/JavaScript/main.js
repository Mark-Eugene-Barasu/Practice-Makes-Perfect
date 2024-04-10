let saying = document.getElementById("classer").innerHTML;
console.log(saying)
let newsaying = saying.concat(" and also JavaScript is also functional");
console.log(newsaying);
document.getElementById("classer").innerHTML = newsaying;