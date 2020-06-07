import React from "react";

function Login({ setSignedIn }) {
  const onClick = () => {
    setSignedIn(true);
  };
  return (
    <>
      <div>Welcome to React Bank</div>
      <form action="">
        <label>Username</label>
        <input type="text" placeholder="username" />
        <label>Password</label>
        <input type="text" placeholder="Password" />
        <div className="button" onClick={onClick}>
          Log In
        </div>
      </form>
    </>
  );
}

export default Login;
