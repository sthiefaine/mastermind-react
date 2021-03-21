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

import { Fade } from "../animations/fade";

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
      <div className="home-container-button">
        {previousPlayValue.length > 0 && (
          <div className="flex-row">
            <Fade
              visible={true}
              duration={1200}
              animateEnter={true}
              from={{ opacity: 0, y: 10, x: -1000 }}
              transformType="translate"
            >
              <Link to="/game" className="link-button_min">
                <span className="button-icon">
                  <PlayIcon />
                </span>
              </Link>
            </Fade>

            <Fade
              visible={true}
              duration={1200}
              animateEnter={true}
              from={{ opacity: 0, y: 0, x: 1000 }}
              transformType="translate"
            >
              <Link
                to="/game"
                className="link-button_min"
                onClick={() => onClickCleanGame()}
              >
                <span className="button-icon">
                  <PlayAgainIcon />
                </span>
              </Link>
            </Fade>
          </div>
        )}

        {previousPlayValue[0] === undefined && (
          <Fade
            visible={true}
            duration={1400}
            animateEnter={true}
            from={{ opacity: 0, y: 0, x: -1000 }}
            transformType="translate"
          >
            <Link to="/game" className="link-button">
              <span className="button-icon">
                <PlayIcon />
              </span>
              <span className="button-text">Jouer</span>
            </Link>
          </Fade>
        )}
        <Fade
          visible={true}
          duration={1400}
          animateEnter={true}
          from={{ opacity: 0, y: 0, x: -1000 }}
          transformType="translate"
        >
          <Link to="/settings" className="link-button">
            <div className="button-icon">
              <SettingIcon />
            </div>
            <div className="button-text">Paramètres</div>
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
