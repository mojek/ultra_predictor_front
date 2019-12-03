import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import EventChooserPage from "./pages/event-chooser/event-chooser.component";
import SigninAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.styled";
import { loadUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.props.currentUser.isAuthenticated ? (
                  <Redirect to="/events" />
                ) : (
                  <SigninAndSignUpPage />
                )
              }
            />
            <Route
              exact
              path="/events"
              render={() =>
                this.props.currentUser.isAuthenticated ? (
                  <EventChooserPage />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          </Switch>
        </Layout>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
