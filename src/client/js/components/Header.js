import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-position">
          <h1 className="logo hide-text">Giwoo Gustavo Lee</h1>
          <nav className="site-nav">
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
          </nav>
          <a href="mailto:gglee89@gmail.com" className="email-link">
            +email me
          </a>
          <div className="mobile-nav-toggle">
            <span></span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
