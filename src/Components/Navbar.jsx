import React from "react";
import classes from "./Navbar.module.css";
import { BiMenuAltRight } from "react-icons/bi";
function Navbar() {
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.logo}>
        <p>
          <span>clear</span>hire
        </p>
      </div>
      <div style={{ flex: 1 }} />
      <div className={classes.items}>
        <span>Your Employees</span>
        <span>On-Board</span>
        <span>Verification Request</span>
        <BiMenuAltRight className={classes.icon} size={45} />
      </div>
    </div>
  );
}

export default Navbar;
