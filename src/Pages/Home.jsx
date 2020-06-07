import React from "react";

function Home({ setSignedIn }) {
  return (
    <div className="button" onClick={() => setSignedIn(false)}>
      This is the home page
    </div>
  );
}

export default Home;
