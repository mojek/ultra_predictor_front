import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Aux";
import { Logo, MainContainer, Toolbar, MainMenu } from "./layout.style";
import { connect } from "react-redux";

const layout = props => (
  <Aux>
    <Toolbar>
      <Logo>
        UltraDiviner
        <br />
        <span>Estimate your score in the next mountain run</span>
      </Logo>
      <MainMenu>
        <ul>
          {props.currentUser ? null : (
            <li>
              <Link to="/">Sign In</Link>
            </li>
          )}
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/signout">Sign out</Link>
          </li>
        </ul>
      </MainMenu>
    </Toolbar>

    <MainContainer>{props.children}</MainContainer>
  </Aux>
);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
export default connect(mapStateToProps)(layout);
