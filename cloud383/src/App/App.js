import "./App.css";
import { useEffect, useState } from "react";
import InputField from "../InputField/InputField.js";

function App() {
  const [inputField, setInputField] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setInputField(e.target.value);
  };

  return (
    <div className="App">
      <InputField onChange={onChange} text={inputField} />
    </div>
  );
}

export default App;
