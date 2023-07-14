import { useState } from "react";
import "../index.css";
import Two from "../Two";
import liptints from "../../../LipTints";

const One = (props: any) => {
  const [showQ2, setShowQ2] = useState(false);

  const finishFiltered = (finish: string) => {
    console.log(finish);
  };

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
              finishFiltered("glossy");
            }}
          >
            Glossy
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ2(true);
              finishFiltered("matte");
            }}
          >
            Matte
          </div>
          <div
            className="q-choice"
            onClick={() => {
              setShowQ2(true);
              finishFiltered("satin");
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
