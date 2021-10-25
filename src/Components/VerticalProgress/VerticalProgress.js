import React from "react";
import { Spring } from "react-spring";
import "./VerticalProgress.scss";

const VerticalProgress = ({ progress }) => {
  return (
    <Spring from={{ percent: 0 }} to={{ percent: progress }}>
      {() => (
        <div className="progress vertical">
          <span className="percentage-display">{`${progress}%`}</span>
          <div
            style={{ height: `${progress}%` }}
            className="progress-bar"
          ></div>
        </div>
      )}
    </Spring>
  );
};

export default VerticalProgress;
