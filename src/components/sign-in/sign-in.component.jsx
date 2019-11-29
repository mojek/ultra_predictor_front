import React from "react";
import { connect } from "react-redux";
import { SignInContainer } from "./sign-in.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { loginUser } from "../../redux/user/user.actions";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="text"
            value={this.state.email}
            required
            label="Email"
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label="Password"
          />

          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </SignInContainer>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatchToProps)(SignIn);
