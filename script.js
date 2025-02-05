document.getElementById("profileIcon").addEventListener("mouseover", function () {
    document.getElementById("profileDropdown").style.display = "block";
});

document.getElementById("profileDropdown").addEventListener("mouseleave", function () {
    this.style.display = "none";
});

document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("userToken");
    window.location.href = "login.html";
});
