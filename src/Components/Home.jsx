import React from "react";
import "../Style.css";
function Home() {
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input type="text" placeholder="Enter City Name.." />
          <button>
            <img src="public/Images/search.png" />
          </button>
        </div>
        <div className="winfo">
          <img src="public/Images/raincloud-g3e1302013_1280.png" />
          <h1>22°C </h1>
          <h2>London</h2>
          <div className="details">
            <div className="col">
              <img src="public/Images/pngwing.com.png" alt="" />
            </div>
            <p className="humidity">20%</p>
            <p>Humidity</p>
            <div className="col">
              <img src="public/Images/—Pngtree—vector wind icon_4183797.png" alt="" />

            </div>
            <div className="wind">
            <p>2 Km/hr</p>
            <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
