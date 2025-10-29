import type { Route } from "./+types/home";
import CurrentWeatherSection from "~/components/CurrentWeatherSection/CurrentWeatherSection";
import SocialMediaSection from "~/components/SocialMediaSection/SocialMediaSection";
import ForecastSection from "~/components/ForecastCard/ForecastCard";
import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg flex items-center justify-center">
      <div className="bg-white text-black rounded-lg" style={{ minWidth: 800 }}>
        <CurrentWeatherSection />
        <div className="flex">
          <SocialMediaSection />
          <ForecastSection />
        </div>
      </div>
    </div>
  );
}
