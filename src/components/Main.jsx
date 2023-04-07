import React, { useContext, useEffect } from 'react'
import './styleComp.css'
import Forecast from './Forecast'
import Map from './Map'
import {WeahterContext} from '../context'
import {AiOutlineHeart} from 'react-icons/ai'
import Spinner from 'react-bootstrap/Spinner';
import Loading from './Loading'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const Main = () => {
  const {data,handelFav,loading,lat,long,currentLoc} = useContext( WeahterContext)
  if(loading){
    return <h1>Loading</h1>;
  }
  
  return (
    
    <div className='main'>
      {data.weather ? null : <h1>{currentLoc?.name}</h1>  }
      
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
        <Forecast/>
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
