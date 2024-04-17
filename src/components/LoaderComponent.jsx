import React from "react";

function LoaderComponent() {
  return (
    <div
      style={{
        margin: "3rem auto",
        display: "inline-block",
        width: "64px",
        height: "64px",
        border: "5px solid #ccc",
        borderTopColor: "#007bff",
        borderRadius: "50%",
        animation: "spinner 1s linear infinite", 
      }}
    ></div>
  );
}

export default LoaderComponent;

