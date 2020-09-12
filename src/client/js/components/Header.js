import React, { useState } from 'react';

const navContent = () => {
  return (
    <ul>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#youtube">YouTube</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#interests">Interests</a>
      </li>
      <li>
        <a href="#mission">Mission</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className={`mobile-nav ${isOpen ? 'is-open' : ''}`}>
        {navContent()}
      </div>
      <header>
        <div className="header-position">
          <h1 className="logo hide-text">Giwoo Gustavo Lee</h1>
          <nav className="site-nav">{navContent()}</nav>
          <a href="mailto:gglee89@gmail.com" className="email-link">
            +email me
          </a>
          <div
            className={`mobile-nav-toggle ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
