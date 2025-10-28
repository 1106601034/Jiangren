import type { Route } from "./+types/home";
import CurrentWeatherSection from "~/components/CurrentWeatherSection/CurrentWeatherSection";
import SocialMediaSection from "~/components/SocialMediaSection/SocialMediaSection";
import ForecastCard from "~/components/ForecastCard/ForecastCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <div>
        <CurrentWeatherSection />
        <div>
          <SocialMediaSection />
          <ForecastCard />
        </div>
      </div>
    </div>
  );
}
