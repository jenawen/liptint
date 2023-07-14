import "./index.css";
import { useState } from "react";
import "../../../fonts/louis-george-cafe.ttf";

import One from "./One";

const Questions = () => {
  const [showQ1, setShowQ1] = useState(false);
  const rev = () => {
    const reveal = document.querySelectorAll(".rev");
    for (let i = 0; i < reveal.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveal[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  };

  // setTimeout(()=>{
  //   const rev = () => {
  //     const reveal = document.querySelectorAll(".rev");
  //     for (let i = 0; i < reveal.length; i++) {
  //       const windowHeight = window.innerHeight;
  //       const elementTop = reveal[i].getBoundingClientRect().top;
  //       const elementVisible = 100;
  //       if (elementTop < windowHeight - elementVisible) {
  //         reveal[i].classList.add("active");
  //       } else {
  //         reveal[i].classList.remove("active");
  //       }
  //     }
  //   };
  // },1000)

  window.addEventListener("scroll", rev);
  return (
    <>
      {showQ1 ? (
        <One />
      ) : (
        <div className="questions-container ">
          <div className="questions-text-1 rev fade-bottom">
            <p>To pick your perfect lip tint,</p>
            <p>we need to know a few things.</p>
          </div>
          <div className="questions-text-2 rev fade-bottom">
            <p>You'll be asked about what kind of</p>
            <p>
              <li> finish, </li>
            </p>
            <p>
              <li> coverage, </li>
            </p>
            <p>
              <li> and undertone </li>
            </p>
            <p>you want for your lip tint.</p>
          </div>
          <div className="questions-text-3 rev fade-bottom">
            <p>Sounds simple enough, right?</p>
            <p className="q1-link" onClick={() => setShowQ1(true)}>
              So let's pick a perfect lip tint for you!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Questions;
