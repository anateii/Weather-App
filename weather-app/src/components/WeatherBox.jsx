import "./main.css";

const WeatherBox = ({weather}) => {
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
        <div className="location"> {weather.name}</div>
        <div className="date">{dateBuilder(new Date())}</div>
        <div className="temperature"> {/* {Math.floor(weather.main.temp)} */}°C</div>
        <div id="condition">{/*  {weather.weather[0].main}  */}</div>
      </div>
    </div>
  );
};

export default WeatherBox;
