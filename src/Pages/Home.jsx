import React from "react";

const Home = ({ setSignedIn, accountBalance }) => {
  return (
    <>
      Current Account Number: {accountBalance}
      <div className="button" onClick={() => setSignedIn(false)}>
        Log out
      </div>
    </>
  );
};

export default Home;
