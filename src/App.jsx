import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import EventBuilder from "./containers/EventBuilder/EventBuilder";
import { ThemeProvider } from "styled-components";
import {theme} from "./theme.styled";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <EventBuilder />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
