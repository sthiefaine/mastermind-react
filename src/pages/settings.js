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
  const jeuValue = useSelector((state) => state.mastermind.jeu);

  const possibilities = useSelector((state) => state.mastermind.possibilities);

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

  useEffect(() => {
    if (possibilities !== solutionValue.length) {
      dispatch(cleanGame());
      dispatch(resetTimer());
    }
  }, [possibilities]);

  return (
    <>
      <div className="main">
        <div>
          <div className="flex-row">
            <button
              type="button"
              className="link-button"
              aria-label="Increment Possibilities"
              onClick={() => dispatch(incrementPossibilities())}
            >
              +
            </button>
            <button
              type="button"
              className="link-button"
              aria-label="Decrement Possibilities"
              onClick={() => dispatch(decrementPossibilities())}
            >
              -
            </button>
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
      </div>
    </>
  );
}

export default Settings;
