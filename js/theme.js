// ======================================
// FocusFlow - Theme Manager
// ======================================

const themeBtn = document.getElementById("themeBtn");

const THEME_KEY = "focusflow_theme";

// ---------------------------
// Temayı Uygula
// ---------------------------

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        document.body.classList.remove("dark");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}

// ---------------------------
// Kaydedilen Temayı Yükle
// ---------------------------

function loadTheme() {

    const savedTheme =
        localStorage.getItem(THEME_KEY);

    if (savedTheme) {

        applyTheme(savedTheme);

    }

}

// ---------------------------
// Tema Değiştir
// ---------------------------

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const currentTheme =
        document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem(
        THEME_KEY,
        currentTheme
    );

    applyTheme(currentTheme);

});

// ---------------------------
// Başlat
// ---------------------------

loadTheme();