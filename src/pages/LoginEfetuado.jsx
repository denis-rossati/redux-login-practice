import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginEfetuado extends Component {
  render() {
    const { usuariosCadastrados } = this.props;
    return (
      <div>
        <ul>
          { usuariosCadastrados.map((user, index) => {
            return (
              <li key={ index }>{ user.user }</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usuariosCadastrados: state.login.signUpUsers,
});

export default connect(mapStateToProps)(LoginEfetuado);
