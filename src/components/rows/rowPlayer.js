import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  previousPlay,
  help,
  userWin,
  colorPalette,
  userClick,
  cleanGame,
} from "../../redux/slices/mastermind";

import { setTimerOn, resetTimer, stopTimer } from "../../redux/slices/timer";

import { Fade } from "../../animations/fade";

import { RowStyled } from "../../styles/RowStyled";
import { IconStyled } from "../../styles/IconStyled";
import { ButtonXLStyled } from "../../styles/buttons/ButtonXLStyled";

import { PlayAgainIcon, ArrowIcon, FingerClickIcon } from "../../utils/icons";

function RowPlayer() {
  const dispatch = useDispatch();

  const solutionValue = useSelector((state) => state.mastermind.solution);
  const jeuModelValue = useSelector((state) => state.mastermind.jeuModel);
  const jeuValue = useSelector((state) => state.mastermind.jeu);
  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );
  const triesValue = useSelector((state) => state.mastermind.tries);
  const userClickValue = useSelector((state) => state.mastermind.userClick);
  const userWinValue = useSelector((state) => state.mastermind.userWin);
  const possibilities = useSelector((state) => state.mastermind.possibilities);

  const timerValue = useSelector((state) => state.timer.timerTime);

  const displayColors = (i) => {
    if (i === null) {
      return;
    }
    if (userClickValue !== i) {
      dispatch(colorPalette(true));
    } else {
      dispatch(colorPalette(false));
    }

    dispatch(
      userClick({
        id: i,
      })
    );
    dispatch(setTimerOn(true));
  };

  const getSeconds = `0${timerValue % 60}`.slice(-2);
  const minutes = `${Math.floor(timerValue / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timerValue / 3600)}`.slice(-2);

  const handleSubmitPlay = (info) => {
    dispatch(
      previousPlay({
        h: getHours,
        m: getMinutes,
        s: getSeconds,
      })
    );

    compareWithSolution();
  };

  const compareWithSolution = () => {
    let userWinCounter = 0;
    let tmpHelpArray = [];

    for (let i = 0; i < possibilities; i++) {
      if (solutionValue[i] === jeuValue[i]) {
        userWinCounter += 1;
        tmpHelpArray.push("good");

        if (userWinCounter === possibilities) {
          dispatch(userWin());
          dispatch(stopTimer());
        }
      } else if (solutionValue.includes(jeuValue[i])) {
        tmpHelpArray.push("wrong");
      } else {
        tmpHelpArray.push("none");
      }
    }

    const randomize = (tab) => {
      let i, j, tmp;

      for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
      }

      return tab;
    };

    dispatch(
      help({
        id: previousPlayValue.length === 0 ? 0 : previousPlayValue.length,
        value: tmpHelpArray,
        valueRandom: randomize(tmpHelpArray),
      })
    );
  };

  const [fingertap, setfingertap] = useState(
    previousPlayValue.length > 0 ? false : true
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setfingertap(false);
    }, 2100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const onClickCleanGame = () => {
    dispatch(cleanGame());
    dispatch(resetTimer());
  };

  return (
    <>
      <Fade
        visible={true}
        duration={600}
        animateEnter={true}
        from={{ opacity: 0, x: 10 }}
        transformType="translate"
      >
        {userWinValue === true && previousPlayValue?.length <= triesValue && (
          <ButtonXLStyled onClick={() => onClickCleanGame()} className="green">
            <span className="button-icon">
              <PlayAgainIcon />
            </span>
          </ButtonXLStyled>
        )}
        {userWinValue !== true && previousPlayValue?.length >= triesValue && (
          <ButtonXLStyled onClick={() => onClickCleanGame()} className="red">
            <span className="button-icon">
              <PlayAgainIcon />
            </span>
          </ButtonXLStyled>
        )}

        {userWinValue !== true && previousPlayValue?.length < triesValue && (
          <RowStyled className="play2 margin0">
            <div className="mastermind__left">
              {previousPlayValue.length + 1}
            </div>

            <div className="mastermind__center">
              <Fade
                visible={fingertap}
                duration={600}
                animateEnter={true}
                from={{ opacity: 0 }}
                transformType="translation"
              >
                <FingerClickIcon className="tapicon" />
              </Fade>
              {jeuModelValue?.map(function (color, index) {
                return (
                  <div
                    id={index}
                    key={index}
                    className={
                      "circle circle__game circle__game--" + jeuValue[index]
                    }
                    onClick={() => displayColors(index)}
                  />
                );
              })}
            </div>

            <div className="mastermind__right">
              {jeuValue.filter((element) => element != null).length ===
                possibilities && (
                <IconStyled>
                  <ArrowIcon onClick={() => handleSubmitPlay()} />
                </IconStyled>
              )}
            </div>
          </RowStyled>
        )}
      </Fade>
    </>
  );
}

export default RowPlayer;
