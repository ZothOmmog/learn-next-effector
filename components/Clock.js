import { useUnit } from "effector-react/scope";
import { $light, $timeString, toggleLight } from "../src/model";

const Clock = () => {
  const light = useUnit($light);
  const timeString = useUnit($timeString);
  const handleToggle = useUnit(toggleLight);
  return (
    <div className={light ? "light" : ""}>
      {timeString}
      <button onClick={() => handleToggle()}>toogle light</button>
      <style jsx>{`
        div {
          padding: 15px;
          color: #82fa58;
          display: inline-block;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};
export default Clock;
