import { useState } from "react";
import "./App.css";

//state,component
//jsx is javascript file in that we can write javascript + xml code too
// let state = {
//   count: 69,
// };
function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    // state.count++;
    // console.log(state.count);
    setCount(count + 1);
  }
  return (
    <div>
      {/* <button onClick={handleClick}>count {state.count}</button> */}
      {/* <button onClick={handleClick}>count {count}</button> */}
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

// own component
export function CustomButton(props) {
  function onClickHandleIncrease() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandleIncrease}>Counter {props.count}</button>;
}
export default App;
