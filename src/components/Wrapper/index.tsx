import Header from "../Header";
import Intro from "../Pages/Intro";
import Questions from "../Pages/Questions";
import { useEffect, useState } from "react";

const Wrapper = () => {
  // const [current, setCurrent] = useState(1);
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className="page-container">
      {showQuestions ? (
        <>
          <Header />
          <Questions />
        </>
      ) : (
        <>
          <Intro setShowQuestions={setShowQuestions} />
        </>
      )}
      {/* <div id="slide-1">
        {" "}
        <Intro setCurrent={setCurrent} />{" "}
      </div>
      <div id="slide-2">
        {" "}
        <Questions />{" "}
      </div> */}
    </div>
  );
};

export default Wrapper;
