import React,{useContext} from 'react'
import './styleComp.css'
import {WeahterContext} from '../context'
const Loading = () => {
  const {loading} = useContext( WeahterContext)
  if(loading){
    return <div className='loader'></div>;
  }
  return (
    <div className='loader'>
      
    </div>
  )
}

export default Loading
