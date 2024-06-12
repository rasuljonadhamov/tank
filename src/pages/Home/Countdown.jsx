import { useEffect, useState } from "react";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("7/12/2024").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
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

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div className="flex bg-grayish items-center justify-between px-10 py-6 mt-5">
      <h3 className="text-3xl font-bold w-72 text-white">
        Срок действия спецпредложения:
      </h3>
      <div>
        <div className="flex items-center text-white gap-10">
          <div className="time-section w--[90px] h-[90px] border-[4px] border-primary rounded-full py-4 px-6 text-white">
            <div className="time-text text-3xl font-bold">
              {state.days || "0"}
            </div>
            <small className="time-text text-xs font-light">дня</small>
          </div>
          <div className="time-section">
            <div className="time">:</div>
          </div>
          <div className="time-section w--[90px] h-[90px] border-[4px] border-primary rounded-full py-4 px-6 text-white">
            <div className="time-text text-3xl font-bold">
              {state.hours || "00"}
            </div>
            <small className="time-text text-xs font-light">часов</small>
          </div>
          <div className="time-section">
            <div className="time">:</div>
          </div>
          <div className="time-section w--[90px] h-[90px] border-[4px] border-primary rounded-full py-4 px-6 text-white">
            <div className="time-text text-3xl font-bold">
              {state.minutes || "00"}
            </div>
            <small className="time-text text-xs font-light">минут</small>
          </div>
          <div className="time-section">
            <div className="time">:</div>
          </div>
          <div className="time-section w--[90px] h-[90px] border-2 border-primary rounded-full py-4 px-6 text-white">
            <div className="time-text text-3xl font-bold">
              {state.seconds || "00"}
            </div>
            <small className="time-text text-xs font-bold">секунд</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
