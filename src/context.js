import React, { createContext,useState,useEffect,useCallback } from 'react'
import cold from './assests/cold.jpg'
import hot from './assests/hot.jpg'
import clouds from './assests/clouds.jpg'
import clear from './assests/clear.jpg'
import rain from './assests/rain.jpg'
import thunder from './assests/thunder.jpg'
import rain2 from './assests/rain2.jpg'
import axios from 'axios'
export const WeahterContext = createContext()

 export const ContextProvider  = ({children}) => {
    const [location,setLocation] = useState('')
    const [data,setData] = useState({})
    const [fav,setFav] = useState([])
    const [back,setBack] = useState()
    const [forecast, setForecast] = useState([]);
    const [loading ,setLoading] = useState(false)
     const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const[error,setError] = useState('')
    const [currentLoc,setCurrentLoc]  =useState()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&units=metric&appid=d4aa1045d463622f5b83f1df0aa53b27`
    const forecas = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=d4aa1045d463622f5b83f1df0aa53b27&units=metric
`

  
 useEffect(()=>{
    // getCurretnLocation()
      getUserCoordinates()
      setData(data)
      
    },[lat,long])


    
   
    const getUserCoordinates = () => {
     navigator.geolocation.getCurrentPosition((position) => {
       const { coords } = position;
       setLat(coords.latitude);
       setLong(coords.longitude);
     }, (error) => {
       setError('Wrong')
     })
   
  }
  console.log(lat,long)
  
  // const getCurretnLocation = async ()=>{
  //       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d4aa1045d463622f5b83f1df0aa53b27&units=metric`)
  //       const datas = await res.json()
  //       setCurrentLoc(datas)
  //   }
   
    //fetch data
    const searchLocation = (e)=>{
      setLoading(true)
      if(e.key === 'Enter' ){
        axios.get(url).then((response)=>{
          setData(response.data)
          console.log(response.data);
          //background change
          if(response.data.weather[0].main === "Clear")  setBack(clear)
           else if((response.data.weather[0].main === "Clouds")) setBack(clouds)
           else if((response.data.weather[0].main === "Drizzle")) setBack(rain)
           else if((response.data.weather[0].main === "Rain")) setBack(rain2)
           else if((response.data.weather[0].main === "ThunderStorm")) setBack(thunder)
           else if((response.data.weather[0].main === "Snow")) setBack(cold)
           setLoading(false)
        })
        setLocation('')
        axios.get(forecas).then((response)=>{
       setForecast(response.data)
        
        console.log(response.data);
      })
      }
  };
    
    //save favorite to local
    useEffect(() => {
		const watherFavourites = JSON.parse(
			localStorage.getItem('weather-app-fav')
      
		);

		if (watherFavourites) {
			setFav(watherFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('weather-app-fav', JSON.stringify(items));
	};

    //save button function
    const handelFav = ()=>{
      const newHandel = [...fav,data];
      setFav(newHandel);
      saveToLocalStorage(newHandel)
    }
    //delete button function
    const removefav = (id)=>{
      const remove = fav.filter((favo)=>favo.id !== id)
      setFav(remove)
      saveToLocalStorage(remove)
    }


   
    

    const contextValue = {
        searchLocation,
        location,
        back,
        data,
        setLocation,
        location,
        fav,
        handelFav,
        removefav,
        forecast,
        loading,
        lat,long
        ,currentLoc,
        
    }

  return (
    <WeahterContext.Provider value={contextValue
    }>
        {children}
    </WeahterContext.Provider>
  )
}


