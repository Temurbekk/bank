import React from "react";

function Home({ setSignedIn, accountBalance }) {
  return (
    <>
      <div>{accountBalance}</div>
      <div className="button" onClick={() => setSignedIn(false)}>
        This is the home page
      </div>
    </>
  );
}

export default Home;
