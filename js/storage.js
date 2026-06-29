// =====================================
// Local Storage Yönetimi
// =====================================

const STORAGE_KEY = "focusflow_tasks";

// Görevleri yükle
function loadTasks() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return [];
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Veriler okunamadı:", error);
        return [];
    }

}

// Görevleri kaydet
function saveTasks() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(tasks)
    );

}

// Tüm görevleri sil
function clearTasks() {

    localStorage.removeItem(STORAGE_KEY);

}