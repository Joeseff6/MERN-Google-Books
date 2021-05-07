import LoginForm from '../components/Forms/LoginForm';
import SignUpForm from '../components/Forms/SignUpForm';

function Home() {
  return (
    <>
      <header className="row text-center">
        <h1>Welcome to MERN Google Books!</h1>
      </header>
      <div className="row text-center">
        <div className="col-6 m-auto">
          <p>
            MERN Google Books is an app powered by React, which uses the Google Books APIs
            (docs found <a href="https://developers.google.com/books" target="_blank">here</a>).
            This app does require user authentification, as you will be able to store book information to a database.
          </p>
          <br />
          <p>
            Please log in or sign up:
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4 my-5 mx-5" id="loginContainer">
          <LoginForm />
        </div>
        <div className="col-4 my-5 mx-5" id="signUpContainer">
          <SignUpForm />
        </div>
      </div>
    </>
  )
}

export default Home;