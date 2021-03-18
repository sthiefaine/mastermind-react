import { useState, useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { startTimer, tick } from "../features/timer";

import { Fade } from "../animations/fade";

import { LetterMIcon } from "../app/iconsSVG";
function Header() {
  const location = useLocation();
  const dispatch = useDispatch();

  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );

  const triesValue = useSelector((state) => state.mastermind.possibilities);
  const userWinValue = useSelector((state) => state.mastermind.userWin);

  const timerValue = useSelector((state) => state.timer.timerTime);
  const timerIsOn = useSelector((state) => state.timer.timerOn);

  const timerRef = useRef(null);

  useEffect(() => {
    if (
      (previousPlayValue.length > 0 && location.pathname === "/game") ||
      (location.pathname === "/game" && timerIsOn === true)
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
    const getHours = `0${Math.floor(timerTime / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <LetterMIcon />
        </Link>
      </div>

      <div className="nav">
        {location.pathname === "/game" && (
          <>
            <Fade
              visible={true}
              duration={400}
              animateEnter={true}
              from={{ opacity: 0, x: -1 }}
            >
              <div ref={timerRef} className="navbt">
                {formatTime(timerValue)}
              </div>
            </Fade>

            <Fade
              visible={true}
              duration={600}
              animateEnter={true}
              from={{ opacity: 0, y: 10, x: 1000 }}
              transformType="translate"
            >
              <div className="navbt">
                {(previousPlayValue?.length || 0) + " / " + triesValue}
              </div>
            </Fade>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
