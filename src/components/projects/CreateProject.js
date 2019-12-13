import React, { Component } from "react";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Add Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}></input>
            <br />
            <label htmlFor="title">Content</label>
            <input
              type="textarea"
              id="title"
              onChange={this.handleChange}
            ></input>
            <br />
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
