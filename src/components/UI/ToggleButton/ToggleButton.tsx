type ToggleButtonProps = {
  onClick: () => void;
  content: string;
  className?: string;
};

const ToggleButton = ({ onClick, content, className }: ToggleButtonProps) => {
  const classes =
    "py-2 px-5 bg-[#252836] hover:bg-[#2e3247] text-slate-300 hover:text-white rounded-lg cursor-pointer active:scale-95 border border-white/10 transition-colors";

  return (
    <button type="button" onClick={onClick} className={`${classes} ${className}`}>
      {content}
    </button>
  );
};

export default ToggleButton;
