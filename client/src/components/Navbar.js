import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import API from '../utils/API';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [navClassNames, setNavClassNames] = useState(['collapse', 'navbar-collapse'])
  const location = useLocation();

  const handleLogout = () => {
    API.logout();
    window.location.pathname = "/";
  }

  const handleToggle = () => {
    setNavClassNames(['navbar-collapse', 'collapsing'], { show: showNav });
    setShowNav(!showNav);
    setTimeout(() => {
      if (showNav) {
        setNavClassNames(['collapse', 'navbar-collapse', 'show']);
      } else {
        setNavClassNames(['collapse', 'navbar-collapse']);
      }
    }, 100)
  };

  return (
    <nav className="navbar navbar-expand-lg mb-3">
      <span className="navbar-brand px-3">
        <i className="fas fa-book-reader"> MERN Google Books</i>
      </span>
      <button
        className="navbar-toggler mx-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={cn(navClassNames)} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-3">
          <li className={cn('nav-item', { 'active': location.pathname === '/search' })}>
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li className={cn('nav-item', { 'active': location.pathname === '/saved' })}>
            <Link to="/saved" className="nav-link">
              Saved
            </Link>
          </li>
          <li className={cn('nav-item', { 'active': location.pathname === '/saved' })}>
              <a onClick={handleLogout} className="nav-link">
                Logout
              </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;