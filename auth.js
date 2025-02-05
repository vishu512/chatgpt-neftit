document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@example.com" && password === "password") {
        localStorage.setItem("userToken", "secureToken123");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
