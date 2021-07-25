import "./style.css";
import { WeatherType } from '../../../utils/types';

export const selectWeatherIcon = (type: WeatherType) => {
    switch (type) {
        case "Clear":
            return <Sunny />;
        case "Snow":
            return <Flurries />;
        case "Clouds":
            return <Cloudy />;
        case "Drizzle":
        case "Rain":
            return <Rainy />;
        case "Atmosphere":
            return <SunnyShower />;
        case "Thunderstorm":
            return <ThunderStorm />;
        default:
            return <Sunny />;
    }
};

export const SunnyShower: React.FC = () => {
    return (
        <div className='icon sun-shower'>
            <div className='cloud'></div>
            <div className='sun'>
                <div className='rays'></div>
            </div>
            <div className='rain'></div>
        </div>
    );
};

export const ThunderStorm: React.FC = () => {
    return (
        <div className='icon thunder-storm'>
            <div className='cloud'></div>
            <div className='lightning'>
                <div className='bolt'></div>
                <div className='bolt'></div>
            </div>
        </div>
    );
};

export const Cloudy: React.FC = () => {
    return (
        <div className='icon cloudy'>
            <div className='cloud'></div>
            <div className='cloud'></div>
        </div>
    );
};

export const Flurries: React.FC = () => {
    return (
        <div className='icon flurries'>
            <div className='cloud'></div>
            <div className='snow'>
                <div className='flake'></div>
                <div className='flake'></div>
            </div>
        </div>
    );
};

export const Sunny: React.FC = () => {
    return (
        <div className='icon sunny'>
            <div className='sun'>
                <div className='rays'></div>
            </div>
        </div>
    );
};

export const Rainy: React.FC = () => {
    return (
        <div className='icon rainy'>
            <div className='cloud'></div>
            <div className='rain'></div>
        </div>
    );
};
