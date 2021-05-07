function SignUpForm() {

  return (
    <>
      <h2 className="text-center">Sign Up</h2>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInputSignUp" placeholder="user123" />
        <label for="floatingInputSignUp">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPasswordSignUp" placeholder="Password" />
        <label for="floatingPasswordSignUp">Password</label>
      </div>
      <button 
      className="btn d-block m-auto mt-3" 
      type="submit"
      >
        Submit
      </button>
    </>
  )
}

export default SignUpForm;