/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Wrapper from "./components/Wrapper";

import { useState, useEffect } from "react";

function App() {
  const [quiz, setQuiz] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:1573/quiz");
      const json = await response.json();
      setQuiz(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Wrapper />
    </>
  );
}

export default App;
