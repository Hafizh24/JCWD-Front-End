import React from "react";

//components
import Header from "../components/Header";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoFrom";

function MainPage() {
  // const handleToggle = (id) => {
  //   let mapped = toDoList.map((task) => {
  //     return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
  //   });
  //   setToDoList(mapped);
  // };

  // const handleFilter = () => {
  //   let filtered = toDoList.filter((task) => {
  //     return !task.complete;
  //   });
  //   setToDoList(filtered);
  // };

  // const addTask = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  //   setToDoList(copy);
  // };

  return (
    <div>
      <Header />
      {/* <ToDoList toDoList={list} handleToggle={handleToggle} handleFilter={handleFilter} /> */}
      <ToDoList />
      <ToDoForm />
    </div>
  );
}

export default MainPage;
