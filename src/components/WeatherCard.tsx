import { countryEmoji } from "../util/constants";

type Props = {
    imgSrc: string;
    countryName: string;
    temp: number;
    feelsLikes: number;
};

export const WeatherCard: React.FC<Props> = (props) => {
    const { imgSrc, countryName, temp, feelsLikes } = props;
    return (
        <div>
            <div className='w-24 h-24'>
                <img src={`${process.env.REACT_APP_ICON_URL}/${imgSrc}@2x.png`} />
            </div>
            <div className='flex flex-col items-end mb-2'>
                <span>摂氏 : {temp}°C</span>
                <span>体感温度 : {feelsLikes}°C</span>
            </div>
            <div className='text-right'>
                <p className='bg-black px-4 inline-block'>
                    {`${countryEmoji(countryName)} ${countryName}`}
                </p>
            </div>
        </div>
    );
};
