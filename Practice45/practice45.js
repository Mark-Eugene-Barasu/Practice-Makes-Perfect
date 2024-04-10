
var things = ["Book", "chess", "house", "laptop", "pencil", "chess", "wax-crayons"];

var otherThings = ["Food", "Covid-19", "house", "goods", things];

//know = things.concat(otherThings);
//know = things.toString();
//know = things.indexOf("chess");
//know = things.lastIndexOf("chess");
//know = things.join(" & ");
//know = things.pop();
//things.pop();
//know = things.push("Pluto");
//things.push("Pluto");
//know = things.reverse();
//know = things.shift();
//things.shift();
//know = things.slice(0,3);
//things.sort();
things.splice(1,0,"Marko");
//know = things.unshift("Lookie");
//things.unshift("Lookie");

document.getElementById("displayer").innerHTML = things;