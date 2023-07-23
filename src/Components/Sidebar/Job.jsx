import React, { useState } from "react";
import classes from "./Job.module.css";
import { BsFillBriefcaseFill } from "react-icons/bs";
function Job() {
  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <div className={classes.item} onClick={() => setIsValid((prev) => !prev)}>
        <div className={classes.itemLeft}>
          <BsFillBriefcaseFill className={classes.icon} />
          <span>Job Title</span>
        </div>
        <div className={classes.itemRight}>
          <span>+</span>
        </div>
      </div>
      <div className={`${classes.panel} ${isValid && classes.valid}`}>
        <span>senior engineer</span>
        <span>senior engineer</span>
        <span>senior engineer</span>
        <span>senior engineer</span>
        <span>senior engineer</span>
      </div>
    </>
  );
}

export default Job;
