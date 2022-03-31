import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./Compoenents/NavigationBar";
import Home from "./Compoenents/Home";
import About from "./Compoenents/About";
import Users from "./Compoenents/Users";

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
