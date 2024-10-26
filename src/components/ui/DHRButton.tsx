// type DHRButtonProps = {
//   onClick: () => void;
//   className?: string;
//   text: string;
//   disabled?: boolean;
//   props?: any;
// };

// const DHRButton = ({
//   onClick,
//   className = "",
//   text,
//   ...props
// }: DHRButtonProps) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`rounded-md ${
//         props?.disabled && "cursor-not-allowed"
//       } px-2 py-1.5 text-sm font-medium text-white shadow tracking-wider bg-[#00674A] hover:bg-[#175644] transition duration-300 ${className}`}
//       {...props}
//     >
//       {text}
//     </button>
//   );
// };

// export default DHRButton;

type DHRButtonProps = {
  onClick?: () => void;
  className?: string;
  text: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  props?: any;
};

const DHRButton = ({
  onClick,
  className = "",
  text,
  icon,
  ...props
}: DHRButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-md ${
        props?.disabled && "cursor-not-allowed"
      } px-4 py-1.5 text-sm font-medium text-white shadow tracking-wider bg-[#00674A] hover:bg-[#175644] transition duration-300 ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default DHRButton;
