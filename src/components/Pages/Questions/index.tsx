import "./index.css";
const Questions = () => {
  const rev = () => {
    const reveal = document.querySelectorAll(".rev");
    for (let i = 0; i < reveal.length; i++) {
      const windowHeight = window.innerHeight  ;
      const elementTop = reveal[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  };

  window.addEventListener("scroll", rev);
  return (
    <div className="questions-container ">
      <div className="questions-text rev fade-bottom">
        <p>In order to pick your perfect lip tint,</p>
        <p>you need to answer a few questions.</p>
      </div>
    </div>
  );
};

export default Questions;
