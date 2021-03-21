/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import "../components/game.css";
import "../components/circlesColors.css";

import { useSelector, useDispatch } from "react-redux";

import { jeuModel, cleanGame } from "../redux/slices/mastermind";
import { resetTimer } from "../redux/slices/timer";

import {
  incrementPossibilities,
  decrementPossibilities,
  incrementTries,
  decrementTries,
} from "../redux/slices/mastermind";

import Help from "../components/rows/help";

import { RowStyled } from "../styles/RowStyled";

function Settings() {
  const dispatch = useDispatch();

  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );
  const resetSolutionValue = useSelector(
    (state) => state.mastermind.resetSolution
  );
  const jeuModelValue = useSelector((state) => state.mastermind.jeuModel);
  const colorPaletteValue = useSelector(
    (state) => state.mastermind.colorPalette
  );

  const solutionValue = useSelector((state) => state.mastermind.solution);

  const possibilities = useSelector((state) => state.mastermind.possibilities);
  const tries = useSelector((state) => state.mastermind.tries);
  const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "pink",
    "orange",
    "lightskyblue",
    "brown",
    "grey",
  ];

  const randomNumber = function (maximumNumber, minimumNumber) {
    return (
      Math.floor(Math.random() * (maximumNumber - minimumNumber + 0)) +
      minimumNumber
    );
  };

  useEffect(() => {
    if (jeuModelValue.length !== possibilities) {
      dispatch(jeuModel(Array(possibilities).fill()));
    }
  }, [possibilities]);

  const [countPass, setCountPass] = useState(0);
  useEffect(() => {
    setCountPass(countPass + 1);
    if (countPass >= 1) {
      dispatch(cleanGame());
      dispatch(resetTimer());
    }
  }, [possibilities, tries]);

  return (
    <>
      <div className="main flex-start">
        <div className="container2">
          <div className="flex-row flex-space">
            <label className="settings-label">Choix</label>
            <div className="btns-control">
              <button
                type="button"
                className="link-button_min"
                aria-label="Decrement Possibilities"
                onClick={() => dispatch(decrementPossibilities())}
              >
                -
              </button>
              <button
                type="button"
                className="link-button_min"
                aria-label="Increment Possibilities"
                onClick={() => dispatch(incrementPossibilities())}
              >
                +
              </button>
            </div>
          </div>
          <RowStyled className="mastermind play2">
            <div className="mastermind__left"></div>
            <div className="mastermind__center">
              {jeuModelValue.map(function (_, index) {
                return (
                  <div
                    key={index}
                    className={"circle circle__game--" + colors[index]}
                  />
                );
              })}
            </div>
            <div className="mastermind__right">
              {jeuModelValue.length !== 0 && (
                <Help sol={jeuModelValue} display={true} bypass={true} />
              )}
            </div>
          </RowStyled>
        </div>

        <div className="container2">
          <div className="flex-row flex-space">
            <label className="settings-label">Essais</label>
            <div className="flex-row">
              <button
                type="button"
                className="link-button_min"
                aria-label="Decrement Tries"
                onClick={() => dispatch(decrementTries())}
              >
                -
              </button>
              <div className="link-button_min">0/{tries}</div>
              <button
                type="button"
                className="link-button_min"
                aria-label="Increment Tries"
                onClick={() => dispatch(incrementTries())}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
