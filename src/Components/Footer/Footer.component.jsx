import React from "react";
import "./Footer.scss";
const Footer = (props) => {
  return (
    <div className={"footer-container"}>
      <div>© 2020, Darshan Kodkani. All Rights Reserved.</div>
      <div class="social-menu">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/darshan-kodkani-050a8610a/"
              target="blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/darshan.kodkani.5">
              <i
                class="fab fa fa-facebook-f"
                target="blank"
                rel="noreferrer"
              ></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/darshankodkani_/" target="blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/DarshanCodehunt" target="blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
