import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginEuiyeon from "./pages/euiyeon/Login/Login";
import LoginGwanyong from "./pages/gwanyong/Login/Login";
import LoginJongmin from "./pages/Jongmin/Login/Login";
import LoginYunkyung from "./pages/yunkyung/Login/Login";
import MainEuiyeon from "./pages/euiyeon/Main/Main";
import MainGwanyong from "./pages/gwanyong/Main/Main";
import MainJongmin from "./pages/Jongmin/Main/Main";
import MainYunkyung from "./pages/yunkyung/Main/Main";
import "./styles/reset.scss";
import "./styles/common.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/LoginEuiyeon" component={LoginEuiyeon} />
          <Route exact path="/MainEuiyeon" component={MainEuiyeon} />
          <Route exact path="/LoginGwanyong" component={LoginGwanyong} />
          <Route exact path="/MainGwanyong" component={MainGwanyong} />
          <Route exact path="/LoginJongmin" component={LoginJongmin} />
          <Route exact path="/MainJongmin" component={MainJongmin} />
          <Route exact path="/LoginYunkyung" component={LoginYunkyung} />
          <Route exact path="/MainYunkyung" component={MainYunkyung} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
