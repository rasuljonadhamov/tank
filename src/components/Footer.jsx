import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer px-10">
      <meta itemProp="name" content="АВТОРУСЬ TANK Лосиный Остров" />
      <div className="footer__container container">
        <div className="footer__top-block">
          <div className="footer__row flex-wrap gap-5">
            <div className="footer__title-block">
              <div className="footer__title text-white">авторусь tank</div>
              <span className="footer__name">Официальный дилер</span>
            </div>
            <p className="footer__info"></p>
            <Button text={"Заказать звонок"} />
            <a className="footer__info" href="tel:+74951456865">
              <div className="wrapper ">
                <span className="block text-xl font-medium">
                  +7 (999) 999-99-99
                </span>
                <span className="text-gray text-sm flex gap-2">
                  <img src="/public/svg/dot.svg" alt="dot" /> Мы на связи
                </span>
              </div>
            </a>
            <meta itemProp="email" content="alfa_tank_avto@avtoruss.ru" />
          </div>

          <p className="text-white py-6 flex flex-wrap gap-5 justify-between">
            <span>
              Ярославское шоссе, владение 2 В, <br />
              строение 3 (МКАД, 95 км)
            </span>

            <div className="flex text-white gap-10">
              <p className="flex items-center gap-2 font-medium">
                <img
                  src="/public/svg/settings.svg"
                  className="w-5 h-5"
                  alt="settings"
                />
                Записаться на сервис
              </p>
              <p className="flex items-center gap-2 font-medium">
                <img
                  className="w-5 h-5"
                  src="/public/svg/speed.svg"
                  alt="speed"
                />
                Тест-драйв
              </p>
            </div>
          </p>
          <a className="footer__info footer__info_mob" href="tel:74951456865">
            <span>+7 (495) 145-68-65</span>
          </a>
          <div className="footer__info-block">
            <span className="footer__name">Официальный дилер</span>
            <span className="footer__text text-white">
              ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903
            </span>
          </div>
        </div>
        <div className="footer__bottom-block">
          <span className="footer__copyright">© 2024, АВТОРУСЬ ТАНК</span>
          <div className="footer__right-block">
            <a className="footer__link-sm" href="legal-info">
              Правовая информация
            </a>
            <a className="footer__link-sm" href="#">
              Условия акции
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
