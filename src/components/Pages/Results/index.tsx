/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
const Results = (props: any) => {
  const { newLTList } = props;
  console.log("results", newLTList);
  return (
    <div className="results">
      <div className="picture"></div>
      <div className="text">
        Your result is:&nbsp;
        {newLTList.map((e) => e.name)}
        &nbsp;in the shade {newLTList.map((e) => e.shade)}
      </div>
    </div>
  );
};

export default Results;
