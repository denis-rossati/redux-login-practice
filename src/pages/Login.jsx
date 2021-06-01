import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginComplete: null,
      userEmail: '',
      userPassword: '',
    }
  }


  handleClick = () => {
    const { usuariosCadastrados } = this.props;
    console.log(this.props);
    const { userEmail, userPassword } = this.state;
    let loggedIn = false;
    usuariosCadastrados.forEach((user) => {
      if (user.email === userEmail || user.userPassword === userPassword) {
        return loggedIn = true;
      }
    })
    if (loggedIn) {
      this.setState({
        loginComplete: true,
      });
      console.log(loggedIn)
    } else {
      this.setState({
        loginComplete: false,
      });
    }
    console.log(this.state.loginComplete)
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { loginComplete } = this.state;

    if (loginComplete) {
      return <Redirect to="/logged" />;
    }

    if (!loginComplete && loginComplete !== null) {
      return <Redirect to ="/notlogged" />
    }

    return (
      <div>
        <input name="userEmail" type="email" onChange={ this.handleChange }/>
        <input name="userPassword" type="password" onChange={ this.handleChange } />
        <button type="button" onClick={() => this.handleClick() }>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usuariosCadastrados: state.login.signUpUsers,
});

export default connect(mapStateToProps)(Login);