import "./index.css";
const Questions = () => {
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
    <div className="questions-container ">
      <div className="questions-text-1 rev fade-bottom">
        <p>In order to pick your perfect lip tint,</p>
        <p>you need to answer a few questions.</p>
      </div>
      <div className="questions-text-2 rev fade-bottom">
        <p>You'll be asked about </p>
        <p>
          <li> finish, </li>
        </p>
        <p>
          <li> coverage, </li>
        </p>
        <p>
          <li> and your skin's undertone. </li>
        </p>
      </div>
      <div className="questions-text-3 rev fade-bottom">
        <p>Now let's pick a perfect lip tint for you!</p>
        <p>Take me to question 1!</p>
      </div>
    </div>
  );
};

export default Questions;
