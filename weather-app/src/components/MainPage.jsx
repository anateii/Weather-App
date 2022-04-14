import WeatherBox from "./WeatherBox";
import "./main.css";
import { useState, useEffect } from "react";

const MainPage = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
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
    fetchData();
  }, [lat, long]);

  return (
    <main>
      <div id="container-wrapper">
        <div id="input-wrapper">
          <input
            type="text"
            placeholder="Search for..."
            /* value={query} 
            onChange={e => setQuery(e.target.value)}
            onKeyDown={search} */
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
