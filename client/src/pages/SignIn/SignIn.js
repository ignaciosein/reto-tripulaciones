import "./SignIn.scss";
import Cookies from "universal-cookie";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

import axios from "axios";
import { useState, useEffect } from "react";
import loginService from "../../services/login";

const cookies = new Cookies();

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    let checkingCookies = cookies.get("myCookie");

    if (checkingCookies) {
      window.location = "/demo";
    } else if (checkingCookies === null) {
     
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await loginService.login({
        username,
        password,
      });

      if (response.status === "false") {
        alert("el usuario no existe");
      } else if (response.status === "true") {
        setUser(response);
        setUsername("");
        setPassword("");

        let prueba = cookies.set("myCookie", response.token);

 

        alert("Se ha logueado correctamente");

        window.location = "/demo";
      }
    } catch (e) {
      alert("el usuario no existe");
    }
  };

  const responseGoogle = async (respuesta) => {
    try {
      let googleLogin = {
        name: respuesta.profileObj.name,
        email: respuesta.profileObj.email,
        password: respuesta.profileObj.googleId,
      };

      let cookieToken = await axios.post("/auth/googleLogin", googleLogin);

 
      const cookies = new Cookies();
      let metercookie = await cookies.set("myCookie", cookieToken.data.token);
 
      alert("Se ha logueado correctamente");

      window.location.reload();
    } catch {}
  };
  const responseFacebook = async (respuesta) => {
    let FacebookLogin = {
      name: respuesta.name,
      email: respuesta.email,
      password: respuesta.id,
    };

    let cookieToken = await axios.post("/auth/facebookLogin", FacebookLogin);

 

    const cookies = new Cookies();
    let metercookie = await cookies.set("myCookie", cookieToken.data.token);

 
    alert("Se ha logueado correctamente");

    window.location.reload();
  };
  const componentClicked = () => {};
  const googleLogin = () => {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GG_API}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  };
  const facebookLogin = () => {
    return (
      <FacebookLogin
        appId={process.env.REACT_APP_FB_API}
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        textButton="Login con FB"
        icon="fa-facebook"
      />
    );
  };

  return (
    <form className="SignIn" onSubmit={handleLogin}>
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
        {" "}
        Password:{" "}
        <input
          type="password"
          name="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Sign In</button>
      <br></br>
      {googleLogin()}
      <br></br>
      {facebookLogin()}
    </form>
  );
};

export default SignIn;
