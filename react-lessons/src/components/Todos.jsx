import { useEffect } from "react";
import { useState } from "react";
let GLOBAL_ID = 4;
function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://sum-server.100xdevs.com/todos");
      const data = await response.json();
      console.log(data.todos);
      setTodos(data.todos);
    };

    fetchApi();
  }, []);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: GLOBAL_ID++,
        title: "new todo",
        description: "new todo desc" + GLOBAL_ID,
      },
    ]);
  }

  // console.log(todos);

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, index) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default Todos;
