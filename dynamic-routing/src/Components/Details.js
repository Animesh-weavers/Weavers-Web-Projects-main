import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const params=useParams();
    console.log(params.userId);
    const userId=params.userId;
  return <div>Details about user {userId}</div>;
};

export default Details;
