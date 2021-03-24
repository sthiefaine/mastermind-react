import { useSelector, useDispatch } from "react-redux";

import { cleanGame } from "../redux/slices/mastermind";
import { resetTimer } from "../redux/slices/timer";

import Translate from "../contexts/languages";

import { LinkXLStyled } from "../styles/links/LinkXLStyled";
import { LinkSStyled } from "../styles/links/LinkSStyled";
import { MainStyled } from "../styles/MainStyled";

import {
  ReactIcon,
  PlayIcon,
  SettingIcon,
  PlayAgainIcon,
  InfoIcon,
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
    <MainStyled>
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
              <LinkSStyled className="important" to="/game">
                <span className="button-icon">
                  <PlayIcon />
                </span>
              </LinkSStyled>
            </Fade>

            <Fade
              visible={true}
              duration={1200}
              animateEnter={true}
              from={{ opacity: 0, y: 0, x: 1000 }}
              transformType="translate"
            >
              <LinkSStyled to="/game" onClick={() => onClickCleanGame()}>
                <span className="button-icon">
                  <PlayAgainIcon />
                </span>
              </LinkSStyled>
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
            <LinkXLStyled to="/game">
              <span className="button-icon">
                <PlayIcon />
              </span>
              <span className="button-text">
                <Translate text="play" />
              </span>
            </LinkXLStyled>
          </Fade>
        )}
        <Fade
          visible={true}
          duration={1600}
          animateEnter={true}
          from={{ opacity: 0, y: 0, x: -1000 }}
          transformType="translate"
        >
          <LinkXLStyled to="/settings">
            <div className="button-icon">
              <SettingIcon />
            </div>
            <div className="button-text">
              <Translate text="settings" />
            </div>
          </LinkXLStyled>
        </Fade>

        <Fade
          visible={true}
          duration={1800}
          animateEnter={true}
          from={{ opacity: 0, y: 0, x: -1000 }}
          transformType="translate"
        >
          <LinkXLStyled to="/infos" className="link-button">
            <div className="button-icon">
              <InfoIcon />
            </div>
            <div className="button-text">
              <Translate text="informations" />
            </div>
          </LinkXLStyled>
        </Fade>
      </div>
    </MainStyled>
  );
}

export default Home;
