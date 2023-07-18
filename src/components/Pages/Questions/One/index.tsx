/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import "../index.css";
import Two from "../Two";
import liptints from "../../../LipTints";

const One = () => {
  const [showQ2, setShowQ2] = useState(false);
  const [newLTList, setNewLTList] = useState([]);
  const [finish, setFinish] = useState("");
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  const finishFiltered = (finish: string) => {
    const liptintscopy = liptints.slice();
    const temp: any = liptintscopy.filter((e) => e.finish === finish);
    setNewLTList(temp);
    setShowQ2(true);
  };

  //   console.log(newLTList);

  return (
    <>
      {showQ2 ? (
        <Two newLTList={newLTList} setNewLTList={setNewLTList} />
      ) : (
        <div className="q">
          <div className="q-header">
            What kind of finish do you want to wear?
          </div>
          <div
            className={`q-choice-${c1}`}
            onClick={() => {
              setFinish("glossy");
              setC1(true);
            }}
          >
            Glossy
          </div>
          <div
            className={`q-choice-${c2}`}
            onClick={() => {
              setFinish("matte");
              setC2(true);
            }}
          >
            Matte
          </div>
          <div
            className={`q-choice-${c3}`}
            onClick={() => {
              setFinish("satin");
              setC3(true);
            }}
          >
            Satin
          </div>
          <button
            onClick={() => {
              if (finish) {
                finishFiltered(finish);
              }
            }}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default One;
