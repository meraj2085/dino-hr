type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div>
      <h1 className="text-start text-4xl font-bold mb-4 mt-2">
        <span className="text-gradient-action">{title}</span>
      </h1>
      <div className="flex justify-between items-center mb-4 mt-5">{children}</div>
    </div>
  );
};

export default ActionBar;
