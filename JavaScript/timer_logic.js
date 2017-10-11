window.onload = function() {    
document.getElementById("start").onclick = function(){
    function countingDown() {
    var timerTil = new Date().getTime()+1500000;
    
    
    var intervalSet = setInterval(function (){
    
        var rightNow = new Date().getTime(); //rightNowGet()
   
        var distance = timerTil - rightNow; //timerRunning()

   
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //minuteFactory()
   
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); //secondFactory()
   
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "; //displayCounter(minutes, seconds)    

if (distance < 0) {
        clearInterval(intervalSet);
        document.getElementById("timer").innerHTML = "Time's Up";
    } 
}, 1000);}
 }
};