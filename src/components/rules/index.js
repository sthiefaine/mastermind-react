import { RowStyled } from "../../styles/RowStyled";
import Translate from "../../contexts/languages";
const Rules = () => {
  return (
    <RowStyled className="rules">
      <div className="flex-row">
        <span
          className={"circle circle__help circle__help--white help__true"}
        />
        <p>
          <Translate text="rules_good_dot" />
        </p>
      </div>
      <div className="flex-row">
        <span
          className={"circle circle__help circle__help--black help__true"}
        />
        <p>
          <Translate text="rules_wrong_dot" />
        </p>
      </div>
    </RowStyled>
  );
};

export default Rules;
