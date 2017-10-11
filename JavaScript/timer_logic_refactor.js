window.onload = function() {
var distance = 0
var timerTil = 0
var rightNow = 0
var minutes = 0
var seconds = 0

function minuteFactory(timeToFactorM){
    return Math.floor((timeToFactorM % (1000*60*60)) / (1000*60));
}

function secondFactory(timeToFactorS){
    return Math.floor((timeToFactorS % (1000*60)) / 1000);
}

function timeTilCounter(){
    timerTil = new Date().getTime()+1500000;
    return timerTil;
}

function rightNowGet(){
    rightNow = new Date().getTime();
    return rightNow;
}

function displayCounter(minutes, seconds){
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";
}

function timerRunning(){
    distance = timerTil - rightNow;
    return distance
}

function timerStop(){
    clearInterval(intervalSet);
    document.getElementById("timer").innerHTML = "Time's Up";
}
function countDownRunning(){
    debugger;
    rightNowGet(); //get right now value
    timerRunning(); // get right now minus timertil value
    var displayMin = minuteFactory(timerRunning()); //return minute value of distance
    var displaySec = secondFactory(timerRunning()); //return second value of distance
    displayCounter(displayMin, displaySec); //push value to html
}

document.getElementById("start").onclick = function(){
timeTilCounter(); //return timertil
var intervalSet = setInterval(function(){
    countDownRunning()
},1000)
};
}