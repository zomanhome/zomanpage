import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "../../reducers";

import Header from "../header";
import { Home, Test, Radio, Photos, Favorites } from "../pages";

import "./app.scss";
import "../../bootstrap.min.css";

const store = createStore(rootReducer, devToolsEnhancer());

// Расширим методы localStorage для удобства работы с объектами
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key));
};
// Инициализируем localStorage
if (!localStorage.getObj("photos")) {
  localStorage.setObj("photos", []);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/test" component={Test} />
              <Route path="/radio" component={Radio} />
              <Route path="/photos" component={Photos} />
              <Route path="/favorites" component={Favorites} />
              <Route
                render={() => <Alert variant="warning">Page not found</Alert>}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
