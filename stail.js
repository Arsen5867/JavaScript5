var time = 0;
var running = 0;
function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("start").innerHTML = "Пауза";
        document.getElementById("startPause").style.backgroundColor = "red";
        document.getElementById("startPause").style.borderColor = "red";
    }
    else {
        running = 0;
        document.getElementById("start").innerHTML = "Далее";
        document.getElementById("startPause").style.backgroundColor = "rgb(166, 255, 0)";
        document.getElementById("startPause").style.borderColor = "rgb(166, 255, 0)";
    }
}
function reset() {
    running = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Старт";
    document.getElementById("output").innerHTML = "0:00:00:00";
    document.getElementById("startPause").style.backgroundColor = "rgb(166, 255, 0)";
    document.getElementById("startPause").style.borderColor = "rgb(166, 255, 0)";
}
function increment() {
    if (running == 1) {
        setTimeout(function () {
            time++;
            var mins = Math.floor(time / 10 / 60);
            var secs = Math.floor(time / 10 % 60);
            var hours = Math.floor(time / 10 / 60 / 60);
            var tenths = time % 10;
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
            increment();
        }, 100)
    }
}