import React, { Component, useContext } from 'react'
import Main from './components/Main'
import Details from './components/Details'
import {WeahterContext} from './context'
import Loading from './components/Loading'

function App() {
  const {back,loading,data} = useContext(WeahterContext)
  return (
    <div className="App" style={{ backgroundImage: `url(${back}) ` }}>
       <Main/>
       <Details/>  
    </div>
  );
}

export default App;
