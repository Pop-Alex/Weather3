import React,{useContext} from 'react'
import {WeahterContext} from '../context'
import './styleComp.css'
const CurrentLocation = () => {
    const {currentLoc} = useContext( WeahterContext)
    
  return (
    <div>
      <div className='main-info'>
        <div className="name-current">
         <h1>{currentLoc?.name}</h1> 
        </div>
        <div className='temp-current'>
        {currentLoc ? <p>{currentLoc.main?.temp.toFixed()}°C</p>  : null }    
        </div>
        </div>
    </div>
  )
}

export default CurrentLocation
