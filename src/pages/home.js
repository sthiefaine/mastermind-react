import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { cleanGame } from "../redux/slices/mastermind";

import { resetTimer } from "../redux/slices/timer";
import {
  ReactIcon,
  PlayIcon,
  SettingIcon,
  PlayAgainIcon,
} from "../utils/icons";

function Home() {
  const dispatch = useDispatch();
  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );

  const onClickCleanGame = () => {
    dispatch(cleanGame());
    dispatch(resetTimer());
  };

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
          <Link to="/game" className="link-button_min">
            <span className="button-icon">
              <PlayIcon />
            </span>
          </Link>

          <Link
            to="/game"
            className="link-button_min"
            onClick={() => onClickCleanGame()}
          >
            <span className="button-icon">
              <PlayAgainIcon />
            </span>
          </Link>
        </div>
      )}

      {previousPlayValue[0] === undefined && (
        <Link to="/game" className="link-button">
          <span className="button-icon">
            <PlayIcon />
          </span>
          <span className="button-text">Jouer</span>
        </Link>
      )}
      <Link to="/settings" className="link-button">
        <div className="button-icon">
          <SettingIcon />
        </div>
        <div className="button-text">Paramètres</div>
      </Link>
    </div>
  );
}

export default Home;
