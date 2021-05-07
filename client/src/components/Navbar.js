import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';


function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [navClassNames, setNavClassNames] = useState(['collapse', 'navbar-collapse'])
  const location = useLocation();

  const handleToggle = () => {
    setNavClassNames(['navbar-collapse', 'collapsing'], { show: showNav });
    setShowNav(!showNav);
    setTimeout(() => {
      if (showNav) {
        setNavClassNames(['collapse', 'navbar-collapse', 'show']);
      } else {
        setNavClassNames(['collapse', 'navbar-collapse']);
      }
    },100)
  };

  return (
    <nav className="navbar navbar-expand-lg mb-3">
      <Link className="navbar-brand px-3" to="/">
        Joseph's Portfolio
            </Link>
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
          <li className={cn('nav-item', { 'active': location.pathname === '/' })}>
            <Link to="/" className="nav-link">
              About Me
            </Link>
          </li>
          <li className={cn('nav-item', { 'active': location.pathname === '/projects' })}>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className={cn('nav-item', { 'active': location.pathname === '/portfolio' })}>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className={cn('nav-item', { 'active': location.pathname === '/contact' })}>
            <Link to="/contact" className="nav-link">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;