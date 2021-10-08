import Navbar from "./Components/Navbar/Navbar.componet";
import Banner from "./Components/Img/Banner.component";
import Portfolio from "./Components/Portfolio/Portfolio.component";
import About from "./Components/About/About.component";
import Contact from "./Components/Contact/Contact.component";
import Footer from "./Components/Footer/Footer.component";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [refsLoaded, setRefsLoaded] = useState(false);
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    setRefsLoaded(true);
  }, []);
  return (
    <div className={"portfolio-container"}>
      <Navbar
        aboutRef={refsLoaded ? aboutRef : null}
        portfolioRef={refsLoaded ? portfolioRef : null}
        contactRef={refsLoaded ? contactRef : null}
      />
      <Banner />
      <Portfolio ref={portfolioRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
