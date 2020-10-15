import React from "react";
import Header from "../Header/Header";
import SectionAbout from "../Sections/SectionAbout/SectionAbout";
import SectionFeatures from "../Sections/SectionFeatures/SectionFeautres";
import SectionTours from "../Sections/SectionTours/SectionTours";
import SectionSearch from "../Sections/SectionSearch/SectionSearch";

const cockpit = (props) => {
  return (
    <div>
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionSearch />
      </main>
    </div>
  );
};

export default cockpit;
