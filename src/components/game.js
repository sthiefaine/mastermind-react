import { useState, useEffect } from "react";

import "./game.css";
import "./circlesColors.css";

import { useSelector, useDispatch } from "react-redux";

import {
  jeuModel,
  solution,
} from "../features/mastermind";

import RowPlayer from "./rowPlayer";
import ColorsPalette from "./colorsPalette";
import RowsPrevious from "./rowsPrevious";

function Game() {
  const dispatch = useDispatch();

  const previousPlayValue = useSelector(state => state.mastermind.previousPlay);
  const resetSolutionValue = useSelector(state => state.mastermind.resetSolution);
  const colorPaletteValue = useSelector(state => state.mastermind.colorPalette);
  const possibilities = useSelector(state => state.mastermind.possibilities);

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
    if (previousPlayValue.length === 0) {
      const newSolution = [];

      for (let i = 0; i < possibilities; i += 1) {
        let number = randomNumber(0, colors.length);

        while (newSolution.includes(colors[number])) {
          number = randomNumber(0, colors.length);
        }

        newSolution.push(colors[number]);
      }

      dispatch(solution(newSolution));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSolutionValue]);

  useEffect(() => {
    if (previousPlayValue.length === 0) {
      dispatch(jeuModel(Array(possibilities).fill()));
    }
  }, []);

  return (
    <>
      <div className="cor">
        {previousPlayValue.length !== 0 && <RowsPrevious />}

        <div className="solution2">
          {colorPaletteValue === true && <ColorsPalette colors={colors} />}
          <RowPlayer />
        </div>
      </div>
    </>
  );
}

export default Game;
