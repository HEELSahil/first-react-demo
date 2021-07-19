import React from "react";
import ReactDOM from "react-dom";

import MyInfo from "./components/MyInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

ReactDOM.render(
  <div>
    <Header />
    <MyInfo />
    <Footer />
  </div>,
  document.getElementById("root")
);
