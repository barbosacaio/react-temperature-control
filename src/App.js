/* Importing everything needed */
import React, { useState } from "react";

const App = () => {
  /* useState */
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  /* Function to increase the temperature */
  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;

    /* Changes the color based on the current temperature */
    if(newTemperature >= 15){
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperature);
  }

  /* Function to decrease the temperature */
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;

    /* Changes the color based on the current temperature */
    if(newTemperature < 15){
      setTemperatureColor('cold');
    }

    setTemperatureValue(newTemperature);
  }

  return(
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
}

export default App;