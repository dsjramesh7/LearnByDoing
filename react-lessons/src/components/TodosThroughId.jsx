import React, { useEffect, useState } from "react";
import axios from "axios";

const TodosThroughId = () => {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <>
      <button onClick={() => setSelectedId(1)}>1</button>
      <button onClick={() => setSelectedId(2)}>2</button>
      <button onClick={() => setSelectedId(3)}>3</button>
      <DisplayTodo id={selectedId} />
    </>
  );
};

function DisplayTodo({ id }) {
  const [todos, setTodos] = useState({});
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function (response) {
        setTodos(response.data.todo);
      });
  }, [id]);
  return (
    <div>
      id:{id}
      <h1>{todos.title}</h1>
      <p>{todos.description}</p>
    </div>
  );
}

export default TodosThroughId;
