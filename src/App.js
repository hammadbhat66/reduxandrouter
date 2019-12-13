import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SingIn";
import SignUp from "./components/auth/SignUp";
import Project from "./components/projects/CreateProject";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/projects/new" component={Project} />
      </Switch>
    </div>
  );
}

export default App;
