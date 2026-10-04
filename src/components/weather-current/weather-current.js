const weatherCurrent = document.getElementById('weather-current')

function renderWeatherCurrent (weather) {
    
    const {
        city,
        temperature,
        weatherStatus,
        apparentTemperature,
        weatherIcon,
        humidity,
        windSpeed,
    } = weather.current


    const maxTemperature = Math.round(weather.daily[0].maxTemperature)
    const minTemperature = Math.round(weather.daily[0].minTemperature)

    const weatherMarkup = `
        <div class="weather-current__info">
            <div class="weather-current__text">
                <h2 class="weather-current__location">${city}</h2>
                <p class="weather-current__temperature">${Math.round(temperature)}°</p>
                <p class="weather-current__status">${weatherStatus}</p>
                <p class="weather-current__feels-like">Ощущается как ${Math.round(apparentTemperature)}°</p>
            </div>

            <img
                class="weather-current__icon"
                src="${weatherIcon}"
                alt=""
                aria-hidden="true"
            >
        </div>

        <div class="weather-current__details">
            <ul class="weather-current__details-list">
                <li class="weather-current__details-item weather-current__details-item--max">
                    <img
                        class="weather-current__details-icon"
                        src="./assets/weather-details-icon/temp.svg"
                        alt=""
                        aria-hidden="true"
                    >

                    <div class="weather-current__details-text">
                        <span class="weather-current__details-label">Макс.</span>
                        <span class="weather-current__details-value">${maxTemperature}°</span>
                    </div>
                </li>

                <li class="weather-current__details-item weather-current__details-item--min">
                    <img
                        class="weather-current__details-icon"
                        src="./assets/weather-details-icon/temp-min.svg"
                        alt=""
                        aria-hidden="true"
                    >

                    <div class="weather-current__details-text">
                        <span class="weather-current__details-label">Мин.</span>
                        <span class="weather-current__details-value">${minTemperature}°</span>
                    </div>
                </li>
                
                <li class="weather-current__details-item weather-current__details-item--humidity">
                    <img
                        class="weather-current__details-icon"
                        src="./assets/weather-details-icon/humidity.svg"
                        alt=""
                        aria-hidden="true"
                    >

                    <div class="weather-current__details-text">
                        <span class="weather-current__details-label">Влажность</span>
                        <span class="weather-current__details-value">${Math.round(humidity)}%</span>
                    </div>
                </li>

                <li class="weather-current__details-item weather-current__details-item--wind">
                    <img
                        class="weather-current__details-icon"
                        src="./assets/weather-details-icon/wind.svg"
                        alt=""
                        aria-hidden="true"
                    >
                    <div class="weather-current__details-text">
                        <span class="weather-current__details-label">Ветер</span>
                        <span class="weather-current__details-value">${windSpeed.toFixed(1)} м/с</span>
                    </div>
                </li>
            </ul>
        </div>
    `

    weatherCurrent.innerHTML = weatherMarkup
}

export { renderWeatherCurrent }