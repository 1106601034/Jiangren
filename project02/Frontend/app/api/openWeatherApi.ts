import axios from "axios";

export const getForecastData = async () => {
  const API_KEY = "<YOUR_API_KEY>";
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
