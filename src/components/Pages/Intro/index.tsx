import "./index.css";
import "../../../fonts/figtree.ttf";
import "../../../fonts/louis-george-cafe.ttf";

const Intro = (props: any) => {
  const { setShowQuestions } = props;

  return (
    <div className="intro-wrapper">
      <div className="intro-text">
        <div className="intro-header">What's the vibe for today ?</div>
        <div>Let me help you pick your lip color!</div>
        <div
          onClick={() => {
            setShowQuestions(true);
          }}
          className="lets-go"
        >
          Let's go! →
        </div>
      </div>
    </div>
  );
};

export default Intro;
