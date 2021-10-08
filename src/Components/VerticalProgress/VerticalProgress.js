import React from "react";
import { Spring } from "react-spring";
import "./VerticalProgress.scss";

const VerticalProgress = ({ progress }) => {
  console.log(progress);
  return (
    <Spring from={{ percent: 0 }} to={{ percent: progress }}>
      {() => (
        <div className="progress vertical">
          <div style={{ height: `${progress}%` }} className="progress-bar">
            <span className="sr-only">{`${progress}%`}</span>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default VerticalProgress;
