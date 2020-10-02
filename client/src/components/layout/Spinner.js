import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt={"Loading..."}
        style={{ width: "200px", margin: "20rem  20rem", display: "block" }
    }
      />
    </>
  );
};

export default Spinner;
