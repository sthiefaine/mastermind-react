import Translate from "../contexts/languages";

import { ButtonXSStyled } from "../styles/buttons/ButtonXSStyled";
import { MainStyled } from "../styles/MainStyled";

import { WhatsAppIcon, GitIcon, TwitterIcon } from "../utils/socialIcons";

function Infos() {
  return (
    <>
      <MainStyled>
        <h1>
          <Translate text="informations_title" />
        </h1>
        <h2>Thiéfaine Simonnou</h2>

        <div className="flex-row">
          <ButtonXSStyled className="icon">
            <a href="https://api.whatsapp.com/send?phone=33658200918&text=Bonjour%20Thiéfaine,">
              <WhatsAppIcon />
            </a>
          </ButtonXSStyled>
          <ButtonXSStyled className="icon">
            <a href="https://twitter.com/dev_thief">
              <TwitterIcon />
            </a>
          </ButtonXSStyled>
          <ButtonXSStyled className="icon">
            <a href="https://github.com/sthiefaine">
              <GitIcon />
            </a>
          </ButtonXSStyled>
        </div>
      </MainStyled>
    </>
  );
}

export default Infos;
