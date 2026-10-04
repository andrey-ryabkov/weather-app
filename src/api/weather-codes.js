const weatherIcons = {
    clear: './assets/weather-status-icon/clear.svg',
    clearNight: './assets/weather-status-icon/clear-night.svg',
    partlyCloudy: './assets/weather-status-icon/partly-cloudy.svg',
    partlyCloudyNight: './assets/weather-status-icon/partly-cloudy-night.svg',
    overcast: './assets/weather-status-icon/overcast.svg',
    fog: './assets/weather-status-icon/fog.svg',
    drizzle: './assets/weather-status-icon/drizzle.svg',
    sleet: './assets/weather-status-icon/sleet.svg',
    rain: './assets/weather-status-icon/rain.svg',
    snow: './assets/weather-status-icon/snow.svg',
    thunderstorms: './assets/weather-status-icon/thunderstorms.svg',
    thunderstormsExtreme: './assets/weather-status-icon/thunderstorms-extreme.svg',
}

const weatherCodes = {
    0: {
        description: 'Ясно',
        icon: weatherIcons.clear,
    },

    1: {
        description: 'Преимущественно ясно',
        icon: weatherIcons.partlyCloudy,
    },

    2: {
        description: 'Переменная облачность',
        icon: weatherIcons.partlyCloudy,
    },

    3: {
        description: 'Пасмурно',
        icon: weatherIcons.overcast,
    },

    45: {
        description: 'Туман',
        icon: weatherIcons.fog,
    },

    48: {
        description: 'Изморозь в тумане',
        icon: weatherIcons.fog,
    },

    51: {
        description: 'Лёгкая морось',
        icon: weatherIcons.drizzle,
    },

    53: {
        description: 'Умеренная морось',
        icon: weatherIcons.drizzle,
    },

    55: {
        description: 'Сильная морось',
        icon: weatherIcons.drizzle,
    },

    56: {
        description: 'Лёгкая ледяная морось',
        icon: weatherIcons.sleet,
    },

    57: {
        description: 'Сильная ледяная морось',
        icon: weatherIcons.sleet,
    },

    61: {
        description: 'Небольшой дождь',
        icon: weatherIcons.rain,
    },

    63: {
        description: 'Умеренный дождь',
        icon: weatherIcons.rain,
    },

    65: {
        description: 'Сильный дождь',
        icon: weatherIcons.rain,
    },

    66: {
        description: 'Лёгкий ледяной дождь',
        icon: weatherIcons.sleet,
    },

    67: {
        description: 'Сильный ледяной дождь',
        icon: weatherIcons.sleet,
    },

    71: {
        description: 'Небольшой снег',
        icon: weatherIcons.snow,
    },

    73: {
        description: 'Умеренный снег',
        icon: weatherIcons.snow,
    },

    75: {
        description: 'Сильный снег',
        icon: weatherIcons.snow,
    },

    77: {
        description: 'Снежные зёрна',
        icon: weatherIcons.snow,
    },

    80: {
        description: 'Небольшой ливень',
        icon: weatherIcons.rain,
    },

    81: {
        description: 'Умеренный ливень',
        icon: weatherIcons.rain,
    },

    82: {
        description: 'Сильный ливень',
        icon: weatherIcons.rain,
    },

    85: {
        description: 'Небольшой снегопад',
        icon: weatherIcons.snow,
    },

    86: {
        description: 'Сильный снегопад',
        icon: weatherIcons.snow,
    },

    95: {
        description: 'Гроза',
        icon: weatherIcons.thunderstorms,
    },

    96: {
        description: 'Гроза с небольшим градом',
        icon: weatherIcons.thunderstormsExtreme,
    },

    99: {
        description: 'Гроза с сильным градом',
        icon: weatherIcons.thunderstormsExtreme,
    },
}

export { weatherIcons, weatherCodes }