document.addEventListener("DOMContentLoaded", () => {
    // Tüm beğeni butonlarını seç
    const likeButtons = document.querySelectorAll(".action-btn .fa-heart");

    likeButtons.forEach((button) => {
        button.parentElement.addEventListener("click", () => {
            // Butona ait sayıyı al ve artır
            const likeCountElement = button.parentElement;
            const likeCount = parseInt(likeCountElement.textContent.trim(), 10) || 0;
            likeCountElement.innerHTML = `<i class="fas fa-heart"></i> ${likeCount + 1}`;
        });
    });
});
