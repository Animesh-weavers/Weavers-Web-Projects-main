import React, { createContext, useEffect, useRef, useState } from "react";
import ComA from "./ContextAPI/ComA";
import CustomInput from "./ForwardRef/CustomInput";
const FirstName = createContext();
const LastName = createContext();

const App = () => {
  const [input, setInput] = useState("");
  const count = useRef(1);
  const inputRef = useRef();
  useEffect(() => {
    count.current += 1;
  });
  const clickHandler = () => {
    // console.log(inputRef.current.value);
    const value = inputRef.current.value;
    if (!value) {
      inputRef.current.focus();
    } else {
      alert(value);
    }
  };
  return (
    <>
      {/* <FirstName.Provider value={"Animesh"}>
        <LastName.Provider value={"Dey"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider> */}
      <h1>React JS Forward Ref</h1>
      <CustomInput
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={clickHandler}>Submit</button>
      <hr />
      <div>You have entered "{input}"</div>
      <div>Rerendered {count.current}</div>
    </>
  );
};

export default App;
export { FirstName, LastName };
