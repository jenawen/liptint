import "./index.css";
import { useEffect, useState } from "react";

const Intro = (props: any) => {
  const { setCurrent } = props;

  return (
    <div className="intro-wrapper">
      <div className="intro-text">
        <div className="intro-header">What are we wearing today ?</div>
        <div>Let me help you pick your lip color!</div>
        <div
          onClick={() => {
            setCurrent(2);
          }}
        >
          Let's go!
        </div>
      </div>
    </div>
  );
};

export default Intro;
