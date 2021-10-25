import React, { useState } from "react";
import "./Portfolio.scss";
import techStackData from "./techstach.js";
import VerticalProgress from "../VerticalProgress/VerticalProgress";
const Portfolio = React.forwardRef((props, ref) => {
  const [displayProgress, setDisplayProgress] = useState(false);

  const renderCards = () => {
    return techStackData.map((obj, i) => {
      return (
        <div
          class="flip-container"
          ontouchstart="this.classList.toggle('hover');"
          onMouseLeave={() => {
            setDisplayProgress(false);
          }}
          onMouseOver={() => {
            setDisplayProgress(true);
          }}
        >
          <div class="flipper">
            <div
              style={{ backgroundImage: `url(${obj.imgSrc})` }}
              class="front"
            ></div>
            <div class="back">
              <div className={"tech-params"}>
                <div className={"param-block"}>
                  <div style={{ borderBottom: "1px solid black" }}>
                    Technology
                  </div>
                  <div>{obj.displayName}</div>
                </div>
                <div className={"param-block"}>
                  <div style={{ borderBottom: "1px solid black" }}>
                    Experience
                  </div>
                  <div>{obj.experience}</div>
                </div>
              </div>
              <div className={"progress-section"}>
                {displayProgress ? (
                  <VerticalProgress progress={obj.expertValue} />
                ) : (
                  ""
                )}

                <div className={"interest-text"}>Expertise</div>
              </div>
              {/* <div id={"love-meter"}>
                <VerticalProgress progress={20} />
                <div className={"interest-text"}>Love</div>
              </div> */}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div ref={ref} className={"portfolio-container"}>
      <div id={"portfolio-title"} className={" portfolio-title"}>
        TECH STACK
        <div className={"divider"}></div>
      </div>
      <div className={"tech-stack-container"}>{renderCards()}</div>
    </div>
  );
});

export default Portfolio;
