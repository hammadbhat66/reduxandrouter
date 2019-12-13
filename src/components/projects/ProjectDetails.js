import React from "react";

const projectDetails = props => {
  const id = props.match.params.id;
  return (
    <>
      <div>
        <h1>This is Project Details</h1>
        <h3>This Project id is : {id}</h3>
      </div>
    </>
  );
};
export default projectDetails;
