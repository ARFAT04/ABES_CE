import React from 'react';

function Signup() {
  return (
    <div>
      <h1>Signup Page</h1>
      <form>
        <label>Name:</label><br />
        <input type="text" placeholder="Enter your name" /><br /><br />

        <label>Email:</label><br />
        <input type="email" placeholder="Enter your email" /><br /><br />

        <label>Password:</label><br />
        <input type="password" placeholder="Enter password" /><br /><br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;