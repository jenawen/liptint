/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import "../index.css";
import Three from "../Three";

const Two = (props: any) => {
  const { newLTList, setNewLTList } = props;
  const [showQ3, setShowQ3] = useState(false);
  const [coverage, setCoverage] = useState("");
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  const filterCoverage = (coverage: string) => {
    if (newLTList) {
      const temp: any = newLTList.filter((e: any) => e.coverage === coverage);
      setNewLTList(temp);
      setShowQ3(true);
    }
  };

  return (
    <>
      {showQ3 ? (
        <Three newLTList={newLTList} setNewLTList={setNewLTList} />
      ) : (
        <div className="q">
          <div className="q-header">
            What kind of coverage are you looking for?
          </div>
          <div
            className={`q-choice-${c1}`}
            onClick={() => {
              setCoverage("high");
              setC1(true);
            }}
          >
            Full coverage
          </div>
          <div
            className={`q-choice-${c2}`}
            onClick={() => {
              setCoverage("medium");
              setC2(true);
            }}
          >
            Medium coverage
          </div>
          <div
            className={`q-choice-${c3}`}
            onClick={() => {
              setCoverage("light");
              setC3(true);
            }}
          >
            Sheer coverage
          </div>
          <button
            onClick={() => {
              if (coverage) {
                filterCoverage(coverage);
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

export default Two;
