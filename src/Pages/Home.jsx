import React from "react";

function Home({ setSignedIn, accountBalance }) {
  return (
    <>
      <div>Current Account Number: {accountBalance}</div>
      <div className="button" onClick={() => setSignedIn(false)}>
        Log out
      </div>
    </>
  );
}

export default Home;
