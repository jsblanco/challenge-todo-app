import React, { useState, useEffect, Fragment } from "react";
import toDoService from "../lib/todo-service";
import { TaskEditor } from "./TaskEditor";
import { TaskInformation } from "./TaskInformation";

export const ToDoCard = (props) => {
  let { entry, removeTask, toDoList, setToDoList } = props;
  let [showTaskEditor, setShowTaskEditor] = useState(false);

  useEffect(() => {}, [showTaskEditor]);

  const deleteTask = () => {
    toDoService.deleteToDo(entry._id);
    removeTask(entry._id);
  };

  const showTaskEditorToggler = () => {
    setShowTaskEditor(true);
  };

  return (
    <div className="card shadow p-4 m-5">
      {showTaskEditor == true ? (
        <TaskEditor
          entry={entry}
          toDoList={toDoList}
          setToDoList={setToDoList}
          setShowTaskEditor={setShowTaskEditor}
        />
      ) : (
        <TaskInformation entry={entry} />
      )}

      {showTaskEditor ? (
        ""
      ) : (
        <button className="btn btn-info w-100" onClick={showTaskEditorToggler}>
          Change task information
        </button>
      )}
      <button className="btn btn-danger w-100" onClick={deleteTask}>
        Delete task
      </button>
    </div>
  );
};
