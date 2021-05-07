function LoginForm() {

  return (
    <>
      <h2 className="text-center">Log in</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInputLogin" placeholder="user123" />
        <label for="floatingInputLogin">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPasswordLogin" placeholder="Password" />
        <label for="floatingPasswordLogin">Password</label>
      </div>
    </>
  )
}

export default LoginForm;