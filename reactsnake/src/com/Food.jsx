import React from "react";

//food is just a 15x15px box.
//position is an object with x & y property
function Food({ position }) {
  return (
    <div
      style={{
        width: "15px",
        height: "15px",
        backgroundColor: "#3dd1e7",
        margin: "3px",
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: 0,
      }}
    />
  );
}

export default Food;