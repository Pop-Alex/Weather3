import React,{useContext} from 'react'
import {WeahterContext} from '../context'
const Forecast = () => {
  const {data,forecast} = useContext( WeahterContext)
  
  return (
    <div className='forecast-box'>

      {forecast?.map((item)=>{
        return (
          <p>{item.weather[0].description}</p>
        )
      })}
      {/* {forecast.map((data) => {
                    return (
                        <p>{data.humidity} %</p>
                                    
                                
                                    
                                
                    )
                })} */}
    </div>
  )
}

export default Forecast
