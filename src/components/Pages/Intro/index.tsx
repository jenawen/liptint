import "./index.css";
import { useEffect, useState } from "react";

const Intro = (props: any) => {
  const { setShowQuestions } = props;

  return (
    <div className="intro-wrapper">
      <div className="intro-text">
        <div className="intro-header">What are we wearing today ?</div>
        <div>Let me help you pick your lip color!</div>
        <div
          onClick={() => {
            setShowQuestions(true);
          }}
        >
          Let's go!
        </div>
      </div>
    </div>
  );
};

export default Intro;
