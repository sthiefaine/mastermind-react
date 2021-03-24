import { memo } from "react";
import { useSelector } from "react-redux";

const Help = ({ sol, bypass = false, display = false }) => {
  let helpRandomValue = useSelector(
    (state) => state.mastermind.helpRandom[sol]
  );

  if (bypass === true) {
    helpRandomValue = sol;
  }
  const helpMap = helpRandomValue.map((value, index) => {
    let circleHelpColor = "";

    if (value === "wrong") {
      circleHelpColor = "circle__help--black";
    } else if (value === "good") {
      circleHelpColor = "circle__help--white";
    } else {
      circleHelpColor = "";
    }

    let helpTrue = display === true ? " help__true" : "";

    return (
      <div
        key={index}
        className={"circle circle__help " + circleHelpColor + helpTrue}
      />
    );
  });
  return <>{helpMap}</>;
};

export default memo(Help);
