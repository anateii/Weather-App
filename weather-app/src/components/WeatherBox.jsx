import "./main.css";

const WeatherBox = () => {
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
        <div className="location">London, UK</div>
        <div className="date">{dateBuilder(new Date())}</div>
        <div className="temperature"> 17°C</div>
        <div id="condition">Sunny</div>
      </div>
    </div>
  );
};

export default WeatherBox;
