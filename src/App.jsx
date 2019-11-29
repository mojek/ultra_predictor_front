import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import EventChooserPage from "./pages/event-chooser/event-chooser.component";
import SigninAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.styled";
import { loadUser } from "./redux/user/user.actions";

class App extends Component {
  componentDidMount() {
    this.props.loadUser()
  }
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

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
});

export default connect(null, mapDispatchToProps)(App);
