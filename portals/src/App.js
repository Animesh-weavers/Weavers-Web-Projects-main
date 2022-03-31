import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="BUTTON_WRAPPER_STYLES">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </button>
        <Modal open={isOpen} onClose={()=>{setIsOpen(false)}}>Fancy Modal</Modal>
      </div>
      <div className="OTHER_CONTENT_STYLES">Other Content</div>
    </>
  );
};

export default App;
