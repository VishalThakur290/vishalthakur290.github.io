export const WeatherData = (data) => {
    return {
        type: 'SET_WEATHER_DATA',
        payload: data
    }
}

export const CityName = (data) => {
    return {
        type: 'SET_CITY_NAME',
        payload: data
    }
}

export const SingleViewData = (data) => {
    return {
        type: 'SET_WEATHER_SINGLE_VIEW',
        payload: data
    }
}