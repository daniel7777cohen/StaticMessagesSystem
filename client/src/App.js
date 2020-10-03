import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateMessage from "./components/message/CreateMessage";
import MessagesManager from "./components/message/MessagesManager";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import "antd/dist/antd.css";
import { AppContainer } from "./styles";
import { getUsers } from "./actions/users";
import Landing from "./components/layout/Landing";


const App = () => {
  useEffect(() => {
    store.dispatch(getUsers());
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
              <Route exact path="/create-message" component={CreateMessage} />
              <Route exact path="/view-messages" component={MessagesManager} />
            </Switch>
          </AppContainer>
        </>
      </Router>
    </Provider>
  );
};
export default App;
