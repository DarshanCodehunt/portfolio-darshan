import React from "react";
import "./Banner.scss";
import Me from "../../assets/images/darshan_me.jpg";

const Banner = (props) => {
  return (
    <div className={"banner-container"}>
      <div className={"img-container"}>
        <div className={"img-block"}>
          <div className={"img-display"}>{/* <img src={Me} alt={""} /> */}</div>
          <div class={"content banner-title"}>
            <div class={"content__container"}>
              <p class={"content__container__text"}>
                Darshan Kodkani : 
              </p>

              <ul class={"content__container__list"}>
                <li class={"content__container__list__item"}>Full Stack Developer</li>
                <li class={"content__container__list__item"}>Web Designer</li>
                <li class={"content__container__list__item"}>Freelancer</li>
                <li class={"content__container__list__item"}>Technopreneur</li>
              </ul>
            </div>
          </div>
          {/* <div className={"banner-title"}>
            Full Stack Developer - Web Designer
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
