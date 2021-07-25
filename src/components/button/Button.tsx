type Props = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Button: React.FC<Props> = (props) => {
    const { onClick, children } = props;
    return (
        <button
            className='py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 dark:bg-black focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75'
            onClick={onClick}>
            {children}
        </button>
    );
};