import React from "react";
import './Home.css';
const Home = (props) => {
  return (
    <div className="home">
      <h2>
        Welcome,<span>{props.user.name}</span>
        <button onClick={props.Logout}>Logout</button>
      </h2>
    </div>
  );
};

export default Home;
