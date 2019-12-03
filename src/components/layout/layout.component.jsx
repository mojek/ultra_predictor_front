import React from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Aux";
import { Logo, MainContainer, Toolbar, MainMenu } from "./layout.style";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { logOutUser } from "../../redux/user/user.actions";
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
        {props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <span onClick={() => props.logOutUser()} href="#">
                Sign out
              </span>
            </li>
          </ul>
        ) : null}
      </MainMenu>
    </Toolbar>

    <MainContainer>{props.children}</MainContainer>
  </Aux>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(logOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(layout);
