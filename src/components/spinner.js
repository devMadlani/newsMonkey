import React from "react";
import loading from "./loader.gif";

function spinner() {
  return (
    <div className="my-2 text-center">
      <img src={loading} alt="loading" />
    </div>
  );
}

export default spinner;
