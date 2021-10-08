import React from "react";
import "./About.scss";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={"about-container"}>
      <div className={"about-title"}>
        ABOUT <div className={"divider"}></div>
      </div>
      <div className={"about-detail"}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          mollitia saepe unde nostrum quos voluptate consectetur, facere modi
          explicabo aliquid molestias velit dolores beatae vitae?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          mollitia saepe unde nostrum quos voluptate consectetur, facere modi
          explicabo aliquid molestias velit dolores beatae vitae?
        </div>
      </div>
    </div>
  );
});

export default About;
