import { useState } from "react";
import "../index.css";
import Two from "../Two";

const One = (props: any) => {
  const [showQ2, setShowQ2] = useState(false);

  return (
    <>
      {showQ2 ? (
        <Two />
      ) : (
        <div className="q">
          <div className="q-header">
            What kind of finish do you want to wear?
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ2(true);
            }}
          >
            Glossy
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ2(true);
            }}
          >
            Matte
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ2(true);
            }}
          >
            Satin
          </div>
        </div>
      )}
    </>
  );
};

export default One;
