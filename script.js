document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city === '') {
      alert('Please enter a city name.');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found.');
        }
        return response.json();
      })
      .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>${data.weather[0].main} - ${data.weather[0].description}</p>
          <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      })
      .catch(error => {
        alert(error.message);
      });
  });
  