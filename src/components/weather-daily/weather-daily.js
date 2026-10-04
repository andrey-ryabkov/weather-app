const weatherDailyContainer = document.getElementById('weather-daily')

function renderWeatherDaily (weather) {
    const weatherDaily = weather.daily
    let weatherItems = ''

    weatherDaily.forEach(({ date, minTemperature, maxTemperature, icon }, index) => {
        function getDay (date, index) {
            const weatherDate = new Date(date)
    
            if (index === 0) return 'сегодня'

            return new Intl.DateTimeFormat("ru-RU", {
                weekday: "long"
            }).format(weatherDate)
        }

        function getMonth (date) {
            const weatherDate = new Date(date)
            const result = new Intl.DateTimeFormat('ru-RU', { 
                day: 'numeric', 
                month: 'short'
            }).format(weatherDate)

            return result
        }

        const day = getDay(date, index)
        const monthDay = getMonth(date)

        weatherItems += `
            <li class="weather-weekly__item">
                <span class="weather-weekly__day">${day}</span>
                <span class="weather-weekly__date">${monthDay}</span>
                <img 
                    class="weather-weekly__icon"
                    src="${icon}"
                >

                <div class="weather-weekly__temp">
                    <span class="weather-weekly__temp-max">${Math.round(maxTemperature)}°</span>
                    <span class="weather-weekly__temp-divider">/</span>
                    <span class="weather-weekly__temp-min">${Math.round(minTemperature)}°</span>
                </div>
            </li>         
        `
    })

    const weatherMarkup = `
        <div class="weather-weekly__wrapper">
            <h2 class="weather-weekly__title">Прогноз на 7 дней</h2>
            <ul class="weather-weekly__list">
                ${weatherItems}
            </ul>
        </div>
    `
    weatherDailyContainer.innerHTML = weatherMarkup
}



export { renderWeatherDaily }