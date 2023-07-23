import { useState } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import classes from "./App.module.css";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className={classes.navbar}>
        <Navbar />
        <div className={classes.body}>
          <Body />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
