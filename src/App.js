import "./styles.css";
import React, { useState } from "react";

export default function VowelCounter() {
  const [inputValue, setInputValue] = useState("");

  const countVowels = (str) => {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  };
  const vowelCount = countVowels(inputValue);

  let handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Number of vowels: {vowelCount}</p>
    </>
  );
}
