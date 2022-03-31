import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const clickHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={clickHandler}>
        Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default App;
