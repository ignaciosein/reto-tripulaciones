import "./SignIn.scss";
import Cookies from 'universal-cookie';

import axios from "axios";
import { useState, useEffect } from "react";
import loginService from "../../services/login";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);



  const cookies = new Cookies();

  useEffect(() => {
    

    console.log(cookies.get("myCat"))
   
 

//leer las cookies
//comprobar si hay cookies y token a que usuario peternece
//haciendo peticion al bakc




   
  }, []);

  console.log(username);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
    
      const response = await loginService.login({
        username,
        password,
      });
      
      setUser(response);
      setUsername("");
      setPassword("");

      cookies.set('myCat',response.token)

    } catch (e) {




    }

   
  };
  console.log("//////////")
  console.log("//////////")

  console.log(username);
  console.log(password);

  return (
    <form   className="SignIn" onSubmit={handleLogin}>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
