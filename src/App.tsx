import {
  Button,
  Card,
  WeatherCard,
  SkeletonLoaderCard,
  Navigation,
  Toggle,
} from "./components";
import { useState, useMemo } from "react";
import { IconSunny, IconMoon } from "./images";
// import {
//   Sunny,
//   SunnyShower,
//   ThunderStorm,
//   Cloudy,
//   Flurries,
//   Rainy,
//   selectWeatherIcon,
// } from "./components/icons";
import { useWeather, useDarkMode } from "./hooks";
import { navType } from "./util/types";
import "./App.css";

const navs: navType[] = [
  {
    key: "all",
    displayText: "ALL",
  },
  {
    key: "currentLocation",
    displayText: "Current Location",
  },
];

export const App: React.FC = () => {
  const { allData, loading, currentPositionData } = useWeather();
  const { isDarkMode, handleDarkModeChange } = useDarkMode();
  const [currentNav, setCurrentNav] = useState<string>("all");

  const onClickButton = () => {
    console.log(allData);
  };

  const handleCurrentNavChange = (key: string) => setCurrentNav(key);

  const skeletonLoaderCard = useMemo(
    () =>
      [...Array(4)].map((_, i) => {
        const Styleodd = i % 2 !== 0 ? "ml-mdLgCard" : "";
        const StylenotFirstLine = i > 1 ? "mt-3" : "";

        return (
          <Card key={i} customStyle={`${Styleodd} ${StylenotFirstLine} dark:bg-darkBgElement`}>
            <SkeletonLoaderCard />
          </Card>
        );
      }),
    []
  );

  const allWeatherCard = useMemo(
    () =>
      allData.map((item, i) => {
        // Too Many Requests or empty
        if (Array.isArray(item))
          return (
            <Card key={i}>
              <SkeletonLoaderCard />
            </Card>
          );
        const { name, weather, main } = item;
        const { feels_like, temp } = main;
        const { main: weatherStatus, icon } = weather[0];
        const oddStyle = i % 2 !== 0 ? "ml-mdLgCard" : "";
        const notFirstLineStyle = i > 1 ? "mt-3" : "";
        return (
          <Card
            key={i}
            weatherType={weatherStatus}
            customStyle={`${oddStyle} ${notFirstLineStyle}`}>
            <WeatherCard
              countryName={name}
              feelsLikes={feels_like}
              temp={temp}
              imgSrc={icon}
            />
          </Card>
        );
      }),
    [allData]
  );

  const currentPositionWeatherCard = useMemo(
    () =>
      currentPositionData.map((item, i) => {
        // Too Many Requests or empty
        if (Array.isArray(item))
          return (
            <Card key={i}>
              <SkeletonLoaderCard />
            </Card>
          );
        const { name, weather, main } = item;
        const { feels_like, temp } = main;
        const { main: weatherStatus, icon } = weather[0];
        return (
          <Card key={i} weatherType={weatherStatus}>
            <WeatherCard
              countryName={name}
              feelsLikes={feels_like}
              temp={temp}
              imgSrc={icon}
            />
          </Card>
        );
      }),
    [currentPositionData]
  );

  return (
    <div className='App py-11 dark:bg-darkBgLayout'>
      <div className='relative -my-0	mx-auto md:w-mdContainerSize lg:w-lgContainerSize'>
        <div>
          <div className='absolute right-0'>
            <Toggle
              id='text'
              onClickToggle={handleDarkModeChange}
              isChecked={isDarkMode}>
              Dark Mode
            </Toggle>
          </div>
          <div className='-my-0	mx-auto w-56'>
            <img
              className='animate-spin-slow w-full'
              src={isDarkMode ? IconMoon : IconSunny}
              alt={isDarkMode ? 'moon-icon' : 'suuny-icon'}
            />
          </div>
          <h2 className='mt-8 text-3xl font-sans font-bold dark:text-white'>
            Weather App
          </h2>
          <div className='mt-8'>
            <Navigation
              list={navs}
              currentActive={currentNav}
              onClick={handleCurrentNavChange}
            />
          </div>
          <div className='mt-3'>
            <Button onClick={onClickButton}>API CALL</Button>
          </div>
        </div>
        <div className='flex flex-wrap md:justify-between	 mt-8'>
          {loading
            ? skeletonLoaderCard
            : currentNav === "all"
              ? allWeatherCard
              : currentPositionWeatherCard}

          {/* <Card>
            <Sunny />
          </Card>
          <Card>
            <SunnyShower />
          </Card>
          <Card>
            <ThunderStorm />
          </Card>
          <Card>
            <Cloudy />
          </Card>
          <Card>
            <Flurries />
          </Card>
          <Card>
            <Rainy />
          </Card> */}
        </div>
      </div>
    </div>
  );
};

// 로딩 컴포넌트 작성

// darkMode background color: #18191B
// card : #424242
//  dynamic img load 중에는 카드를 안띄우도록 함
