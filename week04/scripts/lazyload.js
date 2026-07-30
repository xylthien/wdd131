const currentyear = document.querySelector("#currentyear");
document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

currentyear.innerHTML = today.getFullYear();