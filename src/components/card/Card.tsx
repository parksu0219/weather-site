import { WeatherType } from "../../utils/types";

type CardProps = {
    children: React.ReactNode;
    customStyle?: string;
    weatherType?: WeatherType;
};

export const Card: React.FC<CardProps> = (props) => {
    const { children, weatherType = "", customStyle = "" } = props;
    return (
        <div
            className={`inline-block lg:w-lgCardSize md:w-mdCardSize bg-white bg-${weatherType} text-white rounded-lg p-4 hover:opacity-80 shadow-md ${customStyle}`}>
            {children}
        </div>
    );
};

// bg-gray-900
