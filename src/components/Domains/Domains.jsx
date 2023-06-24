import web from "../../assets/webdev.png";
import ai from "../../assets/ai.png";
import social from "../../assets/social.png";
import bc from "../../assets/blockchain.png";
import "./domains.css";

const Domains = () => {
  return (
    <div
      className="flex mt-[10rem] text-yellow justify-between items-center ml-20 mr-20 bg-nGray p-[5rem] rounded-[5rem]"
      id="domain-items"
    >
      <div className="flex flex-col items-center p-10">
        <img src={web} width={100} height={100} className="invert"></img>
        <p className="mt-5">Web/App Development</p>
      </div>
      <div className="flex flex-col items-center pl-[50px]">
        <img src={ai} width={100} height={100} className="invert"></img>
        <p className="mt-5">AI/ML</p>
      </div>
      <div className="flex flex-col items-center pl-[50px]">
        <img src={bc} width={100} height={100} className="invert"></img>
        <p className="mt-5">Blockchain</p>
      </div>
      <div className="flex flex-col items-center pl-[50px]">
        <img src={social} width={100} height={100} className="invert"></img>
        <p className="mt-5">Social</p>
      </div>
    </div>
  );
};

export default Domains;
