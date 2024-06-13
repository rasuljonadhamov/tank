import { useEffect, useState } from "react";
import Button from "../../../components/Button";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("7/13/2024").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(days)) {
        days = `0${days}`;
      }
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      }
      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      }
      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days, hours, minutes, seconds });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 mb-12 bg-grayish items-center justify-between px-6 lg:px-10 py-6 mt-5">
      <h3 className="text-2xl lg:text-3xl font-bold w-full lg:w-72 text-white text-center lg:text-left">
        Срок действия спецпредложения:
      </h3>
      <div className="w-full flex justify-center lg:justify-start">
        <div className="flex items-center text-white gap-5 lg:gap-10">
          <div className="time-section w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] border-[4px] border-primary rounded-full py-2 px-4 lg:py-4 lg:px-6 text-white">
            <div className="time-text text-2xl lg:text-3xl font-bold">
              {state.days || "00"}
            </div>
            <small className="time-text text-xs font-light">дня</small>
          </div>
          <div className="time-section">
            <div className="time text-2xl lg:text-3xl font-bold">:</div>
          </div>
          <div className="time-section w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] border-[4px] border-primary rounded-full py-2 px-4 lg:py-4 lg:px-6 text-white">
            <div className="time-text text-2xl lg:text-3xl font-bold">
              {state.hours || "00"}
            </div>
            <small className="time-text text-xs font-light">часов</small>
          </div>
          <div className="time-section">
            <div className="time text-2xl lg:text-3xl font-bold">:</div>
          </div>
          <div className="time-section w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] border-[4px] border-primary rounded-full py-2 px-4 lg:py-4 lg:px-6 text-white">
            <div className="time-text text-2xl lg:text-3xl font-bold">
              {state.minutes || "00"}
            </div>
            <small className="time-text text-xs font-light">минут</small>
          </div>
          <div className="time-section">
            <div className="time text-2xl lg:text-3xl font-bold">:</div>
          </div>
          <div className="time-section w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] border-[4px] border-primary rounded-full py-2 px-4 lg:py-4 lg:px-6 text-white">
            <div className="time-text text-2xl lg:text-3xl font-bold">
              {state.seconds || "00"}
            </div>
            <small className="time-text text-xs font-light">секунд</small>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
        <Button text={"Узнать цену с выгодами"} />
      </div>
    </div>
  );
};

export default Countdown;
