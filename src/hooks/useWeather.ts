import { useState, useEffect } from "react";
import {
    fetchWeatherByCountry,
    fetchWeatherByLocation,
} from "../apis/weather.api";

const INIT_COUNTRY_LIST = [
    "Korea",
    "Japan",
    "America",
    "Swiss",
    "France",
    "Austria",
    "Finland",
    "Italy",
];

export const useWeather = () => {
    const [currentPositionData, setCurrentPositionData] = useState<any[]>([]);
    const [allData, setAllData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAllWeather = async () => {
        const promises: any[] = [];

        await INIT_COUNTRY_LIST.forEach((element) => {
            promises.push(fetchWeatherByCountry(element));
        });

        await Promise.all(promises).then((arrOfResults) => {
            console.log(arrOfResults);
            setAllData(arrOfResults);
        });

        setLoading(false);
    };

    const getCurrentPosition = () =>
        navigator.geolocation.getCurrentPosition(fetchWeatherByPosition);

    const fetchWeatherByPosition = async (position: GeolocationPosition) => {
        const {
            coords: { latitude, longitude },
        } = position;
        setLoading(true);
        const data = await fetchWeatherByLocation(latitude, longitude);
        setCurrentPositionData([data]);
        setLoading(false);
    };

    const reset = () => {
        fetchAllWeather();
        getCurrentPosition();
    };

    useEffect(() => {
        fetchAllWeather();
        getCurrentPosition();
    }, []);

    return { allData, loading, getCurrentPosition, currentPositionData };
};
