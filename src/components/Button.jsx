const Button = ({ text }) => {
  return (
    <button className="bg-primary text-black flex gap-2 py-3 px-7 text-sm rounded-lg">
      <img src="/svg/phone.svg" alt="" />
      {text}
    </button>
  );
};

export default Button;
