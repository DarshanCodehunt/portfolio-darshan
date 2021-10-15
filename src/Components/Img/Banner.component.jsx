import React from "react";
import "./Banner.scss";
import Me from "../../assets/images/darshan_me.jpg";

const Banner = (props) => {
  return (
    <div className={"banner-container"}>
      <div className={"img-container"}>
        <div className={"img-block"}>
          <div className={"img-display"}>{/* <img src={Me} alt={""} /> */}</div>
          <div className={"banner-title"}>
            Full Stack Developer - Web Designer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
