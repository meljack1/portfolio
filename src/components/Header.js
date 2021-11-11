import React from 'react';

function Header() {
  return (
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
            <li><a href={'/'}>About</a></li>
            <li><a href={'/'}>Portfolio</a></li>
            <li><a href={'/'}>Contact</a></li>
            <li><a href={'/'}>CV</a></li>
        </ul>
      </div>
  </nav>
  );
}

export default Header;
