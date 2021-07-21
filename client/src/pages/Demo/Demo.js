import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import "../Demo/Demo.css";

const cookies = new Cookies();

const Demo = () => {

  const [user, setUser] = useState([])

 
  useEffect(async ()  => {
    let checkLogin = cookies.get("myCookie");

    if (checkLogin) {
      let obj = {
        token: checkLogin,
      };

      let cookieToken = await axios.post("/auth/checkToken", obj);

   

      setUser(cookieToken.data)
    } else {
      window.location = "/signin";
    }
  }, []);

  const Logout = () => {
    alert("se va a deslogar");
    cookies.remove("myCookie");
    window.location = "/signin";
  };


 

  return (
    <div className="Demo">
      <button onClick={Logout}>LogOut</button>
      <h1>Bienvenido {user.name}</h1>
    </div>
  );
};

export default Demo;
