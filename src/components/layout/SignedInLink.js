import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="signedInLinks">
      <li className="">
        <NavLink to="/projects/new" className="">
          New Project
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/" className="">
          Log Out
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInLinks;
