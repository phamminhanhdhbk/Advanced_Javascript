document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const weatherInfoDiv = document.getElementById('weather-info');
    const getWeatherButton = document.getElementById('get-weather');
    const cityInput = document.getElementById('city-input');

    const getWeather = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    };

    const displayWeather = (data) => {
        if (data.cod === 200) {
            weatherInfoDiv.innerHTML = `
                <div><strong>City:</strong> ${data.name}</div>
                <div><strong>Temperature:</strong> ${data.main.temp} °C</div>
                <div><strong>Humidity:</strong> ${data.main.humidity} %</div>
                <div><strong>Condition:</strong> ${data.weather[0].description}</div>
            `;
        } else {
            weatherInfoDiv.innerHTML = `<div>City not found. Please try again.</div>`;
        }
    };

    getWeatherButton.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (city !== '') {
            const weatherData = await getWeather(city);
            displayWeather(weatherData);
        }
    });
});
