import React from "react";
import "./Navbar.scss";

const Navbar = (props) => {
  const handleNavigation = (e) => {
    const id = e.target.id;
    if (id === "techstack") {
      props.portfolioRef &&
        props.portfolioRef.current &&
        window.scrollTo({
          behavior: "smooth",
          top: props.portfolioRef.current.offsetTop - 60,
        });
    } else if (id === "about") {
      props.aboutRef &&
        props.aboutRef.current &&
        window.scrollTo({
          behavior: "smooth",
          top: props.aboutRef.current.offsetTop - 60,
        });
    } else if (id === "contact") {
      props.contactRef &&
        props.contactRef.current &&
        window.scrollTo({
          behavior: "smooth",
          top: props.contactRef.current.offsetTop - 60,
        });
    }
  };

  console.log("Navbar");
  return (
    <div className={"navbar-container"}>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={"name-title"}
      >
        Darshan Kodkani
      </div>
      <div onClick={handleNavigation} className={"nav-links"}>
        <a id="techstack">Techstack</a>
        <a id="about">ABOUT</a>
        <a id="contact">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
