import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import EventChooserPage from "./pages/event-chooser/event-chooser.component";
import SigninAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.styled";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            SigninAndSignUp
            <Route exact path="/" component={SigninAndSignUpPage} />
            <Route exact path="/events" component={EventChooserPage} />
          </Switch>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
