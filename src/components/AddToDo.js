




import React, { useState, useEffect } from "react";
import toDoService from "../lib/todo-service";

export const AddToDo = () => {
  const [toDo, setToDo] = useState({
    title: "",
    body: "",
  });

  const handleChange = event => {
      console.log(event)
      const {name, value} = event.target
      console.log(name, value)
    setToDo({
      ...toDo,
      [name]: value,
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    const { title, body } = toDo;
    console.log(title, body)
    toDoService.createToDo({title, body});
  };

  return (
    <div>
    <h4>Add a task</h4>
      <form action="submit" onSubmit={submitTask}>
        <label htmlFor="title">Task name:</label>
        <input
          type="text"
          name="title"
          placeholder="Name your task"
          onChange={handleChange}
          value={toDo.title}
        />
        <label htmlFor="body">Task body:</label>
        <input
          type="text"
          name="body"
          placeholder="What does your task consist of?"
          onChange={handleChange}
          value={toDo.body}
        />
        <button>Add a task</button>
      </form>
    </div>
  );
};
