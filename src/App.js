import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState();
  const [valueInCelsius, setvalueInCelsius] = useState(0);
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    let calculate = ((formData - 32) * 5) / 9;
    setvalueInCelsius(calculate.toFixed(2));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="number" id="temp" onChange={handleChange} />
        <button type="submit"> Submit</button>
      </form>
      <h2>result in Celsius: {valueInCelsius} </h2>
    </div>
  );
}

export default App;
