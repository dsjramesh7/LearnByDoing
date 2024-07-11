import React from "react";

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
            <button>
              {todo.completed == true ? "completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
