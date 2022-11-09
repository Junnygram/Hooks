import React, { useState } from "react";

const UsingState = () => {
  const [inputValue, setInputValue] = useState("Olaleye");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <div>
      {" "}
      <input
        placeholder="enter something..."
        onChange={onChange}
        className="change"
      />
      <div>{inputValue}</div>
    </div>
  );
};

export default UsingState;
