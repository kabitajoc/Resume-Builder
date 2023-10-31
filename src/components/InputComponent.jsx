import React, { useState } from 'react';

function InputComponent(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    props.onInputChange(newValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputComponent;
