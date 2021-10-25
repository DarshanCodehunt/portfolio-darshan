import React, { useEffect } from "react";
import "./Welcome.scss";
import Arrow from "../../assets/images/down-arrow.png";
import Icon from "@mdi/react";
import { mdiHeart } from "@mdi/js";

const Welcome = React.forwardRef((props, ref) => {
  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => document.removeEventListener("scroll", onScroll, true);
  });

  const onScroll = () => {
    if (document.getElementById("welcome").getBoundingClientRect().bottom < 0) {
      document.getElementById("navbar").classList.add("fixed");
    } else {
      document.getElementById("navbar").classList.remove("fixed");
    }
  };

  const navigateTonav = () => {
    props.navRef &&
      props.navRef.current &&
      window.scrollTo({
        behavior: "smooth",
        top: props.navRef.current.offsetTop,
      });
  };

  return (
    <div id="welcome" ref={ref} className={"welcome-container"}>
      <div class="typewriter">
        <h1>Hi there, I'm Darshan.</h1>

        <p id="line-1">A self determined web developer, based in Bangalore.</p>
        <p id="line-2">
          I love{" "}
          <Icon
            rotate={180}
            path={mdiHeart}
            size={0.8}
            horizontal
            vertical
            color={"red"}
          />{" "}
          creating things that live on the Web.
        </p>
        {/* <a href="mailto:di.lisova@gmail.com" target="_blank">
          <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
        </a> */}
      </div>
      <div className={"arrow-icon"}>
        <img onClick={navigateTonav} src={Arrow} alt={"arrow"} />
      </div>
    </div>
  );
});

export default Welcome;
