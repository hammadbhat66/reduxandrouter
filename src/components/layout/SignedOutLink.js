import React from "react";
import { NavLink, Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="signedInLinks">
      <li className="">
        <NavLink to="/login" className="">
          Sign In
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/signup" className="">
          Sign Up
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedOutLinks;
