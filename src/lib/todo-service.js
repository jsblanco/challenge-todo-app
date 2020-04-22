import axios from "axios";

class ToDos {
  constructor() {
    this.todo = axios.create({
      baseURL: "http://localhost:4000/api/v1",
    });
  }


  getAllToDos=()=>{
    return this.todo.get("/todos")
    .then(data=>data.data)
  }


  createToDo=({title, body})=>{
    return this.todo.post("/todos", {title, body})
    .then(data=>data.data)
}

deleteToDo=(id)=>{
    return this.todo.delete(`/todos/${id}`)
    .then(data=>data.data)
}

}

const toDoRequests = new ToDos()

export default toDoRequests