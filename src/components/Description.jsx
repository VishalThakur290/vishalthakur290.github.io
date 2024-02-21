// import Style from '../style/home.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube, Autoplay, Scrollbar, A11y } from "swiper";
import { useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import Style from '../style/description.module.css'
import { useSelector } from "react-redux";

const Description = () => {
    const currentCityName = useSelector((currentCity) => currentCity.cityName);
    const [state, setState] = useState('three_day_forecast');
    const currentState = useSelector((currentState) => currentState.weatherData);
    return (
        <div className={Style.description_page_main_container}>
            {currentCityName === "" ? (
                <>
                    <NavLink to="/"><button style={{ marginTop: '100px' }}>Back To Home</button></NavLink>
                    <p style={{ marginTop: '50px', padding: '0 10px', color: '#3f8efc', fontWeight: 'bold' }}>Go back and search again to get the weather information!</p>
                </>
            ) : (
                <>
                    <NavLink to="/"><button>Back To Home</button></NavLink >
                    <p className={Style.locatio_info}>{currentCityName}, {currentState.location.region}, {currentState.location.country}</p>
                    {
                        state === "today_hour_forecast" ? (
                            <Swiper
                                modules={[
                                    Navigation,
                                    EffectCube,
                                    Autoplay,
                                    Pagination,
                                    Scrollbar,
                                    A11y,
                                ]}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {currentState.forecast.forecastday[0].hour.map((forecast) => {
                                    return (
                                        <SwiperSlide>
                                            <div className={Style.description_page_container}>
                                                <h3>{forecast.time.split(" ")[1]}</h3>
                                                <img src={forecast.condition.icon} alt={forecast.condition.text} title={forecast.condition.text} />
                                                <p>{forecast.condition.text}</p>
                                                <p>{forecast.temp_c} <sup>&deg;C</sup> , {forecast.temp_f} <sup>&deg;F</sup></p>
                                                <p>Humidity: {forecast.humidity} %</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        ) : false
                    }
                    {
                        state === "three_day_forecast" ? (
                            <Swiper
                                modules={[
                                    Navigation,
                                    EffectCube,
                                    Autoplay,
                                    Pagination,
                                    Scrollbar,
                                    A11y,
                                ]}
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper"
                            >
                                {currentState.forecast.forecastday.map((forecast, i) => {
                                    if (i === 0) {
                                        return (
                                            <SwiperSlide>
                                                <div className={Style.description_page_container}>
                                                    <h3>Today</h3>
                                                    <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} title={forecast.day.condition.text} />
                                                    <p>{forecast.day.condition.text}</p>
                                                    <p>{forecast.day.mintemp_c} <sup>&deg;C</sup> <span>&#8213;</span> {forecast.day.maxtemp_c} <sup>&deg;C</sup></p>
                                                    <p>{forecast.day.mintemp_f} <sup>&deg;F</sup> <span>&#8213;</span> {forecast.day.maxtemp_f} <sup>&deg;F</sup></p>
                                                    <p>Sun Rise: {forecast.astro.sunrise}</p>
                                                    <p>Sun Set: {forecast.astro.sunset}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                    else if (i === 1) {
                                        return (
                                            <SwiperSlide>
                                                <div className={Style.description_page_container}>
                                                    <h3>Tomorrow</h3>
                                                    <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} title={forecast.day.condition.text} />
                                                    <p>{forecast.day.condition.text}</p>
                                                    <p>{forecast.day.mintemp_c} <sup>&deg;C</sup> <span>&#8213;</span> {forecast.day.maxtemp_c} <sup>&deg;C</sup></p>
                                                    <p>{forecast.day.mintemp_f} <sup>&deg;F</sup> <span>&#8213;</span> {forecast.day.maxtemp_f} <sup>&deg;F</sup></p>
                                                    <p>Sun Rise: {forecast.astro.sunrise}</p>
                                                    <p>Sun Set: {forecast.astro.sunset}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                    else {
                                        const d = new Date(forecast.date);
                                        let day = d.getDay()
                                        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                                        return (
                                            <SwiperSlide>
                                                <div className={Style.description_page_container}>
                                                    <h3>{weekdays[day]}</h3>
                                                    <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} title={forecast.day.condition.text} />
                                                    <p>{forecast.day.condition.text}</p>
                                                    <p>{forecast.day.mintemp_c} <sup>&deg;C</sup> <span>&#8213;</span> {forecast.day.maxtemp_c} <sup>&deg;C</sup></p>
                                                    <p>{forecast.day.mintemp_f} <sup>&deg;F</sup> <span>&#8213;</span> {forecast.day.maxtemp_f} <sup>&deg;F</sup></p>
                                                    <p>Sun Rise: {forecast.astro.sunrise}</p>
                                                    <p>Sun Set: {forecast.astro.sunset}</p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                })}
                            </Swiper>
                        ) : false
                    }
                    <div className={Style.description_page_bottom_button}>
                        <span className={state === "today_hour_forecast" ? Style.active_button : false} onClick={() => setState("today_hour_forecast")}>Today Hourly Forecast</span>
                        <span className={state === "three_day_forecast" ? Style.active_button : false} onClick={() => setState("three_day_forecast")}>Three Day Forecast</span>
                    </div>
                </>
            )}
        </div >
    )
}
export default Description;