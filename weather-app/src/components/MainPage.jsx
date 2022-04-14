
import WeatherBox from "./WeatherBox";
import "./main.css";
import { useState } from "react";





const MainPage = () => {

//mykey= c82f22d5936febcd7279507dee6fe70b

//{city name}&limit={limit}&appid={API key}

const [query,setQuery] = useState('');
const [weather,setWeather] = useState({});





const search = event => {
if (event.key ==="Enter") {
 fetch (`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=c82f22d5936febcd7279507dee6fe70b`)
}

}




  return (
   <main>
        <div id="container-wrapper">
          <div id="input-wrapper"> 
            <input 
            type="text" 
            placeholder="Search for..." 
            value={query} 
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
             />
            <WeatherBox/>
          </div>
       </div> 
       
   </main>
  );
};

export default MainPage;
