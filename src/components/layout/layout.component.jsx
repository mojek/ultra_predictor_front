import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Aux";
import { Logo, MainContainer, Toolbar, MainMenu } from "./layout.style";
import { connect } from "react-redux";
import { selectUserInfo } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

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
          {props.currentUser.isAuthenticated ? null : (
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
          {props.currentUser.isAuthenticated ? (
            <li>
              <Link to="/signout">
                Sign out
                <small>({props.currentUser.user_info.email})</small>
              </Link>
            </li>
          ) : null}
        </ul>
      </MainMenu>
    </Toolbar>

    <MainContainer>{props.children}</MainContainer>
  </Aux>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectUserInfo
});
export default connect(mapStateToProps)(layout);
