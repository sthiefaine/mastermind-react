import { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { startTimer, tick, stopTimer } from "../../redux/slices/timer";

import { Fade } from "../../animations/fade";
import ThemeSelector from "../themes";
import { LetterMIcon, ReturnIcon } from "../../utils/icons";

// Styles
import { HeaderStyled } from "../../styles/headerStyled";

function Header() {
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
    const getHours = `0${Math.floor(timerTime / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <HeaderStyled>
      <div className="logo">
        <Link to="/">
          {location.pathname !== "/game" && <LetterMIcon />}
          {location.pathname === "/game" && (
            <div className="button-icon">
              <ReturnIcon />
            </div>
          )}
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
      <ThemeSelector />
    </HeaderStyled>
  );
}

export default Header;
