const INITIAL_STATE = {
  signUpUsers: [],
};

const signUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_UP_USERS':
      return {
        ...state,
        signUpUsers: [
          ...state.signUpUsers,
          {
            user: action.user,
            email: action.email,
            password: action.password,
          }
        ]
      };
    default:
      return state;
  }
}

export default signUpReducer;