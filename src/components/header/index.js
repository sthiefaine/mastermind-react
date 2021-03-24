import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import Timer from "../timer";
import ThemeSelector from "../themes";
import LanguageSelector from "../language";

import { Fade } from "../../animations/fade";

// Styles
import { HeaderStyled } from "../../styles/headerStyled";
import { SpanStyled } from "../../styles/SpanStyled";

import { LetterMIcon, ReturnIcon } from "../../utils/icons";

function Header() {
  const location = useLocation();

  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );

  const triesValue = useSelector((state) => state.mastermind.tries);

  return (
    <HeaderStyled>
      <div className="logo">
        <Link to="/">
          {location.pathname === "/" && <LetterMIcon />}
          {location.pathname !== "/" && (
            <div className="button-icon">
              <ReturnIcon />
            </div>
          )}
        </Link>
      </div>

      <div className="nav">
        {location.pathname === "/game" && (
          <>
            <Fade
              visible={true}
              duration={400}
              animateEnter={true}
              from={{ opacity: 0, x: -1 }}
            >
              <Timer />
            </Fade>

            <Fade
              visible={true}
              duration={600}
              animateEnter={true}
              from={{ opacity: 0, y: 10, x: 1000 }}
              transformType="translate"
            >
              <SpanStyled>
                {(previousPlayValue?.length || 0) + " / " + triesValue}
              </SpanStyled>
            </Fade>
          </>
        )}
      </div>
      {location.pathname === "/" && <LanguageSelector />}

      <ThemeSelector />
    </HeaderStyled>
  );
}

export default Header;
