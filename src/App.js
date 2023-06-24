import "./App.css";
import Home from "./components/Home/Home";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/Intro/loading.js";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  const [loading, setLoading] = useState(true);
  const [visited, setVisited] = useState(false);

  // for local storage
  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("visited");
  //   if (hasVisited) {
  //     setVisited(true);
  //   } else {
  //     setTimeout(() => {
  //       setLoading(false);
  //       setVisited(true);
  //       localStorage.setItem("visited", "true");
  //     }, 15000);
  //   }
  // }, []);

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

      {/* for local storage */}
      {/* {!visited ? (
        <LoadingScreen />
      ) : (
        <>
          <div>
            <Home />
          </div>
          <div className="flex items-center justify-center mt-10 p-5">
            <ComingSoon />
          </div>
        </>
      )} */}

      {/* <div>
        {loading === false ? (
          <>
            <div>
              <Home />
            </div>
            <div className="flex items-center justify-center mt-10 p-5">
              <ComingSoon />
            </div>
          </>
        ) : (
          <LoadingScreen />
        )}
      </div> */}
      <div className="main">
        <div>
          <Home />
        </div>
        <div className="flex items-center justify-center mt-10 p-5">
          <ComingSoon />
        </div>
      </div>
    </>
  );
}

export default App;
