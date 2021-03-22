// Styles

import { useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { startTimer, tick, stopTimer } from "../../redux/slices/timer";

function Timer() {
  console.log("timer render");
  const location = useLocation();
  const dispatch = useDispatch();

  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );
  const triesValue = useSelector((state) => state.mastermind.tries);

  const timerValue = useSelector((state) => state.timer.timerTime);
  const timerIsOn = useSelector((state) => state.timer.timerOn);

  const timerRef = useRef(null);

  useEffect(() => {
    if (previousPlayValue.length === triesValue) {
      dispatch(stopTimer());
    }
  }, [previousPlayValue]);

  useEffect(() => {
    if (
      previousPlayValue.length < triesValue &&
      ((previousPlayValue.length > 0 &&
        location.pathname === "/game" &&
        timerIsOn === true) ||
        (location.pathname === "/game" && timerIsOn === true))
    ) {
      const timerId = setInterval(() => dispatch(tick()), 1000);

      dispatch(
        startTimer({
          timerId: timerId,
        })
      );
      return () => clearInterval(timerId);
    }
  }, [previousPlayValue, location, timerIsOn]);

  const formatTime = (timerTime) => {
    const getSeconds = `0${timerTime % 60}`.slice(-2);
    const minutes = `${Math.floor(timerTime / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `${Math.floor(timerTime / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div ref={timerRef} className="navbt">
      {formatTime(timerValue)}
    </div>
  );
}
export default Timer;
