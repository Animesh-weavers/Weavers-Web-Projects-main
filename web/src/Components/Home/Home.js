import React from "react";
import { Link, Outlet } from "react-router-dom";
import List from "../List/List";
import "./home.css";

const Home = (props) => {
  return (
    <div className="main">
      <div className="home-container">
        <div className="button-container">
          <Link to="/input">
            <button type="button" className="btn btn-info">
              Add
            </button>
          </Link>
        </div>
        <List submittedDataHandler={props.submittedDataHandler}/>
      </div>
    </div>
  );
};

export default Home;
