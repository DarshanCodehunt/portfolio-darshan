import React, { useState } from "react";
import "./Portfolio.scss";
import techStackData from "./techstach.js";
import VerticalProgress from "../VerticalProgress/VerticalProgress";
const Portfolio = React.forwardRef((props, ref) => {
  const [tracker, setTracker] = useState(null);

  console.log("Tracker", tracker);
  const renderCards = () => {
    return techStackData.map((obj, i) => {
      return (
        <div
          class="flip-container"
          ontouchstart="this.classList.toggle('hover');"
        >
          <div class="flipper">
            <div
              style={{ backgroundImage: `url(${obj.imgSrc})` }}
              class="front"
            ></div>
            <div class="back">
              <div>
                <VerticalProgress progress={obj.expertValue} />
                <div className={"interest-text"}>Expertise</div>
              </div>
              <div id={"love-meter"}>
                <VerticalProgress progress={20} />
                <div className={"interest-text"}>Love</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div ref={ref} className={"portfolio-container"}>
      <div className={"portfolio-title"}>
        TECH STACK
        <div className={"divider"}></div>
      </div>
      <div className={"tech-stack-container"}>{renderCards()}</div>
    </div>
  );
});

export default Portfolio;
