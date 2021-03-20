import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { Fireworks } from "fireworks-js";

function Firework() {
  // document.getElementById("overlay").style.display = "block";
  const fireworkContainerRef = useRef(null);

  const userWinValue = useSelector((state) => state.mastermind.userWin);

  useEffect(() => {
    if (userWinValue) {
      const container = fireworkContainerRef.current;
      const fireworks = new Fireworks({
        target: container,
        hue: 200,
        startDelay: 10,
        minDelay: 10,
        maxDelay: 15,
        speed: 0.6,
        acceleration: 1.05,
        friction: 0.95,
        gravity: 1,
        particles: 50,
        trace: 2,
        explosion: 3,
        boundaries: {
          top: (container.clientHeight * 1) / 10,
          bottom: (container.clientHeight * 9) / 10,
          left: (container.clientWidth * 1) / 10,
          right: (container.clientWidth * 9) / 10,
        },
        sound: {
          enable: false,
        },
      });
      fireworks.start();
    }
  }, [userWinValue]);

  return (
    <>
      {userWinValue && (
        <div className="fireworks-container" ref={fireworkContainerRef} />
      )}
    </>
  );
}

export default Firework;
