// import React from 'react'
import "./loading_1.css";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import logo from "./Loogo.png";
// import volumeOff from "./volume_off.svg";
// import volumeOn from "./volume_on.svg";

function LoadingScreen() {
  const intro = useRef();
  const title = useRef();
  const content = useRef();
  const audio = useRef();

  // const [muted, setMuted] = useState(true);

  useEffect(() => {
    let tl = new gsap.timeline();

    tl.to(intro.current, {
      opacity: 1,
      delay: 1,
      duration: 1.5,
    })
      .to(intro.current, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          // audio.current.play();
        },
      })
      .set(title.current, { opacity: 1, scale: 2.75, delay: 0.5 })
      .to(title.current, { scale: 0.05, ease: "power2", duration: 4 })
      .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
      .to(content.current, { top: "-170%", duration: 50 });
  }, []);
  return (
    <div className="container">
      <section className="intro" ref={intro}>
        <p>
          A long time ago, in TSEC far,
          <br /> far away....
          <br />
        </p>
      </section>
      <section className="title" ref={title}>
        <img src={logo} alt="Code Wars title" />
      </section>
      <section className="crawl">
        <div className="content" ref={content}>
          <h1 className="episode-number">Episode II</h1>
          <h2 className="episode-title">THE COMMITTEE AWAKENS</h2>
          {/* <div className = "textandstuff"> */}

          <p>
            Hidden within the ancient walls of Thadomal Shahani lies a realm
            where knowledge takes tangible form, granting students supernatural
            abilities. Students possess magical abilities, mastering spells
            while unraveling the mysteries of knowledge.
          </p>
          <p>
            This brings a mysterious and captivating event called the NFC 2.0
            emerges. As the competition unfolds, participants find themselves
            caught in thrilling web of intrigue, where their abilities are put
            to an ultimate test.
          </p>
          <p>
            Only the boldest and most ingenious will unravel the enigmatic truth
            behind the Hackathon and forever changing the course of technology.
          </p>
        </div>
      </section>
    </div>
  );
}
export default LoadingScreen;
