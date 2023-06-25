import web from "../../assets/webdev.png";
import ai from "../../assets/ai.png";
import social from "../../assets/social.png";
import bc from "../../assets/blockchain.png";
import "./domains.css";

const Domains = () => {
  return (
    <div
      className="text-yellow mt-[10rem] bg-nGray rounded-[5rem]"
      id="domain-cont"
    >
      <div
        id="domain-head"
        className="flex items-center justify-center text-6xl pt-[5rem]"
      >
        DOMAINS
      </div>
      <div className="flex flex-col items-center justify-center text-2xl">
        <div id="up" className="flex">
          <div className="flex flex-col justify-center items-center p-[5rem] domain-container">
            <img
              src={web}
              width={200}
              height={200}
              className="invert"
              alt="Web/App"
            ></img>
            <div className="mt-5">Web/App Development</div>
          </div>
          <div className="flex flex-col justify-center items-center p-[5rem] domain-container">
            <img
              src={ai}
              width={200}
              height={200}
              className="invert"
              alt="AI"
            ></img>
            <div className="mt-5">AI / ML</div>
          </div>
        </div>
        <div id="down" className="flex">
          <div className="flex flex-col justify-center items-center p-[5rem] domain-container">
            <img
              src={bc}
              width={200}
              height={200}
              className="invert"
              alt="Blockchain"
            ></img>
            <div className="mt-5">Blockchain</div>
          </div>
          <div className="flex flex-col justify-center items-center p-[5rem] domain-container">
            <img
              src={social}
              width={200}
              height={200}
              className="invert"
              alt="Social"
            ></img>
            <div className="mt-5">Social</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;
