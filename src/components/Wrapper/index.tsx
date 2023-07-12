import Intro from "../Pages/Intro";
import Questions from "../Pages/Questions";
import { useEffect, useState } from "react";

const Wrapper = () => {
  const [current, setCurrent] = useState(1);
  const handleOnClick = (btnNumber: number) => {
    setCurrent(btnNumber);
  };

  useEffect(() => {
    if (current === 3) {
      setCurrent(1);
    }
    if (document) {
      document
        .querySelector(`#slide-${current > 3 ? 1 : current}`)!
        .scrollIntoView();
    }
  }, [current]);

  return (
    <div className="page-container">
      <div id="slide-1">
        {" "}
        <Intro setCurrent={setCurrent} />{" "}
      </div>
      <div id="slide-2">
        {" "}
        <Questions />{" "}
      </div>
    </div>
  );
};

export default Wrapper;
