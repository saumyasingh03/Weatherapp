
console.log("hello jee hello jee");
"use strict";

const API = "4f528f13c18144717621270c6eb3b74f";

async function showweather() {
    try {
        let cityname = document.getElementById("cityInput").value;
        if (!cityname) {
            alert("Please enter a city name");
            return;
        }

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API}`);
        const data = await response.json();
        console.log("weather data=>", data);

        let outputDiv = document.getElementById("output");
        if (data.cod === "404") {
            outputDiv.innerHTML = `<p style="color:red;">City not found ❌</p>`;
        } else {
            outputDiv.innerHTML = `
                <p>🌡️ Temp: ${(data?.main?.temp - 273.15).toFixed(2)} °C</p>
                <p>☁️ Weather: ${data?.weather[0]?.description}</p>
                <p>💨 Wind: ${data?.wind?.speed} m/s</p>
            `;
        }
    } catch (err) {
        console.error(err);
    }
}

     