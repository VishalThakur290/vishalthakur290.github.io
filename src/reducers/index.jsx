import { combineReducers } from "redux";
import CityName from "./SetCityName";
import WeatherAllData from "./SetWeatherData";

const rootReducer = combineReducers({
    weatherData: WeatherAllData,
    cityName: CityName
})

export default rootReducer;