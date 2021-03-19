import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { cleanGame } from "../features/mastermind";

import { resetTimer } from "../features/timer";

function Home() {
  const dispatch = useDispatch();
  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );

  const onClickCleanGame = () => {
    dispatch(cleanGame());
    dispatch(resetTimer());
  };

  const [paramButton, setparamButton] = useState("Paramètres");

  return (
    <div className="main">
      {previousPlayValue.length > 0 && (
        <div className="flex-row">
          <Link to="/game" className="link-button">
            Reprendre
          </Link>

          <Link
            to="/game"
            className="link-button"
            onClick={() => onClickCleanGame()}
          >
            Recommencer
          </Link>
        </div>
      )}

      {previousPlayValue[0] === undefined && (
        <Link to="/game" className="link-button">
          Jouer
        </Link>
      )}
      <Link
        to="/settings"
        className="link-button"
        onClick={() => setparamButton("Bientôt disponible")}
      >
        {paramButton}
      </Link>
    </div>
  );
}

export default Home;
