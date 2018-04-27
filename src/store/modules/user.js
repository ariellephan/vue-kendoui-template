const user = {
  state: {
    email: "",
    token: "",
    role: ""
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
    }
  },

  actions: {
    // user login
    LoginByEmail({ commit }, AccountInfo) {
      console.log(AccountInfo);
      const email = AccountInfo.email.trim();
      // console.log(email + ' ' + AccountInfo.password)
      return new Promise((resolve, reject) => {
        loginByEmail(email, AccountInfo.password)
          .then(response => {
            const data = response.data;
            commit("SET_TOKEN", data.results);
            setToken(data.results);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // user log out
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            commit("SET_TOKEN", "");
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default user;
