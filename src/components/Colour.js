import { useState } from "react";
import "./Colour.css";

function Colour() {

const [colour, setColour] = useState()

const changeColour = function () {
    console.log("test")
    switch (colour) {
      case "red":
        setColour("blue");
        break;
      case "blue":
        setColour("green");
        break;
      case "green":
        setColour("orange");
        break;
      case "orange":
        setColour("#F6BE00");
        break;
      default:
        setColour("red");
        break;
    }
}

    return (
        <div className="colourChange">
          <h1 style={{ background: colour }}>This element will change colour</h1>
          <button onClick={changeColour}>Change Colour</button>
        </div>
    )
}

export default Colour;