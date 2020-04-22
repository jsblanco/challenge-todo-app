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
    setToDo({
        title: "",
        body: "",
      })
    toDoService.createToDo({title, body});
  };

  return (
    <div className="card shadow d-flex flex-column mt-2 p-5 ">
      <form action="submit" onSubmit={submitTask}>
        <label htmlFor="title" className=" mb-0">Task name:</label>
        <input
          type="text"
          name="title"
          className="w-100"
          placeholder="Name your task"
          onChange={handleChange}
          value={toDo.title}
        />
        <label htmlFor="body" className=" mt-3 mb-0">Task body:</label>
        <textarea
          type="text"
          name="body"
          className="w-100"
          placeholder="What does your task consist of?"
          onChange={handleChange}
          value={toDo.body}
        ></textarea>
        <button className="btn btn-success w-100 mt-4">Add a task</button>
      </form>
    </div>
  );
};
