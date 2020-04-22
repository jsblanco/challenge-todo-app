import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddToDo } from "./components/AddToDo";
import toDoService from "./lib/todo-service";


const App = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    toDoService.getAllToDos().then((data) => setToDoList(data));
  }, [toDoList]);



  return (
    <div className="App ">
      <header className="App-header">
      <h1>Welcome to your to-do list</h1>
      </header>
      <div className="row">
        <div className="col-4">
            {toDoList.map(entry=> {return <div className="card shadow p-4 m-5">
            <h4>{entry.title}</h4>
            <p>{entry.body}</p>
            </div>
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
