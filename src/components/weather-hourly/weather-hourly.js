const weatherHourlyContainer = document.getElementById('weather-hourly')

function renderWeatherHourly (weather) {
    const weatherHourly = weather.hourly
    let weatherItems = ''

    weatherHourly.forEach(({ date, icon, temperature }) => {
        const weatherDate = new Date(date)

        const time = weatherDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        })

        weatherItems += `
            <li class="weather-hourly__item">
                <span class="weather-hourly__time">${time}</span>
                <img
                    class="weather-hourly__icon"
                    src="${icon}"
                >
                <span class="weather-hourly__temp">${Math.round(temperature)}°</span>
            </li>
        `
    })


    const weatherMarkup = `
        <div class="weather-hourly__wrapper">
            <h2 class="weather-hourly__title">Почасовой прогноз</h2>
            <div class="weather-hourly__scroller" id="scroller">
                <ul class="weather-hourly__list">
                    ${weatherItems}           
                </ul>
            </div>
        </div>
    `
    weatherHourlyContainer.innerHTML = weatherMarkup

    const slider = document.getElementById('scroller')
    
    slider.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault()
            
            slider.scrollTo({
                left: slider.scrollLeft + event.deltaY * 1.5,
                behavior: 'smooth'
            })
        }
    })
}


export { renderWeatherHourly }