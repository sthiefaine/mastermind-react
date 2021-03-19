import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

function Help({ sol }) {
  const helpValue = useSelector((state) => state.mastermind.help);
  const helpRandomValue = useSelector((state) => state.mastermind.helpRandom);
  
  const Testt = helpRandomValue[sol].map((value, index) => {
    let circleHelpColor = "";

    if (value === "wrong") {
      circleHelpColor = "circle__help--black";
    } else if (value === "good") {
      circleHelpColor = "circle__help--white";
    } else {
      circleHelpColor = "";
    }

    return (
      <div key={index} className={"circle circle__help " + circleHelpColor} />
    );
  });
  return <>{Testt}</>;
}

export default Help;
