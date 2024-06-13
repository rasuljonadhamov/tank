const Button = ({ text, className = "bg-primary" }) => {
  return (
    <button
      className={` text-black flex items-center gap-2 py-3 px-7 text-sm rounded-lg ${className}`}
    >
      {text}
      <img src="/public/svg/right.svg" alt="" />
    </button>
  );
};

export default Button;
