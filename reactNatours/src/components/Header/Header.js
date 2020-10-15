import React from "react";
import Button from "../Buttons/Button";

const header = (props) => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img
          className="header__logo"
          src={require("../../img/logoWhite.png")}
          alt="white logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <Button type="cta">Discover our tours</Button>
      </div>
    </header>
  );
};

export default header;
