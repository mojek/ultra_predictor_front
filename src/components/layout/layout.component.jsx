import React from "react";
import Aux from "../../hoc/Aux";
import { Toolbar } from "./layout.style";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { logOutUser } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import logo from "./../../assets/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const layout = props => (
  <Aux>
    <Toolbar>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          {props.currentUser.isAuthenticated ? (
            <Aux>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link to="/settings">Ustawienia</Nav.Link>
                  <Nav.Link onClick={() => props.logOutUser()} href="#">
                    Wyloguj się
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Aux>
          ) : null}
        </Navbar>
      </Container>
      {/* <Header>
        <Logo>
         
        </Logo>
        <MainMenu>
          {props.currentUser.isAuthenticated ? (
            <ul class="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/settings">Ustawienia</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => props.logOutUser()} href="#">
                  Wyloguj
                </span>
              </li>
            </ul>
          ) : null}
        </MainMenu>
      </Header> */}
    </Toolbar>

    <Container>{props.children}</Container>
  </Aux>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(layout);
