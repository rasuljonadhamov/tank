import Button from "../../../components/Button";

const Contact = () => {
  return (
    <div className="contacts__wrap">
      <div id="map" className="contacts__map" style={{}}>
        <ymaps
          className="ymaps-2-1-79-map ymaps-2-1-79-i-ua_js_yes ymaps-2-1-79-map-bg ymaps-2-1-79-islets_map-lang-ru"
          style={{ width: 397, height: 451, zIndex: 0 }}
        >
          <div className="w-full px-10 mt-20 h-[456px] rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7057394983085!2d69.29709827593646!3d41.35874927130349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3eecc32fa39%3A0xf38c9e8123f0f5b5!2sShirmobnuloq!5e0!3m2!1sen!2s!4v1710237073429!5m2!1sen!2s"
              width="1296"
              height="550"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </ymaps>
      </div>
      <div className="contacts__text-block flex-wrap gap-4">
        <div className="contacts__col">
          <span className="contacts__type">Адрес</span>
          <span className="contacts__value">
            Москва, Ярославское ш, владение 2 В, <br />
            строение 3 (95 км МКАД)
          </span>
        </div>
        <div className="contacts__col">
          <span className="contacts__type">Телефон</span>
          <a className="" href="tel:+74951456865">
            <div className="text-left">
              <span className="block text-xl font-medium">
                +7 (999) 999-99-99
              </span>
              <span className="text-gray text-sm flex gap-2">
                <img src="/public/svg/dot.svg" alt="dot" /> Мы на связи
              </span>
            </div>
          </a>
        </div>
        <div className="contacts__col">
          <span className="contacts__type">Режим работы</span>
          <span className="contacts__value">
            Ежедневно <br />с 09:00 до 21:00
          </span>
        </div>

        <a className="contacts__btn button js-open-modal" href="#callback">
          <Button text={"Заказать звонок"} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
