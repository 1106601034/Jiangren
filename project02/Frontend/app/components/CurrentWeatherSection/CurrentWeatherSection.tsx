import React from "react";

const CurrentWeatherSection = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="txet-9xl">12</h2>
          <p className="txet-7xl">Cloudy</p>
        </div>
        <div className="flex">
          <p>Humidity: 80%</p>
          <br />
          <p>Wind: 10 km/h</p>
        </div>
        <h2>FRANCE</h2>
      </div>
      {/* <Map /> */}
    </div>
  );
};

export default CurrentWeatherSection;
