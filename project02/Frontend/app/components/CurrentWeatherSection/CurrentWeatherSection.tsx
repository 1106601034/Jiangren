import { useEffect, useState } from "react";
import "./CurrentWeatherSection.css";
import generateWeatherImage from "~/api/openAi";
import "./CurrentWeatherSection.css";

const CurrentWeatherSection = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const result = await generateWeatherImage();
        if (isMounted) {
          setImageUrl(result);
        }
      } catch (err) {
        console.error("Failed to generate weather image", err);
      }
    };
    fetchImage();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      className="rounded-lg flex justify-between px-50 pt-10 pb-50 text-white"
      style={{ backgroundColor: "#2f237c" }}
    >
      <div className="text-center">
        <div>
          <h2 className="text-9xl">12 </h2>
          <p className="text-4xl">{"CLOUDY".split(" ").pop()}</p>
        </div>
        <div className="flex justify-center gap-10  mt-7">
          <div>
            <p className="text-sm mb-3">HUMIDITY</p>
            <p>80%</p>
          </div>
          <hr style={{ background: "white", width: "2px", height: "45px" }} />
          <div>
            <p className="text-sm mb-3">WIND</p>
            <p>15 km/h</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl city-title">FRANCE</h2>
        <img src={imageUrl} alt="Weather Illustration" />
      </div>
      {/* Weather information will be displayed here */}
    </div>
  );
};

export default CurrentWeatherSection;
