document.addEventListener("DOMContentLoaded", () => {
    const profileScreen = document.querySelector(".profile-screen");
    const logoutButton = document.querySelector("#logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            // SessionStorage'ı temizle
            sessionStorage.clear();
            // Login sayfasına yönlendir
            window.location.href = "index.html";
        });
    }
    // Giriş kontrolü
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        // Giriş yapılmamışsa login.html'e yönlendir
        window.location.href = "login.html?redirect=photogallery.html";
    } else {
        // Giriş yapılmışsa profil ekranını göster
        const username = sessionStorage.getItem("username") || "User";
        document.querySelector("#username-display").textContent = username;
        document.querySelector(".profile-screen").style.display = "block";
        document.querySelector(".profile-screen .title").textContent = `Welcome to Photo Gallery`;
        document.querySelector(".profile-screen h3 span").textContent = username;
    }
});
