export default function action (user, password, email) {
  return {
    type: 'SIGN_UP_USERS',
    user,
    password,
    email,
  }
};