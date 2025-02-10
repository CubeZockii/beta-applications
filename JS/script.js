document.addEventListener("DOMContentLoaded", () => {
    const applicationForm = document.getElementById("application-form");

    applicationForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            email: document.getElementById("email").value,
            discordName: document.getElementById("discord-name").value,
            displayName: document.getElementById("display-name").value,
            discordId: document.getElementById("discord-id").value,
            role: document.getElementById("role").value,
            experience: document.getElementById("experience").value,
            reason: document.getElementById("reason").value
        };

        const response = await fetch("http://localhost:3000/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Application submitted!");
            applicationForm.reset();
        } else {
            alert("Error submitting application.");
        }
    });
});