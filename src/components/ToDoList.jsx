import React from "react";
import { removeCompletedtask, toggleComplete } from "../redux/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

const ToDoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(removeCompletedtask());
  };

  const handleClick = (e) => {
    const todoId = e.target.getAttribute("value");
    // console.log("Before toggle:", todos);
    dispatch(toggleComplete(todoId));
    // console.log("After toggle:", todos);
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div
            id={todo.id}
            key={todo.id + todo.task}
            name="todo"
            value={todo.id}
            onClick={handleClick}
            className={todo.complete ? "todo strike " : "todo "}>
            {todo.task}
          </div>
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
