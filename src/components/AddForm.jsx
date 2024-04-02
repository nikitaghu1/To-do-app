import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          className="input"
          type="text"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button className="button2">Add Task</button>
      </form>
    </>
  );
}
