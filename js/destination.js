document.addEventListener("DOMContentLoaded", () => {
    // Giriş kontrolü
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html?redirect=destination.html"; // Giriş yapılmamışsa login'e yönlendir
    } else {
        const username = sessionStorage.getItem("username") || "User";
        document.querySelector("#username-display").textContent = username;

        const initialDestinations = ["Paris", "New York", "Tokyo", "Rome", "Istanbul"];
        const destinationList = document.querySelector(".destination-list");

        // Başlangıç şehirlerini listeye ekle
        initialDestinations.forEach((place) => addDestinationToList(place, destinationList));

        // Yeni yer ekleme işlevi
        const addDestinationButton = document.querySelector("#add-destination-button");
        const newDestinationInput = document.querySelector("#new-destination");

        addDestinationButton.addEventListener("click", () => {
            const newPlace = newDestinationInput.value.trim();
            if (newPlace) {
                addDestinationToList(newPlace, destinationList);
                newDestinationInput.value = ""; // Input temizleniyor
            } else {
                alert("Please enter a valid place name!");
            }
        });
    }
});

// Listeye yeni yer ekleme
function addDestinationToList(place, destinationList) {
    const listItem = document.createElement("li");
    listItem.textContent = place;
    destinationList.appendChild(listItem);
}
