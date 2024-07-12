import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("[click button to know]");

  const handleClick = () => {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber);
    setTitle(randomNumber);
  };
  return (
    <>
      <Headers title={"my roll no is " + title} />
      <Headers title={"username is luffymugiwara"} />

      <br />

      <button onClick={handleClick}>Click me</button>
    </>
  );
};

function Headers({ title }) {
  return <div>{title}</div>;
}

export default App;
