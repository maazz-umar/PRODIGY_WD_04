document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeatherData(city);
    }
});

document.getElementById('getLocationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherDataByCoords(lat, lon);
        });
    }
});

async function fetchWeatherData(city) {
    const apiKey = '90619a198fddd00490e9a629f05afbd2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    displayWeatherData(data);
}

async function fetchWeatherDataByCoords(lat, lon) {
    const apiKey = '90619a198fddd00490e9a629f05afbd2';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    displayWeatherData(data);
}

function displayWeatherData(data) {
    document.getElementById('weatherConditions').textContent = `Conditions: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}
