import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

const Navbar = React.forwardRef((props, ref) => {
  const [showmenu, setShowmenu] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, []);

  const handleBlur = (e) => {
    if (ref && !ref.current.contains(e.target)) {
      setShowmenu(false);
    }
  };
  const handleNavigation = (e) => {
    const id = e.target.id;
    handleNav(id);
  };

  const handleMenuClick = () => {
    setShowmenu(true);
  };

  const handleMenuItemClick = (e) => {
    const id = e.target.id;
    handleNav(id);
    setShowmenu(false);
  };

  const handleNav = (id) => {
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
      <div className={"nav-container-class"} onClick={handleNavigation}>
        <div className={"nav-links"}>
          <a id="techstack">Techstack</a>
          <a id="about">ABOUT</a>
          <a id="contact">CONTACT</a>
        </div>
        <div className={"menu-icon"}>
          <Icon
            onClick={handleMenuClick}
            rotate={180}
            path={mdiMenu}
            size={1.2}
            horizontal
            vertical
            color={"white"}
          />
          {showmenu ? (
            <div onClick={handleMenuItemClick} className={"icon-display"}>
              <div id="techstack">Techstack</div>
              <div id="about">About</div>
              <div id="contact">Contact</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
});

export default Navbar;
