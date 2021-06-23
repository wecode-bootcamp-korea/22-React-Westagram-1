import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./styles/reset.scss";
import "./styles/common.scss";
//import Login from "./pages/Login/Login";
//import Main from "./pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Nav />
          {/* <Route exact path="/" component={Login1} />
                    <Route exact path="/Main" component={Main1} />
                    <Route exact path="/" component={Login2} />
                    <Route exact path="/main" component={Main2} />
                    <Route exact path="/" component={Login3} />
                    <Route exact path="/Main" component={Main3} />
                    <Route exact path="/" component={Login4} />
                    <Route exact path="/main" component={Main4} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
