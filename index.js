let timer = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');

let seconds = 0;

function updateTime() {
    seconds++;
    timer.textContent = `${seconds}  sec`;
}

startBtn.addEventListener('click', () => {
    interval = setInterval(updateTime, 1000);
    startBtn = true;
    pauseBtn = false;
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn = false;
    pauseBtn = true;
});