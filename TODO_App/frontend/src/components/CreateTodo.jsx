import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodoFunc = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        contentType: "application/json",
      },
    }).then(async function (res) {
      const json = await res.json();
      alert("Todo Added");
    });
  };
  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addTodoFunc}>Add Todo</button>
    </div>
  );
};

export default CreateTodo;
