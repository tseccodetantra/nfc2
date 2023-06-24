import web from "../../assets/webdev.png";
import ai from "../../assets/ai.png";
import social from "../../assets/social.png";
import bc from "../../assets/blockchain.png";

const Domains = () => {
  return (
    <div className="text-yellow p-10 flex flex-col mt-[8rem] items-center bg-nGray ml-20 mr-20 mb-20 rounded-2xl">
      <div id="box-title" className="text-5xl flex items-center justify-center">
        DOMAINS
      </div>
      <div className="flex mt-10 justify-center items-center">
        <div className="flex flex-col items-center p-10">
          <img src={web} width={100} height={100} className="invert"></img>
          <center className="mt-5">Web/App Development</center>
        </div>
        <div className="flex flex-col items-center p-10">
          <img src={ai} width={100} height={100} className="invert"></img>
          <center className="mt-5">AI/ML</center>
        </div>
        <div className="flex flex-col items-center p-10">
          <img src={bc} width={100} height={100} className="invert"></img>
          <center className="mt-5">Blockchain</center>
        </div>
        <div className="flex flex-col items-center p-10">
          <img src={social} width={100} height={100} className="invert"></img>
          <center className="mt-5">Social</center>
        </div>
      </div>
    </div>
  );
};

export default Domains;
