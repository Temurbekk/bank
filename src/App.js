import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";
import Login from "./Pages/Login";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      {signedIn ? (
        <Router>
          <NavBar />
          <Routes setSignedIn={setSignedIn} />
        </Router>
      ) : (
        <Login setSignedIn={setSignedIn} />
      )}
    </>
  );
}

export default App;
