import { useEffect, useState, type JSX } from "react";
import { getForecastData } from "~/api/openWeatherApi";
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiRainMix,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const weatherMap: Record<string, JSX.Element> = {
  "broken clouds": <WiDaySunny size={100} color="#000" />,
  "overcast clouds": <WiDaySunnyOvercast size={100} color="#000" />,
  "light rain": <WiRainMix size={100} color="#000" />,
  "few clouds": <WiCloudy size={100} color="#000" />,
  "scattered clouds": <WiCloudy size={100} color="#000" />,
  "shower rain": <WiRain size={100} color="#000" />,
  rain: <WiRain size={100} color="#000" />,
  thunderstorm: <WiThunderstorm size={100} color="#000" />,
  snow: <WiSnow size={100} color="#000" />,
  "clear sky": <WiDaySunny size={100} color="#000" />,
};

const ForecastSection = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const forecastData = await getForecastData();
      setForecastData(
        forecastData.list.filter((item: any) =>
          item.dt_txt.includes("12:00:00")
        )
      );
    };
    fetchData();
  }, []);

  return (
    <div className="p-10 flex">
      {forecastData.map((item: any) => (
        <div className="flex flex-col items-center" key={item.dt}>
          <h2 className="text-2xl font-bold">
            {new Date(item.dt * 1000)
              .toLocaleDateString("en-US", {
                weekday: "short",
              })
              .toUpperCase()}
          </h2>
          <p className="text-lg">
            {weatherMap[item.weather[0].description] || (
              <WiDaySunny size={100} color="#000" />
            )}
          </p>
          <p className="text-3xl font-bold mb-3">
            {Number.parseInt(item.main.temp, 10)}°C
          </p>
          <p className="text-xs font-extralight">
            {item.weather[0].description.toUpperCase().split(" ").pop()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForecastSection;
