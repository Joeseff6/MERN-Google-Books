const axios = require("axios");

const API = {
  login: function(body) {
    return axios.post("/api/users/login", {data: body})
  },

  signUp: function(body) {
    return axios.post("/api/users", {data: body});
  }
};

module.exports = API