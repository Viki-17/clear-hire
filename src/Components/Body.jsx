import React from "react";
import Search from "./Search/Search";
import classes from "./Body.module.css";
import Employee from "./Search/Employee";
import Sidebar from "./Sidebar/Sidebar";
function Body() {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.searchContainer}>
        <Search />
        <div className={classes.employeeContainer}>
          <Employee index={1} />
          <Employee index={2} />
          <Employee index={3} />
          <Employee index={4} />
          <Employee index={5} />
          <Employee index={6} />
          <Employee index={7} />
          <Employee index={8} />
        </div>
      </div>
    </div>
  );
}

export default Body;
