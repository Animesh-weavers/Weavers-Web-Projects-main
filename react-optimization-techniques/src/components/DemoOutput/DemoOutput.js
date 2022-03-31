import React from "react";

const DemoOutput = (props) => {
  console.log("DEMO OUTPUT");
  return <p>{props.show ? "This is a new!" : ""}</p>;
};

export default React.memo(DemoOutput);
