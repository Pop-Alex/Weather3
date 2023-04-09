import React,{useContext} from 'react'
import {WeahterContext} from '../context'
import './styleComp.css'
const CurrentLocation = () => {
    const {currentLoc} = useContext( WeahterContext)
    
  return (
    <div>
      <div className='main-info'>
        <h1>{currentLoc?.name}</h1> 
        <div className='temp'>
          
        </div>
        </div>
    </div>
  )
}

export default CurrentLocation
