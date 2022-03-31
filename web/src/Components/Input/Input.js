import React, { useState } from "react";
import "./Input.css";
import { Link, useNavigate } from "react-router-dom";

const Input = (props) => {
  const [details, setDetails] = useState({
    id: Number(JSON.parse(localStorage.getItem("bunchOfData"))?.length) || 0,
    title: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    setDetails({ ...details, id: details.id + 1 });
    props.dataHandler(details);
    window.location.href='./';
  };

  return (
    <div className="main-container">
      <form onSubmit={submitHandler}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            onChange={(e) => setDetails({ ...details, title: e.target.value })}
            value={details.title}
            required
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea
            className="form-control"
            aria-label="Description"
            onChange={(e) =>
              setDetails({ ...details, description: e.target.value })
            }
            value={details.description}
            required
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
