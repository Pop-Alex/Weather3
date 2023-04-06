import React, { useContext } from 'react'
import './styleComp.css'
import Forecast from './Forecast'
import {WeahterContext} from '../context'
import {AiOutlineHeart} from 'react-icons/ai'
const Main = () => {
  const {data,handelFav} = useContext( WeahterContext)
  
  
  return (
    <div className='main'>
      <div className="main-info">
        <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
      
      <div className='name'>
        <p>{data.name}</p> 
        {data.main && <button onClick={()=>handelFav()}><AiOutlineHeart/></button> }
      {data.weather ? <p>{data.weather[0].main}</p> : null}
      {/* <div>
      {data.weather ? <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="icon" className='icon'
            /> : null }
     </div> */}
       </div>
      </div>
      {data.name && 
      <div className="forecast">
        
        <Forecast/>
        <Forecast/>
        <Forecast/>
      </div>
}
    </div>
  )
}

export default Main
