import { Countdown } from "./Countdown/Countdown.tsx";
import Message from "./TitleMessage/Message";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Message />
      <Countdown />
    </div>
  );
};

export default Home;
