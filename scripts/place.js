const currentyear = document.querySelector("#currentyear");
document.getElementById("lastModified").innerHTML = document.lastModified;

const today = new Date();

currentyear.innerHTML = today.getFullYear();

const temperature = 8;
const windSpeed = 15;

document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;

function calculateWindChill(temp, speed) {
    return (35.74 +
        (0.6215 * temp) -
        (35.75 * Math.pow(speed, 0.16)) +
        (0.4275 * temp * Math.pow(speed, 0.16))
    ).toFixed(1)
}

let windChill = "N/A";

if (temperature <= 50 && windSpeed > 3) {
    windChill = `${calculateWindChill(temperature, windSpeed)}°F`;
}

document.getElementById("windChill").textContent = windChill;