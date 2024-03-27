     // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
     const apiKey = 'e7704bc895b4a8d2dfd4a29d404285b6';
     const city = 'Calgary';
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     async function fetchWeather() {
         try {
             const response = await fetch(apiUrl);
             const data = await response.json();
             if (response.ok) {
                 const weatherInfo = document.getElementById('weather-info');
                 const temperature = data.main.temp;
                 const description = data.weather[0].description;
                 weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
             } else {
                 weatherInfo.innerHTML = `<p>Failed to fetch weather data</p>`;
             }
         } catch (error) {
             console.error('Error fetching weather:', error);
         }
     }

     fetchWeather();