import React from "react";
import { useState } from "react";

const App = () => {
  return (
    <>
      <HeadersWithButton />
      <Headers title={"username is luffymugiwara"} />
      <Headers title={"username is oioioi"} />
      <Headers title={"username is rey"} />
      <Headers title={"username is luffymugiwara"} />
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
      <h1>{`My Roll No is ${title}`}</h1>
      <button onClick={updateRollNumber}>Click me</button>
    </div>
  );
}

function Headers({ title }) {
  return <h2>{title}</h2>;
}

export default App;
