import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLink";
import SignedOutLinks from "./SignedOutLink";
import { whileStatement } from "@babel/types";
const Navbar = () => {
  const navbarcontainer = {
    backgroundColor: "black"
  };
  const projectlogo = {
    color: "white"
  };
  return (
    <nav style={navbarcontainer} className="navbar-container">
      <Link to="/" className="project-logo">
        Project Logo
      </Link>

      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  );
};
export default Navbar;
