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
    <div className="App ">
      <header className="App-header">
        <h1>Welcome to your to-do list</h1>
      </header>
      <div className="row">
        <div className="col-4">
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
        <div className="col-4">
          <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
        </div>
      </div>
    </div>
  );
};

export default App;
