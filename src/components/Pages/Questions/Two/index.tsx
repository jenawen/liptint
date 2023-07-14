import { useState } from "react";
import "../index.css";
import Three from "../Three";

const Two = () => {
  const [showQ3, setShowQ3] = useState(false);

  return (
    <>
      {showQ3 ? (
        <Three />
      ) : (
        <div className="q">
          <div className="q-header">
            What kind of coverage are you looking for?
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ3(true);
            }}
          >
            Full coverage
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ3(true);
            }}
          >
            Medium coverage
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ3(true);
            }}
          >
            Sheer coverage
          </div>
        </div>
      )}
    </>
  );
};

export default Two;
