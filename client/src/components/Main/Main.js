import { Route, Switch } from "react-router-dom";

import Home from "../../pages/Home"
import SignUp from "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import Demo from "../../pages/Demo";

import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/demo" component={Demo} />

      </Switch>
    </main>
  );
};

export default Main;
