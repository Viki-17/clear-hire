import React, { useState } from "react";
import classes from "./Score.module.css";
import { AiOutlineStar } from "react-icons/ai";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
function Score() {
  const [isScore, setIsScore] = useState(false);

  return (
    <>
      <div className={classes.item} onClick={() => setIsScore((prev) => !prev)}>
        <div className={classes.itemLeft}>
          <AiOutlineStar className={classes.icon} />
          <span>Score</span>
        </div>
        <div className={classes.itemRight}>
          <span>+</span>
        </div>
      </div>
      <div className={`${classes.score} ${isScore && classes.valid}`}>
        <div className={classes.scoreValue}>
          <span>100</span>
        </div>
        <div className={classes.field}>
          <div className={classes.valueLeft}>-</div>
          <input type="range" min={1} max={20} />

          <div className={classes.valueRight}>+</div>
        </div>
      </div>
    </>
  );
}

export default Score;
