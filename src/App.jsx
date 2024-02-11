import React from "react";
import "./App.css";
import Home from "./Components/Homesection/Home";
import Secondpage from "./Components/SecondPage/Secondpage";
import ThirdHomepage from "./Components/Thirdpage/ThirdHomepage";
import Fourthsection from "./Components/Fourthsection/Fourthsection";
import Footer from "./Components/footersection/footer";
import Fifthpage from "./Components/fifthPage/Fifthpage";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Home />
      </section>
      <section id="catalog">
        <Secondpage />
      </section>
      <section>
        <ThirdHomepage />
      </section>
      <section>
        <Fourthsection />
      </section>
      <section>
        <Fifthpage />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
