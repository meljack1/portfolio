import React from 'react';


function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="uk-navbar-container" id="navbar" data-uk-navbar>
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li>
            <a
              href="#about"
              id="nav-link"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link uk-active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link uk-active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link uk-active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li><a href={'https://drive.google.com/uc?export=download&id=1FJkulOLHcNVX8RBHgrM59cQgZ1VD05_M'}>CV</a></li>
        </ul>
      </div>
  </nav>
  );
};

export default Header;
