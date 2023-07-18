/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import "../index.css";
import Results from "../../Results";

const Three = (props: any) => {
  const { newLTList, setNewLTList } = props;
  const [showNext, setShowNext] = useState(false);
  const [undertone, setUndertone] = useState("");
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  const undertoneFiltered = (undertone: string) => {
    if (newLTList) {
      const temp: any = newLTList.filter((e: any) => e.undertone === undertone);
      setNewLTList(temp);
      setShowNext(true);
    }
  };
  console.log(newLTList);

  return (
    <>
      {showNext ? (
        <Results newLTList={newLTList} />
      ) : (
        <div className="q">
          <div className="q-header">What kind of undertone do you have?</div>
          <div
            className={`q-choice-${c1}`}
            onClick={() => {
              setUndertone("warm");
              setC1(true);
            }}
          >
            Warm
          </div>
          <div
            className={`q-choice-${c2}`}
            onClick={() => {
              setUndertone("neutral");
              setC2(true);
            }}
          >
            Neutral
          </div>
          <div
            className={`q-choice-${c3}`}
            onClick={() => {
              setUndertone("cool");
              setC3(true);
            }}
          >
            Cool
          </div>
          <button
            onClick={() => {
              if (undertone) {
                undertoneFiltered(undertone);
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

export default Three;
