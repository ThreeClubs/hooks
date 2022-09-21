import { useState, useEffect } from "react";
import "./App.css";
import Colour from "./components/Colour";

// ALL ABOUT USEEFFECT

function App() {
  const [count, setCount] = useState(0); // these are hooks
  const [decrem, setDecrem] = useState(0);
  // when a state value or props value changes a component re-renders
  const [sum, setSum] = useState(0);
  const [temp, setTemp] = useState();

  function updateCount() {
    setCount(count + 1);
  }

  function updateDecrem() {
    setDecrem(decrem - 1);
  }

  function resetAll() {
    setDecrem(0);
    setCount(0);
  }

  useEffect(function () {
    console.log(`The count is currently at ${count}`);
    setSum(sum+ count);
     console.log(`The sum is at ${sum}`);
  }, [count]
  );
 

  useEffect(function () {
    console.log("Only triggered once when component mounts");
  }, []);

  useEffect(
    function () {
      console.log(
        "This will display only when the count state variable changes"
      );
    },
    [count]
  );

  useEffect(
    function () {
      console.log(
        "This will display only when the decrem state variable changes"
      );
    },
    [decrem]
  );

  // USE CASE FOR THIS IS API

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="counter-flex">
            <div className="counter-bord">
              <div className="counter">Count: {count}</div>
              <button onClick={updateCount} className="count">
                Add one!
              </button>
            </div>
            <div className="counter-bord">
              <div className="counter">Count: {decrem}</div>
              <button onClick={updateDecrem} className="decrem">
                Minus one!
              </button>
            </div>
          </div>
          <button onClick={resetAll} className="reset">
            Reset State
          </button>
        </div>
      </div>
      <Colour></Colour>
    </>
  );
}

export default App;
