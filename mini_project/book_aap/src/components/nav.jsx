import React from 'react';
import './Nav.css'; // renamed CSS file too

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">📚 BookApp</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Books</a></li>
        <li><a href="#">Authors</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Nav;