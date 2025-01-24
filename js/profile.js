document.addEventListener("DOMContentLoaded", () => {
    const profileScreen = document.querySelector(".profile-screen");

    // Giriş kontrolü
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        // Giriş yapılmamışsa login.html'e yönlendir
        window.location.href = "login.html?redirect=photogallery.html";
    } else {
        // Giriş yapılmışsa profil ekranını göster
        const username = sessionStorage.getItem("username") || "User";
        document.querySelector(".profile-screen").style.display = "block";
        document.querySelector(".profile-screen .title").textContent = `Welcome to Photo Gallery`;
        document.querySelector(".profile-screen h3 span").textContent = username;
    }
});
