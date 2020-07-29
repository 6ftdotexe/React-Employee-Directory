import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Container} />
      </div>
    </Router>
  )
}

export default App;