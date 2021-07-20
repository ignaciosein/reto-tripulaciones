import "./SignIn.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import loginService from "../../services/login";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);





  useEffect(() => {
 
   
  }, []);

  console.log(username);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      setUser(user);
      setUsername("");
      setPassword("");

      await axios.post("http://localhost:5000/api/login",{
  
        method: "POST",
        email: username,
        pass: password
 
      })



    } catch (e) {




    }

   
  };

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
