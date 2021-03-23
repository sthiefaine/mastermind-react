import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { jeuModel, solution } from "../redux/slices/mastermind";

import RowPlayer from "../components/rows/rowPlayer";
import ColorsPalette from "../components/colorsPalette";
import RowsPrevious from "../components/rows/rowsPrevious";
import Firework from "../components/fireworks";

import { Scrollbar } from "../styles/Scrollbar";
import { ContainerStyled } from "../styles/ContainerStyled";

import { MainStyled } from "../styles/MainStyled";

function Game() {
  const dispatch = useDispatch();

  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );
  const resetSolutionValue = useSelector(
    (state) => state.mastermind.resetSolution
  );
  const colorPaletteValue = useSelector(
    (state) => state.mastermind.colorPalette
  );
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
  }, [resetSolutionValue]);

  useEffect(() => {
    if (previousPlayValue.length === 0) {
      dispatch(jeuModel(Array(possibilities).fill()));
    }
  }, []);

  return (
    <>
      <MainStyled>
        <Firework />
        {previousPlayValue.length > 0 && (
          <ContainerStyled className="padding__top-bot">
            <Scrollbar>
              <RowsPrevious />
            </Scrollbar>
          </ContainerStyled>
        )}

        <div className="solution2">
          {colorPaletteValue === true && <ColorsPalette colors={colors} />}
          <RowPlayer />
        </div>
      </MainStyled>
    </>
  );
}

export default Game;
