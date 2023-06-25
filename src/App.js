import "./App.css";
import Home from "./components/Home/Home";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Domains from "./components/Domains/Domains";
import NFC1 from "./components/NFC1/NFC1";

function App() {
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
        <div>
          <NFC1 />
        </div>
      </div>
    </>
  );
}

export default App;
