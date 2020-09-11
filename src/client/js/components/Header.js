import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="logo"></h1>
        <nav>
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
      </header>
    );
  }
}

export default Header;
