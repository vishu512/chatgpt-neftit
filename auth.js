document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration successful! Please login.");
    window.location.href = "login.html";
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("userToken", "secureToken123");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
