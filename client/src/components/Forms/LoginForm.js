import { useState, useEffect } from "react";
const API = require("../../utils/API");

function LoginForm() {
  let [body, setBody] = useState({});
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      document.getElementById("floatingInputLogin").value = "";
      document.getElementById("floatingPasswordLogin").value = "";
      await API.login(body);
      window.location.pathname = "/search";
    } catch (err) {
      document.getElementById("errorLogin").classList.remove("d-none")
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
      <div className="row text-center mb-3 d-none" id="errorLogin">
        <span className=" error">Incorrect username or password!</span>
      </div>
      <h2 className="text-center">Log in</h2>
      <form>
        <div className="form-floating mb-3">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="floatingInputLogin"
            placeholder="user123"
          />
          <label htmlFor="floatingInputLogin">Username</label>
        </div>
        <div className="form-floating">
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="floatingPasswordLogin"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordLogin">Password</label>
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

export default LoginForm;
