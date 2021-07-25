export const fetchWeatherByCountry = async (country: string) => {
    return await fetch(
        `${process.env.REACT_APP_API_URL}/weather?q=${country}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
        .then((res) => res.json())
        .then((res) => {
            if (res.cod === 200) {
                return res;
            } else {
                console.log(res);
                return [];
            }
        });
};

export const fetchWeatherByLocation = async (
    latitude: number,
    longitude: number
) => {
    return await fetch(
        `${process.env.REACT_APP_API_URL}/weather?lat=${latitude}&lon=${longitude}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            if (res.cod === 200) {
                return res;
            } else {
                console.log(res);
                return [];
            }
        });
};
