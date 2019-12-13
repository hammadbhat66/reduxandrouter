import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <ProjectList />
            </div>
            <div className="col-3">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
