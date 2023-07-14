import { useState } from "react";
import "../index.css";
import Two from "../Two";

const Three = (props: any) => {
  const [showNext, setShowNext] = useState(false);

  return (
    <div className="q">
      <div className="q-header">What kind of undertone do you have?</div>
      <div
        className="q-choice"
        onClick={() => {
          setShowNext(true);
        }}
      >
        Warm
      </div>
      <div
        className="q-choice"
        onClick={() => {
          setShowNext(true);
        }}
      >
        Neutral
      </div>
      <div
        className="q-choice"
        onClick={() => {
          setShowNext(true);
        }}
      >
        Cool
      </div>
    </div>
  );
};

export default Three;
