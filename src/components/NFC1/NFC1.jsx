import nfc from "../../assets/nfc1.png";
import winner from "../../assets/winner.png";
import runner1 from "../../assets/runner1.png";
import runner2 from "../../assets/runner2.png";
import "./nfc.css";

const NFC1 = () => {
  return (
    <div className="mt-[10rem] bg-nGray ml-20 mr-20 rounded-[2rem] mb-[10rem] pb-[5rem]">
      <div className="flex flex-col items-center justify-center text-yellow">
        <div className="mt-10">
          <img width={150} height={150} src={nfc} alt="NFC 1.0 Logo"></img>
        </div>
        <div
          className="mt-10 text-justify ml-16 mr-16 text-4xl font-RobotoCondensed"
          id="para"
        >
          Need For Code was the first successful iteration of annual in-person
          24 hour hackathon conducted in Thadomal Shahani Engineering College,
          Bandra (W)
        </div>
        <div className="mt-5 text-3xl p-10 font-Roboto">
          The Genesis of Need for Code: A Visual Retrospective
        </div>
        <div id="winners" className="flex flex-col items-center justify-center">
          <div className="mt-10">
            <div className="text-center text-3xl">Our Winners</div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-10 flex flex-col items-center justify-center">
                <img width={500} height={500} src={winner} alt="first"></img>
                <div className="mt-5 text-2xl">Mingwx86</div>
              </div>

              <div className="flex flex-col justify-center items-center pt-10">
                <img src={runner1} width={500} height={500} alt="runner1"></img>
                <div className="mt-5 text-2xl">Pied Piper</div>
              </div>

              <div className="flex flex-col justify-center items-center pt-10">
                <img src={runner2} width={500} height={500} alt="runner1"></img>
                <div className="mt-5 text-2xl">Runtime Terror</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFC1;
