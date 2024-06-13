import Button from "./Button";

const Header = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img
            src={"/svg/logo.svg"}
            alt=" Logo"
            className="mr-4 w-[31px] h-[40px] md:w-[54px] md:h-[69px]"
          />
          <div className="block -ml-12 md:hidden items-center">
            <h1 className="text-base font-medium">
              АВТОРУСЬ TANK Лосиный Остров
            </h1>
            <span className=" text-sm font-light text-gray">
              Официальный дилер
            </span>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <img
              src="/public/svg/phone.svg"
              alt="phone"
              className="w-6 h-6 text-white "
            />
            <img
              src="/public/svg/humburger.svg"
              alt="menu"
              className="w-6 h-6 text-white "
            />
          </div>
        </div>
        <div className="w-full  md:justify-between hidden md:block">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="mb-3 md:mb-0">
              <p className="text-gray">
                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
              </p>
            </div>
            <div className="flex gap-10">
              <p className="flex gap-2 font-medium">
                <img src="/public/svg/settings.svg" alt="settings" /> Записаться
                на сервис
              </p>
              <p className="flex gap-2 font-medium">
                <img src="/public/svg/speed.svg" alt="speed" /> Тест-драйв
              </p>
            </div>
          </div>
          <hr className="w-full h-1 text-gray my-3" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex  gap-5 items-center">
              <h1>АВТОРУСЬ TANK</h1>
              <hr className="h-7 rotate-90 w-7" />
              <span className="pl-4">Официальный дилер</span>
            </div>
            <div className="flex gap-10 items-center">
              <div className="wrapper">
                <span className="block text-xl font-medium">
                  +7 (999) 999-99-99
                </span>
                <span className="text-gray text-sm flex gap-2">
                  <img src="/public/svg/dot.svg" alt="dot" /> Мы на связи
                </span>
              </div>
              <Button text={"Заказать звонок"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
