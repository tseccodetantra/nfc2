import logo from "../../../assets/logo.png";
import "./message.css";

const Message = () => {
  return (
    <div className="text-yellow flex flex-col items-center">
      <div>
        <span className="text-white text-6xl">Code</span>
        <span className="text-6xl">Tantra</span>
      </div>
      <br></br>
      <p> PRESENTS </p>
      <img id="logo" width={500} height={500} src={logo}></img>
    </div>
  );
};

export default Message;
