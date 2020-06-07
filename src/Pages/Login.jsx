import React from "react";

function Login({ setSignedIn }) {
  const onClick = () => {
    setSignedIn(true);
  };
  return (
    <div className="button" onClick={onClick}>
      Sign In
    </div>
  );
}

export default Login;
