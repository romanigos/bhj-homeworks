let timer = document.getElementById("timer");

function timerReduce() {
    if (timer.textContent <= 0) {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    } else {
        timer.textContent--;
    }
};

let idInterval = setInterval(timerReduce, 1000);