import React from "react";
import ReactDOM from "react-dom";

import Header from "./pages/Header/Header";
import Office from "./pages/Office/Office";
import InspoQuote from "./pages/InspoQuote/InspoQuote";
import Building from "./pages/Building/Building";
import Team from "./pages/Team/Team";
import Rooms from "./pages/Rooms/Rooms";
import Footer from "./pages/Footer/Footer";
import Parallax from "./pages/Parallax/Parallax";
import Hamburger from "./components/Header/Hamburger";

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Parallax />
    <InspoQuote />
    <Office />
    <Team />
    <Rooms />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
