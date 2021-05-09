const axios = require("axios");

const API = {
  login: function(body) {
    return axios.post("/api/users/login", {data: body})
  },

  signUp: function(body) {
    return axios.post("/api/users", {data: body});
  },

  logout: function() {
    return axios.post("/api/users/logout")
  },

  getBooks: function(query) {
    const splitQuery = query.split(" ");
    const joinQuery = splitQuery.join("%20");
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${joinQuery}&maxResults=10&orderBy=relevance`);
  }
};

module.exports = API