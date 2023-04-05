import React, { Component, useContext } from 'react'
import Main from './components/Main'
import Details from './components/Details'
import {WeahterContext} from './context'
function App() {
  const {back} = useContext(WeahterContext)
  return (
    <div className="App" style={{ backgroundImage: `url(${back}) ` }}>
      
        <Main/>
      
     
<Details/>  
     
     
    </div>
  );
}

export default App;
