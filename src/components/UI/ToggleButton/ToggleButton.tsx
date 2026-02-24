type ToggleButtonProps = {
  onClick: () => void;
  content: string;
  className?: string;
};

const ToggleButton = ({ onClick, content, className }: ToggleButtonProps) => {
  const classes =
    "py-2 px-5 bg-black/50 text-white rounded-xl cursor-pointer active:scale-95";

  return (
    <button type="button" onClick={onClick} className={`${classes} ${className}`}>
      {content}
    </button>
  );
};

export default ToggleButton;
