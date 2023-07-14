import { useState } from "react";
import "../index.css";
import Two from "../Two";
import liptints from "../../../LipTints";

const One = (props: any) => {
  const [showQ2, setShowQ2] = useState(false);
  const [newLTList, setNewLTList] = useState([]);

  const finishFiltered = (finish: string) => {
    const liptintscopy = liptints.slice();
    const temp: any = liptintscopy.filter((e) => e.finish === finish);
    setNewLTList(temp);
    setShowQ2(true);
  };

  return (
    <>
      {showQ2 ? (
        <Two liptint={newLTList} />
      ) : (
        <div className="q">
          <div className="q-header">
            What kind of finish do you want to wear?
          </div>
          <div
            className="q-choice"
            onClick={() => {
              finishFiltered("glossy");
            }}
          >
            Glossy
          </div>
          <div
            className="q-choice"
            onClick={() => {
              finishFiltered("matte");
            }}
          >
            Matte
          </div>
          <div
            className="q-choice"
            onClick={() => {
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
