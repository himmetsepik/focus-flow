// ======================================
// FocusFlow - Toast Notifications
// ======================================

function showToast(message, type = "success") {

    let container = document.querySelector(".toast-container");

    if (!container) {

        container = document.createElement("div");
        container.className = "toast-container";

        document.body.appendChild(container);

    }

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.innerHTML = `
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 50);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}