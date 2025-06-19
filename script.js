// TODO: improve responsiveness for mobile layout

var timer = 60;
var score = 0;
var hitRn = 0;

function makeBubble() {
    var clutter = "";

    // Generate 119 random bubbles — intentionally one less than 120 for symmetry/layout
    for (var i = 1; i <= 119; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#panelBottom").innerHTML = clutter;
}

// Selects a new target number for player to hit
function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRn;
}

/**
1.Starts and manages the 60s game timer.
2.When it reaches zero, clears the game board.
 */
function runTimer() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#panelBottom").innerHTML = "";
        }
    }, 1000);
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#panelBottom").addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);
    if (clickedNum == hitRn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
getNewHit();
runTimer();

