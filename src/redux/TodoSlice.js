import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const TodoSlice = createSlice({
  name: "todo",
  initialState: data,
  reducers: {
    addTask: (state, action) => {
      return [...state, { id: state.length + 1, task: action.payload, complete: false }];
    },
    removeCompletedtask: (state) => {
      return state.filter((task) => !task.complete);
    },
    toggleComplete: (state, action) => {
      console.log("Toggling task with id:", action.payload);
      return state.map((task) =>
        task.id === Number(action.payload) ? { ...task, complete: !task.complete } : task
      );
    },
  },
});

export const { addTask, removeCompletedtask, toggleComplete } = TodoSlice.actions;
export default TodoSlice.reducer;
