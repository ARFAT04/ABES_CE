import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Link1() {
  function Home() {
    return <h1>This is my home page</h1>;
  }

  function About() {
    return <h1>This is my About page</h1>;
  }

  return (
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default Link1;