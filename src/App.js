import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddToDo } from "./components/AddToDo";
import toDoService from "./lib/todo-service";
import { ToDoCard } from "./components/ToDoCard";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    toDoService.getAllToDos().then((data) => setToDoList(data));
  }, [toDoList]);

  const removeTask = (id) => {
    console.log(id);
    setToDoList(toDoList.filter((toDo) => toDo._id !== id));
  };

  return (
    <div className="App d-flex flex-column justify-content-center">
      <header className="App-header px-5 pt-5 pb-3 mx-0 mt-0 mb-2 text-center bg-info shadow">
        <h1 className="my-5 display-3 text-light">Welcome to your to-do list</h1>
      </header>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
        <h3 className="w-100 text-center font-weight-bold mt-4 mb-2">Pending task list</h3>
        <div className="row d-flex justify-content-center">

          {toDoList.map((entry) => {
            return (
              <ToDoCard
                key={entry._id}
                entry={entry}
                removeTask={removeTask}
                toDoList={toDoList}
                setToDoList={setToDoList} 
              ></ToDoCard>
            );
          })}
        </div>
        </div>
        <div className="col-3">
        <h3 className="w-100 text-center font-weight-bold mt-4 mb-2">Add a new task</h3>
          <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
        </div>
      </div>
    </div>
  );
};

export default App;
