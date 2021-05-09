import { useState, useEffect } from "react";
const API = require("../../utils/API");

function SignUpForm() {
  let [body, setBody] = useState({});
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      document.getElementById("floatingInputSignUp").value = "";
      document.getElementById("floatingPasswordSignUp").value = "";
      await API.signUp(body);
      window.location.pathname = "/search";
    } catch (err) {
      document.getElementById("errorSignUp").classList.remove("d-none")
      console.log(err);
    }
  }

  function handleChange({ target }) {
    if (target.type === "text") {
      setUsername(target.value);
    }
    if (target.type === "password") {
      setPassword(target.value);
    }
  }

  useEffect(() => {
    setBody({ username: username, password: password });
  }, [username, password]);

  return (
    <>
      <div className="row text-center mb-3 d-none" id="errorSignUp">
        <span className=" error">Username already taken!</span>
      </div>
      <h2 className="text-center">Sign Up</h2>
      <form>
        <div className="form-floating mb-3">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="floatingInputSignUp"
            placeholder="user123"
          />
          <label htmlFor="floatingInputSignUp">Username</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="floatingPasswordSignUp"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordSignUp">Password</label>
        </div>
        <button
          className="btn d-block m-auto mt-3"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
