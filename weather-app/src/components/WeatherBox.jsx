import "./main.css";

const WeatherBox = ({weatherData}) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="weather-box">
      <div className="weather-wrapper">
        <div className="location">{weatherData.name}</div>
        <div className="date">{dateBuilder(new Date())}</div>
         <div className="temperature">  {Math.floor(weatherData.main.temp-273.15)}°C</div>
        <div id="condition">{weatherData.weather[0].description}</div> 
       <div>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
          </div>  
      </div>
    </div>
  );
};

export default WeatherBox;
