import { useEffect, useState } from "react";
import { calculateTimeLeft } from "./utils.ts";
import "../../../index.css";

import "./styles.scss";
import React from "react";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);

  return (
    <div>
      <div className="counter text-yellow flex">
        <div className="counter-item">
          <span className="value">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="label">Days</span>
        </div>

        <div className="counter-item">
          <span className="value">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="label">Hours</span>
        </div>

        <div className="counter-item">
          <span className="value">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="label">Minutes</span>
        </div>

        <div className="counter-item">
          <span className="value">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};
