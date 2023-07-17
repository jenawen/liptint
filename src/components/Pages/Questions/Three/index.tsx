/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from "react";
import "../index.css";
import Results from "../../Results";

const Three = (props: any) => {
  const { newLTList, setNewLTList } = props;
  const [showNext, setShowNext] = useState(false);

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
            className="q-choice"
            onClick={() => {
              undertoneFiltered("warm");
            }}
          >
            Warm
          </div>
          <div
            className="q-choice"
            onClick={() => {
              undertoneFiltered("neutral");
            }}
          >
            Neutral
          </div>
          <div
            className="q-choice"
            onClick={() => {
              undertoneFiltered("cool");
            }}
          >
            Cool
          </div>
        </div>
      )}
    </>
  );
};

export default Three;
