import "./App.css";
import Home from "./components/Home/Home";
import React, { useState, useEffect } from "react";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Domains from "./components/Domains/Domains";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 21000);
    //little less maybe
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
        <div className="m-10">
          <Domains />
        </div>
      </div>
    </>
  );
}

export default App;
