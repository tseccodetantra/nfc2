import "./App.css";
import Home from "./components/Home/Home";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Domains from "./components/Domains/Domains";
import NFC1 from "./components/NFC1/NFC1";
import React, { useEffect } from "react";
import Sponsors from "./components/Sponsors/Sponsors";

const style = {
  width: "44px",
  height: "312px",
};
function App() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <div className="main">
        <div>
          <Home />
        </div>
        <div className="flex items-center justify-center mt-10 p-5">
          <ComingSoon />
        </div>
        <div className="p-10 text-yellow flex items-center justify-center text-center">
          <div
            className="apply-button"
            data-hackathon-slug="need-for-code"
            data-button-theme="light"
            style={style}
          ></div>
        </div>
        <div className="m-10">
          <Domains />
        </div>
        <div>
          <Sponsors />
        </div>
        <div>
          <NFC1 />
        </div>
      </div>
    </>
  );
}

export default App;
