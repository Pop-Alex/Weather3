import React, { useContext } from 'react'
import './styleComp.css'
import {FcSearch} from 'react-icons/fc'
import {WeahterContext} from '../context'
import {BiTrashAlt} from 'react-icons/bi'
const Details = () => {
  const {location,setLocation,searchLocation,data,fav,removefav} = useContext( WeahterContext)
  return (
    <div className='detail'>
      <div className="input-section">
        <input className='search-input' type="text" placeholder='Search'
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
              <span>Fells like</span>
              <span>{data.main ? <p>{data.main.feels_like.toFixed()} C</p> : null}</span>
            </li>
            <li>
              <span>Humidity</span>
              <span>{data.main ? <p>{data.main.humidity}%</p> : null }</span>
            </li>
          </ul>
          <div className="underline"></div>
          <h2>Favorite</h2>
          {fav.map((item,idx)=>{
          return(
            <div key={idx}>
            <p>{item.name}</p>
            <button onClick={()=>removefav(item.id)}><BiTrashAlt/> </button>
          </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Details
