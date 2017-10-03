window.onload = function() {    
document.getElementById("start").onclick = function(){
    var timerTil = new Date().getTime()+1500000;

    var intervalSet = setInterval(function (){
    var rightNow = new Date().getTime(); //on interval of 1 second get new "now" time
    var distance = timerTil - rightNow; //on interval get new distance

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //on interval get new value for minutes slot
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); //on interval get new value for seconds slot
    document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "; //on each interval, take calc'd values and push to html to display to user
//function below runs each second to determine if distance is at 0 yet, if it is, display message
    if (distance < 0) {
        clearInterval(intervalSet);
        document.getElementById("timer").innerHTML = "Time's Up";
    } 
}, 1000)}};