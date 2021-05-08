const API = {
  login: async function() {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  },

  signUp: async function() {
    const response = await fetch("https://localhost:3001/api/users/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  }

};

module.exports = API