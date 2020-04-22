import React, { Fragment,useState, useEffect } from "react";
import toDoService from "../lib/todo-service";

export const TaskEditor = (props) => {
  let { entry, setTask, setShowTaskEditor} = props;
  const [toDo, setToDo] = useState({
    title: entry.title,
    body: entry.body,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setToDo({
      ...toDo,
      [name]: value,
    });
  };

  const editTask = e => {
      e.preventDefault()
      const { title, body } = toDo;
      setTask(toDo)
      setShowTaskEditor(false)
      toDoService.updateToDo({entry, title, body});
  };

  return (
    <Fragment>
      <form action="submit" onSubmit={editTask}>
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
      <button className="btn btn-warning w-100">Update task</button>
      </form>
    </Fragment>
  );
};
