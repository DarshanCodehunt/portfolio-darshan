import React from "react";
import "./Banner.scss";
import Me from "../../assets/images/me.jpg";

const Banner = (props) => {
  return (
    <div className={"banner-container"}>
      <div className={"img-container"}></div>
      {/* <img src={Me} alt={""} />; */}
    </div>
  );
};

export default Banner;
