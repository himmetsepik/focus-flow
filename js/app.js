// ======================================
// FocusFlow - app.js
// Ana Kontrol Dosyası
// ======================================

// ---------------------------
// Elementler
// ---------------------------

const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const saveTask = document.getElementById("saveTask");
const taskList = document.getElementById("taskList");

const dateElement = document.getElementById("date");
const clockElement = document.getElementById("clock");

// ---------------------------
// LocalStorage'dan yükle
// ---------------------------

let tasks = loadTasks();

// ---------------------------
// Tarih
// ---------------------------

function updateDate() {

    const today = new Date();

    dateElement.textContent = today.toLocaleDateString("tr-TR", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

}

// ---------------------------
// Saat
// ---------------------------

function updateClock() {

    const now = new Date();

    clockElement.textContent = now.toLocaleTimeString("tr-TR");

}

// ---------------------------
// Uygulamayı Başlat
// ---------------------------

function init() {

    updateDate();

    updateClock();

    setInterval(updateClock, 1000);

    renderTasks();

    updateStats();

}

// ---------------------------
// Başlat
// ---------------------------

init();