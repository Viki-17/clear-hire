import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import Score from "./Score";
import Job from "./Job";
import Experience from "./Experience";
function Sidebar() {
  const [isValid, setIsValid] = useState(false);
  const [isExp, setIsExp] = useState(false);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.itemslist}>
          <div className={classes.items}>
            <Job />
          </div>

          <div className={classes.items}>
            <Experience />
          </div>
          <div className={classes.items}>
            <Score />
          </div>
        </div>

        <div className={classes.btn}>
          <button>Apply Filter</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
