var digits = [20 , 50, 2, 10, 100, 50, 25, 27, 30];

function functionOne() {
    digits.sort();
    document.getElementById("demo").innerHTML = digits;
};

function functionTwo(){
    digits.sort(function(a,b){return a - b});
    document.getElementById("demo").innerHTML = digits;
}