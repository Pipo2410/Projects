import React from "react";
import Searchbar from "./Searchbar/Searchbar";
const SectionSearch = (props) => {
  return (
    <div className="section-stories">
      <div className="u-text-center u-margin-bottom-big">
        <h1 className="heading-secondary">React Searchbar</h1>
      </div>
      <div>
        <Searchbar></Searchbar>
      </div>
    </div>
  );
};

export default SectionSearch;
