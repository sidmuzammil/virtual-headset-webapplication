import React from "react";
import "./App.css";
import Home from "./Components/Homesection/Home";
import Secondpage from "./Components/SecondPage/Secondpage";
import ThirdHomepage from "./Components/Thirdpage/ThirdHomepage";
import Fourthsection from "./Components/Fourthsection/Fourthsection";

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
    </div>
  );
};

export default App;
