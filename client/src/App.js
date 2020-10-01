import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateMessage from "./components/message/CreateMessage";
import MessagesManager from "./components/message/MessagesManager";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import styled from "styled-components";
import LandingBackground from "./image/LandingBackground.jpg";
import 'antd/dist/antd.css';

export const AlertsContainer = styled.div`
  margin-top: 5rem;
`;

const LandingBackgroundImg = styled.section`
  position: relative;
  background: url(${LandingBackground}) no-repeat center center/cover;
  height: 100vh;
`;

const Landing = () => <LandingBackgroundImg />;

const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);

  return (
    // <Provider store={store}>
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/create-message" component={CreateMessage} />
              <Route exact path="/view-messages" component={MessagesManager} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};
export default App;
