import solana from "../../assets/sponsors/solana.png";
import polygon from "../../assets/sponsors/polygon.png";
import devfolio from "../../assets/sponsors/devfolio.png";
import replit from "../../assets/sponsors/replit.png";
import fc from "../../assets/sponsors/filecoin.png";
import "./sponsors.css";

const Sponsors = () => {
  return (
    <div
      className="mt-[10rem] bg-nGray ml-20 mr-20 rounded-[2rem] mb-[10rem] pb-[5rem] flex flex-col items-center justify-center"
      id="spons-cont"
    >
      <div
        id="domain-head"
        className="flex items-center justify-center text-6xl pt-5 mb-10 text-yellow"
      >
        SPONSORS
      </div>
      <div className="flex mt-10 items-center justify-center" id="top-s">
        <div>
          <img
            width={200}
            height={200}
            src={devfolio}
            alt="DEVFOLIO LOGO"
          ></img>
        </div>
        <div>
          <img width={200} height={200} src={polygon} alt="POLYGON LOGO"></img>
        </div>
      </div>
      <div className="flex items-center justify-center" id="bottom-s">
        <div>
          <img width={200} height={200} src={solana} alt="SOLANA LOGO"></img>
        </div>
        <div>
          <img width={200} height={200} src={fc} alt="FILECOIN LOGO"></img>
        </div>
        <div>
          <img width={200} height={200} src={replit} alt="REPLIT LOGO"></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
