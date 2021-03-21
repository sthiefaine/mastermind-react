import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { cleanGame } from "../redux/slices/mastermind";

import { resetTimer } from "../redux/slices/timer";
import { ReactIcon } from "../utils/icons";
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
      <div className="home-logo">
        <div className="home-letters">
          <span>M</span>
          <span>a</span>
          <span>s</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
          <div className="logo-react">
            <ReactIcon />
          </div>
          <span>m</span>
          <span>i</span>
          <span>n</span>
          <span>d</span>
        </div>
      </div>
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
