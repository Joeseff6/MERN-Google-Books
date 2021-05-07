function LoginForm() {

  function handleClick() {
  }

  return (
    <>
      <h2 className="text-center">Log in</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInputLogin" placeholder="user123" />
        <label htmlFor="floatingInputLogin">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPasswordLogin" placeholder="Password" />
        <label htmlFor="floatingPasswordLogin">Password</label>
      </div>
      <button 
      className="btn d-block m-auto mt-3" 
      type="submit"
      onClick={handleClick}
      >
        Submit
      </button>
    </>
  )
}

export default LoginForm;