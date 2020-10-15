import React from "react";

const button = (props) => {
  const assignedClasses = [];

  if (props.type === "text") {
    assignedClasses.push("btn_text");
  } else if (props.type === "cta") {
    assignedClasses.push("btn btn--white");
  } else if (props.type === "green") {
    assignedClasses.push("btn btn--green");
  }

  return (
    //eslint-disable-next-line
    <a href="" className={assignedClasses.join(" ")}>
      {props.children}
    </a>
  );
};

export default button;
