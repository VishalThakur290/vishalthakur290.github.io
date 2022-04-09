var initialValue = [];

const WeatherAllData = (state = initialValue, { type, payload }) => {
    switch (type) {
        case "SET_WEATHER_DATA":
            return payload;
        default: return state;
    }
}

export default WeatherAllData;