import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '../actions/index';

export class Cadastro extends Component {
  constructor () {
    super();
    this.state = {
      loginComplete: null,
      userName: '',
      userPassword: '',
      userEmail: '',
    
    }
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  handleClick = () => {
    const { userEmail, userName, userPassword } = this.state;
    const { signUp } = this.props;
    signUp(userName, userPassword, userEmail);
    this.setState({
      loginComplete: true,
    });
  }

  render() {
    const { loginComplete } = this.state;

    if (loginComplete) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <input name="userEmail" type="email" onChange={ this.handleChange }/>
        <input name="userPassword" type="password" onChange={ this.handleChange } />
        <input name="userName" type="text" onChange={ this.handleChange } />
        <button type="button" onClick={ this.handleClick }>Cadastrar</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (user, password, email) => dispatch(action(user, password, email))
});

export default connect(null, mapDispatchToProps)(Cadastro)
