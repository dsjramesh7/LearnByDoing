import React, { useMemo, useState } from "react";
// useMemo hook
const SumCounter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("memo got called");
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  // let count = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count = count + i;
  // }
  return (
    <div>
      <input
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="sum from 1 to n"
      />
      <br />
      <br />
      sum from 1 to {inputValue} is {count}
      <br />
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        counter [{counter}]
      </button>
    </div>
  );
};

export default SumCounter;
