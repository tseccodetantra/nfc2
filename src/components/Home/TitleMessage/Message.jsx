import logo from "../../../assets/logo.png";
import "./message.css";

const Message = () => {
  return (
    <div className="text-yellow flex flex-col items-center">
      <div className="codetantra">
        <p>
          <span className="text-white text-6xl">Code</span>
          <span className="text-6xl">Tantra</span>
        </p>
      </div>
      <br></br>
      <p className="mt-1"> PRESENTS </p>
      <img id="logo" width={500} height={500} src={logo}></img>
    </div>
  );
};

export default Message;
