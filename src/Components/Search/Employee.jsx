import React from "react";
import classes from "./Employee.module.css";
import { BsExclamationOctagonFill } from "react-icons/bs";
function Employee({ index }) {
  return (
    <div className={classes.container}>
      <img
        src={`https://picsum.photos/200/300?random=${index}`}
        height="300px"
        width="200px"
        alt="profile-picture"
      />
      <div className={classes.cards}>
        <h3>Sam</h3>
        <div className={classes.designation}>
          <p>Designation</p>
          <span>Exp.1Y</span>
        </div>
        <div className={classes.percentContainer}>
          <span>80%</span>
          <div className={classes.percentBackground}>
            <div className={classes.percent}></div>
          </div>
        </div>
        <span className={classes.text}>Best employee of the year</span>
        <button className={classes.btn}>
          Access Employee <BsExclamationOctagonFill />
        </button>
      </div>
    </div>
  );
}

export default Employee;
