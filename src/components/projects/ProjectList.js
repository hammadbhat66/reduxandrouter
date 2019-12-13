import React from "react";
import ProjectSummary from "./ProjectSummary";
const projectList = () => {
  return (
    <>
      <div className="card">
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </div>
    </>
  );
};

export default projectList;
