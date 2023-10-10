import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/TodoSlice";

const ToDoForm = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userInput));

    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;
