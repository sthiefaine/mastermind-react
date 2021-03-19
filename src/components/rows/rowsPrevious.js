import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import CustomScroller from "react-custom-scroller";

import { Fade } from "../../animations/fade";

import Help from "./help";

function RowsPrevious() {
  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );
  const helpValue = useSelector((state) => state.mastermind.help);

  const userWinValue = useSelector((state) => state.mastermind.userWin);

  const triesValue = useSelector((state) => state.mastermind.tries);
  const solutionValue = useSelector((state) => state.mastermind.solution);


 

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [previousPlayValue]);

  return (
    <CustomScroller className="container2">
      {previousPlayValue.map(function (ku, index) {

        return (
          <Fade
            visible={true}
            duration={400}
            animateEnter={true}
            from={{ opacity: 0, x: 1 }}
            transformType="scale"
          >
            <div
              ref={messagesEndRef}
              name={previousPlayValue.length - 1 === index ? "test" : ""}
              key={ku.id}
              className={
                "mastermind2 " +
                (previousPlayValue.length - 1 === index ? "st2" : "sd2") +
                (userWinValue === true ? " winmaster" : "")
              }
            >
              <div className="mastermind__left">{ku.id + 1}</div>
              <div className="mastermind__center">
                {previousPlayValue[ku.id].colors.map(function (color, index2) {
                  return (
                    <div
                      key={index2}
                      className={"circle circle__game--" + color}
                    />
                  );
                })}
              </div>
              <div className="mastermind__right">
                <Help sol={ku.id}/>
              </div>
            </div>
          </Fade>
        );
      })}

      {userWinValue !== true && previousPlayValue?.length >= triesValue && (
        <div className="mastermind3 red">
          <div className="mastermind__left"></div>
          <div className="mastermind__center">
            {solutionValue.map(function (color, index) {
              return (
                <div key={index} className={"circle circle__game--" + color} />
              );
            })}
          </div>
          <div className="mastermind__right"></div>
        </div>
      )}
    </CustomScroller>
  );
}

export default RowsPrevious;
