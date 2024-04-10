var placeItem1;
var placeItem2;
var placeItem3;
var placeItem4;
var placeItem5;
var placeItem6;
var placeItem7;
var placeItem8;
var placeItem9;
var placeItem10;
document.getElementById("placeButton").onclick = newPlace;

function newPlace() {
    placeItem1 = prompt("Enter your 1st place"); 
    placeItem2 = prompt("Enter your 2nd place");
    placeItem3 = prompt("Enter your 3rd place");
    placeItem4 = prompt("Enter your 4th place");
    placeItem5 = prompt("Enter your 5th place");
    placeItem6 = prompt("Enter your 6th place");
    placeItem7 = prompt("Enter your 7th place");
    placeItem8 = prompt("Enter your 8th place");
    placeItem9 = prompt("Enter your 9th place");
    placeItem10 = prompt("Enter your 10th place");
    changeList1();
}

function changeList1(){
    document.getElementById("firstPlace").innerHTML = placeItem1; 
    document.getElementById("secondPlace").innerHTML = placeItem2;
    document.getElementById("thirdPlace").innerHTML = placeItem3;
    document.getElementById("fouthPlace").innerHTML = placeItem4;
    document.getElementById("fithPlace").innerHTML = placeItem5;
    document.getElementById("sixthPlace").innerHTML = placeItem6;
    document.getElementById("seventhPlace").innerHTML = placeItem7;
    document.getElementById("eighthPlace").innerHTML = placeItem8;
    document.getElementById("ninethPlace").innerHTML = placeItem9;
    document.getElementById("tenthPlace").innerHTML = placeItem10;

}

var peopleItem1;
var peopleItem2;
var peopleItem3;
var peopleItem4;
var peopleItem5;
var peopleItem6;
var peopleItem7;
var peopleItem8;
var peopleItem9;
var peopleItem10;
document.getElementById("peopleButton").onclick = newPeople;

function newPeople() {
    peopleItem1 = prompt("Type the name of the 1st person:");
    peopleItem2 = prompt("Type the name of the 2nd person:");
    peopleItem3 = prompt("Type the name of the 3rd person:");
    peopleItem4 = prompt("Type the name of the 4th person:");
    peopleItem5 = prompt("Type the name of the 5th person:");
    peopleItem6 = prompt("Type the name of the 6th person:");
    peopleItem7 = prompt("Type the name of the 7th person:");
    peopleItem8 = prompt("Type the name of the 8th person:");
    peopleItem9 = prompt("Type the name of the 9th person:");
    peopleItem10 = prompt("Type the name of the 10th person:");
    changeList2();
}

function changeList2(){
    document.getElementById("firstPerson").innerHTML = peopleItem1;
    document.getElementById("secondPerson").innerHTML = peopleItem2;
    document.getElementById("thirdPerson").innerHTML = peopleItem3;
    document.getElementById("fouthPerson").innerHTML = peopleItem4;
    document.getElementById("fithPerson").innerHTML = peopleItem5;
    document.getElementById("sixthPerson").innerHTML = peopleItem6;
    document.getElementById("seventhPerson").innerHTML = peopleItem7;
    document.getElementById("eighthPerson").innerHTML = peopleItem8;
    document.getElementById("ninethPerson").innerHTML = peopleItem9;
    document.getElementById("tenthPerson").innerHTML = peopleItem10;
    
}

var time1;
var time2;
var time3;
var time4;
var time5;
var time6;
var time7;
var time8;
var time9;
var time10;
document.getElementById("timeButton").onclick = newTime;

function newTime() {
    time1 = prompt("What's the 1st time you met them:");
    time2 = prompt("What's the 2nd time you met them:");
    time3 = prompt("What's the 3rd time you met them:");
    time4 = prompt("What's the 4th time you met them:");
    time5 = prompt("What's the 5th time you met them:");
    time6 = prompt("What's the 6th time you met them:");
    time7 = prompt("What's the 7th time you met them:");
    time8 = prompt("What's the 8th time you met them:");
    time9 = prompt("What's the 9th time you met them:");
    time10 = prompt("What's the 10th time you met them:");
    changeList3();
}

function changeList3() {
   document.getElementById("firstTime").innerHTML = time1;
   document.getElementById("secondTime").innerHTML = time2;
   document.getElementById("thirdTime").innerHTML = time3;
   document.getElementById("fourthTime").innerHTML = time4;
   document.getElementById("fithTime").innerHTML = time5;
   document.getElementById("sixthTime").innerHTML = time6;
   document.getElementById("seventhTime").innerHTML = time7;
   document.getElementById("eighthTime").innerHTML = time8;
   document.getElementById("ninethTime").innerHTML = time9;
   document.getElementById("tenthTime").innerHTML = time10;


}

