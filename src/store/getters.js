const getters = {
  token: state => state.user.token,
  email: state => state.user.email,
  role: state => state.user.role
};

export default getters;
