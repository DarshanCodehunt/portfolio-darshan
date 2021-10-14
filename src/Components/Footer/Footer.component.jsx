import React from "react";
import "./Footer.scss";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiFacebook } from "@mdi/js";

const Footer = (props) => {
  return (
    <div className={"footer-container"}>
      <a
        href={"https://www.linkedin.com/in/darshan-kodkani-050a8610a/"}
        className={"linkedin-icon"}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          rotate={180}
          path={mdiLinkedin}
          size={1.5}
          horizontal
          vertical
          color="white"
        />
      </a>
      <a
        href={"https://www.facebook.com/darshan.kodkani.5"}
        className={"linkedin-icon"}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          rotate={180}
          path={mdiFacebook}
          size={1.5}
          horizontal
          vertical
          color="white"
        />
      </a>
      <div className={"copy-right"}>DARSHAN KODKANI ©2021</div>
    </div>
  );
};

export default Footer;
