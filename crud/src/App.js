import React, { useState } from "react";
import Home from "./Component/Home/Home";
import LoginForm from "./Component/LoginForm";
import './App.css';

const App = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
   
     if(details.email==adminUser.email&& details.password==adminUser.password){
       console.log("Logged in");

      setUser({name:details.name,email:details.email});

     }
     else{
       console.log("Details Do Not Match!!!!");
       setError("Details Do Not Match!!!!");
     }

  };

  const Logout = () => {
    setUser({name:"",email:""});
  };

  return (
    <div className="App">
      {user.email != "" ? <Home user={user} Logout={Logout} /> : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default App;
