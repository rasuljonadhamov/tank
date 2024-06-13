import Button from "../../components/Button";

const Hero = () => {
  return (
    <section className="relative top-0 bottom-0 bg-gray-900 text-white ">
      <img
        src={"/public/img/hero-bg.png"}
        alt="Tank 500"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black py-10 bg-opacity-50 flex flex-col justify-center pl-6 md:pl-24 items-start">
        <p className="text-lg md:text-xl text-white ">Улучшим любые условия</p>
        <h1 className="text-3xl md:text-6xl font-bold mb-4">TANK 500</h1>
        <p className="text-lg md:text-xl mb-8 text-white">
          Осталось всего 5 автомобилей!
        </p>
        <Button text={"Получить предложение"} />
      </div>
    </section>
  );
};

export default Hero;
