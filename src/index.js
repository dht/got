import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import Browse from "./layout_modules/browse/Browse";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/browse/all" component={Browse} />
          <Route path="/" exact component={App} />
          <Route path="/:stage" component={App} />
        </Switch>
      </div>
    </Router>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
