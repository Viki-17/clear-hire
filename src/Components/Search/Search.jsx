import React from "react";
import classes from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
function Search() {
  return (
    <>
      <div className={classes.container}>
        <input type="text" placeholder="Search" className={classes.searchbar} />
        <BsSearch className={classes.searchIcon} size={20} />
      </div>
    </>
  );
}

export default Search;
