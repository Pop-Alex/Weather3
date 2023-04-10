import React, { useContext } from 'react'
import './styleComp.css'
import {FcSearch} from 'react-icons/fc'
import {WeahterContext} from '../context'
import {BiTrashAlt} from 'react-icons/bi'
import {CiTempHigh} from 'react-icons/ci'
import {WiHumidity} from 'react-icons/wi'
import {GiWhirlwind} from 'react-icons/gi'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
const Details = () => {
  const {location,setLocation,searchLocation,data,fav,removefav} = useContext( WeahterContext)
  console.log(fav)
  return (
    <div className='detail'>
      <div className="input-section">
        <input className='search-input' type="text" placeholder='Search city...'
         value={location} onChange={(e)=>setLocation(e.target.value)}
        onKeyPress={searchLocation} />
        <button type='submit' className='btn-icon'  ><FcSearch/></button>
      </div>
      <div className="underline"></div>
      <div className="info-section">
        
        <h2>Details</h2>
        <div className="info">
        <ul className='info-det'>
            <li>
              <span><CiTempHigh/> Feels like</span>
              <span>{data.main ? <p>{data.main.feels_like.toFixed()} °C</p> : null}</span>
            </li>
            <li>
              <span><WiHumidity/> Humidity</span>
              <span>{data.main ? <p>{data.main.humidity}%</p> : null }</span>
            </li>
            <li>
              <span><GiWhirlwind/> Wind</span>
              <span>{data.main ? <p>{data.wind.speed} km/h</p> : null }</span>
            </li>
          </ul> 
          

          <div className="underline"></div>

          <h2>Favorite</h2>

          <Splide options={{ perPage:2,
        drag:"free",
        gap:"6rem"
      
        }}>

          {fav?.map((item,idx)=>{
          return(
            <SplideSlide key={idx} >
            <div  className='inner-favorite'>
              <p>{item.name}</p>
            <div className='temp-icon'>
              <h1>{item.main?.temp.toFixed()}°C</h1> 
            <div>
              <img
              src={`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
              alt="icon" className='icon'
              /> 
            </div>
              
            </div>
            
            <button onClick={()=>removefav(item.id)} className='icon-details-trash'><BiTrashAlt/> </button>
          </div>
          </SplideSlide>
          )
        })}
        </Splide>
        </div>
      </div>
    </div>
  )
}

export default Details
