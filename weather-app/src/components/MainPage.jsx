import WeatherBox from "./WeatherBox";
import "./main.css";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city,setCity] = useState('')

  useEffect(() => {
    fetchData();
  }, [lat,long]);

  
  const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };




  return (
    <main>
      <div id="container-wrapper">
        <div id="input-wrapper" >
       
           <input
            type="text"
            placeholder="Search for..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
           // onKeyDown={handleSearch}
          />
          {typeof data.main != "undefined" ? (
            <WeatherBox weatherData={data} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
