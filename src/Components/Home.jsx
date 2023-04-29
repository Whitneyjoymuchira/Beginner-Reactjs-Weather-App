import React, { useEffect, useState } from "react";
import "../Style.css";
import axios from "axios";

// 8474d16f15c617fe50212eb57d4b9897
//a9390c662ce41bbd5a17330da8938f79
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: "public/Images/sun-g0835252c1_1280.png",
  });
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    handleClick();
  }, []);

  const getName = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8474d16f15c617fe50212eb57d4b9897&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => res)
        .then((info) => {
          let imagePath = "public/Images/sun-g0835252c1_1280.png";
          if (info.data.weather[0].main == "Clouds") {
            imagePath = "public/Images/cloud-g0c4cbf8ff_1280.png";
          }
          if (info.data.weather[0].main == "Clear") {
            imagePath = "public/Images/sun-g0835252c1_1280.png";
          }
          if (info.data.weather[0].main == "Rain") {
            imagePath = "public/Images/raincloud-g3e1302013_1280.png";
          }
          if (info.data.weather[0].main == "Mist") {
            imagePath = "public/Images/fog-g01a09fdf4_1280.png";
          } else {
            imagePath = "public/Images/sun-g0835252c1_1280.png";
          }
          setData({
            ...data,
            celcius: info.data.main.temp,
            name: info.data.name,
            humidity: info.data.main.humidity,
            speed: info.data.wind.speed,
            image: imagePath,
          });
          setError("");
        })
        .catch((err) => {
          if (err !== "") {
            setError("CITY NOT FOUND");
          } else {
          }
        });
    }
  };
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input onChange={getName} type="text" placeholder="Enter City Name.." />
          <button onClick={handleClick}>
            <img src="public/Images/search.png" />
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        <div className="winfo">
          <img src={data.image} />
          <h1>{Math.round(data.celcius)} °C</h1>
          <h2>{data.name}</h2>
          <div className="details">
            <div className="col">
              <img src="public/Images/pngwing.com.png" alt="" />
            </div>
            <p className="humidity">{Math.round(data.humidity)} % </p>
            <p>Humidity</p>
            <div className="col">
              <img src="public/Images/—Pngtree—vector wind icon_4183797.png" alt="" />
            </div>
            <div className="wind">
              <p>{Math.round(data.speed)} Km/hr</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
