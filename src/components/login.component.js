import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="data:image/png;base64,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"
            alt="profile-img"
            className="profile-img-card"
          />
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}