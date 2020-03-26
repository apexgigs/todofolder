import React, {Component} from 'react';

class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  }
  addItem = (event)=> {
    event.preventDefualt();
    console.log("this additme method executed");
  };
  handleChange = (event) =>{
    console.log(event.target.value);
  };
  render() {
    return(
      <div className="container">
      <form onsubmit={this.addItem}>
      <label htmlFor="taskName">Task Name</label>
      <input onchaange={this.handleChange} name="taskName" placeholder="Add to Do"/>
      <button type="submit"> Add Task</button>
      </form>
      </div>
    )
  }
}

export default ToDoList;
