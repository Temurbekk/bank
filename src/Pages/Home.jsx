import React from "react";

function Home({ setSignedIn, accountBalance }) {
  return (
    <>
      Current Account Number: {accountBalance}
      <div className="button" onClick={() => setSignedIn(false)}>
        Log out
      </div>
    </>
  );
}

export default Home;
