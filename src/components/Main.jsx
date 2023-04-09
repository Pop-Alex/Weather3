import React, { useContext, useEffect } from 'react'
import './styleComp.css'
import Forecast from './Forecast'
import Map from './Map'
import {WeahterContext} from '../context'
import {AiOutlineHeart} from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner';
import Loading from './Loading'

import CurrentLocation from './CurrentLocation'


const Main = () => {
  const {data,handelFav,loading,lat,long,getCurretnLocation} = useContext( WeahterContext)
  
   if(loading){
    return <Spinner animation="border" role="status" className='spinner'>
      <span className="visually-hidden">Searching....</span>
    </Spinner>;
  }
  return (
    
    <div className='main'>
      
      {data.weather ? null : 
        <CurrentLocation/>
        }
        
      
      <div className="main-info">
        <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
      
      <div className='name'>
        <p>{data.name}</p> 
        {data.main && <button onClick={()=>handelFav()}><AiOutlineHeart/></button> }
      {data.weather ? <p>{data.weather[0].main}</p> : null}
      {/* { <div>
      {data.weather ? <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="icon" className='icon'
            /> : null }
     </div> } */}
       </div>
      </div>
     
    
      {data.name && 
      <div className="forecast">
        <Forecast/>
      </div>
      }   
       {data.weather ? <div className='map'>
     <Map lat={data.coord.lat} lon={data.coord.lon}/>
     </div>  : null}
    </div>


  )
}

export default Main
