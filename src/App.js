import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Routes from "./Components/Routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}

export default App;
