import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header id="header">
        <div className="header_container">
          <div className="header_title">
            <h1>Pain</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/add"}>Add</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
