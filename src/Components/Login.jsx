import React from "react";

const Login = () => {
  return (
    <div id="login-page">
      <form class="box" action="index.html" method="post">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="button" value="Login" />
      </form>
    </div>
  );
};

export default Login;
