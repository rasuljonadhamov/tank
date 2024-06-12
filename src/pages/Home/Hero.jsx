const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <img
        src={"/public/img/hero-bg.png"}
        alt="Tank 500"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center pl-24 items-start">
        <p className="text-xl text-white ">Улучшим любые условия</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TANK 500</h1>
        <p className="text-xl mb-8 text-white ">
          Осталось всего 5 автомобилей!
        </p>

        <button className="bg-orange-500 hover:bg-orange-700 flex gap-5 items-center text-black font-bold py-2 px-4 rounded">
          Получить предложение
          <img src="/public/svg/right.svg" alt="" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
