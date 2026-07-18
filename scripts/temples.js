const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

const currentyear = document.querySelector("#currentyear");
document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

currentyear.innerHTML = today.getFullYear();

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open")

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
        menuButton.setAttribute("aria-label", "Close navigation menu")
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});