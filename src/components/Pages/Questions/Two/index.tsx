/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import "../index.css";
import Three from "../Three";

const Two = (props: any) => {
  const { newLTList, setNewLTList } = props;
  const [showQ3, setShowQ3] = useState(false);

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
            className="q-choice"
            onClick={() => {
              filterCoverage("high");
            }}
          >
            Full coverage
          </div>
          <div
            className="q-choice"
            onClick={() => {
              filterCoverage("medium");
            }}
          >
            Medium coverage
          </div>
          <div
            className="q-choice"
            onClick={() => {
              filterCoverage("light");
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
