import React, { useState } from "react";
import NavbarComp from "./Components/Navbar/NavbarComp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Input from "./Components/Input/Input";

const App = () => {
  let DataArray = [];
  let Dataset = [];
  let finalDataSet = [];

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const dataHandler = (data) => {
    DataArray.push(data);
    // console.log(DataArray);
    if (localStorage.getItem("bunchOfData") !== null) {
      const storedData = localStorage.getItem("bunchOfData");
      const prevData = JSON.parse(storedData);
      Dataset = DataArray.concat(prevData);
      //remove duplicateData
      let jsonObject = Dataset.map(JSON.stringify);
      let uniqueSet = new Set(jsonObject);
      finalDataSet = Array.from(uniqueSet).map(JSON.parse);
      // console.log(finalDataSet);
      //
      localStorage.setItem("bunchOfData", JSON.stringify(finalDataSet));
    } else {
      localStorage.setItem("bunchOfData", JSON.stringify(DataArray));
    }
  };

  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route
            path="/"
            element={<Home submittedDataHandler={dataHandler} />}
          />
          <Route path="/input" element={<Input dataHandler={dataHandler} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
