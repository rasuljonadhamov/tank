const Features = () => {
  return (
    <section className="bg-blackBg text-white p-8 ">
      <div className=" mx-auto flex justify-between  items-center">
        <div className="text-left p-4 border w-[410px] h-[136px] flex gap-5">
          <img
            className="w-[27px] h-9 mt-3"
            src="/public/svg/award1.svg"
            alt=""
          />
          <div className="warpper">
            <p className="text-2xl font-bold">Официальный дилер</p>
            <p>Гарантируем высокое качество обслуживания.</p>
          </div>
        </div>
        <div className="text-left p-4 border w-[410px] h-[136px] flex gap-5">
          <img
            className="w-[27px] h-9 mt-3"
            src="/public/svg/award2.svg"
            alt=""
          />
          <div className="warpper">
            <p className="text-2xl font-bold">Покупка авто за 1 день</p>
            <p>Удобный процесс покупки, включая оформление всех документов.</p>
          </div>
        </div>
        <div className="text-left p-4 border w-[410px] h-[136px] flex gap-5">
          <img
            className="w-[27px] h-9 mt-3"
            src="/public/svg/award3.svg"
            alt=""
          />
          <div className="warpper">
            <p className="text-2xl font-bold">Все комплектации в наличии</p>
            <p>Широкий выбор комплектаций, с полным пакетом документов.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
