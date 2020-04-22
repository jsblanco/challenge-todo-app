import React from 'react'
import toDoService from "../lib/todo-service";

export const ToDoCard = (props) => {
    let {entry, removeTask} = props

    const deleteTask=()=>{
        toDoService.deleteToDo(entry._id)
        removeTask(entry._id)
    }
    return (
            <div className="card shadow p-4 m-5">
            <h4>{entry.title}</h4>
            <p>{entry.body}</p>
            <button className="btn btn-danger w-50" onClick={deleteTask}>Delete task</button>
            </div>
    )
}
