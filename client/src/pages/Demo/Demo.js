import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "../Demo/Demo.css";

const cookies = new Cookies();

const Demo = () => {
  useEffect(() => {
    let checkLogin = cookies.get("myCookie");

if(checkLogin){

console.log(checkLogin)


}

else{

  window.location = "/signin"

}







  /*   checkLogin ? console.log("se ha logueado") : (window.location = "/signin"); */




    
  }, []);

  const Logout = () => {
    alert("se va a deslogar");
    cookies.remove("myCookie");
    window.location = "/signin";
  };

  return (
    <div className="Demo">
      <button onClick={Logout}>LogOut</button>
      <h1>ESTA ES LA PANTALLA DEMO</h1>
    </div>
  );
};

export default Demo;
