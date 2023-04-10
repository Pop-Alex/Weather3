import React,{useContext} from 'react'
import {WeahterContext} from '../context'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
const Forecast = () => {
  const {forecast} = useContext( WeahterContext)
  const dayWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayWeek));
  return (

    <div className='forecast-box'>
      <Splide options={{ perPage:3,
        drag:"free",
        gap:"6rem"
      
        }}>
        {forecast.list?.slice(0,6).map((fore,idx)=>{
          return (
            <SplideSlide key={idx} >
              <div className='forecast-info'>
              <div className='day-temp'>
                <h3 className="day">{forecastDays[idx]}</h3>
                <p className='temp-forecast'>{fore.main.temp.toFixed()}°C</p>
                <img
              src={`http://openweathermap.org/img/wn/${fore.weather[0].icon}@2x.png`}
              alt="icon" className='icon'
              /> 
              </div>
              <div className='forecast-temps'>
                <p className='max'>Max temp: {fore.main.temp_max.toFixed()}°C </p>
                <p className='min'>Min Temp: {fore.main.temp_min.toFixed()}°C</p>
              </div>
              </div>
            </SplideSlide>
          )
        })}
          
      </Splide>
      
    </div>
  )
}

export default Forecast
