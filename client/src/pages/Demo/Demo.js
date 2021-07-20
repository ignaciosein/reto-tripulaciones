import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const Demo = () => {
  const cookies = new Cookies();

  useEffect(() => {
    let checkLogin = cookies.get("myCat");

    checkLogin ? alert("estas logueado") : (window.location = "/signin");
  }, []);

  return (
    <div>
      <h1>ESTA ES UNA DEMO</h1>
    </div>
  );
};

export default Demo;
