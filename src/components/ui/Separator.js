import React from "react";
import svg from "../../assets/separator.svg";

const Separator = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={svg}
        alt="separator"
        style={{
          width: "60%",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default Separator;
