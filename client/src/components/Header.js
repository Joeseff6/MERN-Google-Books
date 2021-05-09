function Header({ heading }) {
  return (
    <div className="row d-flex justify-content-center">
      <header className="mb-2 mx-2">
        <h1 className="text-center">{heading}</h1>
      </header>
    </div>
  )
}

export default Header;