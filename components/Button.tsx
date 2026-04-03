type ButtonProps = {
  children: React.ReactNode;
  color: string;
  price?: number;
  textColor?: string
  disabled?: boolean
  classname?: string
  onClick?: () => void;
};

const Button = ({ children, color, textColor, disabled = false, onClick, classname }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        text-center
        rounded-sm
        w-40
        h-15
        cursor-pointer
        ${color}
        border-2
        ${textColor}
        disabled:bg-gray-500
        ${classname}
        sm:w-[90%]
    `}
    >
      {children}
    </button>
  );
};

export default Button;
