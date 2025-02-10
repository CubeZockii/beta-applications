document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("admin-login");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("admin-user").value;
        const password = document.getElementById("admin-pass").value;

        // Feste Login-Daten
        const ADMIN_USER = "admin";
        const ADMIN_PASS = "idk";

        if (username === ADMIN_USER && password === ADMIN_PASS) {
            localStorage.setItem("isAdmin", "true");
            window.location.href = "dashboard.html"; // Weiterleitung zum Admin-Bereich
        } else {
            alert("Invalid username or password!");
        }
    });
});