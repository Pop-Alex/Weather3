import React,{useContext} from 'react'
import {WeahterContext} from '../context'
const Forecast = () => {
  const {data,forecast} = useContext( WeahterContext)
  
  return (
    <div className='forecast-box'>

      
    </div>
  )
}

export default Forecast
