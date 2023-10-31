import React, { useState } from "react";

function DropdownWithInputs() {
  const [dropdownTitle, setDropdownTitle] = useState("Certification Title"); // Initialize dropdownTitle state
  const [input1Value, setInput1Value] = useState(""); // Initialize input1 state
  const [input2Value, setInput2Value] = useState(""); // Initialize input2 state

  const handleInput1Change = (e) => {
    setInput1Value(e.target.value);
    setDropdownTitle(e.target.value); // Set the dropdown title based on input1 value
  };

  const handleInput2Change = (e) => {
    setInput2Value(e.target.value);
  };

  return (
    <div>
      <div>
        <select>
          <option> {dropdownTitle}</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter title"
          value={input1Value}
          onChange={handleInput1Change}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Input 2"
          value={input2Value}
          onChange={handleInput2Change}
        />
      </div>
    </div>
  );
}

export default DropdownWithInputs;
