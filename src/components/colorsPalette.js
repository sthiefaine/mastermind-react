import { useDispatch } from "react-redux";

import { jeu, colorPalette } from "../features/mastermind";

function ColorsPalette({ colors }) {
  const dispatch = useDispatch();

  const setUserColor = (color) => {
    dispatch(
      jeu({
        color: color,
      })
    );

    dispatch(colorPalette());
  };

  return (
    <>
      <span className="closePalette" onClick={() => dispatch(colorPalette())}>
        X
      </span>

      <div className="colorsPalette2">
        {colors.map(function (color, index) {
          return (
            <div
              key={color}
              className={"circle circle__game circle__game--" + color}
              onClick={() => setUserColor(color)}
            />
          );
        })}
      </div>
    </>
  );
}

export default ColorsPalette;
