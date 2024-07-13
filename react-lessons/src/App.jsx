import React from "react";
import { useState } from "react";
import Todos from "./components/Todos";
import TodosThroughId from "./components/TodosThroughId";
import SumCounter from "./components/SumCounter";

const App = () => {
  return (
    <>
      {/* <HeadersWithButton /> */}
      {/* <Headers title={"username is luffymugiwara"} /> */}

      {/* <Todos /> */}
      {/* <TodosThroughId /> */}
      <SumCounter />
    </>
  );
};

function HeadersWithButton() {
  const [title, setTitle] = useState("click button to know");

  const updateRollNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber);
    setTitle(randomNumber);
  };
  return (
    <div>
      <h1>{`My roll number is: ${title}`}</h1>
      <button onClick={updateRollNumber}>Click me</button>
    </div>
  );
}

function Headers({ title }) {
  return <h2>{title}</h2>;
}

export default App;
