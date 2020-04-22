import React, { useState, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddToDo } from './components/AddToDo';
import toDoService from "./lib/todo-service";


const  App =()=> {

const [toDoList, setToDoList]= useState([])

useEffect(()=>{
  toDoService.getAllToDos()
  .then(data => setToDoList([data]))
}, [])



    return (
      <div className="App ">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <AddToDo />
      </div>
    );
  
}

export default App;
