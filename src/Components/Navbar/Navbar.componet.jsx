import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";

const Navbar = React.forwardRef((props, ref) => {
  const handleNavigation = (e) => {
    const id = e.target.id;
    if (id === "techstack") {
      props.portfolioRef &&
        props.portfolioRef.current &&
        window.scrollTo({
          behavior: "smooth",
          top: props.portfolioRef.current.offsetTop - 50,
        });
    } else if (id === "about") {
      props.aboutRef &&
        props.aboutRef.current &&
        window.scrollTo({
          behavior: "smooth",
          top: props.aboutRef.current.offsetTop - 50,
        });
    } else if (id === "contact") {
      props.contactRef &&
        props.contactRef.current &&
        window.scrollTo({
          behavior: "smooth",
          top: props.contactRef.current.offsetTop - 50,
        });
    }
  };

  return (
    <div ref={ref} id="navbar" className={"navbar-container"}>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={"name-title"}
      >
        <img src={Logo} alt={"logo"} />
      </div>
      <div onClick={handleNavigation} className={"nav-links"}>
        <a id="techstack">Techstack</a>
        <a id="about">ABOUT</a>
        <a id="contact">CONTACT</a>
      </div>
    </div>
  );
});

export default Navbar;
