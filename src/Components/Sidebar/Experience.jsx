import React, { useState } from "react";
import classes from "./Experience.module.css";
import { BsClockFill } from "react-icons/bs";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
function Experience() {
  const [isExp, setIsExp] = useState(false);

  return (
    <>
      <div className={classes.item} onClick={() => setIsExp((prev) => !prev)}>
        <div className={classes.itemLeft}>
          <BsClockFill className={classes.icon} />
          <span>Experience</span>
        </div>
        <div className={classes.itemRight}>
          <span>+</span>
        </div>
      </div>
      <div className={`${classes.range} ${isExp && classes.valid}`}>
        <input type="range" min={1} max={20} />
      </div>
    </>
  );
}

export default Experience;
