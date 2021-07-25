import { navType } from "../util/types";

type NavigationProps = {
    list: navType[];
    currentActive: string;
    onClick: (key: string) => void;
};

export const Navigation: React.FC<NavigationProps> = ({
    list,
    currentActive,
    onClick,
}) => {
    return (
        <ul className='flex py-2 px-4 bg-white rounded dark:bg-darkBgElement'>
            {list.map((item, i) => {
                const { displayText, key } = item;
                const StyleNav =
                    key === currentActive
                        ? "border-green-500 bg-green-500 hover:bg-green-700 text-white"
                        : "border-white bg-white hover:border-gray-200 text-green-500 hover:bg-gray-200 dark:bg-darkBgElement dark:border-darkBgElement";
                return (
                    <li key={i} className='flex-1 ' onClick={() => onClick(key)}>
                        <a
                            className={`text-center block rounded border py-2 px-4  ${StyleNav}`}>
                            {displayText}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};
