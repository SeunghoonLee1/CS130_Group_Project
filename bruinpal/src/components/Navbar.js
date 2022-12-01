import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import logo from "../images/logo.png";
import TaskDropDown from "./TaskDropDown";

function Navbar() {
  let loggedIn = false;
  if (window.localStorage.getItem("loggedIn") !== null) {
    loggedIn = window.localStorage.getItem("loggedIn");
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logoImageWrapper">
          <Link data-testid="navbar-logo" to="/">
            <img src={logo} alt="logo" className="logoImage" />
          </Link>
        </div>
        <div className="navbarMenu">
          <div>
            <NavLink to="/aboutus" className="linkmenuItem">
              About Us
            </NavLink>
          </div>
          <div>
            <TaskDropDown />
            {/* <NavLink to="/tasks" className="linkmenuItem">
              Tasks
            </NavLink> */}
          </div>
          {loggedIn !== "true" && (
            <div>
              <NavLink to="/loginsignup" className="linkmenuItem">
                Login / Sign Up
              </NavLink>
            </div>
          )}
          {loggedIn === "true" && (
            <div>
              <NavLink to="/taskCRUD" className="linkmenuItem">
                Create New Task
              </NavLink>
            </div>
          )}
          {loggedIn === "true" && (
            <div>
              <NavLink to="/loginsignup" className="linkmenuItem">
                Logout
              </NavLink>
            </div>
          )}
          {loggedIn === "true" && (
            <div>
              <NavLink to="/profile" className="linkmenuItem">
                Profile
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
