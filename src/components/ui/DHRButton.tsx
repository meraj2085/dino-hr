type DHRButtonProps = {
  onClick: () => void;
  className?: string;
  text: string;
  disabled?: boolean;
  props?: any;
};

const DHRButton = ({
  onClick,
  className = "",
  text,
  ...props
}: DHRButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md ${
        props?.disabled && "cursor-not-allowed"
      } px-2 py-1.5 text-sm font-medium text-white shadow bg-[#00674A] hover:bg-[#175644] transition duration-300 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default DHRButton;
