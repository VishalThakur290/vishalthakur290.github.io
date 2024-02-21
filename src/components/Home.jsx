import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Style from '../style/home.module.css';
import { useDispatch, useSelector } from "react-redux";
import { CityName, WeatherData } from '../actions';

const Home = () => {
    const dispatch = useDispatch();
    const currentState = useSelector((currentState) => currentState.weatherData);
    const currentCityName = useSelector((currentCity) => currentCity.cityName);
    const [state, setState] = useState({
        urlPrefix: `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=`,
        urlPostfix: '&days=10&aqi=yes&alerts=no',
        isLoading: false,
        city: currentCityName,
    });
    const search = async () => {
        dispatch(CityName(state.city));
        setState(prev => ({ ...prev, isLoading: true }))
        const cityNameWithSpace = await state.city.split(" ");
        var cityName = "";
        await cityNameWithSpace.forEach((name) => {
            cityName += name;
        })
        var url = state.urlPrefix + cityName + state.urlPostfix;
        const response = await fetch(url);
        const data = await response.json();
        dispatch(WeatherData(data));
        setState(prev => ({ ...prev, isLoading: false }));
    }

    return (
        <div className={Style.mainScreen}>
            {state.isLoading ? (
                <h1 style={{ marginTop: '200px', color: 'white' }}>Loading...!</h1>
            ) : (
                <>
                    <div className={Style.center_content}>
                        <p className="main-heading">Right now in {currentCityName} !</p>
                        <input type="text" placeholder="Enter City Name" value={state.city} onChange={(e) => setState((prev) => ({ ...prev, city: e.target.value }))} />
                        &nbsp;<button onClick={search}>Search</button>
                    </div>
                    {currentState.length !== 0 && !currentState.error ? (
                        <>
                            <div className={Style.wether_details}>

                                <p>{currentState.current.temp_c} <sup>&deg;C</sup></p>
                                <p>{currentState.current.temp_f} <sup>&deg;F</sup></p>
                                <div className={Style.wether_details_more}>
                                    <p>Wind: {currentState.current.wind_kph} k/h</p>
                                    <p>Wind Direction: {currentState.current.wind_dir}</p>
                                    <p>Humidity: {currentState.current.humidity} %</p>
                                    <p>Status: {currentState.current.condition.text}</p>
                                </div>
                            </div>
                            <img title={currentState.current.condition.text} src={currentState.current.condition.icon} alt="" />
                            <NavLink to="/forecast"><button>Check Full Forecast</button></NavLink>
                        </>
                    ) : (false)}

                    {currentCityName === "" ? (
                        <h2 style={{ marginTop: '100px', color: 'white' }}>Please search for any city waether!</h2>
                    ) : (false)}

                    {currentState.error && currentCityName !== "" ? (<h2 style={{ marginTop: '100px', color: 'white' }}>No such city found, please try with other city name!</h2>) : false }
                </>
            )}
        </div>
    )
}
export default Home;