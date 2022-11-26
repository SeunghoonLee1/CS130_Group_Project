import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class TaskCRUD extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("userInfo")) || {
      username: "",
      email: "",
      tasker: false,
      taskAccepted: [],
      taskCreated: [],
    };
    this.submitNewTask = this.submitNewTask.bind(this);
    this.state.submitted = false;
  }
  /*
    Task Info:
    category
    "Swipe Trade"
    customername
    description

    key(autogenerated for new tasks)

    price
    "$8"
    status
    "Open" for new tasks
    taskId
    timelocation
    "10/13/2022 13:30 Anywhere on campus"



    */

  submitNewTask(event) {
    //get event form input
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    object.status = "Open";
    object.customername = this.state.username;
    object.customeremail = this.state.email;
    object.taskername = "";
    object.taskeremail = "";
    var data = JSON.stringify(object);
    console.log(data);

    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch("api/tasks/new", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          console.log(result.error);
        } else {
          console.log("New Task Created: ", result);
          let tasks = window.localStorage.getItem("tasks");
          if (tasks === null) {
            tasks = [];
          } else {
            tasks = JSON.parse(tasks);
            tasks.push(JSON.parse(data));
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            let taskCounter = window.localStorage.getItem("taskKey");
            taskCounter = taskCounter + 1;
            window.localStorage.setItem("taskKey", taskCounter);
            this.state.submitted = true;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("handle errors later plz");
      });

    //add customer email, customer username, status: "Open"
  }

  newTaskForm() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.submitNewTask}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">New Task</h3>
            <div className="form-group mt-3">
              <label>Category</label>
              <select name="category" id="cat-select">
                <option value="Tutoring">Tutoring</option>
                <option value="Swipe Trade">Swipe Trade</option>
                <option value="Ride Share">Ride Share</option>
              </select>
            </div>
            <div className="form-group mt-3">
              <label>Date and Time</label>
              <input
                type="datetime-local"
                name="datetime"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Location</label>
              <input
                type="text"
                name="location"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control mt-1"
                placeholder="please describe your task"
                minLength={15}
              />
            </div>
            <div className="form-group mt-3">
              <label>Price</label>
              <input
                type="text"
                name="description"
                className="form-control mt-1"
                placeholder="ex. $8"
                minLength={1}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.state.email !== "" && !this.state.submitted && this.newTaskForm()}
        {this.state.submitted && (
          <div>
            <h1>Your Task Has Been Created</h1>
          </div>
        )}
        {this.state.email === "" && <div>Please Login To Create a Task</div>}
        <Footer />
      </React.Fragment>
    );
  }
}
