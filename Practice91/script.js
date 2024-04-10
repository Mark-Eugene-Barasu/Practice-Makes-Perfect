let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("today").innerText = day[new Date().getDay()];

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

(function myFunction() {
    points.sort(function(a, b){return a - b});

    document.getElementById("demo2").innerHTML = points;
    document.getElementById("big_num").innerText = points[points.length - 1];
})();