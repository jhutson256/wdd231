export function renderWeatherCard(data)
    {
        const weatherObject = document.getElementById("weather");

        weatherObject.innerHTML = `
        <h2>${data.location} ${data.icon}</h2>
        <h3>${data.conditions}</h3>
        <h3>Temperature: ${data.temp}</h3>
        <h3>Wind Speed: ${data.windspeed}</h3>
        `;
    }