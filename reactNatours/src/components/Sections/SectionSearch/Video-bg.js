import React from "react";
import withClass from "../../../hoc/withClass";

const video = (props) => {
  return (
    <video className="bg-video__content" autoPlay muted loop>
      <source src={require("../../../img/video.mp4")} type="video/mp4"></source>
      <source
        src={require("../../../img/video.webm")}
        type="video/webm"
      ></source>
      Your browser is not supported!
    </video>
  );
};

export default withClass(video, "bg-video");
