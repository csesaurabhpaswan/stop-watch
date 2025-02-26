var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
var interval;

// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("stop").addEventListener("click", stop);
    document.getElementById("reset").addEventListener("click", reset);
});

function start() {
    if (!timer) {
        timer = true;
        interval = setInterval(stopwatch, 10);
    }
}

function stop() {
    timer = false;
    clearInterval(interval);
}

function reset() {
    stop(); // Stop the timer
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("count").innerText = "00";
}

function stopwatch() {
    if (timer) {
        count++;

        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }

        document.getElementById("hr").innerText = hr < 10 ? "0" + hr : hr;
        document.getElementById("min").innerText = min < 10 ? "0" + min : min;
        document.getElementById("sec").innerText = sec < 10 ? "0" + sec : sec;
        document.getElementById("count").innerText = count < 10 ? "0" + count : count;
    }
}
