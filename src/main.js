import { initHeader } from './components/header/header.js'
import './components/header/theme.js'
import { getCoordinates, getWeather } from './api/open-meteo.js'
import { renderWeatherCurrent } from './components/weather-current/weather-current.js'
import { renderWeatherHourly } from './components/weather-hourly/weather-hourly.js'
import { renderWeatherDaily } from './components/weather-daily/weather-daily.js'

const welcome = document.getElementById('welcome')

async function handleSearch (cityName) {
    welcome.style.display = 'none'

    const coordinates = await getCoordinates(cityName)
    const weather = await getWeather(coordinates)
    
    renderWeatherCurrent(weather)
    renderWeatherHourly(weather)
    renderWeatherDaily(weather)
    
}

initHeader(handleSearch)