import React from "react";

//snake prop is an array of small boxes having x and y value
// we will set App.css -> position: relative
// here we gave -> position: absolute and top, left values in % to fix each element
// in snake array in the UI
function Snake({ snake }) {
  return (
    <div>
      {snake.map((box, i) => (
        <div
          style={{
            width: "15px",
            height: "15px",
            backgroundColor: "#e7da3d",
            margin: "5px",
            position: "absolute",
            left: `${box.x}%`,
            top: `${box.y}%`,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
}

export default Snake;