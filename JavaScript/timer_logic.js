window.onload = function() {
var distance = 0
var timerTil = 0
var rightNow = 0
var minutes = 0
var seconds = 0
var inputDistance = 1500000
var pomodorosPassed = 0
debugger;
function minuteFactory(timeToFactorM){
    return Math.floor((timeToFactorM % (1000*60*60)) / (1000*60));
}

function secondFactory(timeToFactorS){
    return Math.floor((timeToFactorS % (1000*60)) / 1000);
}

function timeTilCounter(){
    timerTil = new Date().getTime()+inputDistance;
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
    return timerTil - rightNow;
}

function timerStop(intervalToKill){
    clearInterval(intervalToKill);
    document.getElementById("timer").innerHTML = "Time's Up";
}
function countDownRunning(){
    debugger;
    rightNowGet(); 
    var displayMin = minuteFactory(timerRunning()); 
    var displaySec = secondFactory(timerRunning()); 
    displayCounter(displayMin, displaySec); 
}

document.getElementById("start").onclick = function startUp(){
timeTilCounter(); 

var intervalSet = setInterval(function(){
    var distance = timerRunning()
    if (distance > 1000){
        countDownRunning()
    } else {
        timerStop(intervalSet);
        countPomodoros();
        checkBoxUpdate(pomodorosPassed)
    }
},1000)
};

function checkBoxUpdate(pomodorosPassed) {
    if (pomodorosPassed < 4) {
    var pomodorosPassedStringValue = pomodorosPassed.toString()
    document.getElementById(`checkBox${pomodorosPassedStringValue}`).checked = true;
} else {
    document.getElementById(`checkBox1`).checked = false
    document.getElementById(`checkBox2`).checked = false
    document.getElementById(`checkBox3`).checked = false
}
}
function countPomodoros() {
    if (pomodorosPassed < 4) {
        pomodorosPassed++
    } else {
        pomodorosPassed = 0
    }
}
}