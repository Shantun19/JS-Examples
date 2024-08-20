let startBtn = document.querySelector('.btn1');
let stopBtn = document.querySelector('.btn2');
let resetBtn = document.querySelector('.btn3');

let hour = 0, min = 0, sec = 0, count = 0;
let timer = false;

startBtn.addEventListener('click', () => {
    timer = true;
    startStopWatch();
});

stopBtn.addEventListener('click', () => {
    timer = false;
});

resetBtn.addEventListener('click', () => {
    timer = false;
    hour = min = sec = count = 0;
    updateDisplay();
});

function startStopWatch() {
    if (timer) {
        count++;
        if (count === 100) {
            sec++;
            count = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hour++;
            min = sec = 0;
        }

        updateDisplay();
        setTimeout(startStopWatch, 10);
    }
}

function updateDisplay() {
    document.getElementById('hr').innerHTML = hour.toString().padStart(2, "0");
    document.getElementById('min').innerHTML = min.toString().padStart(2, "0");
    document.getElementById('sec').innerHTML = sec.toString().padStart(2, "0");
    document.getElementById('count').innerHTML = count.toString().padStart(2, "0");
}
