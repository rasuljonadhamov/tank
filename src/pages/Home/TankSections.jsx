import tank300Image from "../../../public/svg/tank300.svg";
import tank500Image from "../../../public/svg/tank500.svg";
import Button from "../../components/Button";
import CarFeatures from "./CarFeatures";

const TankSections = () => {
  return (
    <section className="bg-blackSecondary text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Tank 300 Section */}
        <div className="bg-gray-800 p-4 md:p-8 mb-12 rounded-lg">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-evenly mb-4">
            <img
              src={tank300Image}
              alt="Tank 300"
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <p className="text-primary text-lg font-medium">
                Только в АВТОРУСЬ!
              </p>
              <h3 className="text-2xl md:text-4xl font-bold -mt-3">TANK 300</h3>
              <p className="font-medium text-xl md:text-3xl">
                Выгода по Trade-In <br /> до 450 000 ₽{" "}
              </p>
              <Button text={"Узнать стоимость по акции"} />
              <Button
                text={"Тест-драйв"}
                className={
                  "bg-blackSecondary text-white border-primary border-2"
                }
              />
              <Button
                text={"Рассчитать кредит"}
                className={
                  "bg-blackSecondary text-white border-primary border-2"
                }
              />
            </div>
          </div>
          <CarFeatures />
        </div>

        {/* Tank 500 Section */}
        <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-evenly mb-4">
            <div className="flex flex-col gap-4">
              <p className="text-primary text-lg font-medium">
                Только в АВТОРУСЬ!
              </p>
              <h3 className="text-2xl md:text-4xl font-bold -mt-3">TANK 500</h3>
              <p className="font-medium text-xl md:text-3xl">
                Выгода по Trade-In <br /> до 450 000 ₽{" "}
              </p>
              <Button text={"Узнать стоимость по акции"} />
              <Button
                text={"Тест-драйв"}
                className={
                  "bg-blackSecondary text-white border-primary border-2"
                }
              />
              <Button
                text={"Рассчитать кредит"}
                className={
                  "bg-blackSecondary text-white border-primary border-2"
                }
              />
            </div>

            <img
              src={tank500Image}
              alt="Tank 500"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
          <CarFeatures />
        </div>
      </div>
    </section>
  );
};

export default TankSections;
