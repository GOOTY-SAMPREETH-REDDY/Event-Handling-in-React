import { useState } from "react";
import React from "react";

function App() {
  const [heading, setHeading] = useState("Hel");
  const [isMouseOver, setIsMouseOver] = useState(false);

  function clickbtn() {
    setHeading("submitted");
  }
  function handleMouseOver() {
    setIsMouseOver(true);
  }
  function handleMouseOut() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "red" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={clickbtn}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
