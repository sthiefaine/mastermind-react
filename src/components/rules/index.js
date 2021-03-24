import { RowStyled } from "../../styles/RowStyled";

const Rules = () => {
  return (
    <RowStyled className="rules">
      <div className="flex-row margin__top-bot">
        <span
          className={"circle circle__help circle__help--white help__true"}
        />
        <p>
          Une couleur à la <strong>bonne place</strong>.
        </p>
      </div>
      <div className="flex-row margin__top-bot">
        <span
          className={"circle circle__help circle__help--black help__true"}
        />
        <p>
          Une couleur <strong>mal placée</strong>.
        </p>
      </div>
    </RowStyled>
  );
};

export default Rules;
