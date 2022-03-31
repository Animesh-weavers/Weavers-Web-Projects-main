import React, { useEffect, useState } from "react";
import "./list.css";

const List = (props) => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("bunchOfData")));
  }, []);

  return (
    <div className="list-container">
      {/* {arr.map((a) => {
        console.log(a.title);
      })} */}
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            {/* <th scope="col">No.</th> */}
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((data) => (
            <tr key={data.id}>
              <td>{data.title}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
