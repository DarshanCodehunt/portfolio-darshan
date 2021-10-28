import React from "react";
import "./Banner.scss";

const Banner = (props) => {
  return (
    <div className={"banner-container"}>
      <div className={"img-container"}>
        <div className={"img-block"}>
          <div className={"img-display"}>{/* <img src={Me} alt={""} /> */}</div>
          <div class="container">
            <h2 class="title">
              <span class="title-word title-word-2">Web Graphic Designer</span>
              <span class="color-star">- ★ -</span>
              <span class="title-word title-word-1">Full Stack Developer</span>
              <span class="color-star">- ★ -</span>
              <span class="title-word title-word-3">Freelance Engineer</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
