import React, { Component } from "react";
import styles from "./Login.module.css";
import ControlInput from "./ControlInput";
export function validateEmail(email) {
  if (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(email);
  } else {
    return false;
  }
}

export function validatepassword(val) {
  if (val) {
    const re = /[A-za-z]+[0-9]+$/;
    return !re.test(val);
  } else {
    return false;
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: false,
      pwdError: false,
      error: false
    };
  }

  handleChange = val => {
    if (val.email) {
      this.setState({ email: val.email, emailError: false });
    } else {
      this.setState({ password: val.password,pwdError:false });
    }
  };
  handleSubmit = () => {
    if (
      !validateEmail(this.state.email) &&
      !validatepassword(this.state.password)
    ) {
      this.props.getLoginuser({
        email: this.state.email,
        password: this.state.password
      });
    } else {
      if (validateEmail(this.state.email)) {
        this.setState({ emailError: true });
      }
      if (validatepassword(this.state.password)) {
        this.setState({ pwdError: true });
      }
    }
  };
  componentWillReceiveProps = nextprops => {
    if (nextprops.error) {
      this.setState({ error: true });
    }
    if (nextprops.userData) {
      this.props.history.push("/dashboard");
    }
  };
  render() {
    return (
      <div className={styles.loginBase}>
        <div className={styles.userName}>
          <ControlInput
            placeholder={"Enter email"}
            value={this.state.email}
            onChange={val => this.handleChange({ email: val })}
          />
          {this.state.emailError && (
            <div className={styles.errorText}>please enter valid email</div>
          )}
        </div>
        <div className={styles.userName}>
          <ControlInput
            placeholder={"Enter password"}
            value={this.state.password}
            onChange={val => this.handleChange({ password: val })}
          />
            {this.state.pwdError && (
            <div className={styles.errorText}>password need to be alpa numeric</div>
          )}
        </div>
     
        <div className={styles.button} onClick={() => this.handleSubmit()}>
          Submit
        </div>
        {this.state.error && (
          <div className={styles.errorText}>use valid email and password</div>
        )}
      </div>
    );
  }
}
