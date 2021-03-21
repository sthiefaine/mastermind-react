import { useEffect, useRef, memo } from "react";
import { useSelector } from "react-redux";

import { Fade } from "../../animations/fade";

import Help from "./help";

import { RowStyled } from "../../styles/RowStyled";
function RowsPrevious() {
  const previousPlayValue = useSelector(
    (state) => state.mastermind.previousPlay
  );

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
    <>
      {previousPlayValue.map(function (ku, index) {
        return (
          <Fade
            key={ku.id}
            visible={true}
            duration={400}
            animateEnter={true}
            from={{ opacity: 0, x: 1 }}
            transformType="scale"
          >
            <RowStyled
              ref={messagesEndRef}
              name={previousPlayValue.length - 1 === index ? "test" : ""}
              key={ku.id}
              className={
                (previousPlayValue.length - 1 === index ? "st2" : "sd2") +
                (userWinValue === true && previousPlayValue.length - 1 === index
                  ? " winmaster"
                  : "")
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
                <Help sol={ku.id} />
              </div>
            </RowStyled>
          </Fade>
        );
      })}

      {userWinValue !== true && previousPlayValue?.length >= triesValue && (
        <RowStyled className="red">
          <div className="mastermind__left"></div>
          <div className="mastermind__center">
            {solutionValue.map(function (color, index) {
              return (
                <div key={index} className={"circle circle__game--" + color} />
              );
            })}
          </div>
          <div className="mastermind__right"></div>
        </RowStyled>
      )}
    </>
  );
}

export default memo(RowsPrevious);
