import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateMessage from "./containers/CreateMessage";
import MessagesManager from "./containers/MessagesManager";
import { Provider } from "react-redux";
import store from "./store/store";
import Alert from "./components/layout/Alert";
import "antd/dist/antd.css";
import { AppContainer } from "./styled-components/styles";
import { loadAllUsers } from "./store/actions/users";
import Landing from "./components/layout/Landing";
import Login from "./containers/Login";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./store/actions/auth";
import PrivateRoute from "./auth/PrivateRoute";

const token = localStorage.token;
if (token) {
  setAuthToken(token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadAllUsers());
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <AppContainer className="container">
            <Alert />
            <Switch>
              <PrivateRoute
                exact
                path="/view-messages"
                comp={MessagesManager}
              />
              <PrivateRoute exact path="/create-message" comp={CreateMessage} />

              <Route exact path="/login" component={Login} />
            </Switch>
          </AppContainer>
        </>
      </Router>
    </Provider>
  );
};
export default App;
