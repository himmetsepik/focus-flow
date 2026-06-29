// ======================================
// FocusFlow - Task Manager
// ======================================

// Görevleri ekrana yazdır
function renderTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML = `
            <li class="empty-task">
                Henüz görev eklenmedi.
            </li>
        `;

        updateStats();
        return;
    }

    tasks.forEach((task, index) => {

        const li = document.createElement("li");
        li.classList.add("task");

        li.innerHTML = `
<div class="task-left">

    <input
        type="checkbox"
        ${task.completed ? "checked" : ""}
    >

    <div class="task-content">

        <h4 class="${task.completed ? "completed" : ""}">
            ${task.text}
        </h4>

        <span class="priority ${task.priority.toLowerCase()}">
            ${task.priority}
        </span>

    </div>

</div>

<div class="task-buttons">

    <button class="edit">
        ✏️
    </button>

    <button class="delete">
        🗑️
    </button>

</div>
`;

        //---------------------------------
        // Tamamlandı
        //---------------------------------

        const checkbox = li.querySelector("input");

        checkbox.addEventListener("change", () => {

            tasks[index].completed = checkbox.checked;

            saveTasks();

            renderTasks();

            showToast("Görev güncellendi.", "info");

        });

        //---------------------------------
        // Sil
        //---------------------------------

        li.querySelector(".delete").addEventListener("click", () => {

            tasks.splice(index, 1);

            saveTasks();

            renderTasks();

            showToast("Görev silindi.", "error");

        });

        //---------------------------------
        // Düzenle
        //---------------------------------

        li.querySelector(".edit").addEventListener("click", () => {

            const newTask = prompt(
                "Görevi düzenle",
                task.text
            );

            if (!newTask) return;

            tasks[index].text = newTask.trim();

            saveTasks();

            renderTasks();

            showToast("Görev güncellendi.", "success");

        });

        taskList.appendChild(li);

    });

    updateStats();

}

// ======================================
// Yeni Görev Ekle
// ======================================

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {

        showToast("Lütfen görev giriniz.", "warning");

        return;

    }

    tasks.push({

        text: text,

        priority: priority.value,

        completed: false,

        createdAt: new Date().toISOString()

    });

    saveTasks();

    renderTasks();

    taskInput.value = "";

    taskInput.focus();

    showToast("Görev eklendi.", "success");

}

// ======================================
// Enter ile görev ekle
// ======================================

taskInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        addTask();

    }

});

// ======================================
// Buton ile görev ekle
// ======================================

saveTask.addEventListener("click", addTask);

// ======================================
// Sayfa açılınca görevleri göster
// ======================================

renderTasks();