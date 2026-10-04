import { weatherIcons, weatherCodes } from './weather-codes.js'

async function getCoordinates(cityName) {
    const formattedCityName = cityName.trim().replaceAll(' ', '-')

    const url = new URL('https://geocoding-api.open-meteo.com/v1/search')

    url.searchParams.set('name', formattedCityName)
    url.searchParams.set('count', '1')
    url.searchParams.set('language', 'ru')

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
    }

    const data = await response.json()
    
    if (!data.results?.length) {
        throw new Error('Город не найден. Проверьте название.')
    }
    
    const [location] = data.results

    return {
        latitude: location.latitude,
        longitude: location.longitude,
        city: location.name,
        country: location.country,
    }
}

async function getWeather({ latitude, longitude, city, country }) {
    const url = new URL('https://api.open-meteo.com/v1/forecast')

    url.searchParams.set('latitude', latitude)
    url.searchParams.set('longitude', longitude)

    url.searchParams.set(
    'current',
    'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day'
    )

    url.searchParams.set(
        'hourly',
        [
            'temperature_2m',
            'weather_code',
            'is_day',
        ].join(',')
    )

    url.searchParams.set(
        'daily',
        [
            'temperature_2m_max',
            'temperature_2m_min',
            'weather_code',
        ].join(',')
    )

    url.searchParams.set('forecast_days', '7')
    url.searchParams.set('timezone', 'auto')
    url.searchParams.set('wind_speed_unit', 'ms')

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`)
    }

    const data = await response.json()

    const currentWeather = getWeatherByCode(
        data.current.weather_code,
        data.current.is_day
    )

    const weatherData = {
        current: {
            city,
            country,
            isDay: data.current.is_day,
            time: data.current.time,
            temperature: data.current.temperature_2m,
            apparentTemperature: data.current.apparent_temperature,
            windSpeed: data.current.wind_speed_10m,
            weatherStatus: currentWeather.description,
            weatherIcon: currentWeather.icon,
            humidity: data.current.relative_humidity_2m,
        },

        hourly: [],
        
        daily: [],
    }
    
    const currentTime = data.current.time.slice(0, 13) + ':00'
    const startIndex = data.hourly.time.indexOf(currentTime)

    if (startIndex === -1) {
        throw new Error('Не удалось найти текущий час в почасовом прогнозе.')
    }

    const endIndex = startIndex + 24

    for (let i = startIndex; i < endIndex; i++) {
        const weather = getWeatherByCode(
            data.hourly.weather_code[i],
            data.hourly.is_day[i]
        )

        weatherData.hourly.push({
            date: data.hourly.time[i],
            temperature: data.hourly.temperature_2m[i],
            weatherStatus: weather.description,
            icon: weather.icon,
        })
    }

    for (let i = 0; i < data.daily.time.length; i++) {
        const weather = getWeatherByCode(
            data.daily.weather_code[i],
            true
        )
        
        weatherData.daily.push({
            date: data.daily.time[i],
            minTemperature: data.daily.temperature_2m_min[i],
            maxTemperature: data.daily.temperature_2m_max[i],
            weatherStatus: weather.description,
            icon: weather.icon,
        })
    }

    return weatherData
}

function getWeatherByCode(code, isDay) {
    const weather = weatherCodes[code]

    if (weather === undefined) {
        return {
            description: 'Неизвестно',
            icon: weatherIcons.clear,
        }
    }

    if (!isDay) {
        if (code === 0) {
            return {
                ...weather,
                icon: weatherIcons.clearNight,
            }
        }

        if (code === 1 || code === 2) {
            return {
                ...weather,
                icon: weatherIcons.partlyCloudyNight,
            }
        }
    }

    return weather
}


export { getCoordinates, getWeather }