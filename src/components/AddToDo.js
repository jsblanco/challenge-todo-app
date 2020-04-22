import React, { useState, useEffect } from "react";
import toDoService from "../lib/todo-service";

export const AddToDo = (props) => {
  const [toDo, setToDo] = useState({
    title: "",
    body: "",
  });

  let {toDoList, setToDoList}= props

  const handleChange = event => {
      const {name, value} = event.target
    setToDo({
      ...toDo,
      [name]: value,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    const { title, body } = toDo;
    setToDoList([
        ...toDoList,
        {[title]: body}
    ])
    console.log(title, body)
    toDoService.createToDo({title, body});
  };

  return (
    <div className="card shadow d-flex flex-column m-5 p-5 ">
    <h4>Add a task</h4>
      <form action="submit" onSubmit={submitTask}>
        <label htmlFor="title">Task name:</label>
        <input
          type="text"
          name="title"
          className="w-100"
          placeholder="Name your task"
          onChange={handleChange}
          value={toDo.title}
        />
        <label htmlFor="body">Task body:</label>
        <input
          type="text"
          name="body"
          className="w-100"
          placeholder="What does your task consist of?"
          onChange={handleChange}
          value={toDo.body}
        />
        <button className="btn-success w-100 mt-4">Add a task</button>
      </form>
    </div>
  );
};
