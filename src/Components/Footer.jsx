import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes.footerContainer}>
        <div className={classes.items}>
          <span>About</span>
          <span>Careers</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Terms</span>
          <span>Help</span>
          <span>Feedback</span>
        </div>
        <div className={classes.copy}>
          <span>Copyright © clearhire</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
