// ======================================
// FocusFlow - Pomodoro Timer
// ======================================

// Elementler
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Varsayılan süre
const DEFAULT_MINUTES = 25;

let minutes = DEFAULT_MINUTES;
let seconds = 0;

let timer = null;
let isRunning = false;

// ======================================
// Ekranı Güncelle
// ======================================

function updateTimerDisplay() {

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}

// ======================================
// Başlat
// ======================================

function startTimer() {

    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {

        if (seconds === 0) {

            if (minutes === 0) {

                clearInterval(timer);

                isRunning = false;

                showToast("🍅 Pomodoro tamamlandı!", "success");

                return;

            }

            minutes--;
            seconds = 59;

        } else {

            seconds--;

        }

        updateTimerDisplay();

    }, 1000);

}

// ======================================
// Duraklat
// ======================================

function pauseTimer() {

    clearInterval(timer);

    isRunning = false;

}

// ======================================
// Sıfırla
// ======================================

function resetTimer() {

    clearInterval(timer);

    isRunning = false;

    minutes = DEFAULT_MINUTES;
    seconds = 0;

    updateTimerDisplay();

    showToast("Sayaç sıfırlandı.", "info");

}

// ======================================
// Butonlar
// ======================================

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

// İlk açılış

updateTimerDisplay();