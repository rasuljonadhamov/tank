const Features = () => {
  return (
    <section className="bg-blackBg text-white p-8">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        <div className="text-left p-4 border w-full lg:w-[410px] h-[136px] flex gap-5">
          <img
            className="w-[27px] h-9 mt-3"
            src="/public/svg/award1.svg"
            alt=""
          />
          <div className="wrapper">
            <p className="text-2xl font-bold">Официальный дилер</p>
            <p>Гарантируем высокое качество обслуживания.</p>
          </div>
        </div>
        <div className="text-left p-4 border w-full lg:w-[410px] h-[136px] flex gap-5">
          <img
            className="w-[27px] h-9 mt-3"
            src="/public/svg/award2.svg"
            alt=""
          />
          <div className="wrapper">
            <p className="text-2xl font-bold">Покупка авто за 1 день</p>
            <p>Удобный процесс покупки, включая оформление всех документов.</p>
          </div>
        </div>
        <div className="text-left p-4 border w-full lg:w-[410px] h-[136px] flex gap-5">
          <img
            className="w-[27px] h-9 mt-3"
            src="/public/svg/award3.svg"
            alt=""
          />
          <div className="wrapper">
            <p className="text-2xl font-bold">Все комплектации в наличии</p>
            <p>Широкий выбор комплектаций, с полным пакетом документов.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-4xl font-bold text-center mb-10 text-white">
          ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ <br /> ДОПОЛНИТЕЛЬНУЮ
          ВЫГОДУ 100 000 ₽
        </h3>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="car-wrapper text-center">
            <img src="/public/svg/tank300.svg" alt="Tank 300" />
            <p className="text-xl">Tank 300</p>
          </div>
          <div className="car-wrapper text-center">
            <img src="/public/svg/tank500.svg" alt="Tank 500" />
            <p className="text-xl">Tank 500</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
