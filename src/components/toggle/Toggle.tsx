import "./style.css";

type ToggleProps = {
  id?: string;
  onClickToggle: () => void;
  isChecked: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({
  id,
  onClickToggle,
  isChecked,
  children,
}) => {
  return (
    <>
      <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
        <input
          type='checkbox'
          name={id}
          id={id}
          checked={isChecked}
          onChange={onClickToggle}
          className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
        />
        <label
          htmlFor={id}
          className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'></label>
      </div>
      <label htmlFor={id} className='text-xs text-gray-700  dark:text-white'>
        {children}
      </label>
    </>
  );
};
