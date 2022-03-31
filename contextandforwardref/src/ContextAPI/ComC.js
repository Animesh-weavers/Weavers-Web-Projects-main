import React, { useContext } from "react";
import { FirstName, LastName } from "../App";

const ComC = () => {
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
  return (
    <>
      {/* <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    I am {fname} {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer> */}
       <h1>I am {fname} {lname}</h1>
      

    </>
  );
};

export default ComC;
