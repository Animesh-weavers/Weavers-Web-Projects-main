import React from "react";

const Modal = (props) => {
  const closeModalHandler=()=>{
    props.closeModal(false);
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={closeModalHandler}> X </button>
        <div className="title">
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>
            The next page is awesome! You should move forward, you will enjoy
            it.
          </p>
        </div>
        <div className="footer">
          <button onClick={closeModalHandler}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
