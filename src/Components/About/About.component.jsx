import React from "react";
import "./About.scss";
import Icon from "@mdi/react";
import { mdiEmoticonHappy, mdiWeb } from "@mdi/js";

const About = React.forwardRef((props, ref) => {
  const navigatetoContact = () => {
    props.contactRef &&
      props.contactRef.current &&
      window.scrollTo({
        behavior: "smooth",
        top: props.contactRef.current.offsetTop - 60,
      });
  };
  return (
    <div ref={ref} className={"about-container"}>
      <div className={"about-title"}>
        ABOUT <div className={"divider"}></div>
      </div>
      <div className={"about-detail"}>
        <div>
          Hey there!! Thank you for visiting{" "}
          <Icon
            rotate={180}
            path={mdiEmoticonHappy}
            size={0.8}
            horizontal
            color={"Orange"}
            vertical
          />
          . I am a Web developer with 6 plus years of commercial experience. <br/> I
          am currently based in Bangalore, India. I love creating websites that
          are fast, interactive and built with best Practices.
        </div>
        <div>
          I have a major passion for building solutions to problems that
          involves web transitions, load time optimization and responsive
          design. I contend to provide a non annoying User Experience.So come
          <span
            onClick={navigatetoContact}
            style={{ color: "#009ada", cursor: "pointer" }}
          >
            {" "}
            connect with me
          </span>{" "}
          to make a better Web{" "}
          <Icon
            rotate={180}
            path={mdiWeb}
            size={0.8}
            horizontal
            vertical
            color={"Orange"}
          />
          .
        </div>
      </div>
    </div>
  );
});

export default About;
