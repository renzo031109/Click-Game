function showGame() {

    /*setting the variable */
    var score = 0;
    var missed = 0;
    var totalSeconds = 0;

    /*setting time allowance to show the objects */
    function showInterval() {
        setTimeout(showObject, Math.random() * (3000 - speed()));
    }

    //setting the random color function
    function color() {
        var letters = '1234567890ABCDEF'.split('');
        var color = '#';

        for (var i = 0; i < 6; i++) {
            color = color + (letters[Math.floor(Math.random() * 16)]);
        }
        return color;
    }

    //showing the object with properties
    function showObject() {

        var horizontal = Math.random() * (window.innerWidth * 0.70);
        var vertical = Math.random() * (window.innerHeight * 0.54);
        var size = (Math.random() * 200) + 100;

        var shape = '';

        if ((Math.random() * 100) > 50) {
            shape = "50%";
        } else {
            shape = "0";
        }

        item.style.width = size + "px";
        item.style.height = size + "px";
        item.style.top = vertical + "px";
        item.style.left = horizontal + "px";
        item.style.backgroundColor = "red";
        item.style.borderRadius = shape;
        item.style.backgroundColor = color();
        item.style.display = "block";
        item.style.border = "none";

        //setting time to display the object

        setTimeout(function () {
            item.style.display = "none";
            showInterval();

        }, 3000 - (speed() * 2));

    }

    //function pullout speed
    function speed() {
        return setTime();
    }

    //when object is click
    function whenClick() {

        item.style.border = 3 + "px solid";

        setTimeout(function () {
            item.style.display = "none";
            // showInterval();  
        }, 100);

        score += 1;
        scoreCount.innerHTML = score;

        missed -= 1;
        missedCount.innerHTML = missed;
    }

    //setting the timer
    function setTime() {
        ++totalSeconds;
        secondsTag.innerHTML = pad(totalSeconds % 60);
        minutes = pad(parseInt(totalSeconds / 60));
        minutesTag.innerHTML = minutes;
        return totalSeconds;
    }

    //return value 
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    setInterval(setTime, 1000);

    showInterval();

    item.onclick = function () {
        whenClick();

    }

    imgBackground.onclick = function () {

        missed += 1;
        missedCount.innerHTML = missed;


    }
}

var item = document.getElementById("object");
var scoreCount = document.getElementById("scoreTag");
var missedCount = document.getElementById("missedTag");
var imgBackground = document.getElementById("image");
var minutesTag = document.getElementById("minutes");
var secondsTag = document.getElementById("seconds");
var marginSize = document.getElementsByClassName("margin");

document.getElementById("beginButton").onclick = function () {
    showGame();
}
