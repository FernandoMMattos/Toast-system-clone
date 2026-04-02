type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  text?: string
};

const PaymentButton = ({ children, onClick, color = "white", text }: ButtonProps) => {
  return (
    <button className={`p-4 bg-${color} cursor-pointer text-${text}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PaymentButton;
