import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label><br />
        <input type="email" placeholder="Enter your email" /><br /><br />

        <label>Password:</label><br />
        <input type="password" placeholder="Enter your password" /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;